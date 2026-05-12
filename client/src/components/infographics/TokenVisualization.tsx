import { useState } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';

interface Token {
  text: string;
  id: number;
}

const englishTokens: Token[] = [
  { text: 'Hello', id: 9906 },
  { text: ',', id: 11 },
  { text: ' world', id: 1917 },
  { text: '!', id: 0 },
];

const chineseTokens: Token[] = [
  { text: '今天', id: 38022 },
  { text: '天气', id: 99324 },
  { text: '真好', id: 45126 },
];

const tokenColors = [
  { light: '#dcfce7', dark: '#064e3b', border: '#22c55e' },
  { light: '#dbeafe', dark: '#1e3a5f', border: '#3b82f6' },
  { light: '#fef3c7', dark: '#78350f', border: '#f59e0b' },
  { light: '#fce7f3', dark: '#4c1d3a', border: '#ec4899' },
  { light: '#e0e7ff', dark: '#312e81', border: '#6366f1' },
  { light: '#ccfbf1', dark: '#134e4a', border: '#14b8a6' },
];

export default function TokenVisualization() {
  const isDark = useDarkMode();
  const [hoveredToken, setHoveredToken] = useState<string | null>(null);

  const colors = isDark
    ? {
        bg: '#0f1419',
        text: '#e2e8f0',
        subText: '#94a3b8',
        labelBg: '#1c2333',
        sourceText: '#86efac',
      }
    : {
        bg: '#FAFAF7',
        text: '#1B4332',
        subText: '#4a5568',
        labelBg: '#f1f5f9',
        sourceText: '#1B4332',
      };

  const renderTokenRow = (
    tokens: Token[],
    sourceText: string,
    label: string,
    yOffset: number
  ) => {
    const tokenW = 70;
    const tokenH = 40;
    const gap = 10;
    const totalWidth = tokens.length * (tokenW + gap) - gap;
    const startX = (500 - totalWidth) / 2;

    return (
      <g>
        {/* Label */}
        <text
          x="250"
          y={yOffset}
          textAnchor="middle"
          fill={colors.subText}
          fontSize="9"
          fontFamily="'DM Mono', monospace"
        >
          {label}
        </text>

        {/* Source text */}
        <rect
          x={150}
          y={yOffset + 6}
          width={200}
          height={24}
          rx="6"
          fill={colors.labelBg}
        />
        <text
          x="250"
          y={yOffset + 22}
          textAnchor="middle"
          fill={colors.sourceText}
          fontSize="11"
          fontWeight="bold"
          fontFamily="'DM Mono', monospace"
        >
          {sourceText}
        </text>

        {/* Arrow */}
        <text
          x="250"
          y={yOffset + 44}
          textAnchor="middle"
          fill={colors.subText}
          fontSize="12"
        >
          ↓
        </text>

        {/* Token blocks */}
        {tokens.map((token, i) => {
          const x = startX + i * (tokenW + gap);
          const y = yOffset + 50;
          const colorSet = tokenColors[i % tokenColors.length];
          const tokenKey = `${label}-${i}`;
          const isHovered = hoveredToken === tokenKey;
          const bgColor = isDark ? colorSet.dark : colorSet.light;

          return (
            <g
              key={tokenKey}
              onMouseEnter={() => setHoveredToken(tokenKey)}
              onMouseLeave={() => setHoveredToken(null)}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
              }}
            >
              <rect
                x={x}
                y={y}
                width={tokenW}
                height={tokenH}
                rx="8"
                fill={bgColor}
                stroke={colorSet.border}
                strokeWidth={isHovered ? 2.5 : 1.5}
              />
              <text
                x={x + tokenW / 2}
                y={y + tokenH / 2 + 4}
                textAnchor="middle"
                fill={colors.text}
                fontSize="11"
                fontWeight="bold"
                fontFamily="'DM Mono', monospace"
              >
                {token.text}
              </text>

              {/* Token ID below */}
              <text
                x={x + tokenW / 2}
                y={y + tokenH + 14}
                textAnchor="middle"
                fill={colors.subText}
                fontSize="7"
                fontFamily="'DM Mono', monospace"
                opacity={isHovered ? 1 : 0.7}
              >
                ID: {token.id}
              </text>
            </g>
          );
        })}
      </g>
    );
  };

  return (
    <div className="infographic-token" style={{ width: '100%' }}>
      <svg
        viewBox="0 0 500 340"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
      >
        <title>Token 分词可视化 - Token Visualization</title>

        <rect width="500" height="340" rx="12" fill={colors.bg} />

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
          Token 分词可视化
        </text>
        <text
          x="250"
          y="42"
          textAnchor="middle"
          fill={colors.subText}
          fontSize="9"
          fontFamily="'DM Mono', monospace"
        >
          How text gets tokenized
        </text>

        {/* English example */}
        {renderTokenRow(englishTokens, '"Hello, world!"', 'English Example', 60)}

        {/* Chinese example */}
        {renderTokenRow(chineseTokens, '"今天天气真好"', 'Chinese Example', 190)}
      </svg>
    </div>
  );
}
