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

const coreElements = [
  { id: 'perception', label: '感知', sub: 'Perception', angle: -90 },
  { id: 'planning', label: '规划', sub: 'Planning', angle: 0 },
  { id: 'action', label: '行动', sub: 'Action', angle: 90 },
  { id: 'memory', label: '记忆', sub: 'Memory', angle: 180 },
];

const outerTools = [
  { id: 'search', label: '搜索', angle: -45 },
  { id: 'code', label: '代码', angle: 45 },
  { id: 'file', label: '文件', angle: 135 },
  { id: 'api', label: 'API', angle: 225 },
];

export default function AgentArchitecture() {
  const isDark = useDarkMode();
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const colors = isDark
    ? {
        bg: '#0f1419',
        centerGradStart: '#065f46',
        centerGradEnd: '#14532d',
        text: '#e2e8f0',
        subText: '#94a3b8',
        ring: '#4ade80',
        accent: '#fbbf24',
        nodeBg: '#1c2333',
        nodeStroke: '#4ade80',
        outerBg: '#1e293b',
        outerStroke: '#fbbf24',
        connector: '#334155',
        arcArrow: '#4ade80',
      }
    : {
        bg: '#FAFAF7',
        centerGradStart: '#1B4332',
        centerGradEnd: '#2D5A3D',
        text: '#1B4332',
        subText: '#4a5568',
        ring: '#1B4332',
        accent: '#D4A017',
        nodeBg: '#ffffff',
        nodeStroke: '#1B4332',
        outerBg: '#fef3c7',
        outerStroke: '#D4A017',
        connector: '#94a3b8',
        arcArrow: '#2D5A3D',
      };

  const cx = 250;
  const cy = 230;
  const innerRadius = 90;
  const outerRadius = 155;

  const getPos = (angle: number, radius: number) => ({
    x: cx + radius * Math.cos((angle * Math.PI) / 180),
    y: cy + radius * Math.sin((angle * Math.PI) / 180),
  });

  return (
    <div className="infographic-agent" style={{ width: '100%' }}>
      <svg
        viewBox="0 0 500 440"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
      >
        <title>AI Agent 架构图 - AI Agent Architecture</title>
        <defs>
          <radialGradient id="agent-center-grad">
            <stop offset="0%" stopColor={colors.centerGradStart} />
            <stop offset="100%" stopColor={colors.centerGradEnd} />
          </radialGradient>
          <filter id="agent-shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>

        <rect width="500" height="440" rx="12" fill={colors.bg} />

        {/* Title */}
        <text
          x="250"
          y="30"
          textAnchor="middle"
          fill={colors.text}
          fontSize="14"
          fontWeight="bold"
          fontFamily="'Playfair Display', serif"
        >
          AI Agent 架构
        </text>
        <text
          x="250"
          y="48"
          textAnchor="middle"
          fill={colors.subText}
          fontSize="9"
          fontFamily="'DM Mono', monospace"
        >
          LLM-Powered Autonomous Agent
        </text>

        {/* Circular arc arrows */}
        <path
          d={`M ${cx} ${cy - innerRadius - 20} A ${innerRadius + 20} ${innerRadius + 20} 0 1 1 ${cx - 1} ${cy - innerRadius - 20}`}
          fill="none"
          stroke={colors.arcArrow}
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.4"
        />

        {/* Connecting lines from center to core elements */}
        {coreElements.map((elem) => {
          const pos = getPos(elem.angle, innerRadius);
          const isHovered = hoveredElement === elem.id;
          return (
            <line
              key={`line-${elem.id}`}
              x1={cx}
              y1={cy}
              x2={pos.x}
              y2={pos.y}
              stroke={colors.connector}
              strokeWidth={isHovered ? 2.5 : 1.5}
              strokeDasharray={isHovered ? 'none' : '4 2'}
              opacity={isHovered ? 1 : 0.6}
            />
          );
        })}

        {/* Center LLM circle */}
        <circle
          cx={cx}
          cy={cy}
          r={40}
          fill="url(#agent-center-grad)"
          filter="url(#agent-shadow)"
          stroke={hoveredElement === 'center' ? colors.accent : 'none'}
          strokeWidth="2"
          onMouseEnter={() => setHoveredElement('center')}
          onMouseLeave={() => setHoveredElement(null)}
          style={{ cursor: 'pointer' }}
        />
        <text
          x={cx}
          y={cy - 5}
          textAnchor="middle"
          fill="#ffffff"
          fontSize="14"
          fontWeight="bold"
          fontFamily="'Playfair Display', serif"
        >
          LLM
        </text>
        <text
          x={cx}
          y={cy + 12}
          textAnchor="middle"
          fill="rgba(255,255,255,0.8)"
          fontSize="8"
          fontFamily="'DM Mono', monospace"
        >
          大语言模型
        </text>

        {/* Core elements (inner ring) */}
        {coreElements.map((elem) => {
          const pos = getPos(elem.angle, innerRadius);
          const isHovered = hoveredElement === elem.id;
          return (
            <g
              key={elem.id}
              onMouseEnter={() => setHoveredElement(elem.id)}
              onMouseLeave={() => setHoveredElement(null)}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                transformOrigin: `${pos.x}px ${pos.y}px`,
              }}
            >
              <circle
                cx={pos.x}
                cy={pos.y}
                r="28"
                fill={colors.nodeBg}
                stroke={isHovered ? colors.accent : colors.nodeStroke}
                strokeWidth={isHovered ? 2.5 : 1.5}
                filter="url(#agent-shadow)"
              />
              <text
                x={pos.x}
                y={pos.y - 3}
                textAnchor="middle"
                fill={colors.text}
                fontSize="10"
                fontWeight="bold"
                fontFamily="'Lora', serif"
              >
                {elem.label}
              </text>
              <text
                x={pos.x}
                y={pos.y + 11}
                textAnchor="middle"
                fill={colors.subText}
                fontSize="7"
                fontFamily="'DM Mono', monospace"
              >
                {elem.sub}
              </text>
            </g>
          );
        })}

        {/* Outer tools ring */}
        {outerTools.map((tool) => {
          const pos = getPos(tool.angle, outerRadius);
          const isHovered = hoveredElement === tool.id;
          return (
            <g
              key={tool.id}
              onMouseEnter={() => setHoveredElement(tool.id)}
              onMouseLeave={() => setHoveredElement(null)}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                transformOrigin: `${pos.x}px ${pos.y}px`,
              }}
            >
              {/* Connector line to nearest core element */}
              <line
                x1={getPos(tool.angle, innerRadius + 28).x}
                y1={getPos(tool.angle, innerRadius + 28).y}
                x2={pos.x}
                y2={pos.y}
                stroke={colors.outerStroke}
                strokeWidth="1"
                strokeDasharray="3 2"
                opacity="0.5"
              />
              <rect
                x={pos.x - 22}
                y={pos.y - 14}
                width="44"
                height="28"
                rx="6"
                fill={colors.outerBg}
                stroke={isHovered ? colors.accent : colors.outerStroke}
                strokeWidth={isHovered ? 2 : 1}
                filter="url(#agent-shadow)"
              />
              <text
                x={pos.x}
                y={pos.y + 4}
                textAnchor="middle"
                fill={colors.text}
                fontSize="9"
                fontFamily="'Lora', serif"
              >
                {tool.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
