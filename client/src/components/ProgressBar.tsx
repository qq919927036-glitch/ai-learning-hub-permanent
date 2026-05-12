interface ProgressStats {
  basic: { read: number; total: number };
  advanced: { read: number; total: number };
  practice: { read: number; total: number };
}

interface ProgressBarProps {
  stats: ProgressStats;
  lastRead?: { type: "basic" | "advanced" | "practice"; id: string; timestamp: number };
  onContinueReading: () => void;
  visible: boolean;
}

function MiniBar({
  label,
  read,
  total,
  color,
}: {
  label: string;
  read: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? Math.round((read / total) * 100) : 0;
  return (
    <div style={{ flex: 1, minWidth: "80px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "6px",
        }}
      >
        <span
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "0.8rem",
            color: "var(--hub-text-muted)",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.75rem",
            color: color,
            fontWeight: 600,
          }}
        >
          {read}/{total}
        </span>
      </div>
      <div
        style={{
          height: "6px",
          borderRadius: "3px",
          background: "var(--hub-card-border)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            borderRadius: "3px",
            background: color,
            transition: "width 0.4s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function ProgressBar({ stats, lastRead, onContinueReading, visible }: ProgressBarProps) {
  if (!visible) return null;

  return (
    <div
      style={{
        background: "var(--hub-bg)",
        borderBottom: "1px solid var(--hub-card-border)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            padding: "16px 0",
            flexWrap: "wrap",
          }}
        >
          {/* Label */}
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "var(--hub-forest)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            学习进度
          </span>

          {/* Progress bars */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flex: 1,
              minWidth: "0",
              flexWrap: "wrap",
            }}
          >
            <MiniBar label="基础篇" read={stats.basic.read} total={stats.basic.total} color="#4ECDC4" />
            <MiniBar label="进阶篇" read={stats.advanced.read} total={stats.advanced.total} color="#D4A017" />
            <MiniBar label="实践篇" read={stats.practice.read} total={stats.practice.total} color="#1A3D2B" />
          </div>

          {/* Continue reading button */}
          {lastRead && (
            <button
              onClick={onContinueReading}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "#2A9D8F",
                background: "rgba(78, 205, 196, 0.1)",
                border: "1px solid rgba(78, 205, 196, 0.25)",
                borderRadius: "4px",
                padding: "6px 12px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(78, 205, 196, 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(78, 205, 196, 0.1)";
              }}
            >
              继续阅读 →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
