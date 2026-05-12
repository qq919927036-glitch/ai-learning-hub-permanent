// Knowledge Atlas Design: Full-viewport hero with atlas background
// Dark text on light parchment background
import { useEffect, useRef } from "react";
import { CDN } from "@/lib/content";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const robot = el.querySelector(".hero-robot") as HTMLElement;
      if (robot) {
        robot.style.transform = `translate(${x * 12}px, ${y * 8}px)`;
      }
    };
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToFirst = () => {
    const el = document.getElementById("basics");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#FAFAF7" }}
    >
      {/* Atlas background image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${CDN.heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="max-w-xl">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="tag-badge"
                style={{ background: "#1A3D2B", color: "#FAFAF7" }}
              >
                AI Learning Hub
              </span>
              <span
                className="text-xs"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "#4A4A45",
                  letterSpacing: "0.06em",
                }}
              >
                从零到精通 · 完整知识体系
              </span>
            </div>

            {/* Main title */}
            <h1
              className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#1A3D2B",
                lineHeight: 1.15,
              }}
            >
              从 LLM 到
              <br />
              <span
                className="italic"
                style={{ color: "#D4A017" }}
              >
                AI Agent
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg leading-relaxed mb-8"
              style={{
                fontFamily: "'Lora', serif",
                color: "#4A4A45",
                lineHeight: 1.75,
              }}
            >
              不需要数学基础，不需要编程经验。用最通俗的语言，带你搞懂大语言模型、推理模型和 AI 智能体的工作原理——从基础概念到 Agent 架构、从 Claude Code 到 Codex 编排，一站式学透并上手赚钱。
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-8 mb-10">
              {[
                { num: "33", label: "基础概念" },
                { num: "20", label: "进阶模块" },
                { num: "10", label: "实战工具" },
                { num: "120+", label: "知识卡片" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#1A3D2B",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      color: "#4A4A45",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToFirst}
                className="px-6 py-3 rounded-sm text-sm font-medium transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background: "#1A3D2B",
                  color: "#FAFAF7",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.04em",
                  boxShadow: "0 4px 16px rgba(26, 61, 43, 0.25)",
                }}
              >
                开始学习
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("advanced");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-sm text-sm font-medium transition-all duration-200 hover:bg-[rgba(26,61,43,0.06)]"
                style={{
                  border: "1px solid rgba(26, 61, 43, 0.3)",
                  color: "#1A3D2B",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.04em",
                }}
              >
                直接进阶
              </button>
            </div>
          </div>

          {/* Right: Robot illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <img
                src={CDN.heroRobot}
                alt="AI 学习机器人"
                className="hero-robot w-full h-full object-contain transition-transform duration-300 ease-out"
                style={{ filter: "drop-shadow(0 16px 40px rgba(26, 61, 43, 0.15))" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span
            className="text-xs"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#1A3D2B",
              letterSpacing: "0.1em",
            }}
          >
            SCROLL
          </span>
          <div
            className="w-px h-8 animate-pulse"
            style={{ background: "#1A3D2B" }}
          />
        </div>
      </div>
    </section>
  );
}
