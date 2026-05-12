// ============================================================
// PracticeSection.tsx - 实践篇：真实 AI Agent 工具
// Design: Knowledge Atlas - warm parchment + forest green
// Features: Tool cards, real scenarios, comparison table, how-to-choose
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { practiceSection } from "@/lib/practiceContent";
import type { ToolCard } from "@/lib/practiceContent";
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Lightbulb,
  CheckCircle2,
  Star,
  Zap,
} from "lucide-react";

// Tool image mapping
const toolImages: Record<string, string> = {
  "Claude Code":
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/claude-code-terminal-aDqV43hsWWpXJJihhiYr4C.webp",
  OpenClaw:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/openclaw-life-os-3Ff5UjXURkigskHMnjqdwY.webp",
  Cursor:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/cursor-ide-agent-6CzZF7GEMQa8uVEyZWXFuY.webp",
  Windsurf:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/cursor-ide-agent-6CzZF7GEMQa8uVEyZWXFuY.webp",
  Manus:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/ai-tools-comparison-ZDf7xMKavvi3AdMNdL3grR.webp",
};

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-800",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-800",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-800",
  },
  sky: {
    bg: "bg-sky-50",
    text: "text-sky-700",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-800",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800",
  },
};

const difficultyColor: Record<string, string> = {
  "入门": "bg-green-100 text-green-700",
  "中级": "bg-yellow-100 text-yellow-700",
  "高级": "bg-red-100 text-red-700",
};

function ScenarioAccordion({ scenario, index }: { scenario: ToolCard["realScenarios"][0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border border-stone-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-stone-50 hover:bg-stone-100 transition-colors text-left"
      >
        <span className="font-medium text-stone-800 text-sm">{scenario.title}</span>
        <ChevronDown
          className={`w-4 h-4 text-stone-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-4 py-4 bg-white">
              <p className="text-stone-600 text-sm mb-3 italic">{scenario.description}</p>
              <ol className="space-y-2">
                {scenario.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-stone-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2D5016] text-white text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ToolDetailCard({ tool, isActive, onClick, isToolRead, onMarkToolRead }: { tool: ToolCard; isActive: boolean; onClick: () => void; isToolRead?: boolean; onMarkToolRead?: () => void }) {
  const colors = colorMap[tool.color] || colorMap.emerald;
  return (
    <motion.div
      layout
      className={`rounded-2xl border-2 overflow-hidden cursor-pointer transition-all duration-300 ${
        isActive ? `${colors.border} shadow-lg` : "border-stone-200 hover:border-stone-300"
      }`}
      onClick={onClick}
    >
      {/* Card Header */}
      <div className={`p-5 ${isActive ? colors.bg : "bg-white"}`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{tool.emoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-stone-900 text-lg leading-tight">{tool.name}</h3>
                {isToolRead && (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "var(--hub-teal-text)",
                      color: "var(--hub-bg)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                    title="已读"
                  >
                    ✓
                  </span>
                )}
              </div>
              <p className={`text-sm font-medium ${colors.text}`}>{tool.tagline}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors.badge}`}>
              {tool.category}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColor[tool.difficulty]}`}>
              {tool.difficulty}
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-stone-500">
          <span>{tool.pricing}</span>
          <span>·</span>
          <span>最适合：{tool.bestFor}</span>
        </div>
        <div className={`mt-2 flex items-center gap-1 text-xs font-medium ${colors.text}`}>
          <span>{isActive ? "收起详情" : "查看详情"}</span>
          <ChevronRight className={`w-3 h-3 transition-transform ${isActive ? "rotate-90" : ""}`} />
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="border-t border-stone-100">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ maxHeight: 280 }}>
                <img
                  src={toolImages[tool.name]}
                  alt={tool.name}
                  className="w-full object-cover object-top"
                  style={{ maxHeight: 280 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
              </div>

              <div className="p-5 space-y-6">
                {/* Description */}
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500" />
                    它是什么？
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{tool.description}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    核心功能
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tool.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex gap-2 text-sm text-stone-700">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${colors.text}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real Scenarios */}
                <div>
                  <h4 className="font-semibold text-stone-800 mb-3">真实使用场景</h4>
                  <div className="space-y-2">
                    {tool.realScenarios.map((scenario, i) => (
                      <ScenarioAccordion key={i} scenario={scenario} index={i} />
                    ))}
                  </div>
                </div>

                {/* Pro Tip */}
                <div className={`rounded-xl p-4 ${colors.bg} border ${colors.border}`}>
                  <div className="flex gap-3">
                    <Lightbulb className={`w-5 h-5 flex-shrink-0 mt-0.5 ${colors.text}`} />
                    <div>
                      <p className={`font-semibold text-sm mb-1 ${colors.text}`}>老手技巧</p>
                      <p className="text-stone-700 text-sm leading-relaxed">{tool.proTip}</p>
                    </div>
                  </div>
                </div>

                {/* Official Link */}
                <a
                  href={tool.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text} hover:underline`}
                >
                  <ExternalLink className="w-4 h-4" />
                  访问官网
                </a>

                {/* Mark as read button */}
                {onMarkToolRead && (
                  <div style={{ marginTop: "16px" }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); onMarkToolRead(); }}
                      disabled={isToolRead}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.75rem",
                        padding: "8px 14px",
                        borderRadius: "4px",
                        border: isToolRead
                          ? "1px solid var(--hub-teal-text)"
                          : "1px solid rgba(26, 61, 43, 0.15)",
                        background: isToolRead
                          ? "rgba(42, 157, 143, 0.08)"
                          : "rgba(26, 61, 43, 0.03)",
                        color: isToolRead ? "var(--hub-teal-text)" : "var(--hub-text-muted)",
                        cursor: isToolRead ? "default" : "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      <span style={{ fontSize: "0.85rem" }}>{isToolRead ? "✓" : "○"}</span>
                      {isToolRead ? "已读" : "标记已读"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface PracticeSectionProps {
  isRead?: (toolName: string) => boolean;
  onMarkRead?: (toolName: string) => void;
}

export default function PracticeSection({ isRead, onMarkRead }: PracticeSectionProps) {
  const [activeToolIndex, setActiveToolIndex] = useState<number | null>(0);
  const { tools, comparisonTable, howToChoose } = practiceSection;

  return (
    <section id="practice" className="py-20" style={{ background: "var(--hub-bg)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: "#2D5016", color: "#FAFAF7" }}
            >
              实践篇
            </span>
            <span className="text-stone-400 text-sm">P1 — P5</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a" }}
          >
            真实 AI Agent 工具
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
            {practiceSection.intro}
          </p>
        </div>

        {/* Tool Cards */}
        <div className="space-y-4 mb-16">
          {tools.map((tool, index) => (
            <ToolDetailCard
              key={tool.name}
              tool={tool}
              isActive={activeToolIndex === index}
              onClick={() => setActiveToolIndex(activeToolIndex === index ? null : index)}
              isToolRead={isRead ? isRead(tool.name) : false}
              onMarkToolRead={onMarkRead ? () => onMarkRead(tool.name) : undefined}
            />
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a" }}
          >
            五大工具横向对比
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#2D5016" }}>
                  {comparisonTable.headers.map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-white font-semibold whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonTable.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-4 py-3 text-stone-700 ${j === 0 ? "font-semibold text-stone-900" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How to Choose */}
        <div>
          <h3
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a" }}
          >
            如何选择适合你的工具？
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {howToChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl border border-stone-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">🤔</span>
                  <p className="text-stone-700 text-sm font-medium leading-snug">
                    {item.condition}
                  </p>
                </div>
                <div
                  className="rounded-lg px-3 py-2 mb-2 inline-block"
                  style={{ background: "#2D5016" }}
                >
                  <span className="text-white font-bold text-sm">→ {item.recommendation}</span>
                </div>
                <p className="text-stone-500 text-xs leading-relaxed">{item.reason}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Tools Comparison Image */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/ai-tools-comparison-ZDf7xMKavvi3AdMNdL3grR.webp"
            alt="2026 AI Agent 工具全景对比"
            className="w-full"
          />
          <div className="bg-stone-50 px-5 py-3 text-center text-stone-500 text-xs">
            2026 年主流 AI Agent 工具全景对比：从编程专用到通用自主，从免费开源到企业付费
          </div>
        </div>
      </div>
    </section>
  );
}
