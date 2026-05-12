// Comprehensive Quiz Mode - random questions from all chapters
// Modes: daily 5-question quick review, full quiz (10/20/all)
import { useState, useMemo, useCallback } from "react";
import { Brain, Trophy, RotateCcw, ChevronDown, ChevronUp, CheckCircle, XCircle, Flame } from "lucide-react";
import { useQuizStats, QuizRecord } from "@/hooks/useQuizStats";
import { deepBasicSections } from "@/lib/deepBasicContent";
import { deepAdvancedSections } from "@/lib/deepAdvancedContent";

interface TaggedQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  source: string; // e.g. "B1: LLM 是什么？"
}

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function getAllQuestions(): TaggedQuestion[] {
  const pool: TaggedQuestion[] = [];

  for (const section of deepBasicSections) {
    if (section.quiz && section.quiz.length > 0) {
      for (const q of section.quiz) {
        pool.push({
          ...q,
          source: `${section.chapterNum}: ${section.title}`,
        });
      }
    }
  }

  for (const section of deepAdvancedSections) {
    if (section.quiz && section.quiz.length > 0) {
      for (const q of section.quiz) {
        pool.push({
          ...q,
          source: `${section.chapterNum}: ${section.title}`,
        });
      }
    }
  }

  return pool;
}

type ViewState = "landing" | "quiz" | "results";
type QuizModeType = "daily" | "full";
type FullCount = 10 | 20 | "all";

export default function QuizMode() {
  const stats = useQuizStats();
  const allQuestions = useMemo(() => getAllQuestions(), []);

  const [view, setView] = useState<ViewState>("landing");
  const [mode, setMode] = useState<QuizModeType>("daily");
  const [fullCount, setFullCount] = useState<FullCount>(10);
  const [questions, setQuestions] = useState<TaggedQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [expandedWrong, setExpandedWrong] = useState(false);

  const todayAttempts = stats.getTodayAttempts();
  const todayDaily = todayAttempts.filter((a) => a.mode === "daily");
  const bestScore = stats.getBestScore();
  const totalAttempts = stats.getTotalAttempts();
  const streak = stats.getStreak();

  const startQuiz = useCallback(
    (quizMode: QuizModeType) => {
      const shuffled = shuffle(allQuestions);
      let count: number;
      if (quizMode === "daily") {
        count = Math.min(5, shuffled.length);
      } else {
        count = fullCount === "all" ? shuffled.length : Math.min(fullCount, shuffled.length);
      }
      setMode(quizMode);
      setQuestions(shuffled.slice(0, count));
      setCurrentIdx(0);
      setSelected(null);
      setAnswers(new Array(count).fill(null));
      setView("quiz");
    },
    [allQuestions, fullCount]
  );

  const handleSelect = (idx: number) => {
    if (answers[currentIdx] !== null) return;
    setSelected(idx);
    const newAnswers = [...answers];
    newAnswers[currentIdx] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelected(null);
    } else {
      // Save record
      const correctCount = answers.filter(
        (a, i) => a === questions[i].correct
      ).length;
      const percentage = Math.round((correctCount / questions.length) * 100);
      const record: Omit<QuizRecord, "timestamp"> = {
        date: new Date().toISOString().slice(0, 10),
        mode,
        totalQuestions: questions.length,
        correctCount,
        percentage,
      };
      stats.addRecord(record);
      setView("results");
    }
  };

  const handleBack = () => {
    setView("landing");
    setExpandedWrong(false);
  };

  const handleRetry = () => {
    startQuiz(mode);
  };

  // Score helpers
  const getCorrectCount = () =>
    answers.filter((a, i) => a === questions[i].correct).length;

  const getScoreEmoji = () => {
    const pct = getCorrectCount() / questions.length;
    if (pct === 1) return "\uD83C\uDFC6"; // trophy
    if (pct >= 0.7) return "\uD83C\uDF89"; // party
    if (pct >= 0.4) return "\uD83D\uDCAA"; // muscle
    return "\uD83D\uDCDA"; // book
  };

  const getScoreMsg = () => {
    const pct = getCorrectCount() / questions.length;
    if (pct === 1) return "完美！你已完全掌握这些知识！";
    if (pct >= 0.7) return "很棒！基本掌握了，再看看错题加深印象。";
    if (pct >= 0.4) return "继续加油！建议重新复习相关章节。";
    return "没关系，多读几遍相关内容，再来挑战！";
  };

  // ==================== LANDING VIEW ====================
  if (view === "landing") {
    return (
      <section className="py-16" style={{ background: "var(--hub-bg)" }}>
        <div className="container max-w-4xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-bold mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--hub-forest)",
              }}
            >
              综合测验
            </h2>
            <p
              className="text-sm"
              style={{
                fontFamily: "'Lora', serif",
                color: "var(--hub-text-muted)",
              }}
            >
              从所有章节中随机抽题，检验你的 AI 知识掌握程度
            </p>
          </div>

          {/* Mode cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Daily card */}
            <div
              className="rounded-xl p-6 transition-all hover:shadow-md"
              style={{
                background: "var(--hub-card-bg)",
                border: "1.5px solid var(--hub-card-border)",
              }}
            >
              <div className="text-3xl mb-3">🧠</div>
              <h3
                className="text-lg font-bold mb-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--hub-forest)",
                }}
              >
                每日 5 题
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "var(--hub-text-muted)", fontFamily: "'Lora', serif" }}
              >
                快速复习，巩固记忆
              </p>
              {todayDaily.length > 0 ? (
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--hub-forest)" }}>
                  <CheckCircle size={16} />
                  <span style={{ fontFamily: "'DM Mono', monospace" }}>
                    今日已完成 · 最高 {Math.max(...todayDaily.map((d) => d.percentage))}%
                  </span>
                </div>
              ) : (
                <button
                  onClick={() => startQuiz("daily")}
                  className="px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "var(--hub-forest)", color: "#FAFAF7" }}
                >
                  开始
                </button>
              )}
              {todayDaily.length > 0 && (
                <button
                  onClick={() => startQuiz("daily")}
                  className="mt-3 px-4 py-1.5 rounded-lg text-xs font-medium transition-all hover:opacity-80"
                  style={{
                    background: "rgba(27,67,50,0.08)",
                    color: "var(--hub-forest)",
                  }}
                >
                  再来一次
                </button>
              )}
            </div>

            {/* Full quiz card */}
            <div
              className="rounded-xl p-6 transition-all hover:shadow-md"
              style={{
                background: "var(--hub-card-bg)",
                border: "1.5px solid var(--hub-card-border)",
              }}
            >
              <div className="text-3xl mb-3">🏆</div>
              <h3
                className="text-lg font-bold mb-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--hub-forest)",
                }}
              >
                完整测验
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "var(--hub-text-muted)", fontFamily: "'Lora', serif" }}
              >
                深度检测，全面评估
              </p>
              {/* Count selector */}
              <div className="flex items-center gap-2 mb-4">
                {([10, 20, "all"] as FullCount[]).map((c) => (
                  <button
                    key={String(c)}
                    onClick={() => setFullCount(c)}
                    className="px-3 py-1 rounded-md text-xs font-medium transition-all"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      background:
                        fullCount === c
                          ? "var(--hub-forest)"
                          : "rgba(27,67,50,0.08)",
                      color: fullCount === c ? "#FAFAF7" : "var(--hub-forest)",
                    }}
                  >
                    {c === "all" ? `全部(${allQuestions.length})` : `${c} 题`}
                  </button>
                ))}
              </div>
              <button
                onClick={() => startQuiz("full")}
                className="px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                style={{ background: "var(--hub-forest)", color: "#FAFAF7" }}
              >
                开始
              </button>
            </div>
          </div>

          {/* Stats summary */}
          {totalAttempts > 0 && (
            <div
              className="rounded-xl p-5 flex items-center justify-around"
              style={{
                background: "var(--hub-card-bg)",
                border: "1.5px solid var(--hub-card-border)",
              }}
            >
              <div className="text-center">
                <div
                  className="text-xl font-bold"
                  style={{ fontFamily: "'DM Mono', monospace", color: "var(--hub-forest)" }}
                >
                  {totalAttempts}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--hub-text-muted)", fontFamily: "'DM Mono', monospace" }}
                >
                  总次数
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-xl font-bold"
                  style={{ fontFamily: "'DM Mono', monospace", color: "var(--hub-amber)" }}
                >
                  {bestScore}%
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--hub-text-muted)", fontFamily: "'DM Mono', monospace" }}
                >
                  最佳成绩
                </div>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <Flame size={16} style={{ color: "var(--hub-amber)" }} />
                  <span
                    className="text-xl font-bold"
                    style={{ fontFamily: "'DM Mono', monospace", color: "var(--hub-forest)" }}
                  >
                    {streak}
                  </span>
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--hub-text-muted)", fontFamily: "'DM Mono', monospace" }}
                >
                  连续天数
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // ==================== QUIZ IN-PROGRESS VIEW ====================
  if (view === "quiz") {
    const q = questions[currentIdx];
    const isAnswered = answers[currentIdx] !== null;
    const isCorrect = isAnswered && answers[currentIdx] === q.correct;

    return (
      <section className="py-16" style={{ background: "var(--hub-bg)" }}>
        <div className="container max-w-2xl mx-auto px-4">
          {/* Top bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-sm font-medium"
                style={{ fontFamily: "'DM Mono', monospace", color: "var(--hub-forest)" }}
              >
                第 {currentIdx + 1} / {questions.length} 题
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(27,67,50,0.08)",
                  color: "var(--hub-text-muted)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {mode === "daily" ? "每日复习" : "完整测验"}
              </span>
            </div>
            {/* Progress bar */}
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: "var(--hub-card-border)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${((currentIdx + (isAnswered ? 1 : 0)) / questions.length) * 100}%`,
                  background: "var(--hub-forest)",
                }}
              />
            </div>
          </div>

          {/* Source chapter */}
          <div
            className="text-xs mb-3 px-2 py-1 rounded inline-block"
            style={{
              background: "rgba(212,160,23,0.1)",
              color: "var(--hub-amber-text)",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {q.source}
          </div>

          {/* Question */}
          <p
            className="text-base font-medium mb-6"
            style={{ color: "var(--hub-text)", lineHeight: 1.7, fontFamily: "'Lora', serif" }}
          >
            {q.question}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              let bg = "var(--hub-card-bg)";
              let border = "var(--hub-card-border)";
              let textColor = "var(--hub-text)";
              let icon = null;

              if (isAnswered) {
                if (idx === q.correct) {
                  bg = "rgba(27,67,50,0.08)";
                  border = "var(--hub-forest)";
                  textColor = "var(--hub-forest)";
                  icon = <CheckCircle size={16} style={{ color: "var(--hub-forest)", flexShrink: 0 }} />;
                } else if (idx === answers[currentIdx] && answers[currentIdx] !== q.correct) {
                  bg = "rgba(239,68,68,0.06)";
                  border = "#ef4444";
                  textColor = "#ef4444";
                  icon = <XCircle size={16} style={{ color: "#ef4444", flexShrink: 0 }} />;
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm transition-all"
                  style={{
                    background: bg,
                    border: `1.5px solid ${border}`,
                    color: textColor,
                    cursor: isAnswered ? "default" : "pointer",
                    fontWeight: isAnswered && idx === q.correct ? 600 : 400,
                  }}
                >
                  <div className="flex items-start gap-2">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{
                        background:
                          isAnswered && idx === q.correct
                            ? "var(--hub-forest)"
                            : isAnswered && idx === answers[currentIdx] && answers[currentIdx] !== q.correct
                            ? "#ef4444"
                            : "rgba(27,67,50,0.15)",
                        color:
                          isAnswered &&
                          (idx === q.correct || (idx === answers[currentIdx] && answers[currentIdx] !== q.correct))
                            ? "white"
                            : "var(--hub-forest)",
                      }}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1">{opt}</span>
                    {icon}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <div
              className="mt-5 p-4 rounded-xl text-sm"
              style={{
                background: isCorrect ? "rgba(27,67,50,0.06)" : "rgba(239,68,68,0.05)",
                border: `1px solid ${isCorrect ? "rgba(27,67,50,0.2)" : "rgba(239,68,68,0.2)"}`,
                color: "var(--hub-text-muted)",
                lineHeight: 1.7,
              }}
            >
              <span className="font-semibold" style={{ color: isCorrect ? "var(--hub-forest)" : "#ef4444" }}>
                {isCorrect ? "\u2713 回答正确！" : "\u2717 回答有误。"}
              </span>{" "}
              {q.explanation}
            </div>
          )}

          {/* Next button */}
          {isAnswered && (
            <div className="mt-5 flex justify-end">
              <button
                onClick={handleNext}
                className="px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                style={{ background: "var(--hub-forest)", color: "#FAFAF7" }}
              >
                {currentIdx < questions.length - 1 ? "下一题 \u2192" : "查看结果 \u2192"}
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }

  // ==================== RESULTS VIEW ====================
  const correctCount = getCorrectCount();
  const percentage = Math.round((correctCount / questions.length) * 100);
  const wrongQuestions = questions
    .map((q, i) => ({ ...q, userAnswer: answers[i], index: i }))
    .filter((q) => q.userAnswer !== q.correct);

  return (
    <section className="py-16" style={{ background: "var(--hub-bg)" }}>
      <div className="container max-w-2xl mx-auto px-4">
        {/* Score */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">{getScoreEmoji()}</div>
          <div
            className="text-4xl font-bold mb-1"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--hub-forest)" }}
          >
            {correctCount} / {questions.length}
          </div>
          <div
            className="text-lg mb-2"
            style={{ fontFamily: "'DM Mono', monospace", color: "var(--hub-amber)" }}
          >
            {percentage}%
          </div>
          <p className="text-sm" style={{ color: "var(--hub-text-muted)", fontFamily: "'Lora', serif" }}>
            {getScoreMsg()}
          </p>
        </div>

        {/* Score dots */}
        <div className="flex justify-center gap-1.5 flex-wrap mb-8">
          {answers.map((a, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                background: a === questions[i].correct ? "var(--hub-forest)" : "#ef4444",
              }}
              title={`第 ${i + 1} 题 - ${a === questions[i].correct ? "正确" : "错误"}`}
            />
          ))}
        </div>

        {/* Wrong answers review */}
        {wrongQuestions.length > 0 && (
          <div
            className="rounded-xl overflow-hidden mb-8"
            style={{ border: "1.5px solid var(--hub-card-border)" }}
          >
            <button
              onClick={() => setExpandedWrong(!expandedWrong)}
              className="w-full px-5 py-4 flex items-center justify-between text-left"
              style={{ background: "var(--hub-card-bg)" }}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--hub-forest)", fontFamily: "'Playfair Display', serif" }}
              >
                错题回顾 ({wrongQuestions.length} 题)
              </span>
              {expandedWrong ? (
                <ChevronUp size={18} style={{ color: "var(--hub-text-muted)" }} />
              ) : (
                <ChevronDown size={18} style={{ color: "var(--hub-text-muted)" }} />
              )}
            </button>
            {expandedWrong && (
              <div className="px-5 pb-5 space-y-4" style={{ background: "var(--hub-card-bg)" }}>
                {wrongQuestions.map((wq) => (
                  <div
                    key={wq.index}
                    className="p-4 rounded-lg"
                    style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)" }}
                  >
                    <div
                      className="text-xs mb-1"
                      style={{ color: "var(--hub-amber-text)", fontFamily: "'DM Mono', monospace" }}
                    >
                      {wq.source}
                    </div>
                    <p className="text-sm font-medium mb-2" style={{ color: "var(--hub-text)" }}>
                      {wq.question}
                    </p>
                    <div className="text-xs space-y-1 mb-2">
                      <div style={{ color: "#ef4444" }}>
                        <span className="line-through">
                          {String.fromCharCode(65 + (wq.userAnswer ?? 0))}. {wq.options[wq.userAnswer ?? 0]}
                        </span>
                      </div>
                      <div style={{ color: "var(--hub-forest)" }}>
                        <CheckCircle size={12} className="inline mr-1" />
                        {String.fromCharCode(65 + wq.correct)}. {wq.options[wq.correct]}
                      </div>
                    </div>
                    <p className="text-xs" style={{ color: "var(--hub-text-muted)", lineHeight: 1.6 }}>
                      {wq.explanation}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "var(--hub-forest)", color: "#FAFAF7" }}
          >
            <RotateCcw size={14} />
            再来一次
          </button>
          <button
            onClick={handleBack}
            className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-80"
            style={{
              background: "rgba(27,67,50,0.08)",
              color: "var(--hub-forest)",
              border: "1px solid var(--hub-card-border)",
            }}
          >
            返回
          </button>
        </div>
      </div>
    </section>
  );
}
