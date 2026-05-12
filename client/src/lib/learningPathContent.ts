// Learning Path Data - 4 personas with staged progression
// Knowledge Atlas Design: persona-based learning roadmaps

export interface LearningPathStage {
  title: string;
  items: string[];
  duration: string;
}

export interface LearningPath {
  id: string;
  persona: string;
  icon: string;
  description: string;
  color: string;
  stages: LearningPathStage[];
}

export const learningPaths: LearningPath[] = [
  {
    id: "product-manager",
    persona: "产品经理",
    icon: "📋",
    description: "理解 AI 能力边界，评估工具选型，撰写 AI 产品 PRD，与工程团队高效协作。",
    color: "#D4A017",
    stages: [
      {
        title: "认知基础",
        duration: "1-2 周",
        items: [
          "B1: 理解 LLM 核心原理（续写机器）",
          "B2: 了解推理模型与普通模型的差异",
          "B3: 掌握 AI Agent 概念",
          "B4: 理解 Harness 架构对产品体验的影响",
        ],
      },
      {
        title: "能力评估",
        duration: "2-3 周",
        items: [
          "A5: 上下文窗口限制与产品设计",
          "A1: 模型不可靠性如何影响用户体验",
          "B29: AI 幻觉问题与产品风控",
          "A20: AI 产品设计模式",
        ],
      },
      {
        title: "工具实践",
        duration: "1-2 周",
        items: [
          "实践篇: 体验 Cursor/Windsurf 辅助原型设计",
          "实践篇: 用 v0 快速生成 UI 原型",
          "实践篇: 用 NotebookLM 做竞品调研",
        ],
      },
      {
        title: "进阶决策",
        duration: "持续学习",
        items: [
          "A15: 理解 RAG 系统设计以做架构决策",
          "A18: Prompt 工程技巧指导产品话术设计",
          "B32: AI 版权法律对产品合规的影响",
          "B33: Token 经济学与成本控制",
        ],
      },
    ],
  },
  {
    id: "developer",
    persona: "开发者",
    icon: "👨‍💻",
    description: "掌握 API 集成、Agent 开发、RAG 系统构建，成为 AI-native 全栈工程师。",
    color: "#4ECDC4",
    stages: [
      {
        title: "原理深入",
        duration: "1-2 周",
        items: [
          "B1: 深入理解 Next Token Prediction",
          "B2: 推理模型的 Chain of Thought 机制",
          "B30: 嵌入与向量搜索技术原理",
          "A3: Prompt Cache 与 API 成本优化",
        ],
      },
      {
        title: "工程实践",
        duration: "2-4 周",
        items: [
          "A2: 实时代码仓库上下文构建",
          "A4: 工具接入与调用规范",
          "A16: Agent 工具调用与编排实现",
          "A15: RAG 系统设计与实现",
        ],
      },
      {
        title: "Agent 开发",
        duration: "3-4 周",
        items: [
          "A6: 结构化会话记忆实现",
          "A7: 任务委派与子 Agent 架构",
          "A19: 多 Agent 协作架构设计",
          "实践篇: 用 Claude Code 构建真实项目",
        ],
      },
      {
        title: "高级优化",
        duration: "持续迭代",
        items: [
          "A17: 模型微调 Fine-tuning 实战",
          "A5: 上下文压缩与长文本处理",
          "B33: Token 经济学与生产环境成本控制",
          "实践篇: 对比 Cursor/Windsurf/Copilot 选择最佳工具",
        ],
      },
    ],
  },
  {
    id: "entrepreneur",
    persona: "创业者",
    icon: "🚀",
    description: "发现 AI 产品机会，验证 PMF，控制成本，组建 AI-native 团队。",
    color: "#1A3D2B",
    stages: [
      {
        title: "快速认知",
        duration: "3-5 天",
        items: [
          "B1-B4: 快速过一遍基础概念",
          "B4: 理解 Harness 就是你的产品差异化壁垒",
          "A20: AI 产品设计模式与竞争格局",
        ],
      },
      {
        title: "机会发现",
        duration: "1-2 周",
        items: [
          "A1: 模型不可靠性 = 产品化机会",
          "A15: RAG 系统让你的产品有独特数据优势",
          "B29: AI 幻觉问题催生事实核查市场",
          "B32: AI 版权法律的合规红线",
        ],
      },
      {
        title: "MVP 构建",
        duration: "2-4 周",
        items: [
          "实践篇: 用 Bolt/Replit 快速搭建 MVP",
          "实践篇: 用 v0 生成产品界面",
          "B33: Token 经济学估算运营成本",
          "A18: Prompt 工程打造核心产品能力",
        ],
      },
      {
        title: "规模化",
        duration: "持续迭代",
        items: [
          "A3: Prompt Cache 降低 90% API 成本",
          "A19: 多 Agent 架构支撑复杂产品功能",
          "A17: 微调模型建立技术护城河",
        ],
      },
    ],
  },
  {
    id: "student",
    persona: "学生",
    icon: "🎓",
    description: "从零建立 AI 知识体系，完成实战项目，为 AI 时代做好职业准备。",
    color: "#7C3AED",
    stages: [
      {
        title: "打好基础",
        duration: "2-3 周",
        items: [
          "B1: 理解大语言模型核心原理",
          "B2: 理解推理模型的思维链",
          "B3: 理解 AI Agent 概念",
          "B30: 学习嵌入与向量搜索基础",
          "B31: 深入 AI 推理能力原理",
        ],
      },
      {
        title: "动手实践",
        duration: "3-4 周",
        items: [
          "实践篇: 使用 Claude Code 完成编程作业",
          "实践篇: 用 Replit Agent 做课程项目",
          "实践篇: 用 NotebookLM 做论文研读",
          "A18: 学习 Prompt 工程提升 AI 使用效率",
        ],
      },
      {
        title: "深入理解",
        duration: "4-6 周",
        items: [
          "A2-A7: 系统学习 Agent 六大核心组件",
          "A15: 尝试构建一个简单 RAG 系统",
          "A16: 实现一个工具调用 Demo",
          "B33: 理解 Token 经济学用好免费额度",
        ],
      },
      {
        title: "职业准备",
        duration: "持续积累",
        items: [
          "A17: 了解微调技术拓宽就业方向",
          "A19: 学习多 Agent 架构前沿知识",
          "A20: 掌握 AI 产品设计思维",
          "B32: 了解 AI 法律伦理做负责任的开发者",
        ],
      },
    ],
  },
];
