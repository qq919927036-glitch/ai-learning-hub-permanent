// ============================================================
// 知识依赖图内容数据
// Design: Knowledge Atlas style
// ============================================================

export interface DependencyNode {
  id: string;
  label: string;
  category: "basic" | "advanced" | "practice";
}

export interface DependencyEdge {
  from: string;
  to: string;
  label?: string;
}

export interface DependencyGraph {
  nodes: DependencyNode[];
  edges: DependencyEdge[];
}

export const dependencyGraph: DependencyGraph = {
  nodes: [
    // Basic nodes
    { id: "B1", label: "大语言模型 (LLM)", category: "basic" },
    { id: "B2", label: "推理模型", category: "basic" },
    { id: "B3", label: "AI Agent", category: "basic" },
    { id: "B4", label: "Harness 概念", category: "basic" },
    { id: "B5", label: "Token 与上下文", category: "basic" },
    { id: "B29", label: "AI 幻觉", category: "basic" },
    { id: "B30", label: "Embeddings", category: "basic" },
    { id: "B33", label: "Token 经济学", category: "basic" },
    { id: "B38", label: "AI 编程助手", category: "basic" },
    // Advanced nodes
    { id: "A1", label: "为何需要 Harness", category: "advanced" },
    { id: "A2", label: "代码仓库上下文", category: "advanced" },
    { id: "A5", label: "上下文瘦身", category: "advanced" },
    { id: "A15", label: "RAG 系统设计", category: "advanced" },
    { id: "A17", label: "模型微调", category: "advanced" },
    { id: "A19", label: "多 Agent 协作", category: "advanced" },
    { id: "A21", label: "合成数据", category: "advanced" },
    { id: "A24", label: "AI 评估框架", category: "advanced" },
    // Practice nodes
    { id: "P1", label: "Claude Code", category: "practice" },
    { id: "P2", label: "Cursor", category: "practice" },
  ],
  edges: [
    // Basic dependencies
    { from: "B1", to: "B2", label: "LLM 基础" },
    { from: "B1", to: "B3", label: "LLM 基础" },
    { from: "B3", to: "B4", label: "Agent 概念" },
    { from: "B1", to: "B5", label: "Token 理解" },
    { from: "B1", to: "B30", label: "语言表示" },
    { from: "B1", to: "B29", label: "模型局限" },
    { from: "B5", to: "B33", label: "Token 基础" },
    // Basic -> Advanced
    { from: "B4", to: "A1", label: "Harness 入门" },
    { from: "A1", to: "A2", label: "工程化需求" },
    { from: "B5", to: "A5", label: "上下文理论" },
    { from: "B30", to: "A15", label: "向量基础" },
    { from: "B29", to: "A15", label: "减少幻觉" },
    { from: "B1", to: "A17", label: "模型原理" },
    { from: "B3", to: "A19", label: "单 Agent" },
    { from: "B33", to: "A21", label: "成本意识" },
    { from: "A24", to: "A17", label: "评估先行" },
    // Advanced/Basic -> Practice
    { from: "B3", to: "P1", label: "Agent 理论" },
    { from: "B4", to: "P1", label: "Harness 理论" },
    { from: "B38", to: "P2", label: "编程助手理论" },
    { from: "B1", to: "P2", label: "LLM 基础" },
  ],
};
