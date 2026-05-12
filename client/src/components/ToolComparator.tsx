import { useState } from "react";
import { practiceSection } from "@/lib/practiceContent";

export default function ToolComparator() {
  const tools = practiceSection.tools;
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTool = (name: string) => {
    setSelected((prev) => {
      if (prev.includes(name)) {
        return prev.filter((n) => n !== name);
      }
      if (prev.length >= 3) return prev;
      return [...prev, name];
    });
  };

  const selectedTools = tools.filter((t) => selected.includes(t.name));

  return (
    <section id="tool-comparator" className="py-16 px-4">
      <div className="container">
        <h2
          className="text-2xl md:text-3xl font-bold mb-2 text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--hub-text)",
          }}
        >
          AI 工具对比器
        </h2>
        <p
          className="text-center text-sm mb-8"
          style={{
            fontFamily: "'Lora', serif",
            color: "var(--hub-text-muted)",
          }}
        >
          选择 2-3 个工具进行横向对比
        </p>

        {/* Tool selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tools.map((tool) => {
            const isSelected = selected.includes(tool.name);
            const isDisabled = !isSelected && selected.length >= 3;
            return (
              <button
                key={tool.name}
                onClick={() => !isDisabled && toggleTool(tool.name)}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  background: isSelected
                    ? "var(--hub-forest)"
                    : "var(--hub-card-bg)",
                  color: isSelected
                    ? "#FAFAF7"
                    : isDisabled
                      ? "var(--hub-text-light)"
                      : "var(--hub-text-muted)",
                  border: `1px solid ${isSelected ? "var(--hub-forest)" : "var(--hub-card-border)"}`,
                  opacity: isDisabled ? 0.5 : 1,
                  cursor: isDisabled ? "not-allowed" : "pointer",
                }}
              >
                {tool.emoji} {tool.name}
              </button>
            );
          })}
        </div>

        {/* Message if fewer than 2 selected */}
        {selected.length < 2 && (
          <div
            className="text-center py-12 rounded-lg"
            style={{
              background: "var(--hub-bg-alt)",
              border: "1px dashed var(--hub-card-border)",
            }}
          >
            <p
              className="text-sm"
              style={{
                fontFamily: "'Lora', serif",
                color: "var(--hub-text-muted)",
              }}
            >
              请至少选择 2 个工具以查看对比表格
            </p>
            <p
              className="text-xs mt-1"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "var(--hub-text-light)",
              }}
            >
              已选 {selected.length} / 最多 3
            </p>
          </div>
        )}

        {/* Comparison table */}
        {selected.length >= 2 && (
          <div className="overflow-x-auto rounded-lg" style={{ border: "1px solid var(--hub-card-border)" }}>
            <table className="w-full text-sm" style={{ minWidth: "600px" }}>
              <thead>
                <tr
                  style={{
                    background: "var(--hub-forest)",
                    color: "#FAFAF7",
                  }}
                >
                  <th
                    className="px-4 py-3 text-left font-medium"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    维度
                  </th>
                  {selectedTools.map((t) => (
                    <th
                      key={t.name}
                      className="px-4 py-3 text-left font-medium"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {t.emoji} {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: "var(--hub-card-bg)" }}>
                  <td className="px-4 py-3 font-medium" style={{ color: "var(--hub-text)", fontFamily: "'DM Mono', monospace" }}>
                    类型
                  </td>
                  {selectedTools.map((t) => (
                    <td key={t.name} className="px-4 py-3" style={{ color: "var(--hub-text-muted)", fontFamily: "'Lora', serif" }}>
                      {t.category}
                    </td>
                  ))}
                </tr>
                <tr style={{ background: "var(--hub-bg-alt)" }}>
                  <td className="px-4 py-3 font-medium" style={{ color: "var(--hub-text)", fontFamily: "'DM Mono', monospace" }}>
                    定价
                  </td>
                  {selectedTools.map((t) => (
                    <td key={t.name} className="px-4 py-3" style={{ color: "var(--hub-text-muted)", fontFamily: "'Lora', serif" }}>
                      {t.pricing}
                    </td>
                  ))}
                </tr>
                <tr style={{ background: "var(--hub-card-bg)" }}>
                  <td className="px-4 py-3 font-medium" style={{ color: "var(--hub-text)", fontFamily: "'DM Mono', monospace" }}>
                    难度
                  </td>
                  {selectedTools.map((t) => (
                    <td key={t.name} className="px-4 py-3" style={{ color: "var(--hub-text-muted)", fontFamily: "'Lora', serif" }}>
                      {t.difficulty}
                    </td>
                  ))}
                </tr>
                <tr style={{ background: "var(--hub-bg-alt)" }}>
                  <td className="px-4 py-3 font-medium" style={{ color: "var(--hub-text)", fontFamily: "'DM Mono', monospace" }}>
                    最适合
                  </td>
                  {selectedTools.map((t) => (
                    <td key={t.name} className="px-4 py-3" style={{ color: "var(--hub-text-muted)", fontFamily: "'Lora', serif" }}>
                      {t.bestFor}
                    </td>
                  ))}
                </tr>
                <tr style={{ background: "var(--hub-card-bg)" }}>
                  <td className="px-4 py-3 font-medium align-top" style={{ color: "var(--hub-text)", fontFamily: "'DM Mono', monospace" }}>
                    核心特性
                  </td>
                  {selectedTools.map((t) => (
                    <td key={t.name} className="px-4 py-3 align-top" style={{ color: "var(--hub-text-muted)", fontFamily: "'Lora', serif" }}>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        {t.keyFeatures.slice(0, 4).map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
