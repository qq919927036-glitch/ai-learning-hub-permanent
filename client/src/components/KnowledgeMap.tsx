// Knowledge Atlas Design: Visual overview of all modules as a connected map
// Two sections: 基础篇 (teal) and 进阶篇 (amber)
import { useEffect, useRef } from "react";
import { deepBasicSections } from "@/lib/deepBasicContent";
import { deepAdvancedSections, deepAdvancedSectionsExtra } from "@/lib/deepAdvancedContent";
import { practiceSection } from "@/lib/practiceContent";

const allAdvancedSectionsForMap = [...deepAdvancedSections, ...deepAdvancedSectionsExtra];

export default function KnowledgeMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const CardGroup = ({
    items,
    color,
    label,
    targetSection,
  }: {
    items: { id: string; chapterNum: string; title: string; subtitle: string }[];
    color: "teal" | "amber";
    label: string;
    targetSection: string;
  }) => {
    const isTeal = color === "teal";
    const accentColor = isTeal ? "#4ECDC4" : "#D4A017";
    const bgHover = isTeal
      ? "rgba(78, 205, 196, 0.12)"
      : "rgba(212, 160, 23, 0.12)";
    const badgeBg = isTeal
      ? "rgba(78, 205, 196, 0.18)"
      : "rgba(212, 160, 23, 0.18)";

    return (
      <div className="reveal">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              fontFamily: "'DM Mono', monospace",
              background: badgeBg,
              color: accentColor,
              letterSpacing: "0.08em",
            }}
          >
            {label}
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: `${accentColor}30` }}
          />
          <button
            className="text-xs transition-opacity hover:opacity-100 opacity-50"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: accentColor,
              fontSize: "0.65rem",
              letterSpacing: "0.06em",
            }}
            onClick={() => scrollTo(targetSection)}
          >
            全部查看 →
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((m, i) => (
            <button
              key={m.id}
              className="text-left p-4 rounded-sm transition-all duration-200 group"
              style={{
                background: "rgba(250, 250, 247, 0.05)",
                border: `1px solid rgba(250, 250, 247, 0.08)`,
                animationDelay: `${i * 60}ms`,
              }}
              onClick={() => scrollTo(m.id)}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = bgHover;
                el.style.borderColor = `${accentColor}50`;
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(250, 250, 247, 0.05)";
                el.style.borderColor = "rgba(250, 250, 247, 0.08)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <span
                  className="text-2xl font-bold opacity-15"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#FAFAF7",
                    lineHeight: 1,
                  }}
                >
                  {m.chapterNum}
                </span>
                <span
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                  style={{
                    color: accentColor,
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                  }}
                >
                  →
                </span>
              </div>
              <h3
                className="text-sm font-semibold mb-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#FAFAF7",
                  lineHeight: 1.3,
                }}
              >
                {m.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{
                  fontFamily: "'Lora', serif",
                  color: "rgba(250, 250, 247, 0.4)",
                  lineHeight: 1.5,
                }}
              >
                {m.subtitle}
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="knowledge-map"
      ref={ref}
      className="py-20"
      style={{ background: "#1A3D2B" }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <p
            className="text-xs mb-3"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(250, 250, 247, 0.35)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Knowledge Map
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#FAFAF7",
            }}
          >
            完整知识体系
          </h2>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{
              fontFamily: "'Lora', serif",
              color: "rgba(250, 250, 247, 0.5)",
              lineHeight: 1.8,
            }}
          >
            从「LLM 是什么」到「上手实践」，{deepBasicSections.length} 个基础概念 + {allAdvancedSectionsForMap.length} 个进阶模块 + {practiceSection.tools.length} 个实战工具，
            循序渐进地掌握 AI Agent 的完整知识体系
          </p>
        </div>

        {/* Three groups */}
        <div className="space-y-10">
          <CardGroup
            items={deepBasicSections}
            color="teal"
            label={`基础篇 · ${deepBasicSections.length} 个概念`}
            targetSection="basics"
          />
          <CardGroup
            items={allAdvancedSectionsForMap}
            color="amber"
            label={`进阶篇 · ${allAdvancedSectionsForMap.length} 个模块`}
            targetSection="advanced"
          />
          {/* Practice section card */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  background: "rgba(45, 158, 107, 0.18)",
                  color: "#2D9E6B",
                  letterSpacing: "0.08em",
                }}
              >
                {`实践篇 · ${practiceSection.tools.length} 个工具`}
              </span>
            </div>
            <button
              onClick={() => scrollTo("practice")}
              className="w-full text-left rounded-xl p-4 transition-all duration-200 border"
              style={{
                background: "rgba(45, 158, 107, 0.08)",
                borderColor: "rgba(45, 158, 107, 0.25)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛠️</span>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#FAFAF7" }}>
                    Claude Code · OpenClaw · Cursor · Windsurf · Manus · v0 · Bolt · Replit Agent · NotebookLM · Perplexity
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(250,250,247,0.5)" }}>
                    不只是理论！用真实工具感受 AI Agent 的力量
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
