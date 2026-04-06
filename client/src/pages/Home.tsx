// Knowledge Atlas Design: Single-page scrolling learning experience
// Sections: Hero -> KnowledgeMap -> Basics -> Advanced -> Practice -> Footer
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DeepBasicSection from "@/components/DeepBasicSection";
import DeepAdvancedSections from "@/components/DeepAdvancedSection";
import PracticeSection from "@/components/PracticeSection";
import TweetWall from "@/components/TweetWall";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import KnowledgeMap from "@/components/KnowledgeMap";

import { deepBasicSections } from "@/lib/deepBasicContent";

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
                color: isTeal ? "#2A9D8F" : "#B8860B",
                letterSpacing: "0.1em",
              }}
            >
              {label}
            </span>
            <p
              className="text-sm"
              style={{
                fontFamily: "'Lora', serif",
                color: "#4A4A45",
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
  return (
    <div className="min-h-screen" style={{ background: "#FAFAF7" }}>
      <Navbar />
      <HeroSection />
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
        />
      ))}

      {/* ===== 进阶篇 ===== */}
      <SectionDivider
        id="advanced"
        label="进阶篇 · ADVANCED"
        subtitle="深入 AI Agent 的六大核心组件，理解 Harness 架构的工程设计哲学"
        color="amber"
      />
      <DeepAdvancedSections />

      {/* ===== 实践篇 ===== */}
      <SectionDivider
        id="practice"
        label="实践篇 · PRACTICE"
        subtitle="不只是理论！认识 Claude Code、OpenClaw、Cursor 等真实 AI Agent 工具，上手实践就在今天"
        color="teal"
      />
      <PracticeSection />

      {/* ===== 大佬说 ===== */}
      <TweetWall />

      <Footer />
      <TableOfContents />
    </div>
  );
}
