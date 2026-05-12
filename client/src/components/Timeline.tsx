// ============================================================
// Timeline.tsx - AI 里程碑时间线 (2017-2025)
// Design: Knowledge Atlas - vertical timeline with category colors
// Features: Scroll reveal, category coding, responsive alternating layout
// ============================================================

import { useEffect, useRef } from "react";
import { timelineEvents, type TimelineEvent } from "@/lib/timelineContent";

const CATEGORY_COLORS: Record<TimelineEvent["category"], string> = {
  model: "#4ECDC4",
  product: "#D4A017",
  research: "#1A3D2B",
  policy: "#7C3AED",
};

const CATEGORY_LABELS: Record<TimelineEvent["category"], string> = {
  model: "模型",
  product: "产品",
  research: "研究",
  policy: "政策",
};

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".tl-reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("tl-visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      style={{ background: "#FAFAF7", padding: "80px 0" }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              color: "#4ECDC4",
              textTransform: "uppercase",
            }}
          >
            MILESTONES
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.5rem",
              color: "#1A3D2B",
              margin: "8px 0 16px",
              fontWeight: 700,
            }}
          >
            AI 里程碑
          </h2>
          <p
            style={{
              fontFamily: "'Lora', serif",
              color: "#4A4A45",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            从 Transformer 论文到 Agent 时代，回顾塑造人工智能的关键时刻
          </p>

          {/* Category Legend */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              marginTop: 24,
              flexWrap: "wrap",
            }}
          >
            {(Object.keys(CATEGORY_COLORS) as TimelineEvent["category"][]).map(
              (cat) => (
                <span
                  key={cat}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: CATEGORY_COLORS[cat],
                      display: "inline-block",
                    }}
                  />
                  <span style={{ color: "#6B6B65" }}>
                    {CATEGORY_LABELS[cat]}
                  </span>
                </span>
              )
            )}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background:
                "linear-gradient(to bottom, rgba(78,205,196,0.3), rgba(212,160,23,0.3), rgba(26,61,43,0.3))",
              transform: "translateX(-50%)",
            }}
          />

          {/* Mobile: line on left */}
          <style>{`
            @media (max-width: 768px) {
              .tl-line-center { left: 24px !important; transform: none !important; }
              .tl-card-left, .tl-card-right {
                margin-left: 50px !important;
                margin-right: 0 !important;
                width: calc(100% - 50px) !important;
                text-align: left !important;
              }
              .tl-dot { left: 24px !important; transform: translateX(-50%) !important; }
            }
            .tl-reveal {
              opacity: 0;
              transform: translateY(24px);
              transition: opacity 0.5s ease, transform 0.5s ease;
            }
            .tl-visible {
              opacity: 1;
              transform: translateY(0);
            }
          `}</style>

          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            const color = CATEGORY_COLORS[event.category];

            return (
              <div
                key={`${event.year}-${event.title}`}
                className="tl-reveal"
                style={{
                  position: "relative",
                  marginBottom: 40,
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                }}
              >
                {/* Dot on timeline */}
                <div
                  className="tl-dot"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 20,
                    transform: "translateX(-50%)",
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: color,
                    border: "3px solid #FAFAF7",
                    boxShadow: `0 0 0 2px ${color}40`,
                    zIndex: 2,
                  }}
                />

                {/* Card */}
                <div
                  className={isLeft ? "tl-card-left" : "tl-card-right"}
                  style={{
                    width: "calc(50% - 40px)",
                    padding: "20px 24px",
                    background: "#FFFFFF",
                    borderRadius: 8,
                    border: `1px solid ${color}25`,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    textAlign: isLeft ? "right" : "left",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.boxShadow = `0 4px 20px ${color}20`;
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Date + category badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 8,
                      justifyContent: isLeft ? "flex-end" : "flex-start",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.72rem",
                        color: "#6B6B65",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {event.year}
                      {event.month ? ` / ${event.month}` : ""}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.6rem",
                        padding: "2px 8px",
                        borderRadius: 12,
                        background: `${color}18`,
                        color: color,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {CATEGORY_LABELS[event.category]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.05rem",
                      color: "#1A3D2B",
                      margin: "0 0 8px",
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ marginRight: 6 }}>{event.icon}</span>
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Lora', serif",
                      fontSize: "0.88rem",
                      color: "#4A4A45",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
