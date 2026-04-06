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
];

// 按类别分组
export const basicTweets = tweetCards.filter((t) => t.category === "basic");
export const advancedTweets = tweetCards.filter((t) => t.category === "advanced");
export const philosophyTweets = tweetCards.filter((t) => t.category === "philosophy");

// 所有大佬信息（用于头像展示）
export const thinkers = [
  { name: "Andrej Karpathy", handle: "@karpathy", emoji: "🧠", color: "#1A3D2B", role: "前 OpenAI · Tesla AI", count: tweetCards.filter(t => t.handle === "@karpathy").length },
  { name: "Sam Altman", handle: "@sama", emoji: "🚀", color: "#1B4332", role: "OpenAI CEO", count: tweetCards.filter(t => t.handle === "@sama").length },
  { name: "Yann LeCun", handle: "@ylecun", emoji: "🔬", color: "#1E3A5F", role: "Meta AI · 图灵奖", count: tweetCards.filter(t => t.handle === "@ylecun").length },
  { name: "Geoffrey Hinton", handle: "@geoffreyhinton", emoji: "⚠️", color: "#7C2D12", role: "AI 教父 · 诺贝尔奖", count: tweetCards.filter(t => t.handle === "@geoffreyhinton").length },
  { name: "Ilya Sutskever", handle: "@ilyasut", emoji: "⚡", color: "#312E81", role: "SSI · 前 OpenAI", count: tweetCards.filter(t => t.handle === "@ilyasut").length },
  { name: "Demis Hassabis", handle: "@demishassabis", emoji: "🏆", color: "#14532D", role: "DeepMind CEO · 诺贝尔奖", count: tweetCards.filter(t => t.handle === "@demishassabis").length },
  { name: "Gary Marcus", handle: "@GaryMarcus", emoji: "🤔", color: "#4A1942", role: "NYU 教授 · AI 批评者", count: tweetCards.filter(t => t.handle === "@GaryMarcus").length },
  { name: "François Chollet", handle: "@fchollet", emoji: "🧪", color: "#1C3A2A", role: "Google AI · Keras 作者 · ARC 创始人", count: tweetCards.filter(t => t.handle === "@fchollet").length },
];
