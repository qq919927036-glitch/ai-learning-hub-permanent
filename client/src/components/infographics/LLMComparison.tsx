import { useState, useId } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';

interface ModelInfo {
  id: string;
  name: string;
  company: string;
  strength: string;
  contextWindow: string;
  contextValue: number;
  color: string;
  darkColor: string;
}

const models: ModelInfo[] = [
  {
    id: 'gpt4',
    name: 'GPT-4o',
    company: 'OpenAI',
    strength: '综合推理能力强',
    contextWindow: '128K',
    contextValue: 128,
    color: '#10a37f',
    darkColor: '#34d399',
  },
  {
    id: 'claude',
    name: 'Claude 3.5',
    company: 'Anthropic',
    strength: '安全对齐与长文本',
    contextWindow: '200K',
    contextValue: 200,
    color: '#7c3aed',
    darkColor: '#a78bfa',
  },
  {
    id: 'gemini',
    name: 'Gemini 2.0',
    company: 'Google',
    strength: '多模态理解',
    contextWindow: '2M',
    contextValue: 2000,
    color: '#1a73e8',
    darkColor: '#60a5fa',
  },
  {
    id: 'llama',
    name: 'LLaMA 3',
    company: 'Meta',
    strength: '开源可商用',
    contextWindow: '128K',
    contextValue: 128,
    color: '#0668e1',
    darkColor: '#93c5fd',
  },
  {
    id: 'mistral',
    name: 'Mistral',
    company: 'Mistral AI',
    strength: '高效轻量',
    contextWindow: '128K',
    contextValue: 128,
    color: '#ff7000',
    darkColor: '#fb923c',
  },
];

export default function LLMComparison() {
  const isDark = useDarkMode();
  const uid = useId();
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);

  const colors = isDark
    ? {
        bg: '#0f1419',
        cardBg: '#1c2333',
        text: '#e2e8f0',
        subText: '#94a3b8',
        barBg: '#334155',
      }
    : {
        bg: '#FAFAF7',
        cardBg: '#ffffff',
        text: '#1B4332',
        subText: '#4a5568',
        barBg: '#e2e8f0',
      };

  const cardW = 86;
  const cardH = 180;
  const gap = 8;
  const startX = 18;
  const startY = 55;
  const maxBarWidth = 50;

  return (
    <div className="infographic-llm-comparison" style={{ width: '100%' }}>
      <svg
        viewBox="0 0 500 280"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
      >
        <title>主流大语言模型对比 - Major LLM Comparison</title>
        <defs>
          <filter id={`${uid}-shadow`}>
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.12" />
          </filter>
        </defs>

        <rect width="500" height="280" rx="12" fill={colors.bg} />

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
          主流大语言模型对比
        </text>
        <text
          x="250"
          y="42"
          textAnchor="middle"
          fill={colors.subText}
          fontSize="9"
          fontFamily="'DM Mono', monospace"
        >
          Major LLM Comparison 2024-2025
        </text>

        {/* Model cards */}
        {models.map((model, i) => {
          const x = startX + i * (cardW + gap);
          const y = startY;
          const isHovered = hoveredModel === model.id;
          const modelColor = isDark ? model.darkColor : model.color;
          const barWidth = Math.min(Math.log10(model.contextValue + 1) / Math.log10(2001), 1) * maxBarWidth;

          return (
            <g
              key={model.id}
              onMouseEnter={() => setHoveredModel(model.id)}
              onMouseLeave={() => setHoveredModel(null)}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                opacity: hoveredModel && !isHovered ? 0.6 : 1,
              }}
            >
              <rect
                x={x}
                y={y}
                width={cardW}
                height={cardH}
                rx="10"
                fill={colors.cardBg}
                stroke={modelColor}
                strokeWidth={isHovered ? 2.5 : 1.5}
                filter={`url(#${uid}-shadow)`}
              />

              {/* Color badge at top */}
              <rect
                x={x}
                y={y}
                width={cardW}
                height="6"
                rx="3"
                fill={modelColor}
              />

              {/* Model name */}
              <text
                x={x + cardW / 2}
                y={y + 28}
                textAnchor="middle"
                fill={modelColor}
                fontSize="10"
                fontWeight="bold"
                fontFamily="'Lora', serif"
              >
                {model.name}
              </text>

              {/* Company */}
              <text
                x={x + cardW / 2}
                y={y + 44}
                textAnchor="middle"
                fill={colors.subText}
                fontSize="7"
                fontFamily="'DM Mono', monospace"
              >
                {model.company}
              </text>

              {/* Strength */}
              <text
                x={x + cardW / 2}
                y={y + 68}
                textAnchor="middle"
                fill={colors.text}
                fontSize="8"
                fontFamily="'Lora', serif"
              >
                {model.strength.slice(0, 5)}
              </text>
              <text
                x={x + cardW / 2}
                y={y + 82}
                textAnchor="middle"
                fill={colors.text}
                fontSize="8"
                fontFamily="'Lora', serif"
              >
                {model.strength.slice(5)}
              </text>

              {/* Context window label */}
              <text
                x={x + cardW / 2}
                y={y + 108}
                textAnchor="middle"
                fill={colors.subText}
                fontSize="7"
                fontFamily="'DM Mono', monospace"
              >
                上下文窗口
              </text>

              {/* Context bar */}
              <rect
                x={x + (cardW - maxBarWidth) / 2}
                y={y + 115}
                width={maxBarWidth}
                height="8"
                rx="4"
                fill={colors.barBg}
              />
              <rect
                x={x + (cardW - maxBarWidth) / 2}
                y={y + 115}
                width={barWidth}
                height="8"
                rx="4"
                fill={modelColor}
                opacity="0.8"
              />

              {/* Context size */}
              <text
                x={x + cardW / 2}
                y={y + 140}
                textAnchor="middle"
                fill={modelColor}
                fontSize="10"
                fontWeight="bold"
                fontFamily="'DM Mono', monospace"
              >
                {model.contextWindow}
              </text>

              {/* Simple icon/indicator */}
              <circle
                cx={x + cardW / 2}
                cy={y + 162}
                r="10"
                fill={modelColor}
                opacity="0.15"
              />
              <circle
                cx={x + cardW / 2}
                cy={y + 162}
                r="5"
                fill={modelColor}
                opacity="0.6"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
