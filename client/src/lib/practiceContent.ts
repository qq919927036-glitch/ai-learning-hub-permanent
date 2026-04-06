// ============================================================
// 实践篇内容数据
// Design: Knowledge Atlas style - warm parchment + forest green
// ============================================================

export interface ToolCard {
  name: string;
  tagline: string;
  category: string;
  color: string; // tailwind color name for accent
  emoji: string;
  description: string;
  bestFor: string;
  pricing: string;
  difficulty: "入门" | "中级" | "高级";
  keyFeatures: string[];
  realScenarios: {
    title: string;
    description: string;
    steps: string[];
  }[];
  proTip: string;
  officialUrl: string;
}

export interface PracticeSection {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  tools: ToolCard[];
  comparisonTable: {
    headers: string[];
    rows: string[][];
  };
  howToChoose: {
    condition: string;
    recommendation: string;
    reason: string;
  }[];
}

export const practiceSection: PracticeSection = {
  id: "practice",
  title: "实践篇：真实 AI Agent 工具",
  subtitle: "从理论到实战，用真实工具感受 AI Agent 的力量",
  intro:
    "学完了 AI 的原理，是时候动手了！2026 年，AI Agent 工具已经百花齐放。有的住在你的终端里帮你写代码，有的连接你所有的 App 帮你管理生活，有的直接在浏览器里替你完成整个任务。本篇带你认识最值得了解的 5 款工具，每款都有真实使用场景和上手建议。",
  tools: [
    {
      name: "Claude Code",
      tagline: "住在终端里的顶级程序员",
      category: "代码 Agent",
      color: "orange",
      emoji: "⚡",
      description:
        "Claude Code 是 Anthropic 推出的命令行 AI 编程助手，由最强推理模型 Claude Opus 4.6 驱动。它不是简单的代码补全——它能读懂你整个代码库的结构、依赖关系和 git 历史，然后像一个真正的高级工程师一样帮你解决问题。你告诉它「修复登录 bug」，它会自己找到相关文件、分析原因、修改代码、运行测试、提交 commit，全程无需你干预。",
      bestFor: "专业开发者、复杂代码库重构、企业级项目",
      pricing: "需订阅（$20-200/月，按 token 计费）",
      difficulty: "中级",
      keyFeatures: [
        "深度上下文感知：能读懂百万行代码库的结构",
        "扩展思维：遇到复杂问题会先制定计划再动手",
        "自动上下文压缩：长任务不会因超出 token 限制而中断",
        "终端原生：直接执行 shell 命令、管理 git、运行测试",
        "多 Agent 协作：可同时启动多个 Claude 实例并行工作",
        "企业级安全：SOC2 合规，代码不离开 Anthropic 环境",
      ],
      realScenarios: [
        {
          title: "场景一：重构老旧代码库",
          description:
            "你接手了一个 5 年前的 Python 项目，代码混乱、文档缺失。让 Claude Code 来帮你。",
          steps: [
            "在项目根目录打开终端，输入 claude",
            "告诉它：「分析这个项目的结构，找出所有技术债务，生成一份重构计划」",
            "它会读取所有文件，输出详细的重构路线图",
            "逐步执行：「先把所有同步 API 调用改成 async/await」",
            "它自动修改所有相关文件，运行测试，确认没有破坏现有功能",
          ],
        },
        {
          title: "场景二：从零构建新功能",
          description:
            "产品经理给了你一个需求文档，你需要实现一个用户权限管理系统。",
          steps: [
            "把需求文档内容粘贴给 Claude Code",
            "它会先问你几个关键问题：用什么数据库？有没有现有的用户系统？",
            "确认后，它开始规划：数据库表结构 → API 接口 → 前端组件",
            "逐步实现，每一步都运行测试验证",
            "最后生成 PR，附上详细的变更说明",
          ],
        },
        {
          title: "场景三：多 Agent 并行开发",
          description: "大型项目需要同时开发多个模块，一个 Agent 不够用？",
          steps: [
            "启动 Coordinator Agent：「我需要同时开发用户模块、支付模块和通知模块」",
            "Coordinator 自动分解任务，派生出 3 个 Worker Agent",
            "每个 Worker 独立工作，互不干扰",
            "Coordinator 汇总结果，处理模块间的接口对齐",
            "整体开发速度提升 3-5 倍",
          ],
        },
      ],
      proTip:
        "使用 /init 命令让 Claude Code 自动生成 CLAUDE.md 文件，记录项目规范和常用命令，这样每次对话都不需要重复解释背景。",
      officialUrl: "https://claude.ai/code",
    },
    {
      name: "OpenClaw",
      tagline: "你的开源私人生活助理",
      category: "通用 Agent",
      color: "amber",
      emoji: "🐙",
      description:
        "OpenClaw（原名 Clawdbot）是 2026 年最火爆的开源 AI Agent 项目，GitHub Star 数量在两个月内突破 10 万。它不只是编程工具——它是一个「生活操作系统」，能连接你的 WhatsApp、Slack、邮件、日历、文件系统，帮你自动化几乎所有重复性工作。最关键的是：它完全免费，可以用本地模型（Llama 4、Kimi 2.5）运行，代码不离开你的电脑。",
      bestFor: "个人效率提升、生活自动化、不想付费但想体验 Agent 的用户",
      pricing: "软件免费，API 费用自理（可用本地模型完全免费）",
      difficulty: "高级",
      keyFeatures: [
        "模型无关：支持 Claude、GPT、Kimi K2.5、Llama 4 等任意模型",
        "持久记忆：跨会话记住你的偏好、习惯和上下文（不像 Claude Code 每次重置）",
        "100+ 技能插件：社区贡献的各种自动化脚本",
        "多平台集成：WhatsApp、Telegram、Discord、Slack、邮件",
        "本地运行：数据不上传，隐私有保障",
        "完全开源：可以自己修改和扩展",
      ],
      realScenarios: [
        {
          title: "场景一：自动化邮件处理",
          description: "每天早上花 1 小时处理邮件？让 OpenClaw 来做。",
          steps: [
            "配置 OpenClaw 连接你的 Gmail",
            "设置规则：「每天早上 8 点，汇总所有未读邮件，按重要性分类」",
            "它会生成一份摘要，发送到你的 WhatsApp",
            "对于需要回复的邮件，它起草回复草稿，等你确认后发送",
            "每周生成邮件处理报告，帮你优化工作流",
          ],
        },
        {
          title: "场景二：智能日程管理",
          description: "会议太多，日程混乱？OpenClaw 帮你统筹安排。",
          steps: [
            "连接 Google Calendar 和 Slack",
            "告诉它你的工作偏好：「上午专注工作，下午开会，不要连续开超过 2 小时会」",
            "当有人在 Slack 约会议时，它自动检查日历，建议合适时间",
            "会议前 15 分钟发送提醒，附上相关文件和上次会议记录",
            "会议结束后自动整理行动项，发到相关人员",
          ],
        },
        {
          title: "场景三：个人知识库管理",
          description: "读了很多文章却记不住？OpenClaw 帮你建立第二大脑。",
          steps: [
            "安装 Web Clipper 技能，连接你的笔记文件夹",
            "每次看到好文章，发给 OpenClaw：「保存这篇，主题是 AI 安全」",
            "它自动提取要点、打标签、存入知识库",
            "之后问它：「上周我保存了哪些关于 RAG 的内容？」",
            "它检索知识库，给你一份综合摘要",
          ],
        },
      ],
      proTip:
        "一定要在 Docker 沙箱中运行 OpenClaw！社区技能插件中存在恶意脚本风险，不要给它 root 权限，不要连接含有敏感数据的系统，除非你完全信任该技能的来源。",
      officialUrl: "https://openclaw.ai",
    },
    {
      name: "Cursor",
      tagline: "最聪明的 AI 代码编辑器",
      category: "AI IDE",
      color: "violet",
      emoji: "🖱️",
      description:
        "Cursor 是基于 VS Code 深度改造的 AI 代码编辑器，$20/月的价格让它成为性价比最高的 AI 编程工具。它的核心优势是「无缝融入开发流程」——你不需要切换工具，AI 就在你的编辑器里，理解你的整个代码库。Tab 键自动补全、Agent 模式构建完整功能、语义搜索理解代码意图，三大核心能力让开发效率提升 3-10 倍。",
      bestFor: "日常开发、全栈工程师、想要 AI 辅助但不想离开 IDE 的开发者",
      pricing: "$20/月（Hobby），$40/月（Pro），团队版另议",
      difficulty: "入门",
      keyFeatures: [
        "Tab 智能补全：不只是代码，连注释、变量名、测试用例都能补全",
        "Agent 模式：描述需求，AI 自动创建、编辑多个文件",
        "语义代码搜索：用自然语言搜索代码，「找到处理用户认证的地方」",
        "Diff 视图：清晰展示 AI 做了哪些修改，一键接受或拒绝",
        "Rules 系统：设置项目规范，AI 永远遵守你的代码风格",
        "MCP 集成：连接外部工具和数据源",
      ],
      realScenarios: [
        {
          title: "场景一：快速原型开发",
          description: "产品演示明天就要，你需要在今晚做出一个可用的原型。",
          steps: [
            "打开 Cursor，新建项目",
            "在 Agent 模式输入：「用 React + Tailwind 做一个任务管理应用，支持拖拽排序」",
            "Cursor 自动创建所有文件，安装依赖，写好组件",
            "你看 Diff 视图，确认没问题，点击「Accept All」",
            "运行项目，根据需要微调细节，2 小时内完成原型",
          ],
        },
        {
          title: "场景二：理解陌生代码库",
          description: "接手新项目，面对几十万行代码不知从何下手。",
          steps: [
            "用 Cursor 打开项目",
            "在聊天框问：「这个项目的整体架构是什么？数据流是怎样的？」",
            "Cursor 分析整个代码库，给出清晰的架构说明",
            "继续问：「用户登录的完整流程是什么？涉及哪些文件？」",
            "它给出文件列表和调用链，点击即可跳转到对应代码",
          ],
        },
        {
          title: "场景三：自动化测试编写",
          description: "测试覆盖率不足？让 Cursor 帮你补全测试。",
          steps: [
            "选中一个函数，按 Cmd+K",
            "输入：「为这个函数写完整的单元测试，包括边界情况」",
            "Cursor 生成测试代码，覆盖正常情况、异常情况、边界值",
            "运行测试，如果有失败的，告诉 Cursor：「第 3 个测试失败了，帮我修复」",
            "它分析原因，修复测试或修复被测代码",
          ],
        },
      ],
      proTip:
        "在项目根目录创建 .cursorrules 文件，写入你的代码规范（如「始终用 TypeScript、函数不超过 50 行、必须写 JSDoc 注释」），Cursor 的所有建议都会遵守这些规则。",
      officialUrl: "https://cursor.com",
    },
    {
      name: "Windsurf",
      tagline: "深度理解项目的协作式编辑器",
      category: "AI IDE",
      color: "sky",
      emoji: "🏄",
      description:
        "Windsurf 是由 Codeium 开发（后被 Cognition AI 以 2.5 亿美元收购）的 AI 代码编辑器，核心功能是 Cascade——一个能深度理解整个项目上下文的 AI 引擎。与 Cursor 的最大区别在于：Windsurf 更擅长处理大型、复杂的代码库，它会主动追踪你的工作流程，理解你在做什么，而不是等你提问。价格比 Cursor 略低，是注重性价比的团队的好选择。",
      bestFor: "大型项目、团队协作、需要深度代码库理解的场景",
      pricing: "$15/月（Pro），免费版有限额",
      difficulty: "入门",
      keyFeatures: [
        "Cascade 引擎：主动理解项目上下文，不需要你每次解释背景",
        "Flow 模式：AI 跟踪你的工作流，预测你的下一步需求",
        "项目级理解：理解跨文件的依赖关系和架构模式",
        "协作功能：团队成员共享 AI 上下文",
        "终端集成：直接在编辑器内执行命令",
        "比 Cursor 便宜 $5/月，功能基本对等",
      ],
      realScenarios: [
        {
          title: "场景一：大型代码库重构",
          description: "需要把一个单体应用拆分成微服务架构。",
          steps: [
            "打开项目，告诉 Cascade：「我需要把这个单体应用拆分成用户服务、订单服务、支付服务」",
            "Cascade 分析整个代码库，制定拆分计划",
            "它识别出模块边界、共享依赖、需要提取的接口",
            "逐步执行，每一步都确保不破坏现有功能",
            "最终生成独立的微服务，附上部署配置",
          ],
        },
        {
          title: "场景二：性能优化",
          description: "应用变慢了，但不知道瓶颈在哪里。",
          steps: [
            "告诉 Windsurf：「应用响应时间超过 3 秒，帮我找出性能瓶颈」",
            "它分析代码，找出 N+1 查询、不必要的重渲染、未优化的算法",
            "生成优化建议，按影响程度排序",
            "逐项优化，每次修改后运行性能测试",
            "记录优化前后的指标对比",
          ],
        },
      ],
      proTip:
        "Windsurf 的 Flow 模式在你工作时会自动学习你的习惯，建议在一个项目上连续使用至少一周，它会越来越懂你的代码风格和偏好。",
      officialUrl: "https://windsurf.com",
    },
    {
      name: "Manus",
      tagline: "真正的全自主通用 AI Agent",
      category: "通用 Agent",
      color: "emerald",
      emoji: "🤖",
      description:
        "Manus 是目前最接近「全自主 Agent」的产品——你给它一个目标，它自己规划步骤、使用工具、浏览网页、写代码、处理文件，直到完成任务。不需要你一步步指导，不需要你确认每个操作。它在一个安全的沙箱环境中运行，有自己的浏览器、终端、文件系统，能完成跨越多个工具和平台的复杂任务。",
      bestFor: "复杂研究任务、跨平台自动化、不想手动操作的繁琐工作",
      pricing: "订阅制（按使用量计费）",
      difficulty: "入门",
      keyFeatures: [
        "全自主执行：给目标，不需要逐步指导",
        "沙箱环境：有独立的浏览器、终端、文件系统",
        "跨工具协作：能同时使用搜索、代码执行、文件处理等多种工具",
        "长任务支持：可以执行需要数小时的复杂任务",
        "结果可验证：每步操作都有记录，可以回溯",
        "网站构建：能从零构建并部署完整网站",
      ],
      realScenarios: [
        {
          title: "场景一：竞品分析报告",
          description: "需要一份详细的竞品分析，涵盖 10 家公司的产品、定价、用户评价。",
          steps: [
            "告诉 Manus：「分析 [行业] 的前 10 名竞品，包括功能对比、定价策略、用户评价，生成 PDF 报告」",
            "Manus 自动搜索每家公司的官网、产品页面、用户评论",
            "访问 G2、Product Hunt、Reddit 等平台收集用户反馈",
            "整理数据，生成对比表格和分析图表",
            "输出一份专业的竞品分析 PDF，全程无需你干预",
          ],
        },
        {
          title: "场景二：从零构建网站",
          description: "需要一个产品展示网站，但没有开发资源。",
          steps: [
            "告诉 Manus：「帮我做一个 SaaS 产品的落地页，产品是 [描述]，风格参考 [示例]」",
            "Manus 规划网站结构，生成设计方案",
            "自动编写 HTML/CSS/JS，生成配套图片",
            "部署到云端，给你一个可访问的链接",
            "根据你的反馈迭代修改",
          ],
        },
        {
          title: "场景三：数据收集与处理",
          description: "需要从多个网站收集数据并整理成 Excel。",
          steps: [
            "告诉 Manus：「从 [网站列表] 收集 [数据类型]，整理成 Excel，按 [维度] 分类」",
            "Manus 逐个访问网站，提取所需数据",
            "处理数据格式，去重，标准化",
            "生成 Excel 文件，包含数据透视表和图表",
            "发送给你，附上数据质量说明",
          ],
        },
      ],
      proTip:
        "给 Manus 任务时，越具体越好。不要说「帮我研究 AI」，而要说「搜集 2025-2026 年 AI Agent 领域的 10 篇最重要的研究论文，总结每篇的核心贡献，生成一份对比表格」。",
      officialUrl: "https://manus.im",
    },
  ],
  comparisonTable: {
    headers: ["工具", "类型", "最适合", "价格", "上手难度", "核心优势"],
    rows: [
      ["Claude Code", "代码 Agent", "专业开发者", "$20-200/月", "中级", "最强代码推理能力"],
      ["OpenClaw", "通用 Agent", "个人自动化", "免费（API 自理）", "高级", "开源免费、生活自动化"],
      ["Cursor", "AI IDE", "日常开发", "$20/月", "入门", "最流畅的 IDE 体验"],
      ["Windsurf", "AI IDE", "大型项目", "$15/月", "入门", "深度项目理解、性价比高"],
      ["Manus", "通用 Agent", "复杂任务", "按量计费", "入门", "全自主、无需指导"],
    ],
  },
  howToChoose: [
    {
      condition: "我是专业开发者，主要做后端/全栈开发",
      recommendation: "Claude Code",
      reason: "最强的代码推理能力，处理复杂重构和大型代码库无出其右",
    },
    {
      condition: "我想要一个 AI 帮我管理日常生活和工作流",
      recommendation: "OpenClaw",
      reason: "连接所有 App，持久记忆，完全免费，是真正的「个人 AI 助理」",
    },
    {
      condition: "我是开发者，想要最流畅的 AI 编程体验",
      recommendation: "Cursor",
      reason: "最成熟的 AI IDE，入门门槛低，性价比高，适合日常开发",
    },
    {
      condition: "我的团队在做大型项目，需要 AI 理解整个代码库",
      recommendation: "Windsurf",
      reason: "Cascade 引擎对大型代码库的理解更深，比 Cursor 便宜，适合团队",
    },
    {
      condition: "我想要 AI 帮我完成复杂的研究、分析或构建任务",
      recommendation: "Manus",
      reason: "真正的全自主 Agent，给目标就能自己完成，无需逐步指导",
    },
  ],
};
