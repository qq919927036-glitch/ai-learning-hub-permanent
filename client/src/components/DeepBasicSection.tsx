// Knowledge Atlas Design: Deep, rich basic section with multiple images, steps, comparisons
// Designed for thorough beginner-friendly explanations
import { useEffect, useRef, useState } from "react";
import { ImageLightbox } from "./ImageLightbox";
import { QuizBlock, QuizQuestion } from "./QuizBlock";

export interface StepItem {
  icon: string;
  title: string;
  desc: string;
}

export interface CompareRow {
  aspect: string;
  left: string;
  right: string;
}

export interface ImageCard {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
}

export interface DeepBasicSectionData {
  id: string;
  chapterNum: string;
  tag: string;
  title: string;
  subtitle: string;
  lead: string; // big opening paragraph
  body: string[]; // multiple body paragraphs
  steps?: StepItem[];
  stepsTitle?: string;
  compare?: {
    title: string;
    leftLabel: string;
    rightLabel: string;
    rows: CompareRow[];
  };
  // Multi-column comparison table (for new sections)
  comparison?: {
    title?: string;
    headers: string[];
    rows: string[][];
  };
  images: ImageCard[];
  funFact: string;
  analogy: { emoji: string; title: string; text: string };
  keyTakeaways: string[];
  quiz?: QuizQuestion[];
}

interface Props {
  data: DeepBasicSectionData;
  isAlt?: boolean;
}

function ImageViewer({ images }: { images: ImageCard[] }) {
  const [active, setActive] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const img = images[active];
  return (
    <div className="space-y-3">
      {lightboxSrc && (
        <ImageLightbox src={lightboxSrc} alt={img.alt} onClose={() => setLightboxSrc(null)} />
      )}
      <div
        className="diagram-card overflow-hidden"
        style={{ borderRadius: "4px" }}
      >
        <div
          className="px-4 py-2.5 flex items-center justify-between"
          style={{
            borderBottom: "1px solid rgba(78, 205, 196, 0.15)",
            background: "rgba(78, 205, 196, 0.04)",
          }}
        >
          <span
            className="text-xs"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#4A4A45",
              letterSpacing: "0.06em",
            }}
          >
            FIGURE {active + 1} / {images.length}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLightboxSrc(img.src)}
              className="text-xs px-2 py-0.5 rounded transition-colors"
              style={{ background: "rgba(78,205,196,0.12)", color: "#2A9D8F", fontFamily: "'DM Mono', monospace" }}
              title="全屏查看"
            >
              ⛶ 放大
            </button>
            <div className="flex gap-1.5">
              {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
                <div
                  key={c}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="p-3" style={{ cursor: "zoom-in" }} onClick={() => setLightboxSrc(img.src)}>
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-auto"
            style={{
              maxHeight: "400px",
              objectFit: "contain",
              borderRadius: "2px",
            }}
            loading="lazy"
          />
        </div>
        <div
          className="px-4 py-2.5"
          style={{ borderTop: "1px solid rgba(78, 205, 196, 0.1)" }}
        >
          <p
            className="text-xs leading-relaxed"
            style={{
              fontFamily: "'Lora', serif",
              color: "#4A4A45",
              fontStyle: "italic",
            }}
          >
            {img.caption}
          </p>
        </div>
      </div>

      {/* Thumbnail switcher */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((im, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex-1 overflow-hidden transition-all duration-200"
              style={{
                border: `2px solid ${i === active ? "#4ECDC4" : "rgba(78, 205, 196, 0.2)"}`,
                borderRadius: "3px",
                opacity: i === active ? 1 : 0.55,
              }}
            >
              <img
                src={im.src}
                alt={im.alt}
                className="w-full h-14 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DeepBasicSection({ data, isAlt }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={data.id}
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: isAlt ? "#F2F0EB" : "#FAFAF7" }}
    >
      <div className="container">
        {/* Chapter header */}
        <div className="reveal flex items-center gap-4 mb-12">
          <span
            className="text-6xl font-bold opacity-10 select-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1A3D2B",
              lineHeight: 1,
            }}
          >
            {data.chapterNum}
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(26, 61, 43, 0.12)" }}
          />
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              fontFamily: "'DM Mono', monospace",
              background: "rgba(78, 205, 196, 0.12)",
              color: "#2A9D8F",
              letterSpacing: "0.08em",
            }}
          >
            {data.tag}
          </span>
        </div>

        {/* Title + lead */}
        <div className="reveal mb-10">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-3 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1A3D2B",
            }}
          >
            {data.title}
          </h2>
          <p
            className="text-sm mb-6"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#2A9D8F",
              letterSpacing: "0.03em",
              fontSize: "0.8rem",
            }}
          >
            {data.subtitle}
          </p>
          <p
            className="text-lg leading-relaxed"
            style={{
              fontFamily: "'Lora', serif",
              color: "#2A2A28",
              lineHeight: 1.9,
              maxWidth: "780px",
            }}
          >
            {data.lead}
          </p>
        </div>

        {/* Analogy card - full width */}
        <div
          className="reveal p-6 mb-12 rounded-sm"
          style={{
            background: "#1A3D2B",
            border: "1px solid rgba(26, 61, 43, 0.2)",
          }}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl shrink-0">{data.analogy.emoji}</span>
            <div>
              <p
                className="text-base font-semibold mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#FAFAF7",
                }}
              >
                {data.analogy.title}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "'Lora', serif",
                  color: "rgba(250, 250, 247, 0.75)",
                  lineHeight: 1.8,
                }}
              >
                {data.analogy.text}
              </p>
            </div>
          </div>
        </div>

        {/* Main two-column: text + images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-14">
          {/* Left: body paragraphs */}
          <div className="space-y-6">
            {data.body.map((para, i) => (
              <div key={i} className="reveal">
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "'Lora', serif",
                    color: "#2A2A28",
                    lineHeight: 1.9,
                  }}
                >
                  {para}
                </p>
              </div>
            ))}
          </div>

          {/* Right: image viewer */}
          <div className="reveal">
            <ImageViewer images={data.images} />
          </div>
        </div>

        {/* Steps section */}
        {data.steps && data.steps.length > 0 && (
          <div className="reveal mb-14">
            <p
              className="text-xs font-medium mb-6"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#1A3D2B",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {data.stepsTitle ?? "工作步骤"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.steps.map((step, i) => (
                <div
                  key={i}
                  className="p-5 rounded-sm relative"
                  style={{
                    background: "rgba(78, 205, 196, 0.05)",
                    border: "1px solid rgba(78, 205, 196, 0.18)",
                  }}
                >
                  {/* Step number */}
                  <div
                    className="absolute -top-3 -left-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "#2A9D8F",
                      color: "#FAFAF7",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="text-2xl mb-3 mt-1">{step.icon}</div>
                  <h4
                    className="text-sm font-semibold mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#1A3D2B",
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: "#4A4A45",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compare table */}
        {data.compare && (
          <div className="reveal mb-14">
            <p
              className="text-xs font-medium mb-5"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#1A3D2B",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {data.compare.title}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th
                      className="text-left py-3 px-4 text-xs"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        color: "#4A4A45",
                        letterSpacing: "0.06em",
                        background: "rgba(26, 61, 43, 0.04)",
                        border: "1px solid rgba(26, 61, 43, 0.08)",
                        width: "25%",
                      }}
                    >
                      对比维度
                    </th>
                    <th
                      className="text-left py-3 px-4 text-xs"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        color: "#2A9D8F",
                        letterSpacing: "0.06em",
                        background: "rgba(78, 205, 196, 0.06)",
                        border: "1px solid rgba(78, 205, 196, 0.15)",
                        width: "37.5%",
                      }}
                    >
                      {data.compare.leftLabel}
                    </th>
                    <th
                      className="text-left py-3 px-4 text-xs"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        color: "#B8860B",
                        letterSpacing: "0.06em",
                        background: "rgba(212, 160, 23, 0.06)",
                        border: "1px solid rgba(212, 160, 23, 0.15)",
                        width: "37.5%",
                      }}
                    >
                      {data.compare.rightLabel}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.compare.rows.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        background:
                          i % 2 === 0 ? "transparent" : "rgba(26, 61, 43, 0.02)",
                      }}
                    >
                      <td
                        className="py-3 px-4 text-xs font-medium"
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          color: "#1A3D2B",
                          border: "1px solid rgba(26, 61, 43, 0.06)",
                        }}
                      >
                        {row.aspect}
                      </td>
                      <td
                        className="py-3 px-4 text-sm"
                        style={{
                          fontFamily: "'Lora', serif",
                          color: "#2A2A28",
                          border: "1px solid rgba(78, 205, 196, 0.1)",
                        }}
                      >
                        {row.left}
                      </td>
                      <td
                        className="py-3 px-4 text-sm"
                        style={{
                          fontFamily: "'Lora', serif",
                          color: "#2A2A28",
                          border: "1px solid rgba(212, 160, 23, 0.1)",
                        }}
                      >
                        {row.right}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Multi-column comparison table */}
        {data.comparison && (
          <div className="reveal mb-14">
            <p
              className="text-xs font-medium mb-5"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#1A3D2B",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {data.comparison.title ?? "对比一览"}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    {data.comparison.headers.map((h, i) => (
                      <th
                        key={i}
                        className="text-left py-3 px-4 text-xs"
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          color: i === 0 ? "#4A4A45" : i % 2 === 1 ? "#2A9D8F" : "#B8860B",
                          letterSpacing: "0.06em",
                          background: i === 0 ? "rgba(26, 61, 43, 0.04)" : i % 2 === 1 ? "rgba(78, 205, 196, 0.06)" : "rgba(212, 160, 23, 0.06)",
                          border: i === 0 ? "1px solid rgba(26, 61, 43, 0.08)" : i % 2 === 1 ? "1px solid rgba(78, 205, 196, 0.15)" : "1px solid rgba(212, 160, 23, 0.15)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.comparison.rows.map((row, i) => (
                    <tr
                      key={i}
                      style={{ background: i % 2 === 0 ? "transparent" : "rgba(26, 61, 43, 0.02)" }}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="py-3 px-4 text-sm"
                          style={{
                            fontFamily: j === 0 ? "'DM Mono', monospace" : "'Lora', serif",
                            fontWeight: j === 0 ? 600 : 400,
                            color: j === 0 ? "#1A3D2B" : "#2A2A28",
                            border: j === 0 ? "1px solid rgba(26, 61, 43, 0.06)" : j % 2 === 1 ? "1px solid rgba(78, 205, 196, 0.1)" : "1px solid rgba(212, 160, 23, 0.1)",
                          }}
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
        )}

        {/* Key takeaways + fun fact - two columns */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key takeaways */}
          <div
            className="p-6 rounded-sm"
            style={{
              background: "rgba(26, 61, 43, 0.04)",
              border: "1px solid rgba(26, 61, 43, 0.1)",
            }}
          >
            <p
              className="text-xs font-medium mb-4"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#1A3D2B",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              本节要点
            </p>
            <ul className="space-y-3">
              {data.keyTakeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "#2A9D8F",
                      color: "#FAFAF7",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.6rem",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: "#2A2A28",
                    }}
                  >
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fun fact */}
          <div
            className="p-6 rounded-sm"
            style={{
              background: "rgba(212, 160, 23, 0.07)",
              border: "1px solid rgba(212, 160, 23, 0.2)",
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl shrink-0">💡</span>
              <p
                className="text-xs font-medium"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "#B8860B",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  paddingTop: "4px",
                }}
              >
                趣味事实
              </p>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "'Lora', serif",
                color: "#2A2A28",
                lineHeight: 1.8,
              }}
            >
              {data.funFact}
            </p>
          </div>
        </div>

        {/* Quiz block */}
        {data.quiz && data.quiz.length > 0 && (
          <div className="reveal">
            <QuizBlock questions={data.quiz} sectionTitle={data.title} />
          </div>
        )}
      </div>
    </section>
  );
}
