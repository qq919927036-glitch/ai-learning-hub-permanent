// AI Learning Hub - Complete Content Data
// Knowledge Atlas Design: warm cream, forest green, amber gold

// ===== CDN Assets =====
export const CDN = {
  // Original harness diagrams
  heroBg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/hero-bg-DKhKs9K85RkCrxFEDWdmcC.webp",
  heroRobot: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/hero-robot-jGSgowzxkGZuZ5uLKQhW34.webp",
  multiAgent: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/multi-agent_2a039c5c.png",
  permissionLayers: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/permission-layers_51e9d0d2.png",
  promptLayers: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/prompt-layers_83a90ac0.png",
  queryLoop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/query-loop_d8f28be0.png",
  imgPermission: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/img-permission_327d79e9.png",
  imgModelUnreliable: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/img-model-unreliable_c6356937.png",
  // New AI-generated illustrations
  llmNextToken: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/llm-next-token-TBiqLpfjzFAysFCbydjHgK.webp",
  llmVsReasoning: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/llm-vs-reasoning-m9b9fTjmSR36Hj57WHDe3W.webp",
  agentLoop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/agent-loop-SNJHCFEeP8sEabBjyRgcYx.webp",
  repoContext: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/repo-context-FZR7bfMxXHNhmj2ATiLVVm.webp",
  promptCache: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/prompt-cache-kfrsoNDkQ6pagpQFbYtcpw.webp",
  toolUse: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/tool-use-cDXCZdMxDVSabeDEUNqmXk.webp",
  contextCompression: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/context-compression-fLfPhWV8nFvvKacfX6m8hF.webp",
  sessionMemory: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/session-memory-oJ3jREEdGyMBsRtA59VyGh.webp",
  multiAgentDelegate: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/multi-agent-delegate-MJjJ8EsgFoxJ3ApEDbTei7.webp",
};

// ===== Basic Sections =====
export interface BasicSection {
  id: string;
  chapterNum: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  analogy: { icon: string; title: string; text: string };
  funFact: string;
  illustrationImg: string;
  illustrationAlt: string;
  layoutReverse: boolean;
}

export const basicSections: BasicSection[] = [
  {
    id: "what-is-llm",
    chapterNum: "B1",
    tag: "基础篇",
    title: "大语言模型 (LLM) 是什么？",
    subtitle: "一台疯狂的「续写机器」",
    description:
      "很多人以为 ChatGPT 真的「懂」你说的话。但其实，它的核心本能只有一个：猜下一个词。这听起来很简单，但正是这个简单的能力，造就了今天令人惊叹的 AI。通过在海量文本上训练，模型学会了语言规律、事实知识和逻辑推理——全都是从「预测下一个词」这一件事里涌现出来的。",
    keyPoints: [
      "LLM 的核心任务是「Next Token Prediction」——根据前面的词，预测最可能出现的下一个词",
      "通过在海量文本（相当于整个互联网）上训练，模型学会了语言的规律和知识",
      "每次生成一个词，然后把这个词加入上下文，再预测下一个，如此循环直到完成",
      "模型输出的不是一个确定的词，而是所有词的「概率分布」，再从中采样",
    ],
    analogy: {
      icon: "MessageSquare",
      title: "就像玩「成语接龙」",
      text: "你说「一石二」，大家都知道下一个是「鸟」。LLM 就是把这个游戏玩到了极致——它读过几乎所有人类写过的文字，所以能在任何话题上都接得上来，甚至能举一反三。",
    },
    funFact: "GPT-4 的训练数据超过 1 万亿个词，相当于读了大约 100 万本书！",
    illustrationImg: CDN.llmNextToken,
    illustrationAlt: "LLM 预测下一个词的概率分布示意图",
    layoutReverse: false,
  },
  {
    id: "reasoning-model",
    chapterNum: "B2",
    tag: "基础篇",
    title: "推理模型：会「思考」的 LLM",
    subtitle: "给大脑装上「草稿纸」",
    description:
      "普通 LLM 就像一个反应很快的人，脱口而出答案。推理模型则像一个认真的学生，先在草稿纸上一步步演算，再给出答案。这个「草稿纸」就是「思维链（Chain of Thought）」。它让 AI 在回答前先把问题拆解成小步骤，逐步推导，大幅提升了复杂问题的准确率。",
    keyPoints: [
      "推理模型本质上也是 LLM，只是经过了特殊训练，会在回答前先「想一想」",
      "思维链（Chain of Thought）让模型把复杂问题拆解成小步骤，逐步推导",
      "推理模型在数学、代码、逻辑题上表现更好，但速度更慢、成本更高",
      "代表产品：OpenAI o1/o3、DeepSeek-R1、Claude 3.7 Sonnet 扩展思考模式",
    ],
    analogy: {
      icon: "Calculator",
      title: "普通 LLM vs 推理模型",
      text: "问「23 × 47 等于多少？」普通 LLM 直接猜一个数字；推理模型会先写：「20×47=940，3×47=141，940+141=1081」，然后给出正确答案 1081。",
    },
    funFact: "推理模型有时候会「想太多」——它的思考过程可能比答案本身还要长 10 倍！",
    illustrationImg: CDN.llmVsReasoning,
    illustrationAlt: "LLM vs 推理模型 vs Agent Harness 对比图",
    layoutReverse: true,
  },
  {
    id: "what-is-agent",
    chapterNum: "B3",
    tag: "基础篇",
    title: "AI 智能体 (Agent) 是什么？",
    subtitle: "给 LLM 装上「手脚」",
    description:
      "LLM 就像一个被关在房间里的天才——它知识渊博，但只能说话，不能做任何事。AI Agent 则是把这个天才放了出来，给它配上工具、记忆和行动能力，让它真正能完成任务。Agent 的核心是一个「观察-思考-行动」的循环，不断迭代直到完成目标。",
    keyPoints: [
      "Agent = LLM + 工具调用 + 记忆 + 环境反馈，构成「观察-思考-行动」循环",
      "Agent 可以主动使用工具：搜索网页、执行代码、读写文件、调用 API",
      "Agent 有记忆：能记住之前的对话和操作结果，不会每次都从零开始",
      "Agent 能自主决策：给它一个目标，它会自己规划步骤，遇到问题自己解决",
    ],
    analogy: {
      icon: "Bot",
      title: "LLM 是大脑，Agent 是完整的人",
      text: "光有大脑没有手脚，你只能躺着想事情。Agent 给 LLM 装上了眼睛（感知环境）、手脚（执行工具）和记忆（保存状态），让它真正能在世界上行动起来。",
    },
    funFact: "Claude Code 平均完成一个编程任务需要调用 50-200 次工具，相当于一个程序员连续工作好几个小时！",
    illustrationImg: CDN.agentLoop,
    illustrationAlt: "Agent 观察-思考-行动循环示意图",
    layoutReverse: false,
  },
  {
    id: "harness-explained",
    chapterNum: "B4",
    tag: "基础篇",
    title: "Harness：模型的「超级外挂」",
    subtitle: "同一个模型，差距可以有多大？",
    description:
      "你有没有发现，同一个 Claude 模型，在 Claude Code 里用起来比在普通聊天框里强得多？这不是魔法，而是 Harness 的功劳。Harness 是包裹在模型外面的「软件脚手架」，负责拼接提示词、提供工具、追踪状态、管理权限——决定了你 80% 的使用体验。",
    keyPoints: [
      "Harness 负责：拼接提示词、提供工具、追踪文件状态、管理权限、缓存上下文",
      "同一个模型，用不同的 Harness，效果可能天差地别",
      "Claude Code、Codex CLI 都是专门为编程优化的 Coding Harness",
      "今天你用 AI 的大部分体验，其实是由 Harness 决定的，而不是模型本身",
    ],
    analogy: {
      icon: "Car",
      title: "发动机 vs 整车",
      text: "LLM 是发动机，推理模型是涡轮增压发动机，而 Harness 是整车系统——方向盘、变速箱、导航、安全气囊。再好的发动机，没有好的整车系统，也跑不快。",
    },
    funFact: "Sebastian Raschka 博士用纯 Python 写了一个极简 Coding Agent，代码不到 1000 行，却实现了 6 大核心功能！",
    illustrationImg: CDN.llmVsReasoning,
    illustrationAlt: "LLM vs Harness 整车比喻示意图",
    layoutReverse: true,
  },
];

// ===== Advanced Sections (original modules) =====
export interface AdvancedSection {
  id: string;
  chapterNum: string;
  tag: string;
  tagColor: "green" | "amber";
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  diagramImg: string;
  diagramCaption: string;
  illustrationImg?: string;
  illustrationAlt?: string;
  funFact?: string;
  layoutReverse?: boolean;
}

export const advancedSections: AdvancedSection[] = [
  {
    id: "model-unreliability",
    chapterNum: "A1",
    tag: "进阶篇",
    tagColor: "amber",
    title: "为什么需要 AI Harness？",
    subtitle: "驯服不可靠的语言模型",
    description:
      "大型语言模型（LLM）本质上是一个概率性系统——它的输出无法保证正确，也无法保证格式一致。它可能产生幻觉、遗忘上下文、或在相同输入下给出截然不同的答案。AI Harness 正是为了在这种不确定性之上，构建一套可预期、可控制、可恢复的工程化框架。",
    keyPoints: [
      "LLM 输出具有概率性，同一输入可能产生不同结果",
      "模型会产生幻觉（Hallucination），编造不存在的事实",
      "上下文窗口有限，长对话中模型会遗忘早期信息",
      "Harness 在模型之上提供确定性的工程保障层",
    ],
    diagramImg: CDN.imgModelUnreliable,
    diagramCaption: "模型不可靠性示意：AI 在处理复杂任务时可能陷入混乱",
    funFact: "研究表明，即使是最强的 LLM，在没有 Harness 的情况下，完成复杂多步骤任务的成功率不到 30%！",
    layoutReverse: false,
  },
  {
    id: "repo-context",
    chapterNum: "A2",
    tag: "进阶篇",
    tagColor: "green",
    title: "组件一：实时代码仓库上下文",
    subtitle: "先「侦察」，再「行动」",
    description:
      "当你说「帮我修一下测试」，AI 不能两眼一抹黑地乱改。它需要先搞清楚：这是什么项目？用什么框架？测试命令是什么？代码结构怎样？Agent 启动时会扫描项目结构，把这些「稳定事实」打包成「工作区摘要」，作为所有后续操作的背景知识。",
    keyPoints: [
      "Agent 启动时会扫描项目结构：读取 README、AGENTS.md、package.json 等配置文件",
      "了解 Git 分支、最近提交记录，知道当前正在做什么修改",
      "把这些「稳定事实」打包成「工作区摘要」，作为所有后续操作的背景知识",
      "有了上下文，AI 才能知道该运行哪条测试命令、该去哪个文件找代码",
    ],
    diagramImg: CDN.queryLoop,
    diagramCaption: "查询循环中的上下文收集阶段：Agent 在行动前先建立项目全貌",
    illustrationImg: CDN.repoContext,
    illustrationAlt: "AI 机器人读取代码仓库结构示意图",
    funFact: "Claude Code 会优先读取项目根目录的 CLAUDE.md 文件——这是你给 AI 的「工作手册」，告诉它这个项目的规范和注意事项。",
    layoutReverse: true,
  },
  {
    id: "prompt-cache",
    chapterNum: "A3",
    tag: "进阶篇",
    tagColor: "amber",
    title: "组件二：提示词形态与缓存复用",
    subtitle: "聪明的「记忆分层」",
    description:
      "每次对话都把整个项目上下文重新发给模型？那会贵死！聪明的 Harness 会把「不变的部分」缓存起来，只把「变化的部分」每次更新。「稳定前缀」包含系统指令、工具说明、工作区摘要；「动态内容」包含用户最新消息和近期对话记录。",
    keyPoints: [
      "「稳定前缀」包含：系统指令、工具说明、工作区摘要——这些很少变，可以缓存",
      "「动态内容」包含：用户最新消息、近期对话记录、短期记忆——每轮都要更新",
      "主流 API（Anthropic、OpenAI）都支持 Prompt Cache，命中缓存可节省 90% 成本",
      "好的 Harness 会精心设计提示词结构，让稳定部分尽量靠前，最大化缓存命中率",
    ],
    diagramImg: CDN.promptLayers,
    diagramCaption: "Prompt 层级结构图：六层优先级体系，从高到低依次叠加",
    illustrationImg: CDN.promptCache,
    illustrationAlt: "提示词稳定前缀缓存与动态内容分层示意图",
    funFact: "Anthropic 的 Prompt Cache 可以让 Claude 的 API 调用成本降低高达 90%，响应速度提升 85%！",
    layoutReverse: false,
  },
  {
    id: "tool-access",
    chapterNum: "A4",
    tag: "进阶篇",
    tagColor: "green",
    title: "组件三：工具接入与调用",
    subtitle: "从「说说而已」到「真正动手」",
    description:
      "普通 LLM 只能建议你「应该这样做」；装了工具的 Agent 可以直接去做！但工具调用不是随意的——Harness 会严格把关每一次工具调用，确保安全可控。每次工具调用都经过验证：工具名合法吗？参数格式正确吗？路径在项目范围内吗？",
    keyPoints: [
      "Agent 只能使用 Harness 预先定义好的「白名单工具」，不能随意执行任意命令",
      "每次工具调用都经过验证：工具名合法吗？参数格式正确吗？路径在项目范围内吗？",
      "高危操作（删除文件、执行 Shell 命令）会暂停并请求用户手动批准",
      "工具执行结果会返回给 Agent，Agent 根据结果决定下一步行动",
    ],
    diagramImg: CDN.permissionLayers,
    diagramCaption: "权限判定链流程图：工具调用请求经过多层权限检查",
    illustrationImg: CDN.toolUse,
    illustrationAlt: "AI Agent 工具箱与权限检查示意图",
    funFact: "Claude Code 的工具箱包含约 20 种工具，但每种工具都有严格的权限边界——能力越大，约束越严。",
    layoutReverse: true,
  },
  {
    id: "context-compression",
    chapterNum: "A5",
    tag: "进阶篇",
    tagColor: "amber",
    title: "组件四：上下文瘦身",
    subtitle: "防止 AI「撑爆」",
    description:
      "AI 的「记忆」是有限的（叫做「上下文窗口」）。编程 Agent 特别容易把这个窗口塞满——读文件、看日志、工具输出……很快就没空间了。聪明的 Harness 会不断给上下文「减肥」：裁剪、压缩、去重，确保模型始终在最优状态下工作。",
    keyPoints: [
      "「裁剪（Clipping）」：超长的文件内容、工具输出会被截断，只保留关键部分",
      "「对话压缩」：早期对话历史会被总结成摘要，不再保留完整原文",
      "「去重」：同一个文件被多次读取，只在上下文中保留最新版本",
      "「近期优先」：越近的信息保留越完整，越早的信息压缩越狠",
    ],
    diagramImg: CDN.imgModelUnreliable,
    diagramCaption: "上下文管理示意：超长内容被裁剪，历史被压缩，去重后保留精华",
    illustrationImg: CDN.contextCompression,
    illustrationAlt: "上下文压缩漏斗示意图：原始数据经过过滤变成精华摘要",
    funFact: "Claude Code 有一个「Auto-compact」功能：当上下文快满时，它会自动把历史对话压缩成摘要，然后继续工作，整个过程对用户几乎透明！",
    layoutReverse: false,
  },
  {
    id: "session-memory",
    chapterNum: "A6",
    tag: "进阶篇",
    tagColor: "green",
    title: "组件五：结构化会话记忆",
    subtitle: "「完整档案」vs「核心备忘录」",
    description:
      "Agent 的记忆分两层：「完整记录」事无巨细地记录所有历史，确保关掉再开能无缝恢复；「工作记忆」只保留当前最关键的信息，维护任务连贯性。这两层各有用途，缺一不可。",
    keyPoints: [
      "「完整记录（Full Transcript）」：所有用户请求、工具输出、LLM 回答，存为 JSON 文件",
      "「工作记忆（Working Memory）」：当前任务目标、关键文件列表、重要笔记，精简版",
      "完整记录用于「恢复」：关掉 Agent 再开，能从上次中断的地方继续",
      "工作记忆用于「连贯」：在漫长的任务中，始终记住「我在做什么、做到哪了」",
    ],
    diagramImg: CDN.queryLoop,
    diagramCaption: "会话状态管理：完整记录与工作记忆双轨并行，共同支撑长任务连贯性",
    illustrationImg: CDN.sessionMemory,
    illustrationAlt: "会话记忆双层架构：完整档案柜与核心备忘录对比",
    funFact: "Claude Code 的会话文件存储在 ~/.claude/ 目录下，你可以直接查看这些 JSON 文件，看 AI 是怎么「思考」的！",
    layoutReverse: true,
  },
  {
    id: "delegation",
    chapterNum: "A7",
    tag: "进阶篇",
    tagColor: "amber",
    title: "组件六：任务委派与子智能体",
    subtitle: "「老大」带「小弟」干活",
    description:
      "当任务太复杂，一个 Agent 搞不定怎么办？摇人！主 Agent 可以创建「子 Agent」来并行处理子任务。但子 Agent 必须有严格的边界——不然很快就会变成「一群机器人在乱跑」。子 Agent 的难点不是「怎么创建」，而是「怎么约束」。",
    keyPoints: [
      "主 Agent 把复杂任务拆解成子任务，分配给多个子 Agent 并行处理",
      "子 Agent 继承足够的上下文（知道自己在做什么），但权限比主 Agent 更受限",
      "常见限制：只读访问、禁止修改代码、限制工具调用深度、禁止再创建子 Agent",
      "Claude Code 和 Codex 都支持子 Agent，但实现方式略有不同",
    ],
    diagramImg: CDN.multiAgent,
    diagramCaption: "多智能体架构图：Coordinator 协调三类专业 Worker 协同完成复杂任务",
    illustrationImg: CDN.multiAgentDelegate,
    illustrationAlt: "多智能体委派层级：协调者机器人指挥三个专业工人机器人",
    funFact: "Codex 的子 Agent 通常继承主 Agent 的沙箱环境，而不是强制只读模式——它们的边界更多体现在任务范围和执行深度上。",
    layoutReverse: false,
  },
];

// ===== Navigation =====
export const navItems = [
  { label: "首页", href: "#hero" },
  { label: "基础篇", href: "#basics" },
  { label: "进阶篇", href: "#advanced" },
  { label: "实践篇", href: "#practice" },
  { label: "大佬说", href: "#tweet-wall" },
  { label: "知识地图", href: "#knowledge-map" },
];
