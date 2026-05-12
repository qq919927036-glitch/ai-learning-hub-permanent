// ============================================================
// DeepAdvancedSection.tsx
// Design: Knowledge Atlas - forest green + amber gold + parchment
// Features: main diagram, aux image gallery, code blocks with syntax,
//           step cards, compare table, insights, fun fact
// ============================================================

import { useState } from "react";
import { deepAdvancedSections, deepAdvancedSectionsExtra } from "@/lib/deepAdvancedContent";
import { ChevronDown, ChevronUp, Code2, Lightbulb, Star, BookOpen } from "lucide-react";
import { ImageLightbox } from "./ImageLightbox";
import { QuizBlock } from "./QuizBlock";

const allAdvancedSections = [...deepAdvancedSections, ...deepAdvancedSectionsExtra];

// Simple syntax highlighting for code blocks
function highlightCode(code: string, language: string): string {
  if (language === "python") {
    return code
      .replace(/(&lt;|<)/g, "&lt;")
      .replace(/(&gt;|>)/g, "&gt;")
      .replace(/(#[^\n]*)/g, '<span class="text-stone-400 italic">$1</span>')
      .replace(/\b(def|class|import|from|return|if|else|elif|for|while|in|not|and|or|True|False|None|async|await|with|as|raise|try|except|pass|break|continue)\b/g, '<span class="text-amber-600 font-semibold">$1</span>')
      .replace(/\b(str|int|float|bool|list|dict|tuple|set|type|print|len|open|range)\b/g, '<span class="text-teal-600">$1</span>')
      .replace(/(["'])((?:(?!\1)[^\\]|\\.)*)(\1)/g, '<span class="text-green-700">$1$2$3</span>')
      .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="text-blue-600">$1</span>');
  }
  if (language === "typescript") {
    return code
      .replace(/(&lt;|<)/g, "&lt;")
      .replace(/(&gt;|>)/g, "&gt;")
      .replace(/(\/\/[^\n]*)/g, '<span class="text-stone-400 italic">$1</span>')
      .replace(/\b(const|let|var|function|async|await|return|if|else|for|while|import|export|from|type|interface|class|extends|implements|new|this|true|false|null|undefined|switch|case|break|default|throw|try|catch|finally)\b/g, '<span class="text-amber-600 font-semibold">$1</span>')
      .replace(/\b(string|number|boolean|void|any|never|Record|Promise|Array|Map|Set)\b/g, '<span class="text-teal-600">$1</span>')
      .replace(/(["'`])((?:(?!\1)[^\\]|\\.)*)(\1)/g, '<span class="text-green-700">$1$2$3</span>')
      .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="text-blue-600">$1</span>');
  }
  if (language === "bash") {
    return code
      .replace(/(#[^\n]*)/g, '<span class="text-stone-400 italic">$1</span>')
      .replace(/\b(ls|cat|cd|mkdir|echo|grep|find|jq|git)\b/g, '<span class="text-amber-600 font-semibold">$1</span>');
  }
  if (language === "markdown") {
    return code
      .replace(/(^#{1,3} .+$)/gm, '<span class="text-amber-600 font-semibold">$1</span>')
      .replace(/(`[^`]+`)/g, '<span class="text-green-700">$1</span>');
  }
  return code;
}

interface DeepAdvancedSectionsProps {
  isRead?: (sectionId: string) => boolean;
  onMarkRead?: (sectionId: string) => void;
}

export default function DeepAdvancedSections({ isRead, onMarkRead }: DeepAdvancedSectionsProps) {
  const [expandedCode, setExpandedCode] = useState<Record<string, boolean>>({});
  const [activeImage, setActiveImage] = useState<Record<string, number>>({});
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const toggleCode = (key: string) => {
    setExpandedCode(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const setImage = (sectionId: string, idx: number) => {
    setActiveImage(prev => ({ ...prev, [sectionId]: idx }));
  };

  return (
    <div className="space-y-0">
      {allAdvancedSections.map((section, sectionIdx) => {
        const isEven = sectionIdx % 2 === 0;
        const activeImg = activeImage[section.id] ?? 0;

        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-20`}
            style={{ background: isEven ? "var(--hub-bg-alt)" : "var(--hub-bg)" }}
          >
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
              {/* Section Header */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                    section.tagColor === "amber"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}>
                    {section.chapterNum} · {section.tag}
                  </span>
                  <span className="text-2xl">{section.emoji}</span>
                  {isRead && isRead(section.id) && (
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
                <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {section.title}
                </h2>
                <p className="text-lg text-stone-500 italic">{section.subtitle}</p>
              </div>

              {/* Main Diagram + Aux Images */}
              <div className="mb-12 rounded-2xl overflow-hidden border border-stone-200 shadow-lg">
                {/* Main diagram */}
                <div className="bg-stone-50 p-2 relative group" style={{ cursor: "zoom-in" }} onClick={() => setLightbox({ src: section.mainDiagram, alt: section.mainDiagramCaption })}>
                  <img
                    src={section.mainDiagram}
                    alt={section.mainDiagramCaption}
                    className="w-full rounded-xl object-contain max-h-96"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs px-2 py-1 rounded">
                    ⛶ 点击放大
                  </div>
                </div>
                <div className="bg-stone-800 text-stone-300 text-sm px-4 py-2 text-center italic">
                  {section.mainDiagramCaption}
                </div>

                {/* Aux image gallery */}
                {section.auxImages.length > 0 && (
                  <div className="border-t border-stone-200">
                    {/* Thumbnails */}
                    <div className="flex gap-2 p-3 bg-stone-100 overflow-x-auto">
                      {section.auxImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setImage(section.id, idx)}
                          className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                            activeImg === idx ? "border-emerald-500 shadow-md" : "border-transparent opacity-60 hover:opacity-90"
                          }`}
                        >
                          <img src={img.src} alt={img.caption} className="w-32 h-20 object-cover" />
                        </button>
                      ))}
                    </div>
                    {/* Active aux image */}
                    <div className="bg-stone-50 p-2 relative group" style={{ cursor: "zoom-in" }} onClick={() => setLightbox({ src: section.auxImages[activeImg].src, alt: section.auxImages[activeImg].caption })}>
                      <img
                        src={section.auxImages[activeImg].src}
                        alt={section.auxImages[activeImg].caption}
                        className="w-full rounded-xl object-contain max-h-80"
                      />
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs px-2 py-1 rounded">
                        ⛶ 点击放大
                      </div>
                    </div>
                    <div className="bg-stone-700 text-stone-300 text-sm px-4 py-2 text-center italic">
                      {section.auxImages[activeImg].caption}
                    </div>
                  </div>
                )}
              </div>

              {/* Deep Paragraphs */}
              <div className="mb-12 space-y-5">
                {section.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-stone-700 leading-relaxed text-base lg:text-lg"
                    dangerouslySetInnerHTML={{
                      __html: para
                        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-stone-900 font-semibold">$1</strong>')
                        .replace(/`(.+?)`/g, '<code class="bg-stone-100 text-emerald-700 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>'),
                    }}
                  />
                ))}
              </div>

              {/* Steps */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  核心流程拆解
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {section.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{step.icon}</span>
                        <span className="text-xs font-bold text-stone-400 tracking-widest">{step.num}</span>
                      </div>
                      <h4 className="font-bold text-stone-800 mb-2">{step.title}</h4>
                      <p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compare Table */}
              {section.compareTable && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-stone-800 mb-4">{section.compareTable.title}</h3>
                  <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-emerald-800 text-white">
                          {section.compareTable.headers.map((h, i) => (
                            <th key={i} className="px-4 py-3 text-left font-semibold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.compareTable.rows.map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="px-4 py-3 font-medium text-stone-700">{row.aspect}</td>
                            <td className="px-4 py-3 text-stone-500">{row.without}</td>
                            <td className="px-4 py-3 text-emerald-700 font-medium">{row.with}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Code Blocks */}
              {section.codeBlocks.length > 0 && (
                <div className="mb-12 space-y-4">
                  <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-amber-600" />
                    代码示例
                  </h3>
                  {section.codeBlocks.map((block, idx) => {
                    const key = `${section.id}-code-${idx}`;
                    const isExpanded = expandedCode[key] ?? false;
                    const lines = block.code.split("\n");
                    const previewLines = lines.slice(0, 12);
                    const hasMore = lines.length > 12;

                    return (
                      <div key={idx} className="rounded-xl overflow-hidden border border-stone-200 shadow-sm">
                        {/* Code header */}
                        <div className="bg-stone-800 px-4 py-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                              <div className="w-3 h-3 rounded-full bg-red-400" />
                              <div className="w-3 h-3 rounded-full bg-amber-400" />
                              <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <span className="text-stone-300 text-xs font-mono">{block.label}</span>
                          </div>
                          <span className="text-stone-500 text-xs uppercase tracking-wider">{block.language}</span>
                        </div>
                        {/* Code content */}
                        <div className="bg-stone-900 relative">
                          <pre className="overflow-x-auto p-4 text-sm font-mono leading-relaxed">
                            <code
                              className="text-stone-200"
                              dangerouslySetInnerHTML={{
                                __html: highlightCode(
                                  isExpanded || !hasMore ? block.code : previewLines.join("\n"),
                                  block.language
                                ),
                              }}
                            />
                          </pre>
                          {hasMore && (
                            <button
                              onClick={() => toggleCode(key)}
                              className="w-full flex items-center justify-center gap-2 py-2 bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-200 text-xs font-medium transition-colors border-t border-stone-700"
                            >
                              {isExpanded ? (
                                <><ChevronUp className="w-3.5 h-3.5" /> 收起代码</>
                              ) : (
                                <><ChevronDown className="w-3.5 h-3.5" /> 展开完整代码（{lines.length} 行）</>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Insights */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-stone-800 mb-5 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  深度洞察
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {section.insights.map((insight, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-emerald-50 to-stone-50 rounded-xl p-5 border border-emerald-100"
                    >
                      <div className="text-2xl mb-3">{insight.icon}</div>
                      <h4 className="font-bold text-emerald-800 mb-2 text-sm">{insight.title}</h4>
                      <p className="text-stone-600 text-sm leading-relaxed">{insight.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fun Fact */}
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 flex gap-4">
                <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-amber-700 font-bold text-sm uppercase tracking-wider">趣味事实</span>
                  <p className="text-stone-700 mt-1 text-sm leading-relaxed">{section.funFact}</p>
                </div>
              </div>

              {/* Quiz */}
              {section.quiz && section.quiz.length > 0 && (
                <QuizBlock questions={section.quiz} sectionTitle={section.title} />
              )}

              {/* Mark as read button */}
              {onMarkRead && (
                <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
                  <button
                    onClick={() => onMarkRead(section.id)}
                    disabled={isRead ? isRead(section.id) : false}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.75rem",
                      padding: "8px 14px",
                      borderRadius: "4px",
                      border: isRead && isRead(section.id)
                        ? "1px solid var(--hub-teal-text)"
                        : "1px solid rgba(26, 61, 43, 0.15)",
                      background: isRead && isRead(section.id)
                        ? "rgba(42, 157, 143, 0.08)"
                        : "rgba(26, 61, 43, 0.03)",
                      color: isRead && isRead(section.id) ? "var(--hub-teal-text)" : "var(--hub-text-muted)",
                      cursor: isRead && isRead(section.id) ? "default" : "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <span style={{ fontSize: "0.85rem" }}>{isRead && isRead(section.id) ? "✓" : "○"}</span>
                    {isRead && isRead(section.id) ? "已读" : "标记已读"}
                  </button>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
