// Knowledge Atlas Design: Single-page scrolling learning experience
// Sections: Hero -> KnowledgeMap -> Basics -> Advanced -> Practice -> Footer
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DeepBasicSection from "@/components/DeepBasicSection";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import KnowledgeMap from "@/components/KnowledgeMap";
import ProgressBar from "@/components/ProgressBar";
import { useReadingProgress } from "@/hooks/useReadingProgress";

import { deepBasicSections } from "@/lib/deepBasicContent";

// Lazy load heavy below-fold sections for better initial page load
const DeepAdvancedSections = lazy(() => import("@/components/DeepAdvancedSection"));
const PracticeSection = lazy(() => import("@/components/PracticeSection"));
const TweetWall = lazy(() => import("@/components/TweetWall"));
const Timeline = lazy(() => import("@/components/Timeline"));
const LearningPath = lazy(() => import("@/components/LearningPath"));
const Glossary = lazy(() => import("@/components/Glossary"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-pulse text-center">
        <div className="w-8 h-8 border-2 border-[#4ECDC4] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-sm text-stone-400" style={{ fontFamily: "'DM Mono', monospace" }}>
          加载中...
        </p>
      </div>
    </div>
  );
}

function SectionDivider({
  id,
  label,
  subtitle,
  color,
}: {
  id: string;
  label: string;
  subtitle: string;
  color: "teal" | "amber";
}) {
  const isTeal = color === "teal";
  return (
    <div
      id={id}
      className="py-12"
      style={{
        background: isTeal ? "rgba(78, 205, 196, 0.06)" : "rgba(212, 160, 23, 0.06)",
        borderTop: `3px solid ${isTeal ? "rgba(78, 205, 196, 0.3)" : "rgba(212, 160, 23, 0.3)"}`,
      }}
    >
      <div className="container">
        <div className="flex items-center gap-4">
          <div>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2"
              style={{
                fontFamily: "'DM Mono', monospace",
                background: isTeal
                  ? "rgba(78, 205, 196, 0.15)"
                  : "rgba(212, 160, 23, 0.15)",
                color: isTeal ? "var(--hub-teal-text)" : "var(--hub-amber-text)",
                letterSpacing: "0.1em",
              }}
            >
              {label}
            </span>
            <p
              className="text-sm"
              style={{
                fontFamily: "'Lora', serif",
                color: "var(--hub-text-muted)",
                lineHeight: 1.7,
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { markAsRead, isRead, getStats, lastRead } = useReadingProgress();
  const stats = getStats();
  const hasProgress = stats.basic.read + stats.advanced.read + stats.practice.read > 0;

  return (
    <div className="min-h-screen" style={{ background: "var(--hub-bg)" }}>
      <Navbar />
      <HeroSection />
      <ProgressBar
        stats={stats}
        lastRead={lastRead}
        onContinueReading={() => {
          if (lastRead) {
            const el = document.getElementById(lastRead.id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }}
        visible={hasProgress}
      />
      <KnowledgeMap />

      {/* ===== 基础篇 ===== */}
      <SectionDivider
        id="basics"
        label="基础篇 · FUNDAMENTALS"
        subtitle="从零开始，用最通俗的语言理解 LLM、推理模型和 AI Agent 的核心概念"
        color="teal"
      />
      {deepBasicSections.map((section, index) => (
        <DeepBasicSection
          key={section.id}
          data={section}
          isAlt={index % 2 === 1}
          isRead={isRead("basic", section.id)}
          onMarkRead={(id) => markAsRead("basic", id)}
        />
      ))}

      {/* ===== 进阶篇 ===== */}
      <SectionDivider
        id="advanced"
        label="进阶篇 · ADVANCED"
        subtitle="深入 AI Agent 的六大核心组件，理解 Harness 架构的工程设计哲学"
        color="amber"
      />
      <Suspense fallback={<SectionLoader />}>
        <DeepAdvancedSections
          isRead={(id) => isRead("advanced", id)}
          onMarkRead={(id) => markAsRead("advanced", id)}
        />
      </Suspense>

      {/* ===== 实践篇 ===== */}
      <SectionDivider
        id="practice"
        label="实践篇 · PRACTICE"
        subtitle="不只是理论！认识 Claude Code、OpenClaw、Cursor 等真实 AI Agent 工具，上手实践就在今天"
        color="teal"
      />
      <Suspense fallback={<SectionLoader />}>
        <PracticeSection
          isRead={(name) => isRead("practice", name)}
          onMarkRead={(name) => markAsRead("practice", name)}
        />
      </Suspense>

      {/* ===== 大佬说 ===== */}
      <Suspense fallback={<SectionLoader />}>
        <TweetWall />
      </Suspense>

      {/* ===== 里程碑 ===== */}
      <SectionDivider
        id="timeline-divider"
        label="里程碑 · MILESTONES"
        subtitle="从 Transformer 论文到 Agent 时代，AI 发展历程中的关键节点"
        color="teal"
      />
      <Suspense fallback={<SectionLoader />}>
        <Timeline />
      </Suspense>

      {/* ===== 学习路径 ===== */}
      <SectionDivider
        id="learning-path-divider"
        label="学习路径 · LEARNING PATHS"
        subtitle="根据你的角色和目标，选择最适合的学习路线"
        color="amber"
      />
      <Suspense fallback={<SectionLoader />}>
        <LearningPath />
      </Suspense>

      {/* ===== 术语表 ===== */}
      <SectionDivider
        id="glossary-divider"
        label="术语表 · GLOSSARY"
        subtitle="AI 领域常用术语速查，从基础概念到前沿技术一网打尽"
        color="teal"
      />
      <Suspense fallback={<SectionLoader />}>
        <Glossary />
      </Suspense>

      <Footer />
      <TableOfContents />
    </div>
  );
}
