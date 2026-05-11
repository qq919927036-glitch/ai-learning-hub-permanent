// Knowledge Atlas Design: Floating progress sidebar on desktop
import { useState, useEffect } from "react";
import { deepBasicSections } from "@/lib/deepBasicContent";
import { deepAdvancedSections } from "@/lib/deepAdvancedContent";

const practiceNavItems = [
  { id: "practice", title: "实践篇总览", chapterNum: "P0" },
  { id: "practice-claude", title: "Claude Code", chapterNum: "P1" },
  { id: "practice-openclaw", title: "OpenClaw", chapterNum: "P2" },
  { id: "practice-cursor", title: "Cursor", chapterNum: "P3" },
  { id: "practice-windsurf", title: "Windsurf", chapterNum: "P4" },
  { id: "practice-manus", title: "Manus", chapterNum: "P5" },
];

const tweetNavItems = [
  { id: "tweet-wall", title: "Agent 知识库 & 大佬说", chapterNum: "T0" },
];

const allSections = [...deepBasicSections, ...deepAdvancedSections, ...practiceNavItems, ...tweetNavItems];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);

      const ids = ["hero", ...allSections.map((m) => m.id)];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActiveId(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-1.5"
      aria-label="目录导航"
    >
      {allSections.map((m) => {
        const isActive = activeId === m.id;
        const isBasic = m.chapterNum.startsWith("B");
        const isPractice = m.chapterNum.startsWith("P");
        const isTweet = m.chapterNum.startsWith("T");
        const accentColor = isBasic ? "#4ECDC4" : isPractice ? "#2D9E6B" : isTweet ? "#7C3AED" : "#D4A017";
        return (
          <button
            key={m.chapterNum}
            onClick={() => {
              const el = document.getElementById(m.id);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2 justify-end"
            title={m.title}
          >
            <span
              className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#1A3D2B",
                fontSize: "0.62rem",
                letterSpacing: "0.04em",
              }}
            >
              {m.chapterNum} {m.title}
            </span>
            <div
              className="rounded-full transition-all duration-200 shrink-0"
              style={{
                width: isActive ? "10px" : "5px",
                height: isActive ? "10px" : "5px",
                background: isActive ? accentColor : "rgba(26, 61, 43, 0.25)",
                boxShadow: isActive ? `0 0 0 3px ${accentColor}30` : "none",
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
