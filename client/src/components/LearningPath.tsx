// ============================================================
// LearningPath.tsx - 学习路径 (4 personas)
// Design: Knowledge Atlas - expandable persona cards with staged progression
// Features: Scroll reveal, expandable cards, stage indicators
// ============================================================

import { useEffect, useRef, useState } from "react";
import { learningPaths, type LearningPath as LearningPathType } from "@/lib/learningPathContent";

export default function LearningPath() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".lp-reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("lp-visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="learning-path"
      ref={sectionRef}
      style={{ background: "var(--hub-bg)", padding: "80px 0" }}
    >
      <style>{`
        .lp-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .lp-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              color: "var(--hub-amber)",
              textTransform: "uppercase",
            }}
          >
            LEARNING PATHS
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.5rem",
              color: "var(--hub-forest)",
              margin: "8px 0 16px",
              fontWeight: 700,
            }}
          >
            学习路径
          </h2>
          <p
            style={{
              fontFamily: "'Lora', serif",
              color: "var(--hub-text-muted)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            根据你的角色选择最适合的学习路线，从入门到精通，每一步都有明确方向
          </p>
        </div>

        {/* Persona Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: 24,
          }}
        >
          {learningPaths.map((path) => (
            <PersonaCard
              key={path.id}
              path={path}
              isExpanded={expandedId === path.id}
              onToggle={() => toggle(path.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonaCard({
  path,
  isExpanded,
  onToggle,
}: {
  path: LearningPathType;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="lp-reveal"
      style={{
        background: "var(--hub-card-bg)",
        borderRadius: 12,
        border: `1px solid ${path.color}25`,
        overflow: "hidden",
        transition: "box-shadow 0.3s, transform 0.2s",
        boxShadow: isExpanded
          ? `0 8px 32px ${path.color}18`
          : "0 2px 12px rgba(0,0,0,0.04)",
        transform: isExpanded ? "translateY(-2px)" : "none",
      }}
    >
      {/* Card Header - always visible */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "block",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 12,
          }}
        >
          <span style={{ fontSize: "1.8rem" }}>{path.icon}</span>
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.25rem",
                color: "var(--hub-forest)",
                margin: 0,
                fontWeight: 600,
              }}
            >
              {path.persona}
            </h3>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                color: path.color,
                letterSpacing: "0.08em",
              }}
            >
              {path.stages.length} 阶段
            </span>
          </div>
          {/* Expand indicator */}
          <span
            style={{
              marginLeft: "auto",
              fontSize: "1.2rem",
              color: path.color,
              transition: "transform 0.3s",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
            }}
          >
            ▾
          </span>
        </div>

        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "0.88rem",
            color: "var(--hub-text-muted)",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {path.description}
        </p>

        {/* Stage progress dots (when collapsed) */}
        {!isExpanded && (
          <div
            style={{
              display: "flex",
              gap: 6,
              marginTop: 16,
              alignItems: "center",
            }}
          >
            {path.stages.map((stage, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: path.color,
                    opacity: 0.3 + (i * 0.2),
                  }}
                />
                {i < path.stages.length - 1 && (
                  <div
                    style={{
                      width: 20,
                      height: 2,
                      background: `${path.color}30`,
                      borderRadius: 1,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </button>

      {/* Expanded Content - stages */}
      {isExpanded && (
        <div
          style={{
            padding: "0 24px 24px",
            borderTop: `1px solid ${path.color}15`,
          }}
        >
          {path.stages.map((stage, stageIdx) => (
            <div
              key={stageIdx}
              style={{
                position: "relative",
                paddingLeft: 28,
                paddingTop: 20,
                paddingBottom: stageIdx < path.stages.length - 1 ? 0 : 0,
              }}
            >
              {/* Vertical connector line */}
              {stageIdx < path.stages.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    left: 9,
                    top: 38,
                    bottom: -4,
                    width: 2,
                    background: `${path.color}25`,
                  }}
                />
              )}

              {/* Stage dot */}
              <div
                style={{
                  position: "absolute",
                  left: 4,
                  top: 24,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: path.color,
                  opacity: 0.4 + stageIdx * 0.2,
                  border: "2px solid #FFFFFF",
                  boxShadow: `0 0 0 2px ${path.color}30`,
                }}
              />

              {/* Stage header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 10,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.95rem",
                    color: "var(--hub-forest)",
                    fontWeight: 600,
                  }}
                >
                  {stage.title}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    padding: "2px 8px",
                    borderRadius: 10,
                    background: `${path.color}12`,
                    color: path.color,
                  }}
                >
                  {stage.duration}
                </span>
              </div>

              {/* Items */}
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {stage.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    style={{
                      fontFamily: "'Lora', serif",
                      fontSize: "0.82rem",
                      color: "var(--hub-text-muted)",
                      lineHeight: 1.6,
                      padding: "3px 0",
                      paddingLeft: 14,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: `${path.color}50`,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
