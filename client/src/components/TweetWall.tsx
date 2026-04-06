// ============================================================
// TweetWall.tsx
// Design: Knowledge Atlas - 推文卡片瀑布流
// Features: 分类筛选、推文卡片、翻译展开、大佬头像导航
// ============================================================

import { useState } from "react";
import { tweetCards, thinkers, type TweetCategory } from "@/lib/tweetContent";
import { Heart, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const CATEGORY_LABELS: Record<TweetCategory | "all", string> = {
  all: "全部",
  basic: "🟢 基础认知",
  advanced: "🟡 进阶架构",
  philosophy: "🟣 AI 哲学",
};

const CATEGORY_COLORS: Record<TweetCategory | "all", string> = {
  all: "#1A3D2B",
  basic: "#4ECDC4",
  advanced: "#D4A017",
  philosophy: "#7C3AED",
};

export default function TweetWall() {
  const [activeCategory, setActiveCategory] = useState<TweetCategory | "all">("all");
  const [activeThinker, setActiveThinker] = useState<string | null>(null);
  const [expandedTranslations, setExpandedTranslations] = useState<Set<string>>(new Set());

  const toggleTranslation = (id: string) => {
    setExpandedTranslations((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filtered = tweetCards.filter((t) => {
    const catMatch = activeCategory === "all" || t.category === activeCategory;
    const thinkerMatch = !activeThinker || t.handle === activeThinker;
    return catMatch && thinkerMatch;
  });

  return (
    <section id="tweet-wall" className="py-20 bg-[#0F2419]">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs mb-3 tracking-widest uppercase"
            style={{ fontFamily: "'DM Mono', monospace", color: "rgba(250,250,247,0.35)" }}
          >
            Thinkers · 大佬说
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#FAFAF7" }}
          >
            AI 大佬推文精华
          </h2>
          <p
            className="text-sm max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Lora', serif", color: "rgba(250,250,247,0.5)" }}
          >
            Karpathy、Sam Altman、Yann LeCun、Geoffrey Hinton、Ilya Sutskever、Demis Hassabis、Gary Marcus——
            这些改变 AI 历史的人，他们是怎么看待 LLM、Agent 和 AGI 的？
          </p>
        </div>

        {/* Thinker Avatars */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveThinker(null)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
              !activeThinker
                ? "bg-[#4ECDC4] text-stone-900 border-[#4ECDC4]"
                : "bg-transparent text-stone-400 border-stone-700 hover:border-stone-500"
            }`}
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            全部大佬
          </button>
          {thinkers.map((t) => (
            <button
              key={t.handle}
              onClick={() => setActiveThinker(activeThinker === t.handle ? null : t.handle)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                activeThinker === t.handle
                  ? "border-current text-white"
                  : "bg-transparent text-stone-400 border-stone-700 hover:border-stone-500"
              }`}
              style={{
                fontFamily: "'DM Mono', monospace",
                background: activeThinker === t.handle ? t.color : undefined,
                borderColor: activeThinker === t.handle ? t.color : undefined,
              }}
            >
              <span>{t.emoji}</span>
              <span>{t.name}</span>
              <span
                className="px-1.5 py-0.5 rounded-full text-xs"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {t.count}
              </span>
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(Object.keys(CATEGORY_LABELS) as (TweetCategory | "all")[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border`}
              style={{
                fontFamily: "'DM Mono', monospace",
                background: activeCategory === cat ? CATEGORY_COLORS[cat] : "transparent",
                color: activeCategory === cat ? "#fff" : "rgba(250,250,247,0.45)",
                borderColor: activeCategory === cat ? CATEGORY_COLORS[cat] : "rgba(250,250,247,0.15)",
              }}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Tweet Cards Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((tweet) => {
            const isExpanded = expandedTranslations.has(tweet.id);
            return (
              <div
                key={tweet.id}
                className="break-inside-avoid rounded-2xl overflow-hidden border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${tweet.avatarColor}60`;
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
              >
                {/* Card Header */}
                <div className="p-4 pb-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: tweet.avatarColor }}
                      >
                        {tweet.avatar}
                      </div>
                      <div>
                        <p
                          className="font-bold text-sm"
                          style={{ color: "#FAFAF7", fontFamily: "'Playfair Display', serif" }}
                        >
                          {tweet.author}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "rgba(250,250,247,0.4)", fontFamily: "'DM Mono', monospace" }}
                        >
                          {tweet.handle}
                        </p>
                      </div>
                    </div>
                    {/* X logo */}
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
                    >
                      𝕏
                    </div>
                  </div>

                  {/* Role badge */}
                  <p
                    className="text-xs mb-3 px-2 py-0.5 rounded inline-block"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      color: "rgba(250,250,247,0.4)",
                      background: "rgba(255,255,255,0.06)",
                      fontSize: "0.62rem",
                    }}
                  >
                    {tweet.role}
                  </p>
                </div>

                {/* Tweet Content */}
                <div className="px-4 pb-3">
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: "rgba(250,250,247,0.85)", fontFamily: "'Lora', serif", lineHeight: 1.7 }}
                  >
                    {tweet.content}
                  </p>

                  {/* Translation Toggle */}
                  <button
                    onClick={() => toggleTranslation(tweet.id)}
                    className="flex items-center gap-1.5 text-xs mb-2 transition-opacity hover:opacity-100 opacity-60"
                    style={{ color: "#4ECDC4", fontFamily: "'DM Mono', monospace" }}
                  >
                    {isExpanded ? (
                      <><ChevronUp className="w-3 h-3" /> 收起中文翻译</>
                    ) : (
                      <><ChevronDown className="w-3 h-3" /> 查看中文翻译</>
                    )}
                  </button>

                  {isExpanded && (
                    <div
                      className="rounded-xl p-3 mb-3 text-sm leading-relaxed"
                      style={{
                        background: "rgba(78,205,196,0.08)",
                        borderLeft: "3px solid rgba(78,205,196,0.4)",
                        color: "rgba(250,250,247,0.7)",
                        fontFamily: "'Lora', serif",
                        lineHeight: 1.7,
                      }}
                    >
                      {tweet.translation}
                    </div>
                  )}
                </div>

                {/* Insight */}
                <div
                  className="mx-4 mb-3 rounded-xl p-3"
                  style={{ background: `${tweet.avatarColor}25`, border: `1px solid ${tweet.avatarColor}40` }}
                >
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(250,250,247,0.75)", fontFamily: "'Lora', serif", lineHeight: 1.6 }}
                  >
                    <span
                      className="font-bold mr-1"
                      style={{ color: "#D4A017", fontFamily: "'DM Mono', monospace", fontSize: "0.6rem" }}
                    >
                      💡 一句话解读
                    </span>
                    {tweet.insight}
                  </p>
                </div>

                {/* Footer */}
                <div
                  className="px-4 py-3 flex items-center justify-between border-t"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "rgba(250,250,247,0.3)", fontFamily: "'DM Mono', monospace" }}
                    >
                      <Heart className="w-3 h-3" />
                      {tweet.likes}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "rgba(250,250,247,0.25)", fontFamily: "'DM Mono', monospace" }}
                    >
                      {tweet.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Category badge */}
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: `${tweet.tagColor}20`,
                        color: tweet.tagColor,
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.6rem",
                        border: `1px solid ${tweet.tagColor}40`,
                      }}
                    >
                      {tweet.categoryLabel}
                    </span>
                    {tweet.url && (
                      <a
                        href={tweet.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-30 hover:opacity-70 transition-opacity"
                        style={{ color: "#FAFAF7" }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-500 text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>
              暂无匹配的推文，换个筛选条件试试 👀
            </p>
          </div>
        )}

        {/* Bottom note */}
        <p
          className="text-center mt-12 text-xs"
          style={{ color: "rgba(250,250,247,0.2)", fontFamily: "'DM Mono', monospace" }}
        >
          内容来源于各位大佬的公开推文和文章，仅供学习参考。点击卡片右下角链接查看原文。
        </p>
      </div>
    </section>
  );
}
