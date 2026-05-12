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

interface TimelineEvent {
  id: string;
  year: string;
  label: string;
  sub: string;
  category: 'foundation' | 'model' | 'product' | 'agent';
}

const events: TimelineEvent[] = [
  { id: '2017', year: '2017', label: 'Transformer', sub: '注意力机制', category: 'foundation' },
  { id: '2018', year: '2018', label: 'BERT / GPT-1', sub: '预训练时代', category: 'model' },
  { id: '2019', year: '2019', label: 'GPT-2', sub: '文本生成', category: 'model' },
  { id: '2020', year: '2020', label: 'GPT-3', sub: '少样本学习', category: 'model' },
  { id: '2022', year: '2022', label: 'ChatGPT', sub: '对话革命', category: 'product' },
  { id: '2023', year: '2023', label: 'GPT-4 / Claude', sub: '多模态', category: 'product' },
  { id: '2024', year: '2024', label: 'Claude 3.5 / Gemini', sub: '能力跃升', category: 'product' },
  { id: '2025', year: '2025', label: 'Agent 时代', sub: '自主智能体', category: 'agent' },
];

export default function AITimeline() {
  const isDark = useDarkMode();
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const colors = isDark
    ? {
        bg: '#0f1419',
        text: '#e2e8f0',
        subText: '#94a3b8',
        line: '#334155',
        foundation: '#f472b6',
        model: '#4ade80',
        product: '#60a5fa',
        agent: '#fbbf24',
      }
    : {
        bg: '#FAFAF7',
        text: '#1B4332',
        subText: '#4a5568',
        line: '#d1d5db',
        foundation: '#be185d',
        model: '#1B4332',
        product: '#1e40af',
        agent: '#D4A017',
      };

  const getCategoryColor = (cat: TimelineEvent['category']) => colors[cat];

  const lineY = 130;
  const startX = 40;
  const endX = 460;
  const eventSpacing = (endX - startX) / (events.length - 1);

  return (
    <div className="infographic-timeline" style={{ width: '100%' }}>
      <svg
        viewBox="0 0 500 240"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
      >
        <title>AI 发展时间线 2017-2025 - AI Development Timeline</title>
        <defs>
          <filter id="tl-shadow">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.12" />
          </filter>
        </defs>

        <rect width="500" height="240" rx="12" fill={colors.bg} />

        {/* Title */}
        <text
          x="250"
          y="25"
          textAnchor="middle"
          fill={colors.text}
          fontSize="14"
          fontWeight="bold"
          fontFamily="'Playfair Display', serif"
        >
          AI 发展时间线
        </text>
        <text
          x="250"
          y="42"
          textAnchor="middle"
          fill={colors.subText}
          fontSize="9"
          fontFamily="'DM Mono', monospace"
        >
          From Transformer to Agent Era (2017-2025)
        </text>

        {/* Legend */}
        {[
          { label: '基础', color: colors.foundation, x: 140 },
          { label: '模型', color: colors.model, x: 200 },
          { label: '产品', color: colors.product, x: 260 },
          { label: 'Agent', color: colors.agent, x: 320 },
        ].map((item) => (
          <g key={item.label}>
            <circle cx={item.x} cy="56" r="4" fill={item.color} />
            <text
              x={item.x + 8}
              y={60}
              fill={colors.subText}
              fontSize="7"
              fontFamily="'DM Mono', monospace"
            >
              {item.label}
            </text>
          </g>
        ))}

        {/* Main timeline line */}
        <line
          x1={startX - 10}
          y1={lineY}
          x2={endX + 10}
          y2={lineY}
          stroke={colors.line}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Events */}
        {events.map((event, i) => {
          const x = startX + i * eventSpacing;
          const isHovered = hoveredEvent === event.id;
          const catColor = getCategoryColor(event.category);
          const labelAbove = i % 2 === 0;

          return (
            <g
              key={event.id}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
              style={{
                cursor: 'pointer',
                transition: 'opacity 0.2s ease',
                opacity: hoveredEvent && !isHovered ? 0.5 : 1,
              }}
            >
              {/* Connecting stem */}
              <line
                x1={x}
                y1={lineY}
                x2={x}
                y2={labelAbove ? lineY - 30 : lineY + 30}
                stroke={catColor}
                strokeWidth={isHovered ? 2 : 1}
                opacity="0.6"
              />

              {/* Node on timeline */}
              <circle
                cx={x}
                cy={lineY}
                r={isHovered ? 7 : 5}
                fill={catColor}
                stroke={colors.bg}
                strokeWidth="2"
                filter="url(#tl-shadow)"
              />

              {/* Year label */}
              <text
                x={x}
                y={lineY + (labelAbove ? 20 : -14)}
                textAnchor="middle"
                fill={catColor}
                fontSize="9"
                fontWeight="bold"
                fontFamily="'DM Mono', monospace"
              >
                {event.year}
              </text>

              {/* Event label */}
              <text
                x={x}
                y={labelAbove ? lineY - 42 : lineY + 46}
                textAnchor="middle"
                fill={colors.text}
                fontSize={isHovered ? '9' : '8'}
                fontWeight={isHovered ? 'bold' : 'normal'}
                fontFamily="'Lora', serif"
              >
                {event.label}
              </text>

              {/* Sub label (shown on hover or always) */}
              <text
                x={x}
                y={labelAbove ? lineY - 30 : lineY + 58}
                textAnchor="middle"
                fill={colors.subText}
                fontSize="7"
                fontFamily="'DM Mono', monospace"
                opacity={isHovered ? 1 : 0.7}
              >
                {event.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
