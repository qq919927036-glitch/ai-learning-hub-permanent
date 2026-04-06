// Design: Knowledge Atlas - interactive quiz with gamification
// Purpose: Per-section quiz with multiple choice, scoring, and explanations
import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy, Brain } from "lucide-react";

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number; // index of correct option
  explanation: string;
}

interface QuizBlockProps {
  questions: QuizQuestion[];
  sectionTitle: string;
}

export function QuizBlock({ questions, sectionTitle }: QuizBlockProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [scores, setScores] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const q = questions[currentQ];
  const isAnswered = answered[currentQ];
  const totalScore = scores.filter(Boolean).length;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
    const newAnswered = [...answered];
    const newScores = [...scores];
    newAnswered[currentQ] = true;
    newScores[currentQ] = idx === q.correct;
    setAnswered(newAnswered);
    setScores(newScores);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(new Array(questions.length).fill(false));
    setScores(new Array(questions.length).fill(false));
    setShowResult(false);
    setQuizStarted(false);
  };

  const getScoreEmoji = () => {
    const pct = totalScore / questions.length;
    if (pct === 1) return "🏆";
    if (pct >= 0.7) return "🎉";
    if (pct >= 0.4) return "💪";
    return "📚";
  };

  const getScoreMsg = () => {
    const pct = totalScore / questions.length;
    if (pct === 1) return "完美！你已完全掌握这个概念！";
    if (pct >= 0.7) return "很棒！基本掌握了，再复习一下错题吧。";
    if (pct >= 0.4) return "继续加油！建议重新阅读本节内容。";
    return "没关系，多读几遍本节内容，再来挑战！";
  };

  if (!quizStarted) {
    return (
      <div
        className="mt-10 rounded-2xl overflow-hidden"
        style={{ border: "1.5px solid rgba(27,67,50,0.15)" }}
      >
        <div
          className="px-6 py-4 flex items-center gap-3"
          style={{ background: "rgba(27,67,50,0.06)" }}
        >
          <Brain size={20} style={{ color: "#1B4332" }} />
          <span className="font-semibold" style={{ color: "#1B4332", fontFamily: "'Playfair Display', serif" }}>
            知识检验 · {sectionTitle}
          </span>
          <span
            className="ml-auto text-xs px-2 py-1 rounded-full"
            style={{ background: "rgba(27,67,50,0.1)", color: "#1B4332" }}
          >
            {questions.length} 题
          </span>
        </div>
        <div className="px-6 py-5 flex items-center justify-between" style={{ background: "#FAFAF7" }}>
          <p className="text-sm" style={{ color: "#4a5568" }}>
            测试你对本节知识的掌握程度，每题都有详细解析。
          </p>
          <button
            onClick={() => setQuizStarted(true)}
            className="ml-4 px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 active:scale-95 whitespace-nowrap"
            style={{ background: "#1B4332", color: "#FAFAF7" }}
          >
            开始测验 →
          </button>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div
        className="mt-10 rounded-2xl overflow-hidden"
        style={{ border: "1.5px solid rgba(27,67,50,0.15)" }}
      >
        <div
          className="px-6 py-4 flex items-center gap-3"
          style={{ background: "rgba(27,67,50,0.06)" }}
        >
          <Trophy size={20} style={{ color: "#D97706" }} />
          <span className="font-semibold" style={{ color: "#1B4332", fontFamily: "'Playfair Display', serif" }}>
            测验结果
          </span>
        </div>
        <div className="px-6 py-8 text-center" style={{ background: "#FAFAF7" }}>
          <div className="text-5xl mb-3">{getScoreEmoji()}</div>
          <div className="text-3xl font-bold mb-1" style={{ color: "#1B4332", fontFamily: "'Playfair Display', serif" }}>
            {totalScore} / {questions.length}
          </div>
          <p className="text-sm mb-6" style={{ color: "#4a5568" }}>{getScoreMsg()}</p>

          {/* Score breakdown */}
          <div className="flex justify-center gap-2 mb-6">
            {scores.map((correct, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ background: correct ? "#1B4332" : "#ef4444" }}
                title={`第 ${i + 1} 题`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: "rgba(27,67,50,0.1)", color: "#1B4332" }}
          >
            <RotateCcw size={14} />
            重新测验
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="mt-10 rounded-2xl overflow-hidden"
      style={{ border: "1.5px solid rgba(27,67,50,0.15)" }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center gap-3"
        style={{ background: "rgba(27,67,50,0.06)" }}
      >
        <Brain size={20} style={{ color: "#1B4332" }} />
        <span className="font-semibold" style={{ color: "#1B4332", fontFamily: "'Playfair Display', serif" }}>
          知识检验 · 第 {currentQ + 1} / {questions.length} 题
        </span>
        {/* Progress dots */}
        <div className="ml-auto flex gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: i < currentQ
                  ? (scores[i] ? "#1B4332" : "#ef4444")
                  : i === currentQ
                  ? "#D97706"
                  : "rgba(27,67,50,0.2)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="px-6 pt-6 pb-4" style={{ background: "#FAFAF7" }}>
        <p className="text-base font-medium mb-5" style={{ color: "#1a202c", lineHeight: 1.6 }}>
          {q.question}
        </p>

        {/* Options */}
        <div className="space-y-2.5">
          {q.options.map((opt, idx) => {
            let bg = "rgba(27,67,50,0.04)";
            let border = "rgba(27,67,50,0.15)";
            let textColor = "#2d3748";
            let icon = null;

            if (isAnswered) {
              if (idx === q.correct) {
                bg = "rgba(27,67,50,0.08)";
                border = "#1B4332";
                textColor = "#1B4332";
                icon = <CheckCircle size={16} style={{ color: "#1B4332", flexShrink: 0 }} />;
              } else if (idx === selected && selected !== q.correct) {
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
                      background: isAnswered && idx === q.correct
                        ? "#1B4332"
                        : isAnswered && idx === selected && selected !== q.correct
                        ? "#ef4444"
                        : "rgba(27,67,50,0.15)",
                      color: isAnswered && (idx === q.correct || (idx === selected && selected !== q.correct))
                        ? "white"
                        : "#1B4332",
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
            className="mt-4 p-4 rounded-xl text-sm"
            style={{
              background: scores[currentQ] ? "rgba(27,67,50,0.06)" : "rgba(239,68,68,0.05)",
              border: `1px solid ${scores[currentQ] ? "rgba(27,67,50,0.2)" : "rgba(239,68,68,0.2)"}`,
              color: "#4a5568",
              lineHeight: 1.7,
            }}
          >
            <span className="font-semibold" style={{ color: scores[currentQ] ? "#1B4332" : "#ef4444" }}>
              {scores[currentQ] ? "✓ 回答正确！" : "✗ 回答有误。"}
            </span>{" "}
            {q.explanation}
          </div>
        )}

        {/* Next button */}
        {isAnswered && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#1B4332", color: "#FAFAF7" }}
            >
              {currentQ < questions.length - 1 ? "下一题 →" : "查看结果 →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
