// Knowledge Atlas Design: Minimal footer with forest green background
export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16" style={{ background: "#1A3D2B" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif", color: "#FAFAF7" }}
            >
              AI Learning Hub
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{
                fontFamily: "'Lora', serif",
                color: "rgba(250, 250, 247, 0.6)",
                lineHeight: 1.7,
              }}
            >
              用最通俗的语言，带你从零理解 LLM、推理模型和 AI Agent 的完整知识体系。
            </p>
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#4ECDC4" }}
              />
              <span
                className="text-xs"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "rgba(250, 250, 247, 0.4)",
                  letterSpacing: "0.06em",
                }}
              >
                持续更新中
              </span>
            </div>
          </div>

          {/* Basics */}
          <div>
            <p
              className="text-xs font-medium mb-4"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "rgba(78, 205, 196, 0.7)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              基础篇
            </p>
            <ul className="space-y-2">
              {[
                { label: "LLM 是什么？", href: "#what-is-llm" },
                { label: "推理模型", href: "#reasoning-model" },
                { label: "AI 智能体", href: "#what-is-agent" },
                { label: "Harness 外挂", href: "#harness-explained" },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-left transition-colors hover:text-[#4ECDC4]"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: "rgba(250, 250, 247, 0.55)",
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Advanced */}
          <div>
            <p
              className="text-xs font-medium mb-4"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "rgba(212, 160, 23, 0.7)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              进阶篇
            </p>
            <ul className="space-y-2">
              {[
                { label: "为什么需要 Harness", href: "#model-unreliability" },
                { label: "代码仓库上下文", href: "#repo-context" },
                { label: "提示词缓存", href: "#prompt-cache" },
                { label: "工具接入与调用", href: "#tool-access" },
                { label: "上下文瘦身", href: "#context-compression" },
                { label: "会话记忆", href: "#session-memory" },
                { label: "任务委派", href: "#delegation" },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-left transition-colors hover:text-[#D4A017]"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: "rgba(250, 250, 247, 0.55)",
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <p
              className="text-xs font-medium mb-4"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "rgba(250, 250, 247, 0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              关于
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "'Lora', serif",
                color: "rgba(250, 250, 247, 0.6)",
                lineHeight: 1.7,
              }}
            >
              本平台内容基于 Sebastian Raschka 博士的 AI Agent 研究，
              以及 Anthropic、OpenAI 等公司的公开技术文档，
              经过通俗化改编，适合所有对 AI 感兴趣的读者。
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(250, 250, 247, 0.1)" }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(250, 250, 247, 0.3)",
              letterSpacing: "0.05em",
            }}
          >
            AI Learning Hub &copy; {new Date().getFullYear()} · 28 基础 + 10 进阶 + 5 实践 · 30+ 图解
          </p>
          <p
            className="text-xs"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(250, 250, 247, 0.3)",
              letterSpacing: "0.05em",
            }}
          >
            Built with curiosity &amp; care
          </p>
        </div>
      </div>
    </footer>
  );
}
