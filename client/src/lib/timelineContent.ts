// AI Milestones Timeline Data (2017-2025)
// Knowledge Atlas Design: Timeline events categorized by type

export interface TimelineEvent {
  year: string;
  month?: string;
  title: string;
  description: string;
  category: "model" | "product" | "research" | "policy";
  icon: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2017",
    month: "Jun",
    title: "Attention Is All You Need",
    description:
      "Google 发布 Transformer 架构论文，奠定了所有现代大语言模型的基础。自注意力机制让模型能并行处理序列数据。",
    category: "research",
    icon: "📄",
  },
  {
    year: "2018",
    month: "Jun",
    title: "GPT-1 发布",
    description:
      "OpenAI 发布首个 GPT 模型，证明了「预训练 + 微调」范式在 NLP 任务上的巨大潜力。",
    category: "model",
    icon: "🧠",
  },
  {
    year: "2018",
    month: "Oct",
    title: "BERT 发布",
    description:
      "Google 发布 BERT，双向编码器在 11 项 NLP 基准上刷新纪录，开启预训练语言模型时代。",
    category: "model",
    icon: "🔤",
  },
  {
    year: "2019",
    month: "Feb",
    title: "GPT-2: 「太危险，不能发布」",
    description:
      "OpenAI 发布 GPT-2 但最初拒绝公开完整模型，引发 AI 安全和开源伦理的广泛讨论。",
    category: "model",
    icon: "⚠️",
  },
  {
    year: "2020",
    month: "May",
    title: "GPT-3 与 Scaling Laws",
    description:
      "1750 亿参数的 GPT-3 震撼发布，同时 Kaplan 等人提出缩放定律，揭示模型规模与性能的幂律关系。",
    category: "model",
    icon: "📈",
  },
  {
    year: "2021",
    month: "Jan",
    title: "DALL-E: 文本生成图像",
    description:
      "OpenAI 发布 DALL-E，首次展示大规模文本到图像生成能力，开启多模态 AI 时代。",
    category: "product",
    icon: "🎨",
  },
  {
    year: "2021",
    month: "Aug",
    title: "Codex 与 GitHub Copilot",
    description:
      "OpenAI Codex 驱动 GitHub Copilot 发布，AI 辅助编程正式进入开发者工作流。",
    category: "product",
    icon: "💻",
  },
  {
    year: "2022",
    month: "Jan",
    title: "InstructGPT (RLHF)",
    description:
      "OpenAI 发布 InstructGPT，引入人类反馈强化学习 (RLHF)，让模型输出更对齐人类意图。",
    category: "research",
    icon: "🎯",
  },
  {
    year: "2022",
    month: "Aug",
    title: "Stable Diffusion 开源",
    description:
      "Stability AI 开源 Stable Diffusion，AI 图像生成技术平民化，引爆创作者经济。",
    category: "model",
    icon: "🖼️",
  },
  {
    year: "2022",
    month: "Nov",
    title: "ChatGPT 横空出世",
    description:
      "ChatGPT 发布 5 天内用户破百万，AI 从实验室走进大众视野，掀起全球 AI 热潮。",
    category: "product",
    icon: "💬",
  },
  {
    year: "2023",
    month: "Mar",
    title: "GPT-4 发布",
    description:
      "多模态大模型 GPT-4 发布，在律师考试、编程等专业测试中达到人类顶尖水平。",
    category: "model",
    icon: "🏆",
  },
  {
    year: "2023",
    month: "Jul",
    title: "Claude 2 与 Llama 2",
    description:
      "Anthropic 发布 Claude 2，Meta 开源 Llama 2，开源与闭源模型竞争格局形成。",
    category: "model",
    icon: "🦙",
  },
  {
    year: "2023",
    month: "Dec",
    title: "EU AI Act 通过",
    description:
      "欧盟通过全球首部综合性 AI 监管法规，按风险等级对 AI 系统分类管理。",
    category: "policy",
    icon: "⚖️",
  },
  {
    year: "2024",
    month: "Feb",
    title: "Sora: AI 视频生成",
    description:
      "OpenAI 发布 Sora，能根据文本生成逼真的 60 秒视频，AI 进入视频生成时代。",
    category: "product",
    icon: "🎬",
  },
  {
    year: "2024",
    month: "Mar",
    title: "Claude 3 系列发布",
    description:
      "Anthropic 发布 Claude 3 Opus/Sonnet/Haiku 三款模型，Opus 在多项基准上超越 GPT-4。",
    category: "model",
    icon: "🎵",
  },
  {
    year: "2024",
    month: "May",
    title: "GPT-4o 与 Gemini 1.5",
    description:
      "OpenAI 发布原生多模态 GPT-4o，Google 推出百万 token 上下文的 Gemini 1.5 Pro。",
    category: "model",
    icon: "🌐",
  },
  {
    year: "2024",
    month: "Dec",
    title: "DeepSeek R1 与 o3",
    description:
      "DeepSeek 发布开源推理模型 R1，OpenAI 推出 o3，推理模型成为新战场。",
    category: "model",
    icon: "🧮",
  },
  {
    year: "2025",
    month: "Jan",
    title: "Claude Code 发布",
    description:
      "Anthropic 发布 Claude Code，终端原生 AI 编程 Agent，开启 agentic coding 新时代。",
    category: "product",
    icon: "🖥️",
  },
  {
    year: "2025",
    month: "Apr",
    title: "开源模型大爆发",
    description:
      "Llama 4、Qwen 3 等开源模型密集发布，性能逼近闭源模型，开源生态空前繁荣。",
    category: "model",
    icon: "🚀",
  },
];
