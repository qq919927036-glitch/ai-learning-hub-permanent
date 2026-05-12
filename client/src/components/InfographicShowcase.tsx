// Design: Knowledge Atlas - showcase grid for SVG infographic components
// Purpose: Display all 6 infographic previews in a responsive grid with lightbox view
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  TransformerArchitecture,
  RAGPipeline,
  AgentArchitecture,
  LLMComparison,
  AITimeline,
  TokenVisualization,
} from "@/components/infographics";

interface InfographicCard {
  id: string;
  title: string;
  component: React.ComponentType;
}

const infographicCards: InfographicCard[] = [
  { id: "transformer", title: "Transformer 架构图解", component: TransformerArchitecture },
  { id: "rag", title: "RAG 检索增强生成流程", component: RAGPipeline },
  { id: "agent", title: "AI Agent 工作原理", component: AgentArchitecture },
  { id: "llm-compare", title: "主流 LLM 对比", component: LLMComparison },
  { id: "timeline", title: "AI 发展时间线", component: AITimeline },
  { id: "token", title: "Token 分词可视化", component: TokenVisualization },
];

export default function InfographicShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--hub-text)",
            }}
          >
            概念图解
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: "'Lora', serif",
              color: "var(--hub-text-muted)",
              lineHeight: 1.7,
            }}
          >
            用精美的可视化图解，直观理解核心 AI 概念
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infographicCards.map((card, index) => {
            const Component = card.component;
            return (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                style={{
                  backgroundColor: "var(--hub-card-bg)",
                  border: "1px solid var(--hub-card-border)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                onClick={() => setActiveIndex(index)}
              >
                {/* Preview container with scaled-down infographic */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div
                    className="absolute inset-0 flex items-center justify-center p-4"
                    style={{ transform: "scale(0.55)", transformOrigin: "center center" }}
                  >
                    <Component />
                  </div>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0,0,0,0.3)" }}
                  >
                    <span
                      className="text-white text-sm font-semibold px-4 py-2 rounded-full"
                      style={{ background: "rgba(78, 205, 196, 0.85)" }}
                    >
                      点击查看大图
                    </span>
                  </div>
                </div>
                {/* Title bar */}
                <div
                  className="px-4 py-3"
                  style={{ borderTop: "1px solid var(--hub-card-border)" }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{
                      color: "var(--hub-text)",
                      fontFamily: "'Lora', serif",
                    }}
                  >
                    {card.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setActiveIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            title="关闭 (Esc)"
          >
            <X size={22} />
          </button>

          {/* Title */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-semibold z-10">
            {infographicCards[activeIndex].title}
          </div>

          {/* Full-size component */}
          <div
            className="max-w-[92vw] max-h-[88vh] overflow-auto rounded-xl p-6"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "var(--hub-card-bg, #ffffff)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            }}
          >
            {(() => {
              const Component = infographicCards[activeIndex].component;
              return <Component />;
            })()}
          </div>

          {/* Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs">
            点击背景关闭 · Esc 退出
          </div>
        </div>
      )}
    </section>
  );
}
