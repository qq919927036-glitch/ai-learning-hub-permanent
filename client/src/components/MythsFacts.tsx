import { useState } from "react";
import { mythsData, type MythItem } from "@/lib/mythsContent";

type CategoryFilter = "all" | "capability" | "technical" | "social";

const categoryLabels: Record<CategoryFilter, string> = {
  all: "全部",
  capability: "能力误区",
  technical: "技术误解",
  social: "社会影响",
};

function MythCard({ item }: { item: MythItem }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective-1000"
      style={{ perspective: "1000px", height: "320px" }}
    >
      <div
        onClick={() => setFlipped(!flipped)}
        className="relative w-full h-full cursor-pointer transition-transform duration-600"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Front - Myth */}
        <div
          className="absolute inset-0 rounded-lg p-5 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            background: "var(--hub-card-bg)",
            border: "1px solid var(--hub-card-border)",
            boxShadow: "0 2px 12px rgba(220, 38, 38, 0.08)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-lg w-7 h-7 flex items-center justify-center rounded-full"
              style={{ background: "rgba(220, 38, 38, 0.12)", color: "#dc2626" }}
            >
              ✕
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                fontFamily: "'DM Mono', monospace",
                background: "rgba(220, 38, 38, 0.1)",
                color: "#dc2626",
              }}
            >
              误区
            </span>
          </div>
          <h3
            className="text-base font-semibold mb-3 leading-snug"
            style={{
              fontFamily: "'Lora', serif",
              color: "var(--hub-text)",
            }}
          >
            {item.myth}
          </h3>
          <p
            className="text-xs mt-auto"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "var(--hub-text-muted)",
            }}
          >
            点击翻转查看真相 →
          </p>
        </div>

        {/* Back - Fact */}
        <div
          className="absolute inset-0 rounded-lg p-5 flex flex-col overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "var(--hub-card-bg)",
            border: "1px solid var(--hub-card-border)",
            boxShadow: "0 2px 12px rgba(22, 163, 74, 0.08)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-lg w-7 h-7 flex items-center justify-center rounded-full"
              style={{ background: "rgba(22, 163, 74, 0.12)", color: "#16a34a" }}
            >
              ✓
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                fontFamily: "'DM Mono', monospace",
                background: "rgba(22, 163, 74, 0.1)",
                color: "#16a34a",
              }}
            >
              事实
            </span>
          </div>
          <h3
            className="text-sm font-semibold mb-2 leading-snug"
            style={{
              fontFamily: "'Lora', serif",
              color: "#16a34a",
            }}
          >
            {item.fact}
          </h3>
          <p
            className="text-xs leading-relaxed"
            style={{
              fontFamily: "'Lora', serif",
              color: "var(--hub-text-muted)",
            }}
          >
            {item.explanation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MythsFacts() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredMyths =
    filter === "all" ? mythsData : mythsData.filter((m) => m.category === filter);

  return (
    <section id="myths" className="py-16 px-4">
      <div className="container">
        <h2
          className="text-2xl md:text-3xl font-bold mb-2 text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--hub-text)",
          }}
        >
          常见误区
        </h2>
        <p
          className="text-center text-sm mb-8"
          style={{
            fontFamily: "'Lora', serif",
            color: "var(--hub-text-muted)",
          }}
        >
          点击卡片翻转，揭示真相
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(Object.keys(categoryLabels) as CategoryFilter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              style={{
                fontFamily: "'DM Mono', monospace",
                background:
                  filter === cat
                    ? "var(--hub-forest)"
                    : "var(--hub-card-bg)",
                color:
                  filter === cat
                    ? "#FAFAF7"
                    : "var(--hub-text-muted)",
                border: `1px solid ${filter === cat ? "var(--hub-forest)" : "var(--hub-card-border)"}`,
              }}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          }}
        >
          {filteredMyths.map((item) => (
            <MythCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
