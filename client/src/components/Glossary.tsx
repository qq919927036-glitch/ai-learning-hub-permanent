import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { glossaryTerms, GlossaryTerm } from "@/lib/glossaryContent";

type ViewMode = "category" | "alpha";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "基础概念": { bg: "rgba(78, 205, 196, 0.15)", text: "#2A9D8F", border: "rgba(78, 205, 196, 0.3)" },
  "技术术语": { bg: "rgba(212, 160, 23, 0.15)", text: "#B8860B", border: "rgba(212, 160, 23, 0.3)" },
  "应用概念": { bg: "rgba(26, 61, 43, 0.12)", text: "#1A3D2B", border: "rgba(26, 61, 43, 0.25)" },
  "商业/生态": { bg: "rgba(139, 92, 246, 0.12)", text: "#7C3AED", border: "rgba(139, 92, 246, 0.25)" },
};

function TermCard({ term, isExpanded, onToggle }: { term: GlossaryTerm; isExpanded: boolean; onToggle: () => void }) {
  const colors = categoryColors[term.category];
  return (
    <div
      style={{
        background: "var(--hub-card-bg)",
        border: "1px solid var(--hub-card-border)",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "box-shadow 0.2s, border-color 0.2s",
      }}
      onClick={onToggle}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
        (e.currentTarget as HTMLElement).style.borderColor = colors.border;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--hub-card-border)";
      }}
    >
      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--hub-forest)",
                }}
              >
                {term.term}
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem",
                  color: "var(--hub-text-light)",
                  letterSpacing: "0.02em",
                }}
              >
                {term.termEn}
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "0.875rem",
                color: "var(--hub-text-muted)",
                marginTop: "6px",
                lineHeight: 1.6,
              }}
            >
              {term.definition}
            </p>
          </div>
          <span
            style={{
              fontSize: "1.2rem",
              color: "#9CA3AF",
              transition: "transform 0.2s",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              flexShrink: 0,
            }}
          >
            ▾
          </span>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div
                style={{
                  marginTop: "12px",
                  paddingTop: "12px",
                  borderTop: "1px dashed rgba(26, 61, 43, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ fontSize: "0.8rem", color: colors.text }}>💡</span>
                  <p
                    style={{
                      fontFamily: "'Lora', serif",
                      fontSize: "0.825rem",
                      color: "#6B7280",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                    }}
                  >
                    {term.example}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Glossary() {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("category");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredTerms = glossaryTerms.filter((t) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      t.term.toLowerCase().includes(q) ||
      t.termEn.toLowerCase().includes(q) ||
      t.definition.toLowerCase().includes(q)
    );
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderCategoryView = () => {
    const categories = ["基础概念", "技术术语", "应用概念", "商业/生态"] as const;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {categories.map((cat) => {
          const items = filteredTerms.filter((t) => t.category === cat);
          if (items.length === 0) return null;
          const colors = categoryColors[cat];
          return (
            <div key={cat}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    background: colors.bg,
                    color: colors.text,
                    letterSpacing: "0.08em",
                  }}
                >
                  {cat}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    color: "#9CA3AF",
                  }}
                >
                  {items.length} terms
                </span>
                <div style={{ flex: 1, height: "1px", background: `${colors.border}` }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))", gap: "12px" }}>
                {items.map((term) => (
                  <TermCard
                    key={term.id}
                    term={term}
                    isExpanded={expandedId === term.id}
                    onToggle={() => toggleExpand(term.id)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderAlphaView = () => {
    const sorted = [...filteredTerms].sort((a, b) => a.termEn.localeCompare(b.termEn));
    const groups: Record<string, GlossaryTerm[]> = {};
    sorted.forEach((term) => {
      const letter = term.termEn[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(term);
    });
    const letters = Object.keys(groups).sort();

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {letters.map((letter) => (
          <div key={letter}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--hub-forest)",
                  lineHeight: 1,
                }}
              >
                {letter}
              </span>
              <div style={{ flex: 1, height: "1px", background: "var(--hub-card-border)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))", gap: "12px" }}>
              {groups[letter].map((term) => (
                <TermCard
                  key={term.id}
                  term={term}
                  isExpanded={expandedId === term.id}
                  onToggle={() => toggleExpand(term.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="glossary"
      style={{
        background: "var(--hub-bg)",
        padding: "64px 0",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.25rem",
              fontWeight: 700,
              color: "var(--hub-forest)",
              marginBottom: "12px",
            }}
          >
            术语表
          </h2>
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "1rem",
              color: "var(--hub-text-light)",
              lineHeight: 1.7,
            }}
          >
            AI 领域核心术语速查，点击卡片展开查看示例
          </p>
        </div>

        {/* Controls: Search + View Toggle */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {/* Search Input */}
          <div style={{ flex: 1, minWidth: "200px", position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1rem",
                color: "#9CA3AF",
                pointerEvents: "none",
              }}
            >
              🔍
            </span>
            <input
              type="text"
              placeholder="搜索术语、英文名或定义..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 14px 10px 40px",
                fontFamily: "'Lora', serif",
                fontSize: "0.875rem",
                border: "1px solid var(--hub-card-border)",
                borderRadius: "8px",
                background: "var(--hub-card-bg)",
                color: "var(--hub-text)",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--hub-teal)";
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--hub-card-border)";
              }}
            />
          </div>

          {/* View Toggle */}
          <div
            style={{
              display: "flex",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(26, 61, 43, 0.15)",
            }}
          >
            <button
              onClick={() => setViewMode("category")}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                padding: "8px 16px",
                border: "none",
                cursor: "pointer",
                background: viewMode === "category" ? "#1A3D2B" : "rgba(255, 255, 255, 0.8)",
                color: viewMode === "category" ? "#FAFAF7" : "#6B7280",
                transition: "all 0.2s",
                letterSpacing: "0.04em",
              }}
            >
              按类别
            </button>
            <button
              onClick={() => setViewMode("alpha")}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                padding: "8px 16px",
                border: "none",
                borderLeft: "1px solid rgba(26, 61, 43, 0.15)",
                cursor: "pointer",
                background: viewMode === "alpha" ? "#1A3D2B" : "rgba(255, 255, 255, 0.8)",
                color: viewMode === "alpha" ? "#FAFAF7" : "#6B7280",
                transition: "all 0.2s",
                letterSpacing: "0.04em",
              }}
            >
              按字母
            </button>
          </div>
        </div>

        {/* Results count */}
        {search.trim() && (
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              color: "#9CA3AF",
              marginBottom: "20px",
              letterSpacing: "0.04em",
            }}
          >
            找到 {filteredTerms.length} 个匹配术语
          </p>
        )}

        {/* Term list */}
        {filteredTerms.length === 0 ? (
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <p style={{ fontFamily: "'Lora', serif", color: "#9CA3AF", fontSize: "0.9rem" }}>
              没有找到匹配的术语，试试其他关键词？
            </p>
          </div>
        ) : viewMode === "category" ? (
          renderCategoryView()
        ) : (
          renderAlphaView()
        )}
      </div>
    </section>
  );
}
