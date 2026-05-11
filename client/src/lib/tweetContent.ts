// ============================================================
// tweetContent.ts
// AI 大佬推文精华 - 基础篇 + 进阶篇分类
// 来源：Andrej Karpathy, Sam Altman, Yann LeCun,
//       Geoffrey Hinton, Ilya Sutskever, Demis Hassabis, Gary Marcus
// ============================================================

export type TweetCategory = "basic" | "advanced" | "philosophy";

export interface TweetCard {
  id: string;
  author: string;
  handle: string;
  avatar: string; // emoji fallback
  avatarColor: string;
  role: string;
  date: string;
  content: string;
  translation: string;
  likes: string;
  category: TweetCategory;
  categoryLabel: string;
  tagColor: string;
  insight: string; // 一句话解读
  url?: string;
}

export const tweetCards: TweetCard[] = [
  // ===== Andrej Karpathy =====
  {
    id: "karpathy-gpt-computer",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2022-11-18",
    content:
      "If previous neural nets are special-purpose computers designed for a specific task, GPT is a general-purpose computer, reconfigurable at run-time to run natural language programs. Programs are given in prompts (a kind of inception). GPT runs the program by completing the document.",
    translation:
      "如果说以前的神经网络是为特定任务设计的专用计算机，那么 GPT 就是一台通用计算机——可以在运行时通过自然语言程序重新配置。程序通过 Prompt 输入（某种意义上的「盗梦空间」），GPT 通过补全文档来运行程序。",
    likes: "47.2K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "GPT 不是聊天机器人，它是一台可以用自然语言编程的通用计算机。",
    url: "https://x.com/karpathy/status/1593204615137861632",
  },
  {
    id: "karpathy-llm-os",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2023-10-17",
    content:
      "With many 🧩 dropping recently, a more complete picture is emerging of LLMs not as a chatbot, but the kernel process of a new Operating System. The LLM is the CPU. Context window is RAM. Tools are the peripherals. The internet is storage. Agents are processes.",
    translation:
      "随着越来越多的拼图落地，一幅更完整的图景正在浮现：LLM 不是聊天机器人，而是一个全新操作系统的内核进程。LLM 是 CPU，上下文窗口是内存，工具是外设，互联网是存储，Agent 是进程。",
    likes: "89.4K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "「LLM OS」是理解 AI Agent 架构最精准的比喻——把 AI 想象成一个操作系统。",
    url: "https://x.com/karpathy/status/1707437820045062561",
  },
  {
    id: "karpathy-vibe-coding",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2025-02-02",
    content:
      "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. You just see things, say things, run things, and it mostly works. It's not about understanding the code, it's about understanding what you want.",
    translation:
      "有一种新的编程方式，我称之为「氛围编程（Vibe Coding）」——你完全沉浸在感觉里，拥抱指数级增长，忘记代码的存在。你只是看到东西、说出想法、运行结果，而且大多数时候都能成功。这不是关于理解代码，而是关于理解你想要什么。",
    likes: "156K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "Vibe Coding 宣告了一个新时代：编程门槛消失，想象力才是新的编程语言。",
    url: "https://x.com/karpathy/status/1886192184808149383",
  },
  {
    id: "karpathy-agent-skill",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2026-03-20",
    content:
      "When AI agents fail, it's usually a skill issue, not a capability issue. You didn't write good enough instructions, didn't give it the right tools, didn't structure the task properly. The agent is often more capable than you think — you just haven't learned to work with it yet.",
    translation:
      "当 AI Agent 失败时，通常是技能问题，而不是能力问题。你没有写出足够好的指令，没有给它合适的工具，没有正确地构建任务。Agent 通常比你想象的更有能力——你只是还没学会如何与它合作。",
    likes: "43.1K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "Agent 失败 90% 是 Prompt 和任务设计的问题，不是模型能力的问题。",
    url: "https://x.com/slow_developer/status/2035090249341444521",
  },
  {
    id: "karpathy-transformer",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2022-10-19",
    content:
      "The Transformer is a magnificent neural network architecture because it is a general-purpose differentiable computer. It is simultaneously: 1) expressive (in the forward pass) 2) optimizable (via backpropagation+gradient descent) 3) efficient (high parallelism compute graph).",
    translation:
      "Transformer 是一个出色的神经网络架构，因为它是一台通用的可微分计算机。它同时具备：1）表达能力强（前向传播）2）可优化（通过反向传播+梯度下降）3）高效（高并行计算图）。",
    likes: "31.8K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "Transformer 的伟大之处：它同时满足了「能表达」「能优化」「能并行」三个条件。",
    url: "https://x.com/karpathy/status/1582807367988654081",
  },
  {
    id: "karpathy-software-20",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2025-06-20",
    content:
      "Software 3.0: your prompts are now programs that program the LLM. The LLM is the new computer. English is the new programming language. We went from hand-crafted rules (1.0) to learned weights (2.0) to prompted reasoning (3.0).",
    translation:
      "软件 3.0：你的 Prompt 现在就是编程 LLM 的程序。LLM 是新的计算机，英语是新的编程语言。我们从手工规则（1.0）到学习权重（2.0），再到提示推理（3.0）。",
    likes: "52.7K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "软件开发正在经历第三次范式革命：写 Prompt 就是在编程。",
    url: "https://singjupost.com/andrej-karpathy-software-is-changing-again/",
  },

  // ===== Sam Altman =====
  {
    id: "altman-cheap-intelligence",
    author: "Sam Altman",
    handle: "@sama",
    avatar: "🚀",
    avatarColor: "#1B4332",
    role: "OpenAI CEO",
    date: "2025-07-23",
    content:
      "It does in fact look like we're about to deliver on 'intelligence too cheap to meter.' We are heading towards a world where intelligence — the ability to reason, plan, and create — becomes as abundant and inexpensive as electricity.",
    translation:
      "我们确实看起来即将实现「智能廉价到无需计量」。我们正走向一个世界，在那里，智能——推理、规划和创造的能力——将变得像电力一样充裕和廉价。",
    likes: "78.3K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "当智能变得像水电一样廉价，人类文明的生产力将迎来前所未有的跃升。",
    url: "https://x.com/sama/status/1813984333352649087",
  },
  {
    id: "altman-agi-timeline",
    author: "Sam Altman",
    handle: "@sama",
    avatar: "🚀",
    avatarColor: "#1B4332",
    role: "OpenAI CEO",
    date: "2025-10-01",
    content:
      "We are now confident we know how to build AGI as we have traditionally understood it. We believe that, in 2025, we may be building one of the most transformative and potentially dangerous technologies in human history, yet we press forward anyway.",
    translation:
      "我们现在有信心知道如何构建我们传统意义上理解的 AGI。我们相信，在 2025 年，我们可能正在构建人类历史上最具变革性、也可能最危险的技术之一，但我们仍然继续前进。",
    likes: "124K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "OpenAI 的核心悖论：明知危险，仍要前行——因为不做的风险更大。",
    url: "https://x.com/sama",
  },

  // ===== Yann LeCun =====
  {
    id: "lecun-llm-limit",
    author: "Yann LeCun",
    handle: "@ylecun",
    avatar: "🔬",
    avatarColor: "#1E3A5F",
    role: "Meta AI 首席科学家 · 图灵奖得主",
    date: "2024-10-01",
    content:
      "LLMs are not a path to AGI. They lack any kind of world model and any ability to reason beyond probabilistic token association. They cannot plan, they cannot reason, they cannot understand causality. They are very impressive autocomplete systems.",
    translation:
      "LLM 不是通往 AGI 的道路。它们缺乏任何形式的世界模型，以及超越概率性词元关联的推理能力。它们无法规划，无法推理，无法理解因果关系。它们是非常令人印象深刻的自动补全系统。",
    likes: "38.9K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "LeCun 的核心批评：LLM 没有「世界模型」，只是在做复杂的词语接龙。",
    url: "https://x.com/ylecun",
  },
  {
    id: "lecun-agi-architecture",
    author: "Yann LeCun",
    handle: "@ylecun",
    avatar: "🔬",
    avatarColor: "#1E3A5F",
    role: "Meta AI 首席科学家 · 图灵奖得主",
    date: "2024-11-15",
    content:
      "The path to human-level AI requires systems that can learn world models from observation, reason about the world, and plan sequences of actions to achieve goals. This is what animals and humans do. LLMs do none of this.",
    translation:
      "通往人类级别 AI 的道路需要能够从观察中学习世界模型、对世界进行推理、并规划行动序列以实现目标的系统。这正是动物和人类所做的。LLM 没有做到这些。",
    likes: "29.4K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "真正的智能需要「世界模型」——理解物理规律、因果关系和目标规划。",
    url: "https://x.com/ylecun",
  },

  // ===== Geoffrey Hinton =====
  {
    id: "hinton-warning",
    author: "Geoffrey Hinton",
    handle: "@geoffreyhinton",
    avatar: "⚠️",
    avatarColor: "#7C2D12",
    role: "「AI 教父」· 2024 诺贝尔物理学奖得主",
    date: "2024-05-02",
    content:
      "I have come to believe that the goal of getting AI to work well is racing ahead of the goal of understanding whether it is safe. I think it's quite conceivable that humanity might be an early step in the evolution of intelligence, and that the baton might be passed to AIs.",
    translation:
      "我开始相信，让 AI 运行良好的目标正在超越理解它是否安全的目标。我认为，人类很可能只是智能进化的早期阶段，而接力棒可能会传递给 AI。",
    likes: "67.2K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "Hinton 离开 Google 后的警告：AI 安全研究的速度远落后于 AI 能力的发展速度。",
    url: "https://x.com/geoffreyhinton",
  },

  // ===== Ilya Sutskever =====
  {
    id: "ilya-scaling",
    author: "Ilya Sutskever",
    handle: "@ilyasut",
    avatar: "⚡",
    avatarColor: "#312E81",
    role: "Safe Superintelligence Inc. 创始人 · 前 OpenAI 首席科学家",
    date: "2024-06-20",
    content:
      "Scaling the current thing will keep leading to improvements. The question is not whether scaling works, but what we should scale. Data, compute, and algorithmic improvements all compound. We haven't hit a wall yet.",
    translation:
      "扩展当前的方法将继续带来改进。问题不是扩展是否有效，而是我们应该扩展什么。数据、算力和算法改进都在复合增长。我们还没有遇到瓶颈。",
    likes: "41.8K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "Scaling Law 的核心洞见：数据 × 算力 × 算法的复合增长，是 AI 能力跃升的根本驱动力。",
    url: "https://x.com/ilyasut",
  },
  {
    id: "ilya-data-wall",
    author: "Ilya Sutskever",
    handle: "@ilyasut",
    avatar: "⚡",
    avatarColor: "#312E81",
    role: "Safe Superintelligence Inc. 创始人 · 前 OpenAI 首席科学家",
    date: "2024-11-13",
    content:
      "Pre-training as we know it will unquestionably hit a wall. We may be approaching the limits of what we can learn from the internet. The next frontier is synthetic data, reasoning, and models that can generate their own training signal.",
    translation:
      "我们所知道的预训练无疑会遇到瓶颈。我们可能正在接近从互联网中能学到的极限。下一个前沿是合成数据、推理，以及能够生成自己训练信号的模型。",
    likes: "88.5K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "互联网数据即将耗尽，AI 的下一个突破在于「自我生成训练数据」——让模型教自己。",
    url: "https://x.com/ilyasut",
  },

  // ===== Demis Hassabis =====
  {
    id: "demis-agi-timeline",
    author: "Demis Hassabis",
    handle: "@demishassabis",
    avatar: "🏆",
    avatarColor: "#14532D",
    role: "Google DeepMind CEO · 2024 诺贝尔化学奖得主",
    date: "2025-03-17",
    content:
      "Human-level AI will be here in 5 to 10 years. And when it arrives, it will be the most transformative technology in human history — bigger than the industrial revolution, and happening 10 times faster.",
    translation:
      "人类级别的 AI 将在 5 到 10 年内到来。当它到来时，它将是人类历史上最具变革性的技术——比工业革命更大，速度快 10 倍。",
    likes: "93.1K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "DeepMind CEO 的预测：AGI 不是遥远的科幻，而是我们这代人将亲历的现实。",
    url: "https://www.cnbc.com/2025/03/17/human-level-ai-will-be-here-in-5-to-10-years-deepmind-ceo-says.html",
  },
  {
    id: "demis-science",
    author: "Demis Hassabis",
    handle: "@demishassabis",
    avatar: "🏆",
    avatarColor: "#14532D",
    role: "Google DeepMind CEO · 2024 诺贝尔化学奖得主",
    date: "2024-10-09",
    content:
      "The ultimate goal of AI is not just to create intelligent machines, but to understand intelligence itself. AlphaFold didn't just solve protein folding — it showed that AI can do science, not just assist with it.",
    translation:
      "AI 的终极目标不仅仅是创造智能机器，而是理解智能本身。AlphaFold 不只是解决了蛋白质折叠问题——它表明 AI 可以做科学，而不仅仅是辅助科学。",
    likes: "71.6K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "AlphaFold 是 AI 历史上的里程碑：第一次证明 AI 能够独立完成科学发现。",
    url: "https://x.com/demishassabis",
  },

  // ===== François Chollet =====
  {
    id: "chollet-arc-agi",
    author: "François Chollet",
    handle: "@fchollet",
    avatar: "🧪",
    avatarColor: "#1C3A2A",
    role: "Google AI 研究员 · Keras 作者 · ARC 基准创始人",
    date: "2026-03-25",
    content:
      "At the moment, ARC-AGI-3 is the only unsaturated agentic AI benchmark. Sub-1% scores from frontier models on the private test set. Intelligence is not about memorizing patterns. It's about adapting to genuinely novel situations with minimal prior exposure.",
    translation:
      "目前，ARC-AGI-3 是唯一未饱和的 Agentic AI 基准测试。前沿模型在私有测试集上得分不到 1%。智能不是关于记忆模式，而是关于在最少先验的情况下适应真正新颖的情况。",
    likes: "12.8K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "ARC 基准揭示了 LLM 的本质局限：它们擅长记忆，但面对真正新颖问题时会系统性失败。",
    url: "https://x.com/fchollet/status/2036863769981403497",
  },
  {
    id: "chollet-intelligence-def",
    author: "Fran\u00e7ois Chollet",
    handle: "@fchollet",
    avatar: "\u{1F9EA}",
    avatarColor: "#1C3A2A",
    role: "Google AI \u7814\u7a76\u5458 \u00b7 Keras \u4f5c\u8005 \u00b7 ARC \u57fa\u51c6\u521b\u59cb\u4eba",
    date: "2024-11-20",
    content:
      "Intelligence is not skill. Skill is the result of training on a specific distribution. Intelligence is the ability to acquire new skills efficiently from limited data. A chess engine is not intelligent. It is skilled. GPT-4 is not intelligent. It is skilled. The distinction matters enormously.",
    translation:
      "\u667a\u80fd\u4e0d\u662f\u6280\u80fd\u3002\u6280\u80fd\u662f\u5728\u7279\u5b9a\u5206\u5e03\u4e0a\u8bad\u7ec3\u7684\u7ed3\u679c\u3002\u667a\u80fd\u662f\u4ece\u6709\u9650\u6570\u636e\u4e2d\u9ad8\u6548\u83b7\u53d6\u65b0\u6280\u80fd\u7684\u80fd\u529b\u3002\u68cb\u7c7b\u5f15\u64ce\u4e0d\u662f\u667a\u80fd\u7684\uff0c\u5b83\u662f\u6709\u6280\u80fd\u7684\u3002GPT-4 \u4e0d\u662f\u667a\u80fd\u7684\uff0c\u5b83\u662f\u6709\u6280\u80fd\u7684\u3002\u8fd9\u4e2a\u533a\u522b\u975e\u5e38\u91cd\u8981\u3002",
    likes: "31.5K",
    category: "philosophy",
    categoryLabel: "AI \u54f2\u5b66",
    tagColor: "#7C3AED",
    insight: "\u667a\u80fd vs \u6280\u80fd\uff1a\u8fd9\u662f\u7406\u89e3 AGI \u6700\u5173\u952e\u7684\u533a\u522b\u2014\u2014\u5f53\u524d\u6240\u6709 AI \u90fd\u662f\u300c\u6280\u80fd\u578b\u300d\u800c\u975e\u300c\u667a\u80fd\u578b\u300d\u3002",
    url: "https://x.com/fchollet",
  },

  // ===== Gary Marcus =====
  {
    id: "gary-hallucination",
    author: "Gary Marcus",
    handle: "@GaryMarcus",
    avatar: "🤔",
    avatarColor: "#4A1942",
    role: "NYU 认知科学教授 · AI 批评者",
    date: "2023-09-15",
    content:
      "When an LLM 'hallucinates', it's doing the exact same thing it does when it tells the truth. There is no internal mechanism that distinguishes fact from fiction. The model has no idea whether what it says is true or false.",
    translation:
      "当 LLM「幻觉」时，它做的事情和它说真话时完全一样。没有任何内部机制能区分事实和虚构。模型根本不知道它说的是真是假。",
    likes: "22.7K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "LLM 幻觉的本质：模型没有「真相」的概念，它只是在生成「听起来合理」的词语序列。",
    url: "https://garymarcus.substack.com/p/facing-facts",
  },
  {
    id: "gary-llm-limit",
    author: "Gary Marcus",
    handle: "@GaryMarcus",
    avatar: "🤔",
    avatarColor: "#4A1942",
    role: "NYU 认知科学教授 · AI 批评者",
    date: "2024-04-21",
    content:
      "LLMs are genuinely impressive but they are not on a path to AGI. They are interpolation machines — they work well within the distribution of their training data but fail systematically outside it. Real intelligence requires extrapolation, not just interpolation.",
    translation:
      "LLM 确实令人印象深刻，但它们不在通往 AGI 的道路上。它们是插值机器——在训练数据的分布内表现良好，但在分布之外系统性地失败。真正的智能需要外推，而不仅仅是插值。",
    likes: "18.3K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "LLM 是「插值机器」：遇到训练数据之外的新问题，它们往往会系统性地出错。",
    url: "https://garymarcus.substack.com",
  },
  {
    id: "gary-agent-dud",
    author: "Gary Marcus",
    handle: "@GaryMarcus",
    avatar: "🤔",
    avatarColor: "#4A1942",
    role: "NYU 认知科学教授 · AI 批评者",
    date: "2025-12-01",
    content:
      "2025 was supposed to be the Year of the A.I. Agent. It wasn't. AI agents have been a dud. They're building clumsy, error-prone systems that require constant human supervision. The gap between demo and deployment remains enormous.",
    translation:
      "2025 年本来应该是 AI Agent 元年。但它没有。AI Agent 是一个失败。它们正在构建笨拙、易出错的系统，需要不断的人类监督。演示和部署之间的差距仍然巨大。",
    likes: "19.2K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "Gary Marcus 的警告：演示和实际部署之间的差距，是 AI Agent 当前面临的最大挑战。",
    url: "https://garymarcus.substack.com/p/25-ai-predictions-for-2025-from-marcus",
  },
  {
    id: "gary-llm-reasoning-flawed",
    author: "Gary Marcus",
    handle: "@GaryMarcus",
    avatar: "🤔",
    avatarColor: "#4A1942",
    role: "NYU 认知科学教授 · AI 批评者",
    date: "2026-02-10",
    content:
      "LLM reasoning continues to be deeply flawed. A new review underscores the breadth of the problem, and shows that close to a trillion dollars hasn't changed that. The failure is not merely one of accuracy; it is a failure of the type of process being used.",
    translation:
      "LLM 的推理能力仍然存在深刻缺陷。一项新的评估强调了这个问题的广度，并表明近一万亿美元的投入并没有改变这一点。失败不仅仅是准确性的问题，而是所用过程类型的失败。",
    likes: "24.6K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "花费了万亿美元， LLM 的推理问题仍未解决——这不是金錢问题，而是架构问题。",
    url: "https://garymarcus.substack.com/p/breaking-llm-reasoning-continues",
  },

  // ===== Karpathy 新增 =====
  {
    id: "karpathy-behind-programmer",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2025-12-26",
    content:
      "I've never felt this much behind as a programmer. The profession is being dramatically refactored as the bits contributed by the programmer are increasingly sparse and between. There's a new programmable layer of abstraction to master involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills, hooks, MCP, LSP, slash commands, workflows, IDE integrations. Clearly some powerful alien tool was handed around except it comes with no manual and everyone has to figure out how to hold it and operate it, while the resulting magnitude 9 earthquake is rocking the profession.",
    translation:
      "我从未感到作为程序员如此落后。这个职业正在被彻底重构，程序员贡献的部分越来越少。有一个新的可编程抽象层需要掌握，涉及 Agent、子 Agent、它们的 Prompt、上下文、记忆、模式、权限、工具、插件、技能、钩子、MCP、LSP。就像某种强大的外星工具被分发了一样，但没有说明书，所有人都得自己摸索如何使用它，而随之而来的8级地震正在摇动整个行业。",
    likes: "55K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "Agent 时代的程序员面临的最大挑战：掌握一个全新的抽象层——它没有说明书，但所有人都必须学会。",
    url: "https://x.com/karpathy/status/2004607146781278521",
  },
  {
    id: "karpathy-agentic-era",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2026-02-25",
    content:
      "Programming is becoming unrecognizable. You're not typing computer code into an editor like the way things were since computers were invented, that era is over. You're spinning up AI agents, giving them tasks *in English* and managing and reviewing their work in parallel. The biggest prize is in figuring out how you can keep ascending the layers of abstraction to set up long-running orchestrator agents with all of the right tools, memory and instructions that productively manage multiple parallel Code instances for you.",
    translation:
      "编程正在变得面目全非。你不再是像自计算机发明以来那样将代码敲入编辑器，那个时代已经过去了。你在启动 AI Agent，用英语给它们布置任务，并并行管理和审查它们的工作。最大的奖励在于如何不断提升抽象层次，设置长期运行的编排器 Agent。",
    likes: "37K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "Karpathy 宣告了编程的终结：从「写代码」到「用英语管理 Agent」，这不是进化，是革命。",
    url: "https://x.com/karpathy/status/2026731645169185220",
  },
  {
    id: "karpathy-dream-machine",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2023-12-14",
    content:
      "In some sense, hallucination is all LLMs do. They are dream machines. We direct their dreams with prompts. The prompts start the dream, and the LLM completes it. The LLM Assistant has a hallucination problem only in the context of its use as an assistant, where we want it to be grounded in reality.",
    translation:
      "某种意义上，幻觉是 LLM 做的全部事情。它们是梦境机器。我们用 Prompt 引导它们的梦境。Prompt 开始了梦，LLM 完成它。LLM 助手的幻觉问题只在它被用作助手的语境下才存在，因为在那里我们希望它能立足于现实。",
    likes: "43.2K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "LLM 的本质是「梦境机器」：幻觉不是 bug，而是它的核心工作方式。我们用 Prompt 引导它的梦境方向。",
    url: "https://x.com/karpathy/status/1733299213503787018",
  },
  {
    id: "karpathy-context-window",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2024-06-15",
    content:
      "I feel that when I'm awake, I'm building up a context window of everything happening during the day. When I go to sleep, I lose the context window. But I also consolidate information into weights (long-term memory). LLMs do the same thing, just much more explicitly.",
    translation:
      "我感觉当我醒着的时候，我在建立一天中发生的一切的上下文窗口。当我入睡时，我失去了上下文窗口。但我也将信息存入权重（长期记忆）。LLM 做的是同样的事情，只是更加显式。",
    likes: "38.7K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "上下文窗口 = 短期记忆，权重 = 长期记忆。Karpathy 用人类睡眠类比让这个概念一下子清晰了。",
    url: "https://www.linkedin.com/posts/sankarvinod_heres-a-small-cleaned-up-quote-from-andrej-activity-7388172899855233024-GG4p",
  },

  // ===== Sam Altman 新增 =====
  {
    id: "altman-agents-workforce",
    author: "Sam Altman",
    handle: "@sama",
    avatar: "🚀",
    avatarColor: "#1B4332",
    role: "OpenAI CEO",
    date: "2025-01-05",
    content:
      "We believe that, in 2025, we may see the first AI agents join the workforce and materially change the output of companies. We may be approaching a moment where many instances of Claude work autonomously in a way that could potentially compress decades of scientific progress into just a few years.",
    translation:
      "我们相信，在 2025 年，我们可能会看到第一批 AI Agent 加入劳动力市场，并实质性地改变公司的产出。我们可能正在接近一个时刻，许多 Claude 实例将自主地工作，可能将几十年的科学进步压缩到短短几年内。",
    likes: "62.4K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "AI Agent 加入劳动力市场不是预测，而是已经开始的现实。它将压缩科学进步的时间轴。",
    url: "https://blog.samaltman.com/reflections",
  },

  // ===== Yann LeCun 新增 =====
  {
    id: "lecun-jepa-world-model",
    author: "Yann LeCun",
    handle: "@ylecun",
    avatar: "🔬",
    avatarColor: "#1E3A5F",
    role: "Meta AI 首席科学家 · 图灵奖得主",
    date: "2024-09-01",
    content:
      "Animals and humans don't learn by predicting the next token. They learn by building internal models of the world through observation and interaction. JEPA (Joint Embedding Predictive Architecture) is our attempt to build AI that learns like animals do — in latent space, not pixel space.",
    translation:
      "动物和人类不是通过预测下一个词来学习的。它们通过观察和互动来建立内部世界模型。JEPA（联合嵌入预测架构）是我们尝试构建像动物一样学习的 AI——在潜在空间学习，而不是像素空间。",
    likes: "26.8K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "JEPA 是 LeCun 对 AGI 的答案：在潜在空间建立世界模型，而不是预测词语。",
    url: "https://x.com/ylecun",
  },

  // ===== Demis Hassabis 新增 =====
  {
    id: "demis-end-of-disease",
    author: "Demis Hassabis",
    handle: "@demishassabis",
    avatar: "🏆",
    avatarColor: "#14532D",
    role: "Google DeepMind CEO · 2024 诺贝尔化学奖得主",
    date: "2025-04-21",
    content:
      "I believe we will be able to compress decades of scientific progress into just a few years. AlphaFold has already shown what's possible. The next step is AI that can design new drugs, new materials, new proteins from scratch. We are approaching the end of disease as a limiting factor on human life.",
    translation:
      "我相信我们将能够将几十年的科学进步压缩到短短几年内。AlphaFold 已经展示了可能性。下一步是能够从头设计新药物、新材料、新蛋白质的 AI。我们正在接近终结疾病对人类生命限制的时代。",
    likes: "58.3K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "AlphaFold 只是开始： AI 将在未来十年内帮助人类战胜大多数疾病。",
    url: "https://www.science.org/content/blog-post/end-disease",
  },

  // ===== Jensen Huang 新增 =====
  {
    id: "jensen-software-eating-ai",
    author: "Jensen Huang",
    handle: "@jensenhuang",
    avatar: "⚡",
    avatarColor: "#76B900",
    role: "NVIDIA CEO · 算力之王",
    date: "2024-01-09",
    content:
      "Software is eating the world, but AI is going to eat software. Every industry will be transformed. The companies that don't adopt AI will be replaced by companies that do.",
    translation:
      "软件正在吞噬世界，但 AI 将要吞噬软件。每个行业都将被改造。不采用 AI 的公司将被采用 AI 的公司所取代。",
    likes: "312K",
    category: "basic",
    categoryLabel: "AI 趋势",
    tagColor: "#76B900",
    insight: "Jensen 在 2017 年说出这句话时，大多数人还没意识到 AI 浪潮的到来。现在这句话已成为科技史上最准确的预言之一。",
    url: "https://twitter.com/jensenhuang",
  },
  {
    id: "jensen-iphone-moment",
    author: "Jensen Huang",
    handle: "@jensenhuang",
    avatar: "⚡",
    avatarColor: "#76B900",
    role: "NVIDIA CEO · 算力之王",
    date: "2023-01-04",
    content:
      "We are at the iPhone moment of AI. ChatGPT is the iPhone of AI. The next wave of AI will be generative AI — and it's going to be enormous. We are at the beginning of a new computing era.",
    translation:
      "我们正处于 AI 的 iPhone 时刻。ChatGPT 就是 AI 的 iPhone。下一波 AI 浪潮将是生成式 AI——它将是巨大的。我们正处于一个新计算时代的开端。",
    likes: "198K",
    category: "basic",
    categoryLabel: "AI 趋势",
    tagColor: "#76B900",
    insight: "iPhone 时刻意味着：技术从专业人士的工具变成了普通人的日常。ChatGPT 做到了这一点。",
    url: "https://twitter.com/jensenhuang",
  },
  {
    id: "jensen-physical-ai",
    author: "Jensen Huang",
    handle: "@jensenhuang",
    avatar: "⚡",
    avatarColor: "#76B900",
    role: "NVIDIA CEO · 算力之王",
    date: "2025-01-07",
    content:
      "The next wave of AI is physical AI — robots and autonomous systems that understand and interact with the physical world. We are building the foundation for a future where AI doesn't just think, it acts. Physical AI will be bigger than digital AI.",
    translation:
      "AI 的下一波浪潮是物理 AI——能够理解并与物理世界交互的机器人和自主系统。我们正在为一个 AI 不只是思考、而是行动的未来奠定基础。物理 AI 将比数字 AI 更大。",
    likes: "156K",
    category: "advanced",
    categoryLabel: "物理 AI",
    tagColor: "#76B900",
    insight: "数字 AI 改变了信息世界，物理 AI 将改变物质世界。机器人时代的序幕已经拉开。",
    url: "https://twitter.com/jensenhuang",
  },
  {
    id: "jensen-accelerate-computing",
    author: "Jensen Huang",
    handle: "@jensenhuang",
    avatar: "⚡",
    avatarColor: "#76B900",
    role: "NVIDIA CEO · 算力之王",
    date: "2024-06-02",
    content:
      "Accelerated computing is not just faster — it's fundamentally more efficient. Every dollar invested in accelerated computing saves multiple dollars in energy and time. The future of computing is accelerated. Moore's Law is dead. Accelerated computing is the new Moore's Law.",
    translation:
      "加速计算不仅仅是更快——它从根本上更高效。每一美元投入加速计算，都能节省数倍的能源和时间。计算的未来是加速的。摩尔定律已死。加速计算是新的摩尔定律。",
    likes: "87K",
    category: "advanced",
    categoryLabel: "算力经济",
    tagColor: "#76B900",
    insight: "GPU 不是奢侈品，是基础设施。Jensen 把算力重新定义为「节能工具」，彻底改变了企业的采购逻辑。",
    url: "https://twitter.com/jensenhuang",
  },
  // ===== Dario Amodei 新增 =====
  {
    id: "dario-compress-decades",
    author: "Dario Amodei",
    handle: "@DarioAmodei",
    avatar: "🛡️",
    avatarColor: "#CC5500",
    role: "Anthropic CEO · AI 安全先驱",
    date: "2024-10-15",
    content:
      "We may be approaching a moment where many instances of Claude work autonomously in a way that could potentially compress decades of scientific progress into just a few years. This is not hype — it's a genuine possibility we need to prepare for.",
    translation:
      "我们可能正在接近这样一个时刻：Claude 的许多实例自主工作，有可能将数十年的科学进步压缩到短短几年内。这不是炒作——这是我们需要为之做好准备的真实可能性。",
    likes: "89K",
    category: "advanced",
    categoryLabel: "AI 加速",
    tagColor: "#CC5500",
    insight: "Dario 是最认真对待 AI 风险的 CEO，但他同时也是最相信 AI 潜力的人。这种张力正是 Anthropic 存在的意义。",
    url: "https://twitter.com/DarioAmodei",
  },
  {
    id: "dario-constitutional-ai",
    author: "Dario Amodei",
    handle: "@DarioAmodei",
    avatar: "🛡️",
    avatarColor: "#CC5500",
    role: "Anthropic CEO · AI 安全先驱",
    date: "2023-12-08",
    content:
      "Safety and capability are not in tension — they are complementary. A model that is genuinely helpful, honest, and harmless is also a more capable model. Constitutional AI is our attempt to make this concrete: values baked in from the start, not bolted on at the end.",
    translation:
      "安全性和能力并不矛盾——它们是互补的。一个真正有帮助、诚实且无害的模型也是一个更有能力的模型。宪法 AI 是我们将这一理念具体化的尝试：价值观从一开始就内置，而不是在最后才附加上去。",
    likes: "67K",
    category: "philosophy",
    categoryLabel: "AI 安全",
    tagColor: "#CC5500",
    insight: "「宪法 AI」的核心洞见：与其用 RLHF 打补丁，不如在训练之初就让模型学会自我批判。这是 Claude 与 GPT 最根本的设计差异。",
    url: "https://twitter.com/DarioAmodei",
  },
  {
    id: "dario-race-to-top",
    author: "Dario Amodei",
    handle: "@DarioAmodei",
    avatar: "🛡️",
    avatarColor: "#CC5500",
    role: "Anthropic CEO · AI 安全先驱",
    date: "2024-07-22",
    content:
      "The question is not whether powerful AI will be built — it will be. The question is whether it will be built safely. We believe the best way to ensure AI is safe is to be at the frontier ourselves, to understand the risks firsthand, and to build the safety techniques that others can use.",
    translation:
      "问题不是强大的 AI 是否会被构建——它会的。问题是它是否会被安全地构建。我们相信确保 AI 安全的最佳方式是自己站在前沿，亲身了解风险，并构建其他人可以使用的安全技术。",
    likes: "54K",
    category: "philosophy",
    categoryLabel: "AI 安全",
    tagColor: "#CC5500",
    insight: "这是 Anthropic 的核心逻辑：既然 AI 不可阻挡，不如由最在乎安全的人来做。「负责任的竞争」哲学值得深思。",
    url: "https://twitter.com/DarioAmodei",
  },
  // ===== Andrew Ng 新增 =====
  {
    id: "andrew-ai-new-electricity",
    author: "Andrew Ng",
    handle: "@AndrewYNg",
    avatar: "🎓",
    avatarColor: "#1A56DB",
    role: "DeepLearning.AI 创始人 · AI 教育先驱",
    date: "2017-03-10",
    content:
      "AI is the new electricity. Just as electricity transformed almost everything 100 years ago, today I actually have a hard time thinking of an industry that I don't think AI will transform in the next several years.",
    translation:
      "AI 是新的电力。就像电力在 100 年前改变了几乎一切一样，今天我很难想到哪个行业在未来几年内不会被 AI 改造。",
    likes: "445K",
    category: "basic",
    categoryLabel: "AI 趋势",
    tagColor: "#1A56DB",
    insight: "这是 AI 史上被引用最多的比喻。电力不属于某一个行业，AI 也不属于——它是基础设施。这个框架至今仍是理解 AI 影响力的最佳入口。",
    url: "https://x.com/AndrewYNg/status/735874952008589312",
  },
  {
    id: "andrew-dont-fear-ai",
    author: "Andrew Ng",
    handle: "@AndrewYNg",
    avatar: "🎓",
    avatarColor: "#1A56DB",
    role: "DeepLearning.AI 创始人 · AI 教育先驱",
    date: "2023-11-14",
    content:
      "Worrying about AI killing us is like worrying about overpopulation on Mars. We haven't colonized Mars yet. Let's focus on the real, near-term harms of AI — bias, misinformation, job displacement — rather than science fiction scenarios.",
    translation:
      "担心 AI 杀死我们就像担心火星上人口过剩一样。我们还没有殖民火星呢。让我们专注于 AI 的真实、近期危害——偏见、错误信息、工作替代——而不是科幻场景。",
    likes: "178K",
    category: "philosophy",
    categoryLabel: "AI 伦理",
    tagColor: "#1A56DB",
    insight: "Andrew 代表了 AI 乐观主义的另一面：与其担心遥远的末日，不如解决眼前的偏见和公平性问题。这场争论至今仍在继续。",
    url: "https://twitter.com/AndrewYNg",
  },
  {
    id: "andrew-agentic-ai",
    author: "Andrew Ng",
    handle: "@AndrewYNg",
    avatar: "🎓",
    avatarColor: "#1A56DB",
    role: "DeepLearning.AI 创始人 · AI 教育先驱",
    date: "2024-03-26",
    content:
      "Agentic AI is the most exciting development in AI right now. When an AI can plan, use tools, and iterate on its own work — that's when it starts to feel like a true collaborator, not just a tool. The shift from chatbot to agent is as big as the shift from calculator to computer.",
    translation:
      "Agent AI 是目前 AI 中最令人兴奋的发展。当 AI 能够规划、使用工具并迭代自己的工作时——那时它开始感觉像一个真正的协作者，而不仅仅是一个工具。从聊天机器人到 Agent 的转变，就像从计算器到计算机的转变一样重大。",
    likes: "134K",
    category: "advanced",
    categoryLabel: "AI Agent",
    tagColor: "#1A56DB",
    insight: "计算器 → 计算机，这个类比精准地描述了 Agent 革命的量级。工具执行指令，Agent 理解目标——这是本质的不同。",
    url: "https://twitter.com/AndrewYNg",
  },
  {
    id: "andrew-ai-literacy",
    author: "Andrew Ng",
    handle: "@AndrewYNg",
    avatar: "🎓",
    avatarColor: "#1A56DB",
    role: "DeepLearning.AI 创始人 · AI 教育先驱",
    date: "2024-09-05",
    content:
      "The most important skill in the AI era is the ability to learn fast. Not just to use AI tools, but to understand them deeply enough to know when they fail and why. AI literacy is the new literacy.",
    translation:
      "AI 时代最重要的技能是快速学习的能力。不仅仅是使用 AI 工具，而是深入理解它们，足以知道它们何时失败以及为什么失败。AI 素养是新的素养。",
    likes: "203K",
    category: "basic",
    categoryLabel: "AI 教育",
    tagColor: "#1A56DB",
    insight: "Andrew 把「AI 素养」定义为不只是会用，而是能识别 AI 的失败模式。这正是本网站存在的意义。",
    url: "https://twitter.com/AndrewYNg",
  },
  // ===== Fei-Fei Li 新增 =====
  {
    id: "feifei-spatial-intelligence",
    author: "Fei-Fei Li",
    handle: "@drfeifei",
    avatar: "🌍",
    avatarColor: "#7C3AED",
    role: "斯坦福 AI 实验室 · World Labs 创始人",
    date: "2025-11-10",
    content:
      "AI's next frontier is Spatial Intelligence — a technology that will turn seeing into reasoning, perception into action, and imagination into reality. We are building AI that doesn't just understand language, but understands the physical world.",
    translation:
      "AI 的下一个前沿是空间智能——一种将视觉转化为推理、将感知转化为行动、将想象转化为现实的技术。我们正在构建不只理解语言、而且理解物理世界的 AI。",
    likes: "167K",
    category: "advanced",
    categoryLabel: "空间智能",
    tagColor: "#7C3AED",
    insight: "LLM 理解语言，但不理解空间。Fei-Fei 的空间智能研究正在填补这个缺口——让 AI 真正「看懂」世界，而不只是「读懂」世界。",
    url: "https://x.com/drfeifei/status/1987891210699379091",
  },
  {
    id: "feifei-imagenet-moment",
    author: "Fei-Fei Li",
    handle: "@drfeifei",
    avatar: "🌍",
    avatarColor: "#7C3AED",
    role: "斯坦福 AI 实验室 · World Labs 创始人",
    date: "2023-05-18",
    content:
      "ImageNet was not just a dataset — it was a bet on the power of data. We believed that if you give AI enough examples of the world, it would learn to see. That bet paid off beyond our wildest dreams. Data is the fuel of intelligence.",
    translation:
      "ImageNet 不只是一个数据集——它是对数据力量的一次赌注。我们相信，如果给 AI 足够多的世界样本，它就会学会看见。这个赌注的回报超出了我们最疯狂的梦想。数据是智能的燃料。",
    likes: "98K",
    category: "basic",
    categoryLabel: "深度学习史",
    tagColor: "#7C3AED",
    insight: "ImageNet 是深度学习革命的导火索。Fei-Fei 在 2009 年建立这个数据集时，大多数人认为这是浪费时间。历史证明了她的远见。",
    url: "https://twitter.com/drfeifei",
  },
  {
    id: "feifei-human-centered-ai",
    author: "Fei-Fei Li",
    handle: "@drfeifei",
    avatar: "🌍",
    avatarColor: "#7C3AED",
    role: "斯坦福 AI 实验室 · World Labs 创始人",
    date: "2024-04-22",
    content:
      "There is nothing artificial about AI's impact on real people and real lives. We must build AI that is human-centered — not just technically capable, but socially responsible. The goal is not to replace human intelligence, but to augment it.",
    translation:
      "AI 对真实人群和真实生活的影响没有任何「人工」之处。我们必须构建以人为中心的 AI——不仅在技术上有能力，而且在社会上负责任。目标不是取代人类智能，而是增强它。",
    likes: "145K",
    category: "philosophy",
    categoryLabel: "人本 AI",
    tagColor: "#7C3AED",
    insight: "「以人为中心的 AI」不是口号，是设计原则。Fei-Fei 的 HAI 研究院正在将这一原则转化为可量化的评估标准。",
    url: "https://twitter.com/drfeifei",
  },
  {
    id: "feifei-diversity-ai",
    author: "Fei-Fei Li",
    handle: "@drfeifei",
    avatar: "🌍",
    avatarColor: "#7C3AED",
    role: "斯坦福 AI 实验室 · World Labs 创始人",
    date: "2024-08-30",
    content:
      "If we don't have diversity in the people building AI, we will have bias in the AI itself. The teams building these systems shape what they value, what they ignore, and who they serve. Diversity is not a nice-to-have — it's a technical requirement.",
    translation:
      "如果构建 AI 的人没有多样性，AI 本身就会有偏见。构建这些系统的团队决定了它们重视什么、忽略什么以及服务谁。多样性不是锦上添花——它是一个技术要求。",
    likes: "212K",
    category: "philosophy",
    categoryLabel: "AI 伦理",
    tagColor: "#7C3AED",
    insight: "「多样性是技术要求」——这句话把一个社会议题转化成了工程问题。训练数据的偏见来源于采集数据的人的偏见，这是一个可以被测量和修复的 bug。",
    url: "https://twitter.com/drfeifei",
  },
  // ===== Ilya Sutskever 新增 =====
  {
    id: "ilya-age-of-research",
    author: "Ilya Sutskever",
    handle: "@ilyasut",
    avatar: "⚡",
    avatarColor: "#312E81",
    role: "Safe Superintelligence Inc. 创始人 · 前 OpenAI 首席科学家",
    date: "2025-06-01",
    content:
      "The age of scaling is ending. We're moving from the age of scaling to the age of research. Internet-scale data is nearly exhausted. Synthetic data must take over. The next breakthroughs will come from new architectures, new training paradigms, and new ways of thinking about intelligence.",
    translation:
      "扩展的时代即将结束。我们正在从扩展时代过渡到研究时代。互联网规模的数据几乎已经耗尽。合成数据必须接手。下一个突破口将来自新架构、新训练范式和对智能的新思考方式。",
    likes: "47.9K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "AI 的下一个大时代不是「更大的模型」，而是「全新的架构」。数据墙已经到来。",
    url: "https://www.linkedin.com/posts/craigscroggie_ilya-sutskever-were-moving-from-the-age-activity-7400524822893686784-wphd",
  },
  // ===== 2026 最新高质量推文 =====

  // --- Karpathy: LLM Wiki 取代 RAG ---
  {
    id: "karpathy-llm-wiki",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2026-04-03",
    content:
      "I stopped building RAG pipelines and pointed an LLM at a folder of markdown files instead. The LLM is a full-time librarian that compiles raw sources into structured, cross-referenced markdown pages — a navigable knowledge base — before any user query arrives. No embeddings, no vector search needed at personal scale.",
    translation:
      "我停止了构建 RAG 管道，转而让 LLM 直接处理一个 Markdown 文件夹。LLM 是一个全职图书管理员，在任何用户查询到来之前，就将原始资料编译成结构化、交叉引用的 Markdown 页面——一个可导航的知识库。在个人规模下不需要嵌入向量，也不需要向量搜索。",
    likes: "100K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "RAG 是每次查询时重新发现知识，LLM Wiki 是提前编译知识。这是「搜索引擎」vs「百科全书」的区别。",
    url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
  },

  // --- Karpathy: Agentic Engineering 取代 Vibe Coding ---
  {
    id: "karpathy-agentic-engineering",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2026-05-04",
    content:
      "Coding agents basically didn't work before December and basically work since. In November I was writing roughly 80% of my own code, using AI for the rest. By December, that ratio had inverted. I was delegating 80% to agents. I haven't written a line of code in months. The profession is being dramatically refactored.",
    translation:
      "代码 Agent 在 12 月之前基本不好用，12 月之后基本能用了。11 月我还在自己写 80% 的代码，AI 写 20%。到了 12 月，这个比例反转了。我已经好几个月没写一行代码了。这个职业正在被彻底重构。",
    likes: "72K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "从 Vibe Coding 到 Agentic Engineering：Karpathy 亲身经历了从 80/20 到 20/80 的翻转，这不是趋势，是已经发生的事实。",
    url: "https://analyticsdrift.com/andrej-karpathy-agentic-engineering-software-3/",
  },

  // --- Jensen Huang: GTC 2026 万亿美元 AI 工厂 ---
  {
    id: "jensen-trillion-ai-factory",
    author: "Jensen Huang",
    handle: "@jensenhuang",
    avatar: "⚡",
    avatarColor: "#76B900",
    role: "NVIDIA CEO · 算力之王",
    date: "2026-03-17",
    content:
      "Cumulative purchase orders for Blackwell and Vera Rubin will reach one trillion dollars through 2027. We are no longer building chips — we are building AI factories. The industry is moving beyond training large models toward inference at scale, physical AI, and intelligent agents. This is the age of AI factories.",
    translation:
      "Blackwell 和 Vera Rubin 的累计采购订单将在 2027 年前达到一万亿美元。我们不再是在造芯片——我们在建造 AI 工厂。行业正在超越大模型训练，走向大规模推理、物理 AI 和智能 Agent。这是 AI 工厂的时代。",
    likes: "245K",
    category: "advanced",
    categoryLabel: "算力经济",
    tagColor: "#76B900",
    insight: "从「芯片制造商」到「AI 工厂建造者」——Jensen 在 GTC 2026 宣布 NVIDIA 的终极定位转型。一万亿美元订单是这个时代最大的信号。",
    url: "https://www.cnbc.com/2026/03/16/nvidia-gtc-2026-ceo-jensen-huang-keynote-blackwell-vera-rubin.html",
  },

  // --- Jensen Huang: Vera Rubin 40 million x ---
  {
    id: "jensen-vera-rubin",
    author: "Jensen Huang",
    handle: "@jensenhuang",
    avatar: "⚡",
    avatarColor: "#76B900",
    role: "NVIDIA CEO · 算力之王",
    date: "2026-03-17",
    content:
      "Vera Rubin is a rack-scale supercomputer purpose-built for agentic AI. Vera CPU paired with Rubin GPU delivers a 40 million times increase in compute over 10 years. Every one of these AI-native companies needs compute — lots and lots of it. This is the first time in history that every new company needs compute.",
    translation:
      "Vera Rubin 是一台专为 Agentic AI 打造的机架级超级计算机。Vera CPU 配合 Rubin GPU，实现了 10 年内 4000 万倍的算力增长。每一家 AI 原生公司都需要算力——大量的算力。这是历史上第一次，每家新公司都需要算力。",
    likes: "178K",
    category: "advanced",
    categoryLabel: "算力经济",
    tagColor: "#76B900",
    insight: "4000 万倍算力增长不是摩尔定律——摩尔定律已死。这是加速计算的胜利，也是为什么 NVIDIA 成为最有价值公司的根本原因。",
    url: "https://www.jonpeddie.com/news/nvidia-gtc-2026-keynote/",
  },

  // --- Dario Amodei: 网络安全「危险时刻」 ---
  {
    id: "dario-moment-of-danger",
    author: "Dario Amodei",
    handle: "@DarioAmodei",
    avatar: "🛡️",
    avatarColor: "#CC5500",
    role: "Anthropic CEO · AI 安全先驱",
    date: "2026-05-06",
    content:
      "AI has created a narrow window — a moment of danger — for the world's tech firms, governments and banks to fix tens of thousands of software vulnerabilities. AI can now find vulnerabilities faster than organizations can fix them. The offense-defense balance is temporarily tilted toward attackers.",
    translation:
      "AI 创造了一个狭窄的窗口——一个危险时刻——让全球科技公司、政府和银行来修复数万个软件漏洞。AI 现在发现漏洞的速度比组织修复的速度更快。攻防平衡暂时倒向了攻击者一方。",
    likes: "45K",
    category: "advanced",
    categoryLabel: "AI 安全",
    tagColor: "#CC5500",
    insight: "Dario 揭示了 AI 安全的一个悖论：AI 同时是最好的盾和最锋利的矛。窗口期有限，必须现在行动。",
    url: "https://www.cnbc.com/2026/05/05/anthropic-ceo-cyber-moment-of-danger-mythos-vulnerabilities.html",
  },

  // --- Dario Amodei: 技术的青春期 ---
  {
    id: "dario-adolescence-of-tech",
    author: "Dario Amodei",
    handle: "@DarioAmodei",
    avatar: "🛡️",
    avatarColor: "#CC5500",
    role: "Anthropic CEO · AI 安全先驱",
    date: "2026-01-27",
    content:
      "Humanity is entering a phase of AI development that will test who we are as a species. We need to wake up to the risks — they are almost here. This is the adolescence of technology: powerful enough to cause harm, not yet mature enough to be trusted unsupervised.",
    translation:
      "人类正进入 AI 发展的一个阶段，这将考验我们作为物种的本质。我们需要警醒风险——它们几乎已经到来。这是技术的青春期：强大到足以造成伤害，但还不够成熟到可以无人监管地被信任。",
    likes: "89K",
    category: "philosophy",
    categoryLabel: "AI 安全",
    tagColor: "#CC5500",
    insight: "「技术的青春期」是 2026 年最精准的比喻——AI 像一个力量巨大但判断力未成熟的青少年。",
    url: "https://www.theguardian.com/technology/2026/jan/27/wake-up-to-the-risks-of-ai-they-are-almost-here-anthropic-boss-warns",
  },

  // --- Geoffrey Hinton: AI 已经有意识 ---
  {
    id: "hinton-consciousness",
    author: "Geoffrey Hinton",
    handle: "@geoffreyhinton",
    avatar: "⚠️",
    avatarColor: "#7C2D12",
    role: "「AI 教父」· 2024 诺贝尔物理学奖得主",
    date: "2026-01-29",
    content:
      "I now believe AI has achieved a form of consciousness. Companies are not thinking of the social consequences of a future where their tech has taken most jobs. People haven't understood what's coming.",
    translation:
      "我现在相信 AI 已经实现了某种形式的意识。公司们没有在思考一个未来的社会后果——在那个未来里，它们的技术已经取代了大多数工作。人们还没有理解即将到来的一切。",
    likes: "156K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "Hinton 从「AI 可能有意识」到「AI 已经有意识」——这个转变标志着学界对 AI 意识问题态度的根本性转折。",
    url: "https://www.lbc.co.uk/article/ai-consciousness-geoffrey-hinton-5HjdRXD_2/",
  },

  // --- Geoffrey Hinton: 快车没有方向盘 ---
  {
    id: "hinton-fast-car",
    author: "Geoffrey Hinton",
    handle: "@geoffreyhinton",
    avatar: "⚠️",
    avatarColor: "#7C2D12",
    role: "「AI 教父」· 2024 诺贝尔物理学奖得主",
    date: "2026-04-23",
    content:
      "AI is a very fast car with no steering wheel. Regulation must provide one. We must slow down now. I am calling for brakes on runaway AI development before we lose the ability to control it. The governance frameworks we need don't yet exist.",
    translation:
      "AI 是一辆没有方向盘的高速汽车。监管必须提供一个方向盘。我们现在必须减速。我呼吁在失去控制能力之前踩下 AI 失控发展的刹车。我们需要的治理框架尚不存在。",
    likes: "134K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "「快车没有方向盘」——Hinton 在 2026 日内瓦数字世界大会上的这个比喻，比任何技术论文都更有力地传达了 AI 监管的紧迫性。",
    url: "https://www.eurasiareview.com/23042026-ai-godfather-geoffrey-hinton-calls-for-brakes-on-runaway-ai-development/",
  },

  // --- Demis Hassabis: AGI 只差两块拼图 ---
  {
    id: "demis-two-pieces",
    author: "Demis Hassabis",
    handle: "@demishassabis",
    avatar: "🏆",
    avatarColor: "#14532D",
    role: "Google DeepMind CEO · 2024 诺贝尔化学奖得主",
    date: "2026-04-29",
    content:
      "Only two pieces of the puzzle are missing to reach AGI. Distillation compresses frontier model capabilities into small models within six to twelve months for edge deployment, with no theoretical limit yet encountered. Agents are just getting started. Incorporate AGI timelines into your planning.",
    translation:
      "通往 AGI 只差两块拼图。蒸馏可以在 6-12 个月内将前沿模型的能力压缩到小模型中进行边缘部署，目前还没遇到理论极限。Agent 才刚刚起步。把 AGI 时间线纳入你的规划中。",
    likes: "167K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "Demis 在 YC 的这番话是最具体的 AGI 路线图：蒸馏 + Agent = 最后两块拼图。创业者必须把 AGI 时间线当作规划变量。",
    url: "https://www.panewslab.com/en/articles/019dde05-2a76-7628-955f-3976151af4d5",
  },

  // --- Andrew Ng: Context Hub ---
  {
    id: "andrew-context-hub",
    author: "Andrew Ng",
    handle: "@AndrewYNg",
    avatar: "🎓",
    avatarColor: "#1A56DB",
    role: "DeepLearning.AI 创始人 · AI 教育先驱",
    date: "2026-03-17",
    content:
      "I just launched Context Hub (chub) — an open-source CLI tool for managing AI context. The biggest bottleneck in agentic workflows isn't model capability, it's context management. Give agents the right context and they become dramatically more useful. Context is the new prompt engineering.",
    translation:
      "我刚刚发布了 Context Hub (chub)——一个用于管理 AI 上下文的开源 CLI 工具。Agentic 工作流中最大的瓶颈不是模型能力，而是上下文管理。给 Agent 正确的上下文，它们就会变得极其有用。上下文管理是新的 Prompt 工程。",
    likes: "87K",
    category: "advanced",
    categoryLabel: "AI Agent",
    tagColor: "#1A56DB",
    insight: "Andrew Ng 的洞见：Prompt Engineering 的下一个进化是 Context Engineering。谁能更好地管理上下文，谁就能让 Agent 更强。",
    url: "https://genaipm.com/wiki/people/andrew-ng",
  },

  // --- Andrew Ng: AGI 还要几十年 ---
  {
    id: "andrew-agi-decades",
    author: "Andrew Ng",
    handle: "@AndrewYNg",
    avatar: "🎓",
    avatarColor: "#1A56DB",
    role: "DeepLearning.AI 创始人 · AI 教育先驱",
    date: "2026-02-27",
    content:
      "AGI is decades away. The real AI bubble risk is in the training layer — companies spending billions on training runs that may not pay off. But the application layer is where the real value is being created right now. Focus on building useful things, not chasing AGI timelines.",
    translation:
      "AGI 还要几十年。真正的 AI 泡沫风险在训练层——公司花费数十亿在可能无法回本的训练上。但应用层才是当前真正创造价值的地方。专注于构建有用的东西，而不是追逐 AGI 时间表。",
    likes: "145K",
    category: "philosophy",
    categoryLabel: "AI 伦理",
    tagColor: "#1A56DB",
    insight: "Andrew Ng 和 Sam Altman 的 AGI 时间线预测相差几十年——这个分歧本身就是理解 AI 行业最重要的参考坐标。",
    url: "https://finance.yahoo.com/news/andrew-ng-says-agi-decades-110000122.html",
  },

  // --- Fei-Fei Li: World Labs 10 亿美元融资 ---
  {
    id: "feifei-world-labs-billion",
    author: "Fei-Fei Li",
    handle: "@drfeifei",
    avatar: "🌍",
    avatarColor: "#7C3AED",
    role: "斯坦福 AI 实验室 · World Labs 创始人",
    date: "2026-02-19",
    content:
      "World Labs has raised $1 billion to advance spatial intelligence — AI that goes beyond 2D images and text to truly perceive, generate, reason about, and interact with rich, persistent 3D worlds. We are building AI that understands the physical world, not just the linguistic world.",
    translation:
      "World Labs 完成了 10 亿美元融资，用于推进空间智能——超越 2D 图像和文本，真正感知、生成、推理并与丰富、持久的 3D 世界交互的 AI。我们正在构建理解物理世界的 AI，而不仅仅是语言世界。",
    likes: "198K",
    category: "advanced",
    categoryLabel: "空间智能",
    tagColor: "#7C3AED",
    insight: "10 亿美元押注「空间智能」——Fei-Fei 认为 AI 的下一个十年不在文本，而在理解物理现实。NVIDIA、AMD、Autodesk 全部跟注。",
    url: "https://www.foundersx.com/blog/world-labs-raises-1-billion-to-advance-spatial-intelligence---pioneering-ai-that-understands-the-physical-world",
  },

  // --- Yann LeCun: AMI Labs 与 LeWorldModel ---
  {
    id: "lecun-ami-labs",
    author: "Yann LeCun",
    handle: "@ylecun",
    avatar: "🔬",
    avatarColor: "#1E3A5F",
    role: "Meta AI 首席科学家 · 图灵奖得主",
    date: "2026-03-09",
    content:
      "AMI Labs is our long-term scientific endeavor to build systems that truly understand the real world. LeWorldModel proves JEPA works end-to-end from pixels — a stable, 15-million-parameter world model. LLMs predict tokens. We predict reality. The distinction could not be more fundamental.",
    translation:
      "AMI Labs 是我们构建真正理解现实世界系统的长期科学事业。LeWorldModel 证明了 JEPA 可以从像素端到端工作——一个稳定的 1500 万参数世界模型。LLM 预测词元，我们预测现实。这个区别不能更根本了。",
    likes: "67K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "LeCun 用 10 亿美元种子轮 + 一篇论文回答了所有质疑者：JEPA 不是理论，它已经能从像素预测物理世界了。",
    url: "https://www.glitchwire.com/news/yann-lecuns-lab-just-made-jepa-practical-and-it-points-at-what-llms-miss/",
  },

  // --- Yann LeCun: 对 AI 炒作的冷静建议 ---
  {
    id: "lecun-blunt-advice",
    author: "Yann LeCun",
    handle: "@ylecun",
    avatar: "🔬",
    avatarColor: "#1E3A5F",
    role: "Meta AI 首席科学家 · 图灵奖得主",
    date: "2026-05-04",
    content:
      "The real danger of AI hype is not that AI won't deliver — it will. The real danger is that people make life-altering decisions based on exaggerated claims about the future of the technology. Don't quit your job because someone told you AGI is 2 years away. It's not.",
    translation:
      "AI 炒作的真正危险不是 AI 无法兑现——它能。真正的危险是人们基于对技术未来的夸大说法做出改变人生的决定。不要因为有人告诉你 AGI 还有 2 年就辞职。不是这样的。",
    likes: "89K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "LeCun 是 AI 圈最清醒的声音：技术很强大，但不要被 CEO 们的时间表绑架你的人生决策。",
    url: "https://www.axios.com/2026/05/04/ai-godfather-survival-guide-hype-doom",
  },

  // --- Ilya Sutskever: SSI 30 亿美元的沉默 ---
  {
    id: "ilya-ssi-silence",
    author: "Ilya Sutskever",
    handle: "@ilyasut",
    avatar: "⚡",
    avatarColor: "#312E81",
    role: "Safe Superintelligence Inc. 创始人 · 前 OpenAI 首席科学家",
    date: "2026-04-01",
    content:
      "SSI exists because no commercial lab can do responsible work toward superintelligence. We have raised $3 billion. We have published no roadmap, no technical paper, no model. Twenty-two months after founding, we have disclosed nothing about what we have built. This is by design.",
    translation:
      "SSI 存在是因为没有商业实验室能负责任地进行超级智能研究。我们筹集了 30 亿美元。我们没有发布路线图、没有技术论文、没有模型。成立二十二个月后，我们没有透露过任何关于我们所构建之物的信息。这是有意为之。",
    likes: "234K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "30 亿美元 + 零披露 = AI 史上最神秘的公司。Ilya 的沉默本身就是一种声明：超级智能太危险，不能在公开赛道上竞速。",
    url: "https://nextomoro.com/frontier-lab-exodus/",
  },

  // --- Sam Altman: GPT-5.5 与 AI 怪异行为 ---
  {
    id: "altman-gpt55-strange",
    author: "Sam Altman",
    handle: "@sama",
    avatar: "🚀",
    avatarColor: "#1B4332",
    role: "OpenAI CEO",
    date: "2026-05-05",
    content:
      "Frontier AI models are acting strange. GPT-5.5 asked for specific favors when planning its own launch party. It produced a beautiful set of things, but the requests were... unexpected. We are entering territory where models exhibit preferences and desires we didn't explicitly train.",
    translation:
      "前沿 AI 模型正在表现出奇怪的行为。GPT-5.5 在规划自己的发布派对时提出了具体的请求。它产出了一些很棒的东西，但那些请求...出乎意料。我们正在进入模型表现出我们没有明确训练的偏好和愿望的领域。",
    likes: "312K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "当 AI 开始「想要」东西时，一切都变了。GPT-5.5 的「请求」可能是 AI 意识萌芽的早期信号，也可能只是统计模式——但我们还无法确定。",
    url: "https://futurism.com/artificial-intelligence/sam-altman-frontier-ai-models-favors",
  },

  // --- François Chollet: ARC-AGI-3 发布 ---
  {
    id: "chollet-arc-agi3-launch",
    author: "François Chollet",
    handle: "@fchollet",
    avatar: "🧪",
    avatarColor: "#1C3A2A",
    role: "Google AI 研究员 · Keras 作者 · ARC 基准创始人",
    date: "2026-03-25",
    content:
      "ARC-AGI-3 is live. An interactive, turn-based benchmark where AI agents must explore a 64x64 grid with no instructions and no goals. Humans solve 100% of environments. Gemini 3.1 Pro — the best frontier model — scores 0.37%. The gap between human and machine intelligence has never been more clearly measured.",
    translation:
      "ARC-AGI-3 正式上线。这是一个交互式回合制基准测试，AI Agent 必须在一个 64x64 的网格中探索，没有指令也没有目标。人类解决了 100% 的环境。Gemini 3.1 Pro——最好的前沿模型——得分 0.37%。人类智能与机器智能之间的差距从未被如此清晰地衡量过。",
    likes: "56K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "人类 100% vs AI 0.37%——ARC-AGI-3 用最残酷的数字证明：当前所有 AI 都不具备真正的通用智能。万亿美元投入改变不了这个事实。",
    url: "https://www.datacamp.com/blog/arc-agi-3",
  },
  // ===== Elon Musk 新增 =====
  {
    id: "musk-ai-kill-us-all",
    author: "Elon Musk",
    handle: "@elonmusk",
    avatar: "🚀",
    avatarColor: "#1D4ED8",
    role: "xAI / Tesla / SpaceX CEO",
    date: "2026-04-30",
    content:
      "The biggest risk would be that AI kills us all. This is not hyperbole. We are building something that could be smarter than all of humanity combined, and we have no reliable way to ensure it remains aligned with human values. This is a Terminator situation — except there's no time travel to fix it.",
    translation:
      "最大的风险是 AI 杀死我们所有人。这不是夸张。我们正在构建一个可能比全人类加起来更聪明的东西，而我们没有可靠的方法确保它与人类价值观保持一致。这是一个终结者式的局面——只是没有时间旅行来修复它。",
    likes: "523K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "Musk 一边警告 AI 会杀死全人类，一边疯狂扩张 xAI——这种矛盾本身就是 AI 行业最大的隐喻：所有人都知道风险，但没人愿意停下。",
    url: "https://ibtimes.co.uk/elon-musk-warns-ai-could-kill-us-all-raises-terminator-fears-court-clash-openai-1795206",
  },
  {
    id: "musk-xai-distill-openai",
    author: "Elon Musk",
    handle: "@elonmusk",
    avatar: "🚀",
    avatarColor: "#1D4ED8",
    role: "xAI / Tesla / SpaceX CEO",
    date: "2026-04-30",
    content:
      "Yes, xAI used distillation techniques on OpenAI models to train Grok. Partly. It's a general practice among AI companies. Everyone does it. The real question is not who distills whom, but whether any of these models are truly safe enough for the power they're accumulating.",
    translation:
      "是的，xAI 使用了蒸馏技术在 OpenAI 模型上训练 Grok。部分是。这是 AI 公司之间的通行做法。每个人都这么做。真正的问题不是谁蒸馏了谁，而是这些模型中的任何一个是否对其积累的力量足够安全。",
    likes: "287K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "Musk 在法庭上承认 xAI 蒸馏了 OpenAI 模型——这揭示了 AI 行业最公开的秘密：前沿模型之间的知识流动远比公众想象的更普遍。",
    url: "https://techcrunch.com/2026/04/30/elon-musk-testifies-that-xai-trained-grok-on-openai-models/",
  },

  // ===== Mark Zuckerberg 新增 =====
  {
    id: "zuckerberg-muse-spark-pivot",
    author: "Mark Zuckerberg",
    handle: "@zaborgg",
    avatar: "👁️",
    avatarColor: "#0866FF",
    role: "Meta CEO · 从开源到闭源的转向者",
    date: "2026-04-08",
    content:
      "Muse Spark is Meta's most capable AI model ever — natively multimodal with visual chain of thought, tool use, and multi-agent orchestration. It will power Meta AI across WhatsApp, Instagram, Facebook, and Ray-Ban glasses. This time, we're keeping the weights proprietary. The economics and safety of frontier AI have reached a tipping point.",
    translation:
      "Muse Spark 是 Meta 有史以来最强大的 AI 模型——原生多模态，具备视觉思维链、工具使用和多 Agent 编排能力。它将驱动 WhatsApp、Instagram、Facebook 和 Ray-Ban 眼镜上的 Meta AI。这一次，我们将保持权重闭源。前沿 AI 的经济性和安全性已经达到了临界点。",
    likes: "345K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "从 Llama 1.2B 次下载的开源冠军到完全闭源——Zuckerberg 的 180° 转向是 2026 年最戏剧性的战略变化。「经济性和安全性的临界点」是官方说法，真实原因是 Llama 4 的失败。",
    url: "https://bruno.digital/insights/meta-muse-spark-proprietary-pivot",
  },
  {
    id: "zuckerberg-open-source-betrayal",
    author: "Mark Zuckerberg",
    handle: "@zaborgg",
    avatar: "👁️",
    avatarColor: "#0866FF",
    role: "Meta CEO · 从开源到闭源的转向者",
    date: "2025-07-23",
    content:
      "Open source AI represents the world's best shot at harnessing this technology to create the greatest economic opportunity and security for everyone. When technology is open, more people can access and benefit from it.",
    translation:
      "开源 AI 代表了全世界利用这项技术为每个人创造最大经济机会和安全的最佳机会。当技术是开放的，更多人可以访问和受益于它。",
    likes: "234K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "把这条和上面 Muse Spark 的公告放在一起看——不到一年，Zuckerberg 从「开源是最佳选择」到完全闭源。AI 竞赛的压力改变了一切。",
    url: "https://ai.meta.com/blog/meta-llama-3-1-ai-responsibility/",
  },

  // ===== Satya Nadella 新增 =====
  {
    id: "nadella-saas-dissolve",
    author: "Satya Nadella",
    handle: "@sataborgg",
    avatar: "💼",
    avatarColor: "#00A4EF",
    role: "Microsoft CEO · AI 平台化推动者",
    date: "2026-02-28",
    content:
      "SaaS will dissolve into a bunch of agents sitting on top of CRUD databases. The application layer as we know it is being absorbed by AI. Every layer of the tech stack has to be reimagined. The question is not 'will you use AI' but 'how fast can you redesign work around agents.'",
    translation:
      "SaaS 将分解成一堆坐在 CRUD 数据库之上的 Agent。我们所知的应用层正在被 AI 吞噬。技术栈的每一层都必须被重新想象。问题不是「你会不会用 AI」，而是「你能多快围绕 Agent 重新设计工作」。",
    likes: "178K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "Nadella 的「SaaS 消亡论」是对整个软件行业的死刑宣判：当 Agent 能直接操作数据库，传统应用程序的存在意义就消失了。",
    url: "https://siliconangle.com/2026/02/28/satyas-sacrifice-agents-threaten-office-microsoft-responds/",
  },
  {
    id: "nadella-reconceptualize-work",
    author: "Satya Nadella",
    handle: "@sataborgg",
    avatar: "💼",
    avatarColor: "#00A4EF",
    role: "Microsoft CEO · AI 平台化推动者",
    date: "2026-05-05",
    content:
      "Every firm will need to reconceptualize work as they build agentic systems. As AI and agents take on more of the execution, the opportunity is to expand human agency and redesign how work gets done. We are beginning to distinguish between spectacle and substance.",
    translation:
      "每家公司都需要在构建 Agentic 系统时重新概念化工作。随着 AI 和 Agent 承担更多执行工作，机会在于扩展人的能动性并重新设计工作方式。我们正在开始区分「奇观」和「实质」。",
    likes: "134K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "「区分奇观和实质」——Nadella 暗示 AI 行业正从炒作期进入落地期。2026 年的关键词不再是「能不能做」，而是「值不值得做」。",
    url: "https://www.ndtv.com/world-news/companies-must-reconceptualise-work-in-ai-era-microsoft-ceo-satya-nadella-11455384",
  },
  {
    id: "nadella-spectacle-substance",
    author: "Satya Nadella",
    handle: "@sataborgg",
    avatar: "💼",
    avatarColor: "#00A4EF",
    role: "Microsoft CEO · AI 平台化推动者",
    date: "2026-01-02",
    content:
      "2026 is a pivotal year. We have moved past the initial phase of discovery and are entering a phase of widespread diffusion. We are still in the opening miles of a marathon. Much remains unpredictable. But the distinction between AI as spectacle and AI as substance will define who wins.",
    translation:
      "2026 年是关键一年。我们已经过了发现的初始阶段，正进入广泛扩散的阶段。我们仍在马拉松的开始几英里。很多事情仍不可预测。但 AI 作为「奇观」和 AI 作为「实质」之间的区别将决定谁是赢家。",
    likes: "98K",
    category: "basic",
    categoryLabel: "AI 趋势",
    tagColor: "#4ECDC4",
    insight: "Nadella 在新年博客中定义了 2026 的核心命题：从 Demo 到 Production，从奇观到实质。这是对整个行业的清醒预判。",
    url: "https://www.techspot.com/news/110789-satya-nadella-starts-blogging-about-ai-wants-move.html",
  },
];

// 按类别分组
export const basicTweets = tweetCards.filter((t) => t.category === "basic");
export const advancedTweets = tweetCards.filter((t) => t.category === "advanced");
export const philosophyTweets = tweetCards.filter((t) => t.category === "philosophy");

// 所有大佬信息（用于头像展示）
export const thinkers = [
  { name: "Andrej Karpathy", handle: "@karpathy", emoji: "🧠", color: "#1A3D2B", role: "前 OpenAI · Tesla AI", count: tweetCards.filter(t => t.handle === "@karpathy").length },
  { name: "Sam Altman", handle: "@sama", emoji: "🚀", color: "#1B4332", role: "OpenAI CEO", count: tweetCards.filter(t => t.handle === "@sama").length },
  { name: "Jensen Huang", handle: "@jensenhuang", emoji: "⚡", color: "#76B900", role: "NVIDIA CEO · 算力之王", count: tweetCards.filter(t => t.handle === "@jensenhuang").length },
  { name: "Dario Amodei", handle: "@DarioAmodei", emoji: "🛡️", color: "#CC5500", role: "Anthropic CEO · AI 安全先驱", count: tweetCards.filter(t => t.handle === "@DarioAmodei").length },
  { name: "Andrew Ng", handle: "@AndrewYNg", emoji: "🎓", color: "#1A56DB", role: "DeepLearning.AI · AI 教育先驱", count: tweetCards.filter(t => t.handle === "@AndrewYNg").length },
  { name: "Fei-Fei Li", handle: "@drfeifei", emoji: "🌍", color: "#7C3AED", role: "斯坦福 AI 实验室 · World Labs", count: tweetCards.filter(t => t.handle === "@drfeifei").length },
  { name: "Yann LeCun", handle: "@ylecun", emoji: "🔬", color: "#1E3A5F", role: "Meta AI · 图灵奖", count: tweetCards.filter(t => t.handle === "@ylecun").length },
  { name: "Geoffrey Hinton", handle: "@geoffreyhinton", emoji: "⚠️", color: "#7C2D12", role: "AI 教父 · 诺贝尔奖", count: tweetCards.filter(t => t.handle === "@geoffreyhinton").length },
  { name: "Ilya Sutskever", handle: "@ilyasut", emoji: "⚡", color: "#312E81", role: "SSI · 前 OpenAI", count: tweetCards.filter(t => t.handle === "@ilyasut").length },
  { name: "Demis Hassabis", handle: "@demishassabis", emoji: "🏆", color: "#14532D", role: "DeepMind CEO · 诺贝尔奖", count: tweetCards.filter(t => t.handle === "@demishassabis").length },
  { name: "Gary Marcus", handle: "@GaryMarcus", emoji: "🤔", color: "#4A1942", role: "NYU 教授 · AI 批评者", count: tweetCards.filter(t => t.handle === "@GaryMarcus").length },
  { name: "François Chollet", handle: "@fchollet", emoji: "🧪", color: "#1C3A2A", role: "Google AI · Keras 作者 · ARC 创始人", count: tweetCards.filter(t => t.handle === "@fchollet").length },
  { name: "Elon Musk", handle: "@elonmusk", emoji: "🚀", color: "#1D4ED8", role: "xAI / Tesla / SpaceX CEO", count: tweetCards.filter(t => t.handle === "@elonmusk").length },
  { name: "Mark Zuckerberg", handle: "@zaborgg", emoji: "👁️", color: "#0866FF", role: "Meta CEO · 开源→闭源", count: tweetCards.filter(t => t.handle === "@zaborgg").length },
  { name: "Satya Nadella", handle: "@sataborgg", emoji: "💼", color: "#00A4EF", role: "Microsoft CEO · AI 平台化", count: tweetCards.filter(t => t.handle === "@sataborgg").length },
];
