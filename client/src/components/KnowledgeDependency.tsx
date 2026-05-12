import { useState, useMemo, useEffect } from "react";
import { dependencyGraph, type DependencyNode } from "@/lib/dependencyContent";

const COLUMN_X: Record<string, number> = {
  basic: 120,
  advanced: 380,
  practice: 620,
};

const CATEGORY_COLORS = {
  basic: { fill: "#4ECDC4", stroke: "#2A9D8F", text: "#FFFFFF" },
  advanced: { fill: "#D4A017", stroke: "#B8860B", text: "#FFFFFF" },
  practice: { fill: "#1A3D2B", stroke: "#0f2619", text: "#FFFFFF" },
};

const CATEGORY_COLORS_DARK = {
  basic: { fill: "#2A9D8F", stroke: "#5eead4", text: "#FFFFFF" },
  advanced: { fill: "#B8860B", stroke: "#fbbf24", text: "#FFFFFF" },
  practice: { fill: "#16a34a", stroke: "#4ade80", text: "#FFFFFF" },
};

const NODE_WIDTH = 140;
const NODE_HEIGHT = 38;
const Y_START = 50;
const Y_SPACING = 50;

function getNodePositions(nodes: DependencyNode[]) {
  const positions: Record<string, { x: number; y: number }> = {};
  const counts: Record<string, number> = { basic: 0, advanced: 0, practice: 0 };

  for (const node of nodes) {
    const col = COLUMN_X[node.category];
    const idx = counts[node.category];
    positions[node.id] = {
      x: col,
      y: Y_START + idx * Y_SPACING,
    };
    counts[node.category]++;
  }
  return positions;
}

export default function KnowledgeDependency() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const positions = useMemo(
    () => getNodePositions(dependencyGraph.nodes),
    []
  );

  const { prerequisites, dependents } = useMemo(() => {
    if (!selectedNode)
      return { prerequisites: new Set<string>(), dependents: new Set<string>() };
    const prereqs = new Set<string>();
    const deps = new Set<string>();
    for (const edge of dependencyGraph.edges) {
      if (edge.to === selectedNode) prereqs.add(edge.from);
      if (edge.from === selectedNode) deps.add(edge.to);
    }
    return { prerequisites: prereqs, dependents: deps };
  }, [selectedNode]);

  const highlightedEdges = useMemo(() => {
    if (!selectedNode) return new Set<number>();
    const indices = new Set<number>();
    dependencyGraph.edges.forEach((edge, i) => {
      if (edge.from === selectedNode || edge.to === selectedNode) {
        indices.add(i);
      }
    });
    return indices;
  }, [selectedNode]);

  const selectedNodeData = selectedNode
    ? dependencyGraph.nodes.find((n) => n.id === selectedNode)
    : null;

  const prereqLabels = selectedNode
    ? dependencyGraph.nodes
        .filter((n) => prerequisites.has(n.id))
        .map((n) => n.label)
    : [];

  const depLabels = selectedNode
    ? dependencyGraph.nodes
        .filter((n) => dependents.has(n.id))
        .map((n) => n.label)
    : [];

  // Calculate SVG height based on the longest column
  const maxCount = Math.max(
    dependencyGraph.nodes.filter((n) => n.category === "basic").length,
    dependencyGraph.nodes.filter((n) => n.category === "advanced").length,
    dependencyGraph.nodes.filter((n) => n.category === "practice").length
  );
  const svgHeight = Y_START + maxCount * Y_SPACING + 40;

  return (
    <section id="dependency-graph" className="py-16 px-4">
      <div className="container">
        <h2
          className="text-2xl md:text-3xl font-bold mb-2 text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--hub-text)",
          }}
        >
          知识依赖图
        </h2>
        <p
          className="text-center text-sm mb-4"
          style={{
            fontFamily: "'Lora', serif",
            color: "var(--hub-text-muted)",
          }}
        >
          点击节点查看前置知识与后续章节
        </p>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[
            { label: "基础篇", color: "var(--hub-teal)" },
            { label: "进阶篇", color: "var(--hub-amber)" },
            { label: "实践篇", color: "var(--hub-forest)" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <span
                className="w-3 h-3 rounded-sm"
                style={{ background: item.color }}
              />
              <span
                className="text-xs"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "var(--hub-text-muted)",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* SVG Graph */}
        <div
          className="overflow-x-auto rounded-lg"
          style={{
            background: "var(--hub-bg-alt)",
            border: "1px solid var(--hub-card-border)",
          }}
        >
          <svg
            viewBox={`0 0 760 ${svgHeight}`}
            className="w-full"
            style={{ maxHeight: "560px" }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="6"
                refX="8"
                refY="3"
                orient="auto"
              >
                <polygon
                  points="0 0, 8 3, 0 6"
                  fill="var(--hub-text-light, #6B7280)"
                />
              </marker>
              <marker
                id="arrowhead-highlight"
                markerWidth="8"
                markerHeight="6"
                refX="8"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#4ECDC4" />
              </marker>
            </defs>

            {/* Column headers */}
            {[
              { x: COLUMN_X.basic + NODE_WIDTH / 2, label: "基础篇" },
              { x: COLUMN_X.advanced + NODE_WIDTH / 2, label: "进阶篇" },
              { x: COLUMN_X.practice + NODE_WIDTH / 2, label: "实践篇" },
            ].map((h) => (
              <text
                key={h.label}
                x={h.x}
                y={28}
                textAnchor="middle"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  fill: "var(--hub-text-muted, #4A4A45)",
                }}
              >
                {h.label}
              </text>
            ))}

            {/* Edges */}
            {dependencyGraph.edges.map((edge, i) => {
              const fromPos = positions[edge.from];
              const toPos = positions[edge.to];
              if (!fromPos || !toPos) return null;

              const isHighlighted = highlightedEdges.has(i);
              const fromRight = fromPos.x + NODE_WIDTH;
              const fromCenterY = fromPos.y + NODE_HEIGHT / 2;
              const toLeft = toPos.x;
              const toCenterY = toPos.y + NODE_HEIGHT / 2;

              // If same column, route differently
              const sameColumn = Math.abs(fromPos.x - toPos.x) < 10;
              let path: string;
              if (sameColumn) {
                const offset = 20;
                path = `M ${fromRight} ${fromCenterY} C ${fromRight + offset} ${fromCenterY}, ${toLeft - offset} ${toCenterY}, ${toLeft} ${toCenterY}`;
              } else {
                const midX = (fromRight + toLeft) / 2;
                path = `M ${fromRight} ${fromCenterY} C ${midX} ${fromCenterY}, ${midX} ${toCenterY}, ${toLeft} ${toCenterY}`;
              }

              return (
                <path
                  key={i}
                  d={path}
                  fill="none"
                  stroke={isHighlighted ? "#4ECDC4" : "var(--hub-text-light, #6B7280)"}
                  strokeWidth={isHighlighted ? 2 : 1}
                  strokeOpacity={isHighlighted ? 1 : 0.4}
                  markerEnd={isHighlighted ? "url(#arrowhead-highlight)" : "url(#arrowhead)"}
                />
              );
            })}

            {/* Nodes */}
            {dependencyGraph.nodes.map((node) => {
              const pos = positions[node.id];
              if (!pos) return null;
              const colors = isDark ? CATEGORY_COLORS_DARK[node.category] : CATEGORY_COLORS[node.category];
              const isSelected = selectedNode === node.id;
              const isPrereq = prerequisites.has(node.id);
              const isDependent = dependents.has(node.id);
              const isRelated = isSelected || isPrereq || isDependent;

              let fillColor = colors.fill;
              let strokeColor = colors.stroke;
              let opacity = selectedNode ? (isRelated ? 1 : 0.4) : 1;

              if (isPrereq) {
                strokeColor = "#4ECDC4";
              } else if (isDependent) {
                strokeColor = "#D4A017";
              }

              return (
                <g
                  key={node.id}
                  onClick={() =>
                    setSelectedNode(selectedNode === node.id ? null : node.id)
                  }
                  style={{ cursor: "pointer" }}
                  opacity={opacity}
                >
                  <rect
                    x={pos.x}
                    y={pos.y}
                    width={NODE_WIDTH}
                    height={NODE_HEIGHT}
                    rx={6}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={isSelected ? 3 : isRelated ? 2 : 1}
                  />
                  <text
                    x={pos.x + NODE_WIDTH / 2}
                    y={pos.y + NODE_HEIGHT / 2}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={colors.text}
                    style={{
                      fontFamily: "'Lora', serif",
                      fontSize: "10px",
                      pointerEvents: "none",
                    }}
                  >
                    {node.id}: {node.label.length > 8 ? node.label.slice(0, 8) + "..." : node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Info panel */}
        {selectedNodeData && (
          <div
            className="mt-4 p-4 rounded-lg"
            style={{
              background: "var(--hub-card-bg)",
              border: "1px solid var(--hub-card-border)",
            }}
          >
            <h4
              className="text-sm font-semibold mb-2"
              style={{
                fontFamily: "'Lora', serif",
                color: "var(--hub-text)",
              }}
            >
              {selectedNodeData.id}: {selectedNodeData.label}
            </h4>
            {prereqLabels.length > 0 && (
              <p
                className="text-xs mb-1"
                style={{
                  fontFamily: "'Lora', serif",
                  color: "var(--hub-text-muted)",
                }}
              >
                <span style={{ color: "#4ECDC4", fontWeight: 600 }}>前置知识：</span>
                {prereqLabels.join("、")}
              </p>
            )}
            {depLabels.length > 0 && (
              <p
                className="text-xs"
                style={{
                  fontFamily: "'Lora', serif",
                  color: "var(--hub-text-muted)",
                }}
              >
                <span style={{ color: "#D4A017", fontWeight: 600 }}>后续章节：</span>
                {depLabels.join("、")}
              </p>
            )}
            {prereqLabels.length === 0 && depLabels.length === 0 && (
              <p
                className="text-xs"
                style={{
                  fontFamily: "'Lora', serif",
                  color: "var(--hub-text-muted)",
                }}
              >
                该节点无直接的前置或后续依赖
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
