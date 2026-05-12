import { useState, useEffect } from 'react';

function useDarkMode() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

const steps = [
  { id: 'ask', label: '用户提问', sub: 'User Query', color: 'green' },
  { id: 'vectorize', label: '文本向量化', sub: 'Vectorization', color: 'blue' },
  { id: 'search', label: '向量数据库检索', sub: 'Vector DB Search', color: 'blue' },
  { id: 'recall', label: '相关文档召回', sub: 'Doc Retrieval', color: 'blue' },
  { id: 'inject', label: '上下文注入', sub: 'Context Injection', color: 'blue' },
  { id: 'generate', label: 'LLM生成答案', sub: 'LLM Generation', color: 'gold' },
];

export default function RAGPipeline() {
  const isDark = useDarkMode();
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const palette = isDark
    ? {
        bg: '#0f1419',
        text: '#e2e8f0',
        subText: '#94a3b8',
        green: '#22c55e',
        blue: '#3b82f6',
        gold: '#fbbf24',
        greenBg: '#064e3b',
        blueBg: '#1e3a5f',
        goldBg: '#78350f',
        arrow: '#4ade80',
      }
    : {
        bg: '#FAFAF7',
        text: '#1B4332',
        subText: '#4a5568',
        green: '#1B4332',
        blue: '#1e40af',
        gold: '#D4A017',
        greenBg: '#dcfce7',
        blueBg: '#dbeafe',
        goldBg: '#fef3c7',
        arrow: '#1B4332',
      };

  const getStepColors = (color: string) => {
    switch (color) {
      case 'green':
        return { fill: palette.greenBg, stroke: palette.green, text: palette.green };
      case 'blue':
        return { fill: palette.blueBg, stroke: palette.blue, text: palette.blue };
      case 'gold':
        return { fill: palette.goldBg, stroke: palette.gold, text: palette.gold };
      default:
        return { fill: palette.blueBg, stroke: palette.blue, text: palette.blue };
    }
  };

  const cardW = 130;
  const cardH = 60;
  const gapX = 20;
  const rowY1 = 60;
  const rowY2 = 170;
  const startX = 20;

  return (
    <div className="infographic-rag" style={{ width: '100%' }}>
      <svg
        viewBox="0 0 500 280"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
      >
        <title>RAG 检索增强生成流程图 - RAG Pipeline Diagram</title>
        <defs>
          <filter id="rag-shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.12" />
          </filter>
          <marker
            id="rag-arrow"
            markerWidth="8"
            markerHeight="6"
            refX="6"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill={palette.arrow} />
          </marker>
        </defs>

        <rect width="500" height="280" rx="12" fill={palette.bg} />

        {/* Title */}
        <text
          x="250"
          y="30"
          textAnchor="middle"
          fill={palette.text}
          fontSize="14"
          fontWeight="bold"
          fontFamily="'Playfair Display', serif"
        >
          RAG 检索增强生成流程
        </text>

        {/* Steps - 3 per row */}
        {steps.map((step, i) => {
          const row = i < 3 ? 0 : 1;
          const col = i < 3 ? i : i - 3;
          const x = startX + col * (cardW + gapX);
          const y = row === 0 ? rowY1 : rowY2;
          const stepColors = getStepColors(step.color);
          const isHovered = hoveredStep === step.id;

          return (
            <g
              key={step.id}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transformOrigin: `${x + cardW / 2}px ${y + cardH / 2}px`,
                opacity: hoveredStep && !isHovered ? 0.6 : 1,
              }}
            >
              <rect
                x={x}
                y={y}
                width={cardW}
                height={cardH}
                rx="10"
                fill={stepColors.fill}
                stroke={stepColors.stroke}
                strokeWidth={isHovered ? 2.5 : 1.5}
                filter="url(#rag-shadow)"
              />
              {/* Simple icon circle */}
              <circle
                cx={x + 20}
                cy={y + cardH / 2}
                r="8"
                fill={stepColors.stroke}
                opacity="0.3"
              />
              <text
                x={x + cardW / 2 + 8}
                y={y + 25}
                textAnchor="middle"
                fill={stepColors.text}
                fontSize="10"
                fontWeight="bold"
                fontFamily="'Lora', serif"
              >
                {step.label}
              </text>
              <text
                x={x + cardW / 2 + 8}
                y={y + 42}
                textAnchor="middle"
                fill={palette.subText}
                fontSize="8"
                fontFamily="'DM Mono', monospace"
              >
                {step.sub}
              </text>
            </g>
          );
        })}

        {/* Arrows between steps - row 1 */}
        {[0, 1].map((i) => {
          const x1 = startX + i * (cardW + gapX) + cardW;
          const x2 = startX + (i + 1) * (cardW + gapX);
          const y = rowY1 + cardH / 2;
          return (
            <line
              key={`arrow-r1-${i}`}
              x1={x1}
              y1={y}
              x2={x2}
              y2={y}
              stroke={palette.arrow}
              strokeWidth="2"
              markerEnd="url(#rag-arrow)"
            />
          );
        })}

        {/* Arrow from row 1 to row 2 */}
        <path
          d={`M ${startX + 2 * (cardW + gapX) + cardW / 2} ${rowY1 + cardH} 
              L ${startX + 2 * (cardW + gapX) + cardW / 2} ${rowY1 + cardH + 15}
              L ${startX + cardW / 2} ${rowY1 + cardH + 15}
              L ${startX + cardW / 2} ${rowY2}`}
          fill="none"
          stroke={palette.arrow}
          strokeWidth="2"
          markerEnd="url(#rag-arrow)"
        />

        {/* Arrows between steps - row 2 */}
        {[0, 1].map((i) => {
          const x1 = startX + i * (cardW + gapX) + cardW;
          const x2 = startX + (i + 1) * (cardW + gapX);
          const y = rowY2 + cardH / 2;
          return (
            <line
              key={`arrow-r2-${i}`}
              x1={x1}
              y1={y}
              x2={x2}
              y2={y}
              stroke={palette.arrow}
              strokeWidth="2"
              markerEnd="url(#rag-arrow)"
            />
          );
        })}
      </svg>
    </div>
  );
}
