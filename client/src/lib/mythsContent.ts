// ============================================================
// 常见误区内容数据
// Design: Knowledge Atlas style - warm parchment + forest green
// ============================================================

export interface MythItem {
  id: string;
  myth: string;
  fact: string;
  explanation: string;
  category: "capability" | "technical" | "social";
}

export const mythsData: MythItem[] = [
  {
    id: "myth-replace-jobs",
    myth: "AI 将取代所有人类工作",
    fact: "AI 更多是增强而非替代人类工作",
    explanation:
      "历史上每一次技术革命都会消灭一些岗位，同时创造更多新岗位。AI 擅长处理重复性、模式化的任务，但创造力、同理心、复杂判断和人际关系仍然是人类的核心优势。更准确的说法是：会使用 AI 的人将取代不会使用 AI 的人。麦肯锡研究表明，到 2030 年约 30% 的工作时间可被自动化，但完全被取代的职位不到 5%。",
    category: "social",
  },
  {
    id: "myth-more-params",
    myth: "参数越多，模型一定越好",
    fact: "模型性能取决于训练数据质量、架构设计和训练方法的综合作用",
    explanation:
      "Chinchilla 论文证明了「计算最优」的概念：一个 700 亿参数但用更多高质量数据训练的模型，可以超越 2800 亿参数的模型。Llama 3 8B 在很多任务上超越了早期的 GPT-3 175B。模型规模只是影响性能的因素之一，数据质量、训练策略（如 RLHF）和推理时计算同样关键。",
    category: "technical",
  },
  {
    id: "myth-conscious",
    myth: "AI 已经具有意识和感情",
    fact: "当前 AI 是统计模式匹配系统，没有主观体验",
    explanation:
      "大语言模型通过预测下一个 token 来生成文本，它输出「我感到开心」只是因为训练数据中这种表达在类似上下文中频繁出现。它没有内在的感受、欲望或自我意识。这种现象叫做「鹦鹉学舌」（Stochastic Parrot）效应。模型可以完美模拟情感表达，但模拟和真正拥有情感是完全不同的。",
    category: "capability",
  },
  {
    id: "myth-always-correct",
    myth: "AI 给出的答案总是正确的",
    fact: "AI 经常产生幻觉，输出看似合理但实际错误的内容",
    explanation:
      "大语言模型的核心机制是概率性生成，它追求的是「听起来合理」而非「事实正确」。研究表明，即使是最强的模型在事实性问题上也有 5-20% 的幻觉率。AI 可能自信地引用不存在的论文、编造统计数据或给出错误的代码逻辑。任何 AI 输出都需要人类验证，特别是在医疗、法律、财务等高风险领域。",
    category: "capability",
  },
  {
    id: "myth-understands",
    myth: "AI 真正理解它所说的内容",
    fact: "AI 处理的是统计关联，而非语义理解",
    explanation:
      "哲学家 John Searle 的「中文房间」思想实验很好地说明了这一点：一个人按照规则手册操作中文符号，能正确回答中文问题，但他并不「懂」中文。LLM 类似，它学到了词语之间的统计关联模式，能够生成连贯的文本，但没有对概念的真正「理解」。它不知道「猫」是什么样子或摸起来什么感觉。",
    category: "capability",
  },
  {
    id: "myth-creative",
    myth: "AI 能够独立进行创造性思考",
    fact: "AI 的「创造力」是对训练数据中模式的重新组合",
    explanation:
      "AI 生成的「创造性」内容本质上是对已有模式的插值和重组。它不能凭空想出训练数据中从未出现过的全新概念。当我们觉得 AI「有创意」时，通常是它在我们意想不到的方式下组合了已有元素。真正的创造力涉及对问题本质的理解、跨领域的类比迁移和目标导向的发明，这些目前仍超出 AI 的能力范围。",
    category: "capability",
  },
  {
    id: "myth-training-data",
    myth: "只要模型够大，训练数据质量不重要",
    fact: "数据质量是模型性能的决定性因素之一",
    explanation:
      "「垃圾进，垃圾出」（Garbage In, Garbage Out）的原则同样适用于 AI。研究表明，用精心筛选的小数据集训练的模型往往优于用海量低质量数据训练的更大模型。Meta 的 Llama 系列、微软的 Phi 系列都证明了数据质量比数量更重要。数据清洗、去重、有害内容过滤和多样性平衡是模型训练中最耗时但也最关键的环节。",
    category: "technical",
  },
  {
    id: "myth-open-vs-closed",
    myth: "开源模型一定比闭源模型差",
    fact: "顶级开源模型在很多任务上已经追平甚至超越闭源模型",
    explanation:
      "2024-2025 年开源模型经历了爆发式增长。DeepSeek-R1 在数学推理上追平 GPT-4o，Llama 3 405B 在多项基准测试中超越 GPT-4，Mistral Large 在欧洲语言任务上表现优异。开源模型的优势在于：可本地部署保护隐私、可微调适配特定任务、社区持续改进、成本可控。闭源模型的优势则是：前沿能力可能更强、更好的安全对齐、企业级支持。",
    category: "technical",
  },
  {
    id: "myth-superintelligent",
    myth: "AI 很快就会变成超级智能",
    fact: "通用人工智能（AGI）的实现时间和路径仍然高度不确定",
    explanation:
      "虽然 AI 进步速度惊人，但从当前的 LLM 到真正的通用智能之间还有巨大的鸿沟。当前 AI 缺乏：持久的世界模型、因果推理能力、从少量样本中学习新概念的能力、以及对物理世界的直觉理解。专家对 AGI 时间线的预测从 5 年到永远不会都有。盲目乐观和盲目悲观同样不可取，保持理性关注才是正确态度。",
    category: "social",
  },
  {
    id: "myth-less-intelligent",
    myth: "使用 AI 会让人变笨",
    fact: "合理使用 AI 是一种认知增强工具",
    explanation:
      "计算器没有让数学家变笨，搜索引擎没有让研究者变笨。关键在于使用方式：如果把 AI 当作思考的替代品，确实可能退化认知能力；但如果把它当作「认知自行车」（Steve Jobs 对电脑的比喻），用来加速探索、验证想法、处理低级工作，你的高级思维能力反而会被释放出来。最佳实践是：先自己思考，再用 AI 验证和扩展。",
    category: "social",
  },
  {
    id: "myth-self-improve",
    myth: "AI 模型会自动不断改进自己",
    fact: "当前 AI 模型需要人类主导的训练和更新才能提升",
    explanation:
      "部署后的 AI 模型是静态的，它不会从用户交互中自动学习或变强。模型改进需要收集新数据、重新训练或微调、人类评估反馈（RLHF）等有意识的工程投入。你今天和 ChatGPT 的对话不会让明天的 ChatGPT 变得更聪明（除非 OpenAI 的工程师主动用这些数据训练新版本）。所谓的「持续学习」仍然是 AI 研究的前沿挑战。",
    category: "technical",
  },
  {
    id: "myth-detect-ai",
    myth: "AI 可以完美检测 AI 生成的内容",
    fact: "AI 检测工具的准确率远未达到可靠水平",
    explanation:
      "多项研究表明，当前最好的 AI 检测工具误判率在 10-30% 之间，对非英语文本和经过改写的内容效果更差。OpenAI 自己的检测工具因准确率不足已经下线。根本原因在于：随着 AI 生成质量越来越高，统计特征与人类写作越来越接近，检测变成了「军备竞赛」。水印技术（如 SynthID）是更有前景的方向，但也不是万能解。",
    category: "technical",
  },
  {
    id: "myth-context-window",
    myth: "上下文窗口越大，模型表现就越好",
    fact: "更大的上下文窗口不等于更好的信息利用",
    explanation:
      "研究（如「Lost in the Middle」论文）表明，LLM 对上下文中间部分的信息利用率显著低于开头和结尾。128K token 的窗口不意味着模型能同等质量地处理所有 128K 内容。实际应用中，RAG（检索增强生成）将相关信息精准放到上下文中，往往比粗暴地塞入大量内容效果更好。上下文窗口大是好事，但如何组织上下文内容才是关键。",
    category: "technical",
  },
  {
    id: "myth-finetuning-better",
    myth: "微调一定比提示词工程效果好",
    fact: "多数场景下良好的提示词工程就足够，微调并非万能",
    explanation:
      "微调有其适用场景：需要特定格式输出、领域专用术语、或大量专有知识时效果好。但它成本高（数据准备 + 训练 + 评估）、可能引入灾难性遗忘、且每次模型更新都需要重新微调。OpenAI 和 Anthropic 的官方建议都是：先尝试提示词工程和 Few-shot Learning，不满足需求时再考虑 RAG，最后才考虑微调。很多以为需要微调的场景，一个精心设计的系统提示词就能解决。",
    category: "technical",
  },
];
