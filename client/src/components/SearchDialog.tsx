import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X } from "lucide-react";
import { useSearch, SearchResult } from "@/hooks/useSearch";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

function HighlightedExcerpt({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <span>{text}</span>;

  const parts: { text: string; highlight: boolean }[] = [];
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  let lastIndex = 0;

  let idx = lowerText.indexOf(lowerQuery, lastIndex);
  while (idx !== -1) {
    if (idx > lastIndex) {
      parts.push({ text: text.slice(lastIndex, idx), highlight: false });
    }
    parts.push({ text: text.slice(idx, idx + query.length), highlight: true });
    lastIndex = idx + query.length;
    idx = lowerText.indexOf(lowerQuery, lastIndex);
  }
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), highlight: false });
  }

  return (
    <span>
      {parts.map((part, i) =>
        part.highlight ? (
          <mark
            key={i}
            style={{
              background: "var(--hub-forest)",
              color: "#fff",
              borderRadius: "2px",
              padding: "0 2px",
            }}
          >
            {part.text}
          </mark>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </span>
  );
}

const CATEGORY_COLORS: Record<string, string> = {
  "基础篇": "#4ECDC4",
  "进阶篇": "#D4A017",
  "术语表": "#7C3AED",
  "大佬说": "#E85D04",
  "实践工具": "#059669",
};

export default function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { search } = useSearch();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Animate in
  useEffect(() => {
    if (open) {
      setVisible(true);
      // Auto-focus input
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setVisible(false);
      // Reset on close
      setQuery("");
      setResults([]);
    }
  }, [open]);

  // Debounced search
  const handleQueryChange = useCallback(
    (value: string) => {
      setQuery(value);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        setResults(search(value));
      }, 150);
    },
    [search],
  );

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleResultClick = (result: SearchResult) => {
    const el = document.getElementById(result.sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClose();
  };

  // Group results by category
  const grouped = results.reduce<Record<string, SearchResult[]>>((acc, r) => {
    if (!acc[r.category]) acc[r.category] = [];
    acc[r.category].push(r);
    return acc;
  }, {});

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "min(20vh, 120px)",
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
        opacity: visible ? 1 : 0,
        transition: "opacity 200ms ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 16px",
          borderRadius: "12px",
          overflow: "hidden",
          background: "var(--hub-card-bg)",
          border: "1px solid var(--hub-card-border)",
          boxShadow: "0 24px 48px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          maxHeight: "70vh",
        }}
      >
        {/* Search Input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            borderBottom: "1px solid var(--hub-card-border)",
            gap: "10px",
          }}
        >
          <Search
            style={{ width: "18px", height: "18px", color: "var(--hub-text-muted)", flexShrink: 0 }}
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="输入关键词搜索..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: "15px",
              color: "var(--hub-text)",
              fontFamily: "inherit",
            }}
          />
          <button
            onClick={onClose}
            style={{
              padding: "4px",
              borderRadius: "4px",
              border: "none",
              background: "transparent",
              color: "var(--hub-text-muted)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <X style={{ width: "16px", height: "16px" }} />
          </button>
        </div>

        {/* Results */}
        <div
          style={{
            overflowY: "auto",
            padding: "8px",
            flex: 1,
          }}
        >
          {!query.trim() && (
            <div
              style={{
                textAlign: "center",
                padding: "32px 16px",
                color: "var(--hub-text-muted)",
                fontSize: "14px",
              }}
            >
              输入关键词搜索全站内容...
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "32px 16px",
                color: "var(--hub-text-muted)",
                fontSize: "14px",
              }}
            >
              未找到相关内容
            </div>
          )}

          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} style={{ marginBottom: "12px" }}>
              <div
                style={{
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--hub-text-muted)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {category}
              </div>
              {items.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    transition: "background 150ms",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--hub-bg)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span
                      style={{
                        fontSize: "10px",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        background: CATEGORY_COLORS[category] || "var(--hub-forest)",
                        color: "#fff",
                        fontWeight: 600,
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {category}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "var(--hub-text)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {result.title}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--hub-text-muted)",
                      lineHeight: 1.5,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <HighlightedExcerpt text={result.excerpt} query={query} />
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Footer hint */}
        {results.length > 0 && (
          <div
            style={{
              padding: "8px 16px",
              borderTop: "1px solid var(--hub-card-border)",
              fontSize: "11px",
              color: "var(--hub-text-muted)",
              textAlign: "center",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            ESC 关闭 · 点击结果跳转
          </div>
        )}
      </div>
    </div>
  );
}
