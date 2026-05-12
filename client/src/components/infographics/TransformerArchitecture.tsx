import { useState, useId } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';

const layers = [
  { id: 'input', label: '输入', sub: 'Input' },
  { id: 'embedding', label: '嵌入层', sub: 'Embedding' },
  { id: 'positional', label: '位置编码', sub: 'Positional Encoding' },
  { id: 'attention', label: '多头注意力', sub: 'Multi-Head Attention' },
  { id: 'addnorm1', label: '残差连接&归一化', sub: 'Add & Norm' },
  { id: 'feedforward', label: '前馈网络', sub: 'Feed Forward' },
  { id: 'addnorm2', label: '残差连接&归一化', sub: 'Add & Norm' },
  { id: 'output', label: '输出', sub: 'Output' },
];

export default function TransformerArchitecture() {
  const isDark = useDarkMode();
  const uid = useId();
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  const colors = isDark
    ? {
        bg: '#0f1419',
        cardBg: '#1c2333',
        primary: '#4ade80',
        secondary: '#86efac',
        accent: '#fbbf24',
        text: '#e2e8f0',
        subText: '#94a3b8',
        arrow: '#4ade80',
        gradStart: '#065f46',
        gradEnd: '#1c4532',
      }
    : {
        bg: '#FAFAF7',
        cardBg: '#ffffff',
        primary: '#1B4332',
        secondary: '#2D5A3D',
        accent: '#D4A017',
        text: '#1B4332',
        subText: '#4a5568',
        arrow: '#1B4332',
        gradStart: '#1B4332',
        gradEnd: '#2D5A3D',
      };

  const boxWidth = 200;
  const boxHeight = 52;
  const gapY = 16;
  const startX = 150;
  const startY = 30;

  return (
    <div className="infographic-transformer" style={{ width: '100%' }}>
      <svg
        viewBox="0 0 500 620"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
      >
        <title>Transformer 架构图 - Transformer Architecture Diagram</title>
        <defs>
          <linearGradient id={`${uid}-grad-light`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.gradStart} />
            <stop offset="100%" stopColor={colors.gradEnd} />
          </linearGradient>
          <linearGradient id={`${uid}-accent-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.accent} />
            <stop offset="100%" stopColor={isDark ? '#f59e0b' : '#b8860b'} />
          </linearGradient>
          <filter id={`${uid}-shadow`}>
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Background */}
        <rect width="500" height="620" rx="12" fill={colors.bg} />

        {/* Title */}
        <text
          x="250"
          y="22"
          textAnchor="middle"
          fill={colors.text}
          fontSize="14"
          fontWeight="bold"
          fontFamily="'Playfair Display', serif"
        >
          Transformer 架构
        </text>

        {/* Layers */}
        {layers.map((layer, i) => {
          const x = startX;
          const y = startY + i * (boxHeight + gapY);
          const isHovered = hoveredLayer === layer.id;
          const isAttention = layer.id === 'attention';

          return (
            <g
              key={layer.id}
              onMouseEnter={() => setHoveredLayer(layer.id)}
              onMouseLeave={() => setHoveredLayer(null)}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                transformOrigin: `${x + boxWidth / 2}px ${y + boxHeight / 2}px`,
                opacity: hoveredLayer && !isHovered ? 0.6 : 1,
              }}
            >
              <rect
                x={x}
                y={y}
                width={boxWidth}
                height={boxHeight}
                rx="10"
                fill={isAttention ? `url(#${uid}-accent-grad)` : `url(#${uid}-grad-light)`}
                filter={`url(#${uid}-shadow)`}
                stroke={isHovered ? colors.accent : 'none'}
                strokeWidth={isHovered ? 2 : 0}
              />
              <text
                x={x + boxWidth / 2}
                y={y + 22}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="12"
                fontWeight="bold"
                fontFamily="'Lora', serif"
              >
                {layer.label}
              </text>
              <text
                x={x + boxWidth / 2}
                y={y + 40}
                textAnchor="middle"
                fill="rgba(255,255,255,0.8)"
                fontSize="9"
                fontFamily="'DM Mono', monospace"
              >
                {layer.sub}
              </text>

              {/* Arrow to next layer */}
              {i < layers.length - 1 && (
                <line
                  x1={x + boxWidth / 2}
                  y1={y + boxHeight}
                  x2={x + boxWidth / 2}
                  y2={y + boxHeight + gapY}
                  stroke={colors.arrow}
                  strokeWidth="2"
                  markerEnd={`url(#${uid}-arrowhead)`}
                />
              )}
            </g>
          );
        })}

        {/* Arrow marker */}
        <defs>
          <marker
            id={`${uid}-arrowhead`}
            markerWidth="8"
            markerHeight="6"
            refX="4"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill={colors.arrow} />
          </marker>
        </defs>

        {/* Annotation for attention */}
        <text
          x="380"
          y={startY + 3 * (boxHeight + gapY) + boxHeight / 2 + 4}
          fill={colors.subText}
          fontSize="8"
          fontFamily="'DM Mono', monospace"
        >
          ← 核心机制
        </text>
      </svg>
    </div>
  );
}
