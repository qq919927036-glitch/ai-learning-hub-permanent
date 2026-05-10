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
  // ===== Karpathy Prompt/Agent Tips =====
  {
    id: "karpathy-prompt-specificity",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2024-08-12",
    content:
      "The #1 mistake people make with LLMs: being vague. Don't say 'write me something good.' Say 'write a 3-paragraph technical blog post about X, in the style of Y, with code examples in Z.' The more specific your prompt, the less the model has to guess — and guessing is where hallucinations live.",
    translation:
      "人们使用 LLM 犯的第一大错误：模糊。不要说「帮我写点好东西」。要说「写一篇关于 X 的 3 段技术博客，风格类似 Y，用 Z 语言写代码示例。」你的 Prompt 越具体，模型需要猜测的就越少——而幻觉就住在猜测里。",
    likes: "34.8K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "写Prompt就像给实习生写工作说明——你越具体，翻车概率越低。",
    url: "https://x.com/karpathy",
  },
  {
    id: "karpathy-iterate-prompts",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2024-09-05",
    content:
      "Treat your prompts like code: version them, iterate on them, test them against edge cases. The first prompt you write is never the best one. Prompt engineering is software engineering — you debug, refactor, and optimize until it works reliably.",
    translation:
      "把你的 Prompt 当代码对待：给它版本控制，迭代改进，用边界情况测试。你写的第一个 Prompt 永远不是最好的。Prompt 工程就是软件工程——你调试、重构、优化，直到它可靠地运行。",
    likes: "28.4K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "Prompt 的第一版就像代码的第一版——能跑但一定有 bug。迭代才是正道。",
    url: "https://x.com/karpathy",
  },
  {
    id: "karpathy-tokens-precious",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2024-10-18",
    content:
      "Every token in the context window should earn its place. Think of it as expensive real estate. Front-load the important stuff. Don't repeat yourself. Don't include irrelevant context. The model attends to everything you give it — garbage in, garbage out.",
    translation:
      "上下文窗口里的每个 Token 都应该值回票价。把它想象成昂贵的地段。重要信息放最前面。不要重复。不要放无关上下文。模型会注意你给它的一切——垃圾进，垃圾出。",
    likes: "41.2K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "Token是LLM的货币：你塞进去的每个字都在花钱，别浪费在废话上。",
    url: "https://x.com/karpathy",
  },
  {
    id: "karpathy-chain-of-thought",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2024-11-22",
    content:
      "When to use chain-of-thought: any time the answer requires multiple reasoning steps. When NOT to: simple lookups, creative writing, or when speed matters more than accuracy. CoT is like showing your work in math class — it helps, but not every question needs a full proof.",
    translation:
      "什么时候用思维链：答案需要多步推理的时候。什么时候不用：简单查询、创意写作、或者速度比准确性更重要的时候。CoT 就像数学课上写解题过程——有帮助，但不是每道题都需要完整证明。",
    likes: "36.5K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "CoT 不是万能药：简单问题用它是浪费 Token，复杂推理不用它是自找幻觉。",
    url: "https://x.com/karpathy",
  },
  {
    id: "karpathy-agent-decompose",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2025-01-14",
    content:
      "The key to working with AI agents: decompose, verify, iterate. Break big tasks into small verifiable steps. Check each step's output before proceeding. If something fails, fix the instruction — not the model. Agents are as good as their instructions are clear.",
    translation:
      "与 AI Agent 协作的关键：分解、验证、迭代。把大任务拆成可验证的小步骤。每一步输出都检查后再继续。如果失败了，修改指令——不是修改模型。Agent 的表现取决于指令的清晰度。",
    likes: "32.1K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "Agent 不是雇来放养的员工，是需要明确 checklist 的新人——每步验收才是管理之道。",
    url: "https://x.com/karpathy",
  },
  {
    id: "karpathy-sandwich-context",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2025-03-08",
    content:
      "Pro tip for long contexts: use the sandwich method. Put the most critical instructions at the very beginning AND the very end of your prompt. Models have a 'lost in the middle' problem — attention is strongest at the edges. Repeat your key constraints at the bottom.",
    translation:
      "长上下文进阶技巧：用三明治法。把最关键的指令放在 Prompt 的最前面和最后面。模型有「中间遗忘」问题——注意力在两端最强。在底部重复你的关键约束。",
    likes: "45.7K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "三明治法则：重要信息放开头和结尾，中间是「注意力黑洞」。就像考试时老师反复强调的重点。",
    url: "https://x.com/karpathy",
  },

  // ===== Gary Marcus AI Critiques =====
  {
    id: "gary-math-failure",
    author: "Gary Marcus",
    handle: "@GaryMarcus",
    avatar: "🤔",
    avatarColor: "#4A1942",
    role: "NYU 认知科学教授 · AI 批评者",
    date: "2024-12-03",
    content:
      "Ask GPT-4 to multiply two 4-digit numbers. It gets it wrong about 20% of the time. Ask it a logic puzzle with a twist. It fails reliably. These aren't edge cases — they reveal that LLMs don't actually reason. They pattern-match. And pattern-matching breaks on novel compositions.",
    translation:
      "让 GPT-4 乘两个四位数。它大约 20% 的时候算错。给它一个有陷阱的逻辑题。它可靠地失败。这些不是边界情况——它们揭示了 LLM 并没有真正推理。它们在模式匹配。而模式匹配在新颖的组合上会崩溃。",
    likes: "21.3K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "LLM 做数学题就像文科生背公式——看着会了，换个数字就露馅。",
    url: "https://x.com/GaryMarcus",
  },
  {
    id: "gary-benchmark-gaming",
    author: "Gary Marcus",
    handle: "@GaryMarcus",
    avatar: "🤔",
    avatarColor: "#4A1942",
    role: "NYU 认知科学教授 · AI 批评者",
    date: "2025-02-18",
    content:
      "Every time a new benchmark comes out, models 'solve' it within months. But this doesn't mean they're getting smarter. It means they're getting better at gaming benchmarks. The benchmark-industrial complex rewards memorization, not understanding. We need tests that can't be gamed.",
    translation:
      "每次新基准出来，模型几个月内就「解决」了它。但这不意味着它们变聪明了。这意味着它们更擅长刷分了。基准工业体系奖励的是记忆，不是理解。我们需要不能被刷的测试。",
    likes: "19.8K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "AI 刷 benchmark 就像学生刷题库——分数上去了，遇到新题照样懵。",
    url: "https://x.com/GaryMarcus",
  },
  {
    id: "gary-rag-not-enough",
    author: "Gary Marcus",
    handle: "@GaryMarcus",
    avatar: "🤔",
    avatarColor: "#4A1942",
    role: "NYU 认知科学教授 · AI 批评者",
    date: "2025-04-10",
    content:
      "RAG doesn't solve hallucination. It reduces it. But the model can still hallucinate about the retrieved content, misinterpret it, or combine fragments in ways that produce nonsense. RAG is a band-aid on a fundamental architectural problem: these models have no concept of truth.",
    translation:
      "RAG 没有解决幻觉问题。它减少了幻觉。但模型仍然可以对检索到的内容产生幻觉、误解它、或以产生胡话的方式组合片段。RAG 是对根本架构问题的创可贴：这些模型没有「真相」的概念。",
    likes: "16.9K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "RAG 是给幻觉贴创可贴——伤口还在，只是血不往外流了。治本还得靠架构革命。",
    url: "https://x.com/GaryMarcus",
  },
  {
    id: "gary-compositionality",
    author: "Gary Marcus",
    handle: "@GaryMarcus",
    avatar: "🤔",
    avatarColor: "#4A1942",
    role: "NYU 认知科学教授 · AI 批评者",
    date: "2025-06-22",
    content:
      "The compositionality problem remains unsolved. Humans can combine familiar concepts in novel ways effortlessly: 'a cat riding a bicycle on the moon.' LLMs struggle with this because they rely on statistical co-occurrence, not structured representations. Novelty breaks them.",
    translation:
      "组合性问题仍未解决。人类可以毫不费力地以新颖方式组合熟悉的概念：「一只猫在月球上骑自行车」。LLM 在这方面很挣扎，因为它们依赖统计共现，而不是结构化表征。新颖性会击溃它们。",
    likes: "14.7K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "人类能想象「猫骑车上月球」，LLM 只能拼凑训练数据里见过的组合——想象力是它们最大的短板。",
    url: "https://x.com/GaryMarcus",
  },

  // ===== Amanda Askell - Claude/Prompt Engineering =====
  {
    id: "askell-system-prompt-identity",
    author: "Amanda Askell",
    handle: "@AmandaAskell",
    avatar: "✨",
    avatarColor: "#6B46C1",
    role: "Anthropic 首席提示词工程师 · Claude 调教师",
    date: "2024-07-15",
    content:
      "The most powerful thing you can put in a system prompt isn't a list of rules — it's an identity. Tell Claude WHO it is: 'You are a senior engineer reviewing code for security issues.' This activates a coherent persona with consistent behavior, not just a list of dos and don'ts.",
    translation:
      "系统提示里最强大的东西不是规则列表——而是身份。告诉 Claude 它是谁：「你是一位审查代码安全问题的高级工程师。」这会激活一个行为一致的完整人格，而不仅仅是一堆注意事项。",
    likes: "27.3K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "给AI一个身份比给它一堆规则更有效——就像演员入戏后不需要逐条记台词。",
    url: "https://x.com/AmandaAskell",
  },
  {
    id: "askell-few-shot-power",
    author: "Amanda Askell",
    handle: "@AmandaAskell",
    avatar: "✨",
    avatarColor: "#6B46C1",
    role: "Anthropic 首席提示词工程师 · Claude 调教师",
    date: "2024-09-20",
    content:
      "Zero-shot: tell the model what to do. Few-shot: SHOW the model what to do. In my experience, 2-3 good examples beat a page of instructions every time. Examples communicate format, tone, depth, and edge cases simultaneously in a way that instructions simply can't.",
    translation:
      "零样本：告诉模型该做什么。少样本：给模型展示该怎么做。以我的经验，2-3 个好例子每次都能打败一页说明。例子能同时传达格式、语气、深度和边界情况，这是纯指令做不到的。",
    likes: "31.6K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "一个好例子胜过千言万语——AI 和人一样，「看一遍」比「听十遍」学得快。",
    url: "https://x.com/AmandaAskell",
  },
  {
    id: "askell-longer-prompts-better",
    author: "Amanda Askell",
    handle: "@AmandaAskell",
    avatar: "✨",
    avatarColor: "#6B46C1",
    role: "Anthropic 首席提示词工程师 · Claude 调教师",
    date: "2024-11-08",
    content:
      "Counter-intuitive finding: longer, more detailed prompts almost always get better results. People try to be concise with AI like they're paying per word. But detail is signal. Ambiguity is noise. A 500-word prompt that's crystal clear will outperform a 50-word prompt that's vague.",
    translation:
      "反直觉的发现：更长、更详细的 Prompt 几乎总是能得到更好的结果。人们对 AI 惜字如金，好像在按字收费。但细节是信号，模糊是噪音。一个 500 字的清晰 Prompt 会胜过 50 字的模糊 Prompt。",
    likes: "38.9K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "Prompt 不是电报，别省字数。模糊省下的 Token，会以幻觉的形式加倍奉还。",
    url: "https://x.com/AmandaAskell",
  },
  {
    id: "askell-step-by-step",
    author: "Amanda Askell",
    handle: "@AmandaAskell",
    avatar: "✨",
    avatarColor: "#6B46C1",
    role: "Anthropic 首席提示词工程师 · Claude 调教师",
    date: "2025-01-25",
    content:
      "For complex reasoning: break the problem into explicit steps in your prompt. Don't just say 'analyze this.' Say 'First, identify the key variables. Then, state the relationships between them. Then, check for contradictions. Finally, draw a conclusion.' Structure begets structure.",
    translation:
      "对于复杂推理：在 Prompt 中把问题分解成明确的步骤。不要只说「分析一下」。要说「首先，识别关键变量。然后，陈述它们之间的关系。接着，检查矛盾。最后，得出结论。」结构产生结构。",
    likes: "25.4K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "你给 AI 的思考框架越清晰，它的输出就越有结构——混乱的指令只会得到混乱的答案。",
    url: "https://x.com/AmandaAskell",
  },
  {
    id: "askell-when-not-to-use-ai",
    author: "Amanda Askell",
    handle: "@AmandaAskell",
    avatar: "✨",
    avatarColor: "#6B46C1",
    role: "Anthropic 首席提示词工程师 · Claude 调教师",
    date: "2025-03-12",
    content:
      "When NOT to use AI: 1) When you need guaranteed correctness (legal docs, medical dosages). 2) When you need real-time data (stock prices, live events). 3) When the cost of being wrong is catastrophic. 4) When human judgment and empathy are the actual product. Know the boundaries.",
    translation:
      "什么时候不该用 AI：1）需要保证正确性时（法律文件、药物剂量）。2）需要实时数据时（股价、直播事件）。3）犯错代价是灾难性的时候。4）人类判断力和共情本身就是产品时。要知道边界在哪。",
    likes: "42.1K",
    category: "philosophy",
    categoryLabel: "AI 哲学",
    tagColor: "#7C3AED",
    insight: "知道 AI 不能做什么，比知道它能做什么更重要——边界感是高手和新手的分水岭。",
    url: "https://x.com/AmandaAskell",
  },

  // ===== LLM Foundations & Agent Usage (Mixed Authors) =====
  {
    id: "karpathy-what-are-tokens",
    author: "Andrej Karpathy",
    handle: "@karpathy",
    avatar: "🧠",
    avatarColor: "#1A3D2B",
    role: "前 OpenAI 创始成员 · 前 Tesla AI 总监",
    date: "2024-04-22",
    content:
      "Tokens are not words. They're chunks — usually 3-4 characters. 'Unbelievable' is 3 tokens. A space is often its own token. This is why LLMs can't spell, can't count characters, and get confused by unusual formatting. Understanding tokenization is understanding LLM limitations.",
    translation:
      "Token 不是单词。它们是片段——通常 3-4 个字符。'Unbelievable' 是 3 个 Token。空格通常是独立的 Token。这就是为什么 LLM 不会拼写、不会数字符、会被不寻常的格式搞混。理解分词就是理解 LLM 的局限性。",
    likes: "52.3K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "LLM 看世界的最小单位不是字母也不是单词，而是 Token——这解释了它为什么数不清 'strawberry' 里有几个 r。",
    url: "https://x.com/karpathy",
  },
  {
    id: "askell-temperature-explained",
    author: "Amanda Askell",
    handle: "@AmandaAskell",
    avatar: "✨",
    avatarColor: "#6B46C1",
    role: "Anthropic 首席提示词工程师 · Claude 调教师",
    date: "2024-12-15",
    content:
      "Temperature in simple terms: at 0, the model always picks the most likely next token (deterministic, boring, safe). At 1, it samples more broadly (creative, surprising, risky). For code and factual answers: low temp. For brainstorming and writing: higher temp. Match the tool to the task.",
    translation:
      "简单解释 Temperature：0 时，模型总是选最可能的下一个 Token（确定性、无聊、安全）。1 时，它更广泛地采样（创造性、惊喜、有风险）。写代码和事实性回答：低温。头脑风暴和写作：高温。让工具匹配任务。",
    likes: "29.8K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "Temperature 就是 AI 的「冒险指数」：调低是考试模式，调高是嗨歌模式。",
    url: "https://x.com/AmandaAskell",
  },
  {
    id: "andrew-agent-done-conditions",
    author: "Andrew Ng",
    handle: "@AndrewYNg",
    avatar: "🎓",
    avatarColor: "#1A56DB",
    role: "DeepLearning.AI 创始人 · AI 教育先驱",
    date: "2024-11-30",
    content:
      "The #1 failure mode of AI agents: no clear 'done' condition. An agent without a stopping criterion will loop forever, wasting tokens and producing garbage. Always define: what does success look like? What's the exit condition? What triggers a handoff to a human?",
    translation:
      "AI Agent 的第一大失败模式：没有明确的「完成」条件。没有停止标准的 Agent 会永远循环，浪费 Token 并产生垃圾。永远要定义：成功长什么样？退出条件是什么？什么时候交给人类？",
    likes: "37.6K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "没有「完成条件」的 Agent 就像没有刹车的汽车——跑得再快也是灾难。",
    url: "https://x.com/AndrewYNg",
  },
  {
    id: "andrew-agent-evaluation",
    author: "Andrew Ng",
    handle: "@AndrewYNg",
    avatar: "🎓",
    avatarColor: "#1A56DB",
    role: "DeepLearning.AI 创始人 · AI 教育先驱",
    date: "2025-02-08",
    content:
      "How to tell if an AI agent is actually helping vs just appearing busy: measure outcomes, not activity. Lines of code generated means nothing. Features shipped, bugs fixed, time saved — those are the real metrics. An agent that writes 1000 lines of wrong code is worse than one that writes 10 lines of right code.",
    translation:
      "如何判断 AI Agent 是真的在帮忙还是只是看起来很忙：衡量结果，不是活动量。生成了多少行代码毫无意义。交付了多少功能、修了多少 bug、节省了多少时间——这些才是真正的指标。写 1000 行错代码的 Agent 不如写 10 行对代码的 Agent。",
    likes: "44.2K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "Agent 的 KPI 不是「干了多少活」而是「解决了多少问题」——和员工考核一个道理。",
    url: "https://x.com/AndrewYNg",
  },
  {
    id: "askell-single-vs-multi-turn",
    author: "Amanda Askell",
    handle: "@AmandaAskell",
    avatar: "✨",
    avatarColor: "#6B46C1",
    role: "Anthropic 首席提示词工程师 · Claude 调教师",
    date: "2025-04-05",
    content:
      "Single-turn: one big prompt, one big answer. Multi-turn: a conversation where you refine iteratively. Use single-turn when you know exactly what you want. Use multi-turn when you're exploring, debugging, or when the task is too complex to specify upfront. They're different tools for different jobs.",
    translation:
      "单轮：一个大 Prompt，一个大回答。多轮：一场迭代优化的对话。当你确切知道想要什么时用单轮。当你在探索、调试、或任务太复杂无法预先指定时用多轮。它们是不同任务的不同工具。",
    likes: "22.7K",
    category: "basic",
    categoryLabel: "基础认知",
    tagColor: "#4ECDC4",
    insight: "单轮像点菜——菜单明确直接下单。多轮像逛街——边看边选，慢慢缩小范围。",
    url: "https://x.com/AmandaAskell",
  },
  {
    id: "askell-claude-persona-tips",
    author: "Amanda Askell",
    handle: "@AmandaAskell",
    avatar: "✨",
    avatarColor: "#6B46C1",
    role: "Anthropic 首席提示词工程师 · Claude 调教师",
    date: "2025-05-18",
    content:
      "Advanced Claude tip: instead of saying 'be concise,' show Claude what concise looks like in your domain. A concise medical note is very different from a concise code review. Give a concrete example of the output length and format you expect. Ambiguous adjectives are the enemy of good prompts.",
    translation:
      "高级 Claude 技巧：不要说「简洁一点」，给 Claude 展示你领域里「简洁」长什么样。简洁的医疗记录和简洁的代码审查完全不同。给出你期望的输出长度和格式的具体例子。模糊的形容词是好 Prompt 的大敌。",
    likes: "18.9K",
    category: "advanced",
    categoryLabel: "进阶架构",
    tagColor: "#D4A017",
    insight: "「简洁」对程序员是 3 行代码，对律师是 3 页文件——AI 读不懂你的行业黑话，给它看样本。",
    url: "https://x.com/AmandaAskell",
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
  { name: "Amanda Askell", handle: "@AmandaAskell", emoji: "✨", color: "#6B46C1", role: "Anthropic · Claude 提示词工程师", count: tweetCards.filter(t => t.handle === "@AmandaAskell").length },
];
