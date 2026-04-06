// ============================================================
// deepAdvancedContent.ts - 进阶篇7个模块的深度内容
// Knowledge Atlas Design: warm parchment + forest green + amber gold
// ============================================================

export interface CodeBlock {
  language: string;
  label: string;
  code: string;
}

export interface DeepInsight {
  icon: string;
  title: string;
  body: string;
}

export interface CompareRow {
  aspect: string;
  without: string;
  with: string;
}

export interface StepCard {
  num: string;
  title: string;
  desc: string;
  icon: string;
}

export interface DeepAdvancedSection {
  id: string;
  chapterNum: string;
  tag: string;
  tagColor: "amber" | "green";
  emoji: string;
  title: string;
  subtitle: string;
  // 主图（架构图）
  mainDiagram: string;
  mainDiagramCaption: string;
  // 辅助图（AI生成插图）
  auxImages: { src: string; caption: string }[];
  // 深度解释段落（多段）
  paragraphs: string[];
  // 步骤拆解
  steps: StepCard[];
  // 对比表格
  compareTable?: {
    title: string;
    headers: [string, string, string];
    rows: CompareRow[];
  };
  // 代码示例
  codeBlocks: CodeBlock[];
  // 深度洞察卡片
  insights: DeepInsight[];
  // 趣味事实
  funFact: string;
  // 章节测验
  quiz?: { question: string; options: string[]; correct: number; explanation: string }[];
}

// CDN URLs for new advanced images
const ADV_CDN = {
  hallucinationTypes: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/adv-hallucination-types-W58A25Wav8rrbHhnWbf7Wv.webp",
  harnessLayers: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/adv-harness-layers-7m8633tTt2titg9nBwHszd.webp",
  repoScan: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/adv-repo-scan-Kxw2fkCpXwZVzYypf96XGr.webp",
  promptCacheDiagram: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/adv-prompt-cache-diagram-Tui63wKqDrwuWuYFG4KYy9.webp",
  toolPermissionFlow: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/adv-tool-permission-flow-QYtYFmmPARD7Fun7EUyV2K.webp",
  contextCompressionFunnel: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/adv-context-compression-funnel-fqM7AJyLhVXJbSS84VPX63.webp",
  sessionMemoryDual: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/adv-session-memory-dual-EAYPthoxdyBUNkUXoPXhbV.webp",
  multiAgentHierarchy: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/adv-multi-agent-hierarchy-o5ScPUm7D6dwmfTS7dGqNS.webp",
  // Original harness diagrams
  imgModelUnreliable: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/img-model-unreliable_c6356937.png",
  queryLoop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/query-loop_d8f28be0.png",
  permissionLayers: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/permission-layers_51e9d0d2.png",
  promptLayers: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/prompt-layers_83a90ac0.png",
  multiAgent: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/multi-agent_2a039c5c.png",
  repoContext: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/repo-context-FZR7bfMxXHNhmj2ATiLVVm.webp",
  promptCache: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/prompt-cache-kfrsoNDkQ6pagpQFbYtcpw.webp",
  toolUse: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/tool-use-cDXCZdMxDVSabeDEUNqmXk.webp",
  contextCompression: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/context-compression-fLfPhWV8nFvvKacfX6m8hF.webp",
  sessionMemory: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/session-memory-oJ3jREEdGyMBsRtA59VyGh.webp",
  multiAgentDelegate: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/multi-agent-delegate-MJjJ8EsgFoxJ3ApEDbTei7.webp",
};

export const deepAdvancedSections: DeepAdvancedSection[] = [
  // ============================================================
  // A1: 为什么需要 AI Harness
  // ============================================================
  {
    id: "model-unreliability",
    chapterNum: "A1",
    tag: "进阶篇",
    tagColor: "amber",
    emoji: "🧩",
    title: "为什么需要 AI Harness？",
    subtitle: "驯服不可靠的语言模型",
    mainDiagram: ADV_CDN.imgModelUnreliable,
    mainDiagramCaption: "AI 模型在没有 Harness 保护下处理复杂任务时的混乱状态：幻觉、遗忘、格式错乱",
    auxImages: [
      { src: ADV_CDN.hallucinationTypes, caption: "AI 幻觉的四种类型：事实错误、时间错误、逻辑错误、来源捏造" },
      { src: ADV_CDN.harnessLayers, caption: "Harness 六层架构：从 LLM Core 到用户界面的完整软件栈" },
    ],
    paragraphs: [
      "大型语言模型（LLM）本质上是一个**概率性系统**——它的每一次输出都是从概率分布中采样的结果，而非确定性计算。这意味着即使输入完全相同，两次运行的结果也可能大相径庭。对于聊天来说，这种「创意性」是优点；但对于需要精确执行的工程任务，这就是灾难。",
      "**幻觉（Hallucination）** 是 LLM 最臭名昭著的缺陷。模型会以极其自信的语气编造不存在的函数名、虚假的论文引用、错误的 API 参数。更危险的是，它不知道自己在编造——它只是在「预测最可能的下一个词」，而「听起来合理」往往比「实际正确」更容易被选中。",
      "除了幻觉，LLM 还有**上下文遗忘**的问题。每个模型都有固定的「上下文窗口」（Context Window），超出这个范围的信息就会被遗忘。在一个长达数小时的编程任务中，早期讨论的架构决策、已经修改过的文件内容，都可能在模型「脑子」里消失。",
      "**AI Harness** 正是为了解决这些问题而生。它是包裹在 LLM 外面的「工程化软件层」，负责：在模型输出不符合格式时自动重试、在模型产生幻觉时用工具验证、在上下文快满时自动压缩历史、在执行危险操作时暂停并请求确认。有了 Harness，一个不可靠的概率性系统，才能变成一个可以信赖的工程工具。",
    ],
    steps: [
      { num: "01", title: "输入治理", desc: "对用户输入进行预处理：注入系统提示、添加工具定义、拼接上下文历史，形成完整的 Prompt", icon: "📥" },
      { num: "02", title: "LLM 调用", desc: "将处理好的 Prompt 发送给模型，流式接收输出，实时解析工具调用请求", icon: "🧠" },
      { num: "03", title: "工具执行", desc: "验证工具调用的合法性，执行工具，将结果格式化后返回给模型继续推理", icon: "⚙️" },
      { num: "04", title: "停止判断", desc: "检测模型是否完成任务（无更多工具调用、达到最大轮次、或遇到错误），决定是否继续循环", icon: "🏁" },
    ],
    compareTable: {
      title: "有无 Harness 的对比",
      headers: ["维度", "裸 LLM", "LLM + Harness"],
      rows: [
        { aspect: "输出格式", without: "随机，难以解析", with: "结构化 JSON，稳定可靠" },
        { aspect: "幻觉处理", without: "无法检测，直接输出", with: "工具验证，自动重试" },
        { aspect: "上下文管理", without: "超限后直接截断", with: "智能压缩，保留关键信息" },
        { aspect: "错误恢复", without: "崩溃或胡说", with: "捕获错误，重新规划" },
        { aspect: "安全控制", without: "无任何限制", with: "权限白名单，危险操作需确认" },
        { aspect: "任务成功率", without: "复杂任务 < 30%", with: "复杂任务 > 70%" },
      ],
    },
    codeBlocks: [
      {
        language: "python",
        label: "极简 Harness 核心循环（Python 伪代码）",
        code: `# 一个最简单的 Agent Harness 核心循环
def agent_loop(user_message: str, tools: list[Tool]) -> str:
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": user_message}
    ]
    
    for _ in range(MAX_ITERATIONS):
        # 1. 调用 LLM
        response = llm.chat(messages, tools=tools)
        
        # 2. 检查是否有工具调用
        if not response.tool_calls:
            return response.content  # 任务完成
        
        # 3. 执行工具
        for tool_call in response.tool_calls:
            result = execute_tool(tool_call, tools)
            messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": str(result)
            })
    
    return "达到最大迭代次数，任务未完成"`,
      },
      {
        language: "python",
        label: "幻觉检测与重试机制",
        code: `# 带有格式验证和重试的 LLM 调用
def call_with_retry(prompt: str, schema: dict, max_retries=3) -> dict:
    for attempt in range(max_retries):
        response = llm.chat(prompt)
        
        try:
            # 尝试解析为预期格式
            result = json.loads(response)
            validate_schema(result, schema)  # 验证字段完整性
            return result
        except (json.JSONDecodeError, ValidationError) as e:
            if attempt == max_retries - 1:
                raise RuntimeError(f"模型输出格式错误，已重试 {max_retries} 次")
            
            # 把错误信息反馈给模型，让它重新生成
            prompt += f"\\n\\n上次输出格式有误：{e}\\n请重新生成符合格式的 JSON："
    
    return {}`,
      },
    ],
    insights: [
      { icon: "⚡", title: "「概率性」不等于「不可靠」", body: "LLM 的概率性输出在有 Harness 保护的情况下完全可以工程化。关键是把不确定性限制在可控范围内：用结构化输出约束格式，用工具验证约束事实，用权限系统约束行为。" },
      { icon: "🔄", title: "Harness 是 AI 能力的放大器", body: "同一个 Claude Sonnet 模型，在精心设计的 Harness 里，能完成复杂的多步骤编程任务；在简陋的聊天框里，只能给出建议。Harness 的质量，决定了 AI 能力的上限。" },
      { icon: "🛡️", title: "安全是 Harness 的第一优先级", body: "好的 Harness 设计遵循「最小权限原则」：Agent 只能做它被明确允许的事。这不仅保护用户，也保护 Agent 自己——清晰的边界让 Agent 更专注，减少「跑偏」的概率。" },
    ],
    funFact: "研究表明，即使是最强的 LLM，在没有 Harness 的情况下，完成复杂多步骤任务的成功率不到 30%！加上精心设计的 Harness，成功率可以提升到 70% 以上。",
    quiz: [
      {
        question: "LLM 产生幻觉（Hallucination）的根本原因是什么？",
        options: ["模型训练数据不够多", "模型在预测下一个词时，'听起来合理'比'实际正确'更容易被选中", "模型的上下文窗口太小", "模型没有联网能力"],
        correct: 1,
        explanation: "LLM 是概率性系统，每次输出都是从概率分布中采样。'听起来合理'的词往往有更高的概率被选中，而不管它是否真实。这就是为什么模型会自信地编造不存在的函数名或论文引用。"
      },
      {
        question: "AI Harness 的核心作用是什么？",
        options: ["让 LLM 运行更快", "让 LLM 拥有更大的上下文窗口", "将不可靠的概率性 LLM 包装成可工程化的可靠系统", "替代 LLM 进行推理"],
        correct: 2,
        explanation: "Harness 是包裹在 LLM 外面的工程化软件层，负责格式验证、幻觉检测、上下文管理、错误恢复和安全控制。它不改变 LLM 本身，而是通过外部约束让 LLM 的输出变得可靠。"
      },
      {
        question: "在 Agent 循环中，什么时候循环会停止？",
        options: ["每次 LLM 回复后都停止", "当 LLM 没有更多工具调用请求、达到最大轮次或遇到错误时", "只有用户手动停止时", "当上下文窗口满了时"],
        correct: 1,
        explanation: "Agent 循环的停止条件有三个：1) LLM 的回复中没有工具调用（表示任务完成）；2) 达到预设的最大迭代次数（防止无限循环）；3) 遇到无法恢复的错误。"
      },
    ],
  },

  // ============================================================
  // A2: 实时代码仓库上下文
  // ============================================================
  {
    id: "repo-context",
    chapterNum: "A2",
    tag: "进阶篇",
    tagColor: "green",
    emoji: "🗂️",
    title: "组件一：实时代码仓库上下文",
    subtitle: "先「侦察」，再「行动」",
    mainDiagram: ADV_CDN.queryLoop,
    mainDiagramCaption: "查询循环中的上下文收集阶段：Agent 在行动前先建立完整的项目全貌",
    auxImages: [
      { src: ADV_CDN.repoScan, caption: "AI Agent 扫描代码仓库：从文件树到工作区摘要的完整流程" },
      { src: ADV_CDN.repoContext, caption: "工作区摘要的结构：项目名称、框架、测试命令、Git 分支等关键信息" },
    ],
    paragraphs: [
      "想象你是一个新入职的程序员，第一天就被要求「帮我修一下测试」。你会怎么做？你肯定不会两眼一抹黑地乱改——你会先花时间了解项目：这是什么项目？用什么框架？测试命令是什么？代码结构怎样？有没有 README 或文档？AI Agent 也是一样的道理。",
      "**工作区摘要（Workspace Summary）** 是 Agent 启动时构建的「项目全貌」。它包含：项目根目录的文件树结构、README.md 的关键内容、package.json / pyproject.toml 等配置文件、当前 Git 分支和最近的提交记录、以及最重要的——如果存在 `CLAUDE.md` 或 `AGENTS.md`，优先读取这些「给 AI 的工作手册」。",
      "这个摘要会被放在 Prompt 的「稳定前缀」部分，作为所有后续操作的背景知识。有了它，Agent 才能知道：该运行哪条测试命令（`npm test` 还是 `pytest`）、该去哪个目录找源代码、修改了哪些文件需要重新运行什么检查。",
      "**动态文件追踪** 是另一个关键机制。Agent 在操作过程中会维护一个「已修改文件列表」，每次读取或修改文件后都会更新这个列表。这样，当 Agent 需要再次引用某个文件时，它知道用「最新版本」而不是「上次读取的旧版本」——避免了「改了 A 文件，但还在用 A 文件的旧内容做判断」这种低级错误。",
    ],
    steps: [
      { num: "01", title: "扫描项目结构", desc: "读取根目录文件树，识别项目类型（Node.js/Python/Rust 等），找到配置文件位置", icon: "🔍" },
      { num: "02", title: "读取关键文件", desc: "优先读取 CLAUDE.md/AGENTS.md，然后是 README、package.json、主要配置文件", icon: "📖" },
      { num: "03", title: "获取 Git 状态", desc: "查看当前分支、最近提交、已修改但未提交的文件，了解「正在进行什么工作」", icon: "🌿" },
      { num: "04", title: "构建工作区摘要", desc: "将上述信息压缩成结构化摘要，注入 Prompt 稳定前缀，作为后续所有操作的背景", icon: "📋" },
    ],
    compareTable: {
      title: "有无工作区上下文的差异",
      headers: ["场景", "无上下文", "有工作区摘要"],
      rows: [
        { aspect: "运行测试", without: "猜测命令，可能用错", with: "直接执行正确的测试命令" },
        { aspect: "修改文件", without: "不知道文件在哪里", with: "精确定位到正确路径" },
        { aspect: "理解代码", without: "需要大量追问", with: "已了解框架和架构" },
        { aspect: "避免冲突", without: "可能覆盖他人修改", with: "知道 Git 状态，避免冲突" },
        { aspect: "遵守规范", without: "不知道项目规范", with: "读取了 CLAUDE.md 的指导" },
      ],
    },
    codeBlocks: [
      {
        language: "markdown",
        label: "CLAUDE.md 示例：给 AI 的「工作手册」",
        code: `# CLAUDE.md - AI 工作指南

## 项目概述
这是一个 React + TypeScript 的电商前端项目，使用 Tailwind CSS。

## 开发规范
- 所有组件必须有 TypeScript 类型定义
- 使用 Prettier 格式化代码（运行 \`pnpm format\`）
- 提交前必须通过 \`pnpm check\` 的类型检查

## 常用命令
\`\`\`bash
pnpm dev          # 启动开发服务器
pnpm check        # TypeScript 类型检查
pnpm test         # 运行测试
pnpm build        # 构建生产版本
\`\`\`

## 注意事项
- 不要修改 client/src/index.css 中的 CSS 变量
- 图片资源必须上传到 CDN，不能放在 public/ 目录
- API 调用统一放在 src/lib/ 目录下`,
      },
      {
        language: "typescript",
        label: "工作区摘要构建逻辑（简化版）",
        code: `// Harness 启动时构建工作区摘要
async function buildWorkspaceSummary(repoPath: string): Promise<string> {
  const summary: string[] = [];
  
  // 1. 读取项目配置
  const pkg = await readJSON(\`\${repoPath}/package.json\`);
  summary.push(\`项目: \${pkg.name} v\${pkg.version}\`);
  summary.push(\`测试命令: \${pkg.scripts?.test ?? "未配置"}\`);
  
  // 2. 优先读取 AI 工作手册
  const claudeMd = await readFile(\`\${repoPath}/CLAUDE.md\`);
  if (claudeMd) {
    summary.push("--- AI 工作指南 ---");
    summary.push(claudeMd.slice(0, 2000)); // 截取前 2000 字符
  }
  
  // 3. 获取 Git 状态
  const gitBranch = await exec("git branch --show-current");
  const recentCommits = await exec("git log --oneline -5");
  summary.push(\`当前分支: \${gitBranch}\`);
  summary.push(\`最近提交:\\n\${recentCommits}\`);
  
  // 4. 文件树（只显示两层）
  const fileTree = await getFileTree(repoPath, depth: 2);
  summary.push(\`项目结构:\\n\${fileTree}\`);
  
  return summary.join("\\n\\n");
}`,
      },
    ],
    insights: [
      { icon: "📝", title: "CLAUDE.md 是你最强的「提示词」", body: "在项目根目录创建 CLAUDE.md，告诉 AI 你的项目规范、常用命令、注意事项。这比在每次对话里重复说明要高效 10 倍，而且 AI 会在整个会话中始终遵守这些规则。" },
      { icon: "🔄", title: "动态追踪防止「幽灵修改」", body: "Agent 修改了文件 A，然后又读取文件 A 来做判断——如果没有动态追踪，它可能会读到旧版本，导致基于错误信息做出决策。好的 Harness 会确保 Agent 始终看到最新的文件状态。" },
      { icon: "⚡", title: "上下文质量决定任务质量", body: "垃圾进，垃圾出（Garbage In, Garbage Out）。工作区摘要的质量直接决定 Agent 的工作质量。花时间维护好 README 和 CLAUDE.md，是提升 AI 辅助编程效果最高 ROI 的投资。" },
    ],
    funFact: "Claude Code 会优先读取项目根目录的 CLAUDE.md 文件——这是你给 AI 的「工作手册」。顶级工程师团队会把 CLAUDE.md 当作项目文档的一部分来认真维护！",
    quiz: [
      {
        question: "工作区摘要（Workspace Summary）最优先读取哪个文件？",
        options: ["README.md", "package.json", "CLAUDE.md 或 AGENTS.md", ".gitignore"],
        correct: 2,
        explanation: "CLAUDE.md 或 AGENTS.md 是专门给 AI 的'工作手册'，包含项目规范、禁止操作、测试命令等关键指导。Agent 会优先读取这些文件，然后才是 README 和配置文件。"
      },
      {
        question: "动态文件追踪的主要目的是什么？",
        options: ["节省 API 调用费用", "避免 Agent 使用已修改文件的旧版本内容做判断", "加快文件读取速度", "防止 Agent 读取敏感文件"],
        correct: 1,
        explanation: "Agent 在操作过程中维护'已修改文件列表'，确保每次引用文件时使用最新版本。这避免了'改了 A 文件，但还在用 A 文件的旧内容做判断'这种低级错误。"
      },
      {
        question: "如果你想让 AI Agent 遵守特定的代码规范，最有效的方法是什么？",
        options: ["每次对话时手动告诉 AI", "在 CLAUDE.md 文件中写明规范", "修改 AI 模型的权重", "使用更贵的 AI 模型"],
        correct: 1,
        explanation: "CLAUDE.md 会被 Agent 在每次启动时自动读取，是持久化项目规范最有效的方式。顶级工程师团队把 CLAUDE.md 当作项目文档的重要组成部分来维护。"
      },
    ],
  },

  // ============================================================
  // A3: 提示词形态与缓存复用
  // ============================================================
  {
    id: "prompt-cache",
    chapterNum: "A3",
    tag: "进阶篇",
    tagColor: "amber",
    emoji: "💾",
    title: "组件二：提示词形态与缓存复用",
    subtitle: "聪明的「记忆分层」",
    mainDiagram: ADV_CDN.promptLayers,
    mainDiagramCaption: "Prompt 六层优先级体系：从 Override 到 Append，每层有明确的职责和优先级",
    auxImages: [
      { src: ADV_CDN.promptCacheDiagram, caption: "提示词缓存机制：稳定前缀命中缓存节省 90% 成本，动态内容每轮更新" },
      { src: ADV_CDN.promptCache, caption: "稳定前缀与动态内容的分层设计：让缓存命中率最大化" },
    ],
    paragraphs: [
      "每次对话都把整个项目上下文重新发给模型？那会贵死！一个包含工具定义、系统指令和工作区摘要的完整 Prompt 可能有 10 万个 Token，按 Anthropic 的定价，每次调用要花好几美分。如果一个任务需要 100 次 LLM 调用，那就是好几美元——只是在「重复发送同样的信息」上。",
      "**Prompt Cache（提示词缓存）** 是解决这个问题的关键技术。主流 AI API（Anthropic、OpenAI）都支持：如果 Prompt 的前缀部分与上次调用完全相同，API 会直接复用缓存的计算结果，**成本降低 90%，速度提升 85%**。",
      "要最大化缓存命中率，Harness 需要精心设计 Prompt 的结构——把「不变的部分」放在前面，「变化的部分」放在后面。**稳定前缀**包含：系统指令（身份定义、行为规范）、工具定义（工具名称、参数格式、使用说明）、工作区摘要（项目结构、配置信息）。这些内容在一个会话中几乎不变，完美适合缓存。",
      "**动态内容**则包含：用户最新的消息、近期的对话历史、工具调用结果、当前的工作记忆。这些内容每轮都在变化，必须每次重新发送。好的 Harness 会把动态内容控制在尽量小的范围内，让稳定前缀占 Prompt 总长度的 70% 以上，从而获得最高的缓存命中率。",
    ],
    steps: [
      { num: "01", title: "构建稳定前缀", desc: "将系统指令、工具定义、工作区摘要按顺序拼接，形成「稳定前缀」——这部分在整个会话中保持不变", icon: "🔒" },
      { num: "02", title: "标记缓存断点", desc: "在稳定前缀末尾添加缓存标记（cache_control: ephemeral），告诉 API「这里之前的内容可以缓存」", icon: "📍" },
      { num: "03", title: "追加动态内容", desc: "在稳定前缀后面追加本轮的动态内容：用户消息、近期历史、工具结果", icon: "➕" },
      { num: "04", title: "监控命中率", desc: "通过 API 响应中的 cache_read_input_tokens 字段监控缓存命中情况，持续优化 Prompt 结构", icon: "📊" },
    ],
    compareTable: {
      title: "Prompt 缓存前后对比",
      headers: ["指标", "无缓存", "有缓存（命中率 80%）"],
      rows: [
        { aspect: "每次调用成本", without: "$0.05（10万Token）", with: "$0.005（节省 90%）" },
        { aspect: "响应速度", without: "3-5 秒（全量计算）", with: "0.5-1 秒（读缓存）" },
        { aspect: "100次调用总成本", without: "$5.00", with: "$0.50" },
        { aspect: "适用场景", without: "单次短对话", with: "多轮长任务（编程、分析）" },
        { aspect: "实现复杂度", without: "无需额外工作", with: "需要精心设计 Prompt 结构" },
      ],
    },
    codeBlocks: [
      {
        language: "python",
        label: "Anthropic Prompt Cache 实现示例",
        code: `import anthropic

client = anthropic.Anthropic()

# 构建带缓存标记的消息
response = client.messages.create(
    model="claude-opus-4-5",
    max_tokens=1024,
    system=[
        {
            "type": "text",
            "text": SYSTEM_INSTRUCTIONS,  # 系统指令（稳定）
        },
        {
            "type": "text", 
            "text": TOOL_DEFINITIONS,      # 工具定义（稳定）
        },
        {
            "type": "text",
            "text": workspace_summary,     # 工作区摘要（稳定）
            "cache_control": {"type": "ephemeral"},  # 在这里打缓存断点！
        },
    ],
    messages=[
        # 动态内容：每轮都会变化
        *recent_history,
        {"role": "user", "content": user_message},
    ],
)

# 查看缓存命中情况
usage = response.usage
print(f"缓存读取: {usage.cache_read_input_tokens} tokens")
print(f"新计算: {usage.cache_creation_input_tokens} tokens")
print(f"节省比例: {usage.cache_read_input_tokens / usage.input_tokens:.0%}")`,
      },
      {
        language: "typescript",
        label: "Prompt 结构优化：最大化缓存命中率",
        code: `// 好的 Prompt 结构设计：稳定部分靠前，动态部分靠后
function buildOptimizedPrompt(context: AgentContext): Message[] {
  return [
    // ✅ 稳定层 1：系统身份（永不变化）
    { role: "system", content: IDENTITY_PROMPT },
    
    // ✅ 稳定层 2：工具定义（会话内不变）
    { role: "system", content: formatToolDefinitions(context.tools) },
    
    // ✅ 稳定层 3：工作区摘要（会话内不变）
    { role: "system", content: context.workspaceSummary },
    
    // ⚡ 缓存断点在这里 ↑（以上内容命中缓存时节省 90% 成本）
    
    // 🔄 动态层 1：压缩后的历史对话（每轮变化）
    ...compressHistory(context.history, maxTokens: 8000),
    
    // 🔄 动态层 2：最新用户消息（每轮变化）
    { role: "user", content: context.latestMessage },
  ];
}`,
      },
    ],
    insights: [
      { icon: "💰", title: "缓存是最高 ROI 的优化", body: "对于一个长时间运行的 Coding Agent，Prompt Cache 可以把 API 成本从每小时 $5 降到 $0.5。这不是小优化——这是数量级的差异。任何认真做 AI 产品的团队都应该把 Prompt Cache 作为第一优先级的工程优化。" },
      { icon: "📐", title: "Prompt 结构是一门工程学", body: "好的 Prompt 结构不只是「写清楚」，还要考虑缓存效率、Token 预算分配、信息优先级。把最重要、最稳定的信息放在前面；把最新、最动态的信息放在后面——这是 Prompt 工程的黄金法则。" },
      { icon: "🎯", title: "六层优先级体系的设计哲学", body: "Prompt 的六层优先级（Override > System > User > Tool > Assistant > Append）不是随意设计的。它反映了一个核心原则：越靠近「系统」的指令优先级越高，越靠近「用户」的指令越灵活。这让 Harness 既能保持安全边界，又能响应用户需求。" },
    ],
    funFact: "Anthropic 的 Prompt Cache 可以让 Claude 的 API 调用成本降低高达 90%，响应速度提升 85%！一个月处理 100 万次 Agent 调用，有没有缓存的成本差距可以高达数万美元。",
    quiz: [
      {
        question: "Prompt Cache 的核心原理是什么？",
        options: ["压缩 Prompt 文本减少 Token 数量", "缓存 Prompt 前缀的 KV 计算结果，避免重复计算", "把常见问题的答案存储起来直接返回", "使用更小的模型处理重复请求"],
        correct: 1,
        explanation: "Transformer 处理每个 Token 时需要计算 Key-Value（KV）矩阵。Prompt Cache 把稳定不变的前缀部分的 KV 计算结果缓存起来，下次遇到相同前缀时直接复用，避免重复计算，从而大幅降低成本和延迟。"
      },
      {
        question: "哪种内容最适合放在 Prompt 的缓存前缀部分？",
        options: ["用户的每次具体问题", "当前时间和日期", "系统提示词、工具定义、代码仓库内容等稳定不变的内容", "上一轮对话的结果"],
        correct: 2,
        explanation: "缓存前缀必须是稳定不变的内容，这样才能在多次请求中复用。系统提示词、工具定义、代码文件内容是最佳候选——它们在一个会话内基本不变，但每次请求都需要发送。"
      },
      {
        question: "Prompt Cache 对 Agent 系统最大的价值是什么？",
        options: ["让 Agent 更聪明", "让 Agent 能处理更长的对话", "大幅降低成本和延迟，使长上下文 Agent 在经济上可行", "让 Agent 不会产生幻觉"],
        correct: 2,
        explanation: "没有 Prompt Cache，每次 Agent 调用都需要重新处理整个系统提示和代码库，成本极高。有了缓存，90% 的 Token 成本可以节省，使得需要大量上下文的 Agent 系统在经济上变得可行。"
      },
    ],
  },

  // ============================================================
  // A4: 工具接入与调用
  // ============================================================
  {
    id: "tool-access",
    chapterNum: "A4",
    tag: "进阶篇",
    tagColor: "green",
    emoji: "🔧",
    title: "组件三：工具接入与调用",
    subtitle: "从「说说而已」到「真正动手」",
    mainDiagram: ADV_CDN.permissionLayers,
    mainDiagramCaption: "权限判定链：每次工具调用都经过白名单检查、参数验证、风险评估三道关卡",
    auxImages: [
      { src: ADV_CDN.toolPermissionFlow, caption: "工具调用权限流程图：从请求到执行的完整决策路径" },
      { src: ADV_CDN.toolUse, caption: "AI Agent 工具箱：读文件、写文件、执行命令、搜索网络等核心工具" },
    ],
    paragraphs: [
      "普通 LLM 就像一个只会「动嘴」的顾问——它能告诉你「应该这样做」，但它自己做不了任何事。**工具调用（Tool Use / Function Calling）** 是让 AI 从「说说而已」变成「真正动手」的关键机制。通过工具，Agent 可以读写文件、执行代码、搜索网络、调用 API——真正地改变世界的状态。",
      "工具调用的工作原理是：Harness 在 Prompt 中向模型描述可用工具的名称、功能和参数格式；当模型决定使用某个工具时，它会在输出中生成一段结构化的「工具调用请求」（通常是 JSON 格式）；Harness 解析这个请求，执行对应的函数，把结果返回给模型；模型根据结果继续推理，决定下一步行动。",
      "**工具权限系统** 是 Harness 最重要的安全机制之一。不是所有工具调用都应该被自动执行——删除文件、执行 Shell 命令、修改系统配置，这些高风险操作需要人工确认。Claude Code 的权限系统分三档：`allow`（低风险，自动执行）、`ask`（中风险，询问用户）、`deny`（高风险，直接拒绝）。",
      "**工具设计的艺术** 在于粒度的把握。工具太细，Agent 需要调用几十次才能完成一个简单任务；工具太粗，Agent 缺乏精细控制，容易出错。最佳实践是：读操作可以粗粒度（一次读整个文件），写操作要细粒度（精确指定修改的行和内容），执行操作要最细粒度（每条命令单独确认）。",
    ],
    steps: [
      { num: "01", title: "工具注册", desc: "Harness 启动时向模型注册所有可用工具，包括名称、描述、参数 Schema（JSON Schema 格式）", icon: "📋" },
      { num: "02", title: "模型决策", desc: "模型在推理过程中决定是否需要使用工具，生成结构化的工具调用请求（工具名 + 参数）", icon: "🤔" },
      { num: "03", title: "权限验证", desc: "Harness 检查工具名是否在白名单、参数是否符合 Schema、操作路径是否在允许范围内", icon: "🔐" },
      { num: "04", title: "执行与反馈", desc: "通过验证后执行工具，将结果（成功/失败/输出内容）格式化后返回给模型继续推理", icon: "✅" },
    ],
    compareTable: {
      title: "工具风险等级与处理策略",
      headers: ["工具类型", "风险等级", "处理策略"],
      rows: [
        { aspect: "读取文件内容", without: "低", with: "自动执行（allow）" },
        { aspect: "搜索代码库", without: "低", with: "自动执行（allow）" },
        { aspect: "写入文件", without: "中", with: "显示 diff，询问确认（ask）" },
        { aspect: "执行 Shell 命令", without: "中-高", with: "显示命令，询问确认（ask）" },
        { aspect: "删除文件", without: "高", with: "需要明确批准（ask/deny）" },
        { aspect: "网络请求", without: "中", with: "显示 URL，询问确认（ask）" },
      ],
    },
    codeBlocks: [
      {
        language: "python",
        label: "工具定义示例（OpenAI / Anthropic 格式）",
        code: `# 定义一个「读取文件」工具
read_file_tool = {
    "name": "read_file",
    "description": "读取指定路径的文件内容。只能读取项目目录内的文件。",
    "input_schema": {
        "type": "object",
        "properties": {
            "path": {
                "type": "string",
                "description": "文件的相对路径，例如 'src/components/Button.tsx'"
            },
            "start_line": {
                "type": "integer",
                "description": "可选：从第几行开始读取（1-indexed）"
            },
            "end_line": {
                "type": "integer", 
                "description": "可选：读取到第几行结束"
            }
        },
        "required": ["path"]
    }
}

# 工具执行函数（带权限检查）
def execute_read_file(path: str, start_line=None, end_line=None) -> str:
    # 安全检查：防止路径穿越攻击
    abs_path = os.path.abspath(os.path.join(PROJECT_ROOT, path))
    if not abs_path.startswith(PROJECT_ROOT):
        raise PermissionError(f"禁止访问项目目录外的文件: {path}")
    
    with open(abs_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    if start_line and end_line:
        lines = lines[start_line-1:end_line]
    
    return ''.join(lines)`,
      },
      {
        language: "typescript",
        label: "权限检查中间件",
        code: `// 工具调用权限检查器
type PermissionLevel = "allow" | "ask" | "deny";

const TOOL_PERMISSIONS: Record<string, PermissionLevel> = {
  read_file: "allow",
  search_codebase: "allow",
  list_directory: "allow",
  write_file: "ask",        // 需要用户确认
  execute_command: "ask",   // 需要用户确认
  delete_file: "ask",       // 需要用户确认
  network_request: "ask",   // 需要用户确认
};

async function checkPermission(
  toolName: string,
  args: Record<string, unknown>
): Promise<boolean> {
  const level = TOOL_PERMISSIONS[toolName] ?? "deny";
  
  if (level === "allow") return true;
  if (level === "deny") {
    console.error(\`工具 \${toolName} 已被禁止使用\`);
    return false;
  }
  
  // ask: 展示操作详情，等待用户确认
  const preview = formatToolPreview(toolName, args);
  console.log(\`\\n⚠️  Agent 请求执行以下操作：\\n\${preview}\\n\`);
  const confirmed = await promptUser("是否允许？(y/n): ");
  return confirmed.toLowerCase() === "y";
}`,
      },
    ],
    insights: [
      { icon: "🎯", title: "工具是 Agent 的「感官」和「肢体」", body: "没有工具的 LLM 是「闭眼」的——它只能基于训练数据推理，无法感知现实世界的状态。工具给了 Agent 眼睛（读文件、搜索）和手脚（写文件、执行命令），让它能真正与环境交互。" },
      { icon: "🔐", title: "最小权限原则是安全基石", body: "Agent 应该只拥有完成当前任务所需的最小权限集合。不需要网络访问的任务，就不要给网络工具；只需要读取的任务，就不要给写入权限。权限越小，出错的影响范围越小，安全性越高。" },
      { icon: "📊", title: "工具调用是 Agent 能力的天花板", body: "Agent 能做什么，完全取决于它有哪些工具。想让 Agent 能搜索最新信息？给它搜索工具。想让它能操作数据库？给它 SQL 工具。工具设计是 Harness 工程中最有创造空间的部分。" },
    ],
    funFact: "Claude Code 的工具箱包含约 20 种工具，但每种工具都有严格的权限边界。有趣的是，Claude Code 在「高度信任模式」下可以自动批准大多数操作，而在「谨慎模式」下几乎每步都需要确认——同一个 Agent，不同的信任设置，使用体验天差地别。",
    quiz: [
      {
        question: "工具调用的三种权限状态是什么？",
        options: ["读取/写入/执行", "允许/拒绝/超时", "allow（直接执行）/ask（需确认）/deny（直接拒绝）", "安全/警告/危险"],
        correct: 2,
        explanation: "权限系统有三态：allow 表示 Agent 可以直接执行该工具；ask 表示需要用户确认（或由 Coordinator 决策）；deny 表示该工具在当前上下文中被禁止使用。这三态覆盖了所有安全场景。"
      },
      {
        question: "'ask' 权限在不同运行模式下的行为是什么？",
        options: ["总是弹出对话框让用户确认", "总是自动批准", "根据运行模式不同：可能由 Coordinator 决策、用户手动授权或 Classifier 自动判定", "总是拒绝执行"],
        correct: 2,
        explanation: "'ask' 权限的处理方式取决于运行模式：在交互模式下弹出确认框；在自动化模式下可能由 Coordinator Agent 决策；在 CI/CD 环境中可能由安全分类器自动判定。这种灵活性让 Agent 能适应不同场景。"
      },
      {
        question: "为什么工具权限系统要遵循'最小权限原则'？",
        options: ["为了让 Agent 运行更快", "为了节省 API 费用", "清晰的边界让 Agent 更专注，减少跑偏，同时保护用户安全", "为了符合法律要求"],
        correct: 2,
        explanation: "最小权限原则不仅是安全要求，也是工程最佳实践。当 Agent 只能做被明确允许的事时，它的行为更可预测，更不容易产生意外副作用。这既保护了用户，也让 Agent 本身更专注高效。"
      },
    ],
  },

  // ============================================================
  // A5: 上下文瘦身
  // ============================================================
  {
    id: "context-compression",
    chapterNum: "A5",
    tag: "进阶篇",
    tagColor: "amber",
    emoji: "🗜️",
    title: "组件四：上下文瘦身",
    subtitle: "防止 AI「撑爆」",
    mainDiagram: ADV_CDN.contextCompressionFunnel,
    mainDiagramCaption: "上下文压缩漏斗：200k Token 的原始数据经过四道过滤，变成 50k Token 的精华摘要",
    auxImages: [
      { src: ADV_CDN.contextCompression, caption: "上下文压缩的四种策略：裁剪、总结、去重、近期优先" },
    ],
    paragraphs: [
      "AI 的「记忆」是有限的——这个限制叫做**上下文窗口（Context Window）**。Claude 的上下文窗口是 20 万 Token（约 15 万个汉字），GPT-4 是 12.8 万 Token。听起来很大？对于一个长时间运行的编程 Agent 来说，这个窗口会以惊人的速度被填满。",
      "想象一个 Agent 在处理一个大型项目：它读取了 10 个文件（每个 500 行），运行了 20 次测试（每次输出 100 行日志），进行了 50 轮对话。光是这些内容，就可能超过 10 万 Token。再加上系统提示、工具定义、工作区摘要，上下文窗口很快就会「撑爆」。",
      "**上下文压缩**是 Harness 的核心能力之一，它通过四种策略来控制上下文大小：**裁剪（Clipping）** 截断超长的单条内容（比如一个 2000 行的文件只保留前 100 行）；**总结（Summarization）** 把早期的对话历史压缩成摘要；**去重（Deduplication）** 删除重复出现的内容；**近期优先（Recency Priority）** 保留最近的信息，压缩或删除较早的信息。",
      "Claude Code 有一个特别优雅的**自动压缩（Auto-compact）** 功能：当上下文使用率超过 80% 时，它会自动触发一次「压缩对话」——让模型把当前的对话历史总结成一份结构化摘要，然后用这份摘要替换原来的历史，释放大量上下文空间，同时保留任务的关键信息。整个过程对用户几乎透明，任务可以无缝继续。",
    ],
    steps: [
      { num: "01", title: "监控使用率", desc: "实时追踪上下文窗口的使用情况，当超过阈值（如 70%）时触发压缩流程", icon: "📊" },
      { num: "02", title: "裁剪超长内容", desc: "对单条超长内容（文件内容、命令输出）进行截断，只保留最关键的部分", icon: "✂️" },
      { num: "03", title: "总结历史对话", desc: "让模型把早期对话历史压缩成结构化摘要，保留关键决策和重要发现", icon: "📝" },
      { num: "04", title: "去重与优先排序", desc: "删除重复内容，按「近期优先」原则重新排列，确保最新信息始终可见", icon: "🔄" },
    ],
    compareTable: {
      title: "四种压缩策略对比",
      headers: ["策略", "适用场景", "信息损失"],
      rows: [
        { aspect: "裁剪（Clipping）", without: "超长文件、日志输出", with: "低（只截断末尾）" },
        { aspect: "总结（Summarization）", without: "早期对话历史", with: "中（保留关键信息）" },
        { aspect: "去重（Deduplication）", without: "重复读取的文件", with: "极低（完全无损）" },
        { aspect: "近期优先", without: "长任务的历史记录", with: "中（丢弃早期细节）" },
        { aspect: "自动压缩（Auto-compact）", without: "接近上限时的紧急处理", with: "低（模型主动总结）" },
      ],
    },
    codeBlocks: [
      {
        language: "python",
        label: "上下文压缩管理器",
        code: `class ContextManager:
    def __init__(self, max_tokens: int = 180_000):
        self.max_tokens = max_tokens
        self.warning_threshold = 0.7  # 70% 时开始压缩
        
    def should_compress(self, messages: list) -> bool:
        current_tokens = count_tokens(messages)
        return current_tokens / self.max_tokens > self.warning_threshold
    
    def compress(self, messages: list, llm) -> list:
        """压缩上下文，返回压缩后的消息列表"""
        # 保留：系统消息 + 最近 10 轮对话
        system_msgs = [m for m in messages if m["role"] == "system"]
        recent_msgs = messages[-20:]  # 最近 20 条消息
        old_msgs = messages[len(system_msgs):-20]  # 需要压缩的历史
        
        if not old_msgs:
            return messages  # 没有可压缩的历史
        
        # 让模型总结历史
        summary_prompt = f"""
        请将以下对话历史总结为结构化摘要，保留：
        1. 已完成的任务和结果
        2. 重要的决策和原因
        3. 当前任务的进度状态
        4. 需要注意的关键信息
        
        对话历史：
        {format_messages(old_msgs)}
        """
        
        summary = llm.chat(summary_prompt)
        
        # 用摘要替换历史
        return system_msgs + [
            {"role": "assistant", "content": f"[历史摘要]\\n{summary}"}
        ] + recent_msgs`,
      },
      {
        language: "typescript",
        label: "智能内容裁剪",
        code: `// 智能裁剪：根据内容类型采用不同策略
function clipContent(content: string, maxTokens: number, type: "file" | "log" | "output"): string {
  const tokens = countTokens(content);
  if (tokens <= maxTokens) return content;  // 不需要裁剪
  
  switch (type) {
    case "file":
      // 文件：保留开头（通常有重要的导入和定义）
      return truncateToTokens(content, maxTokens) + "\\n... [文件内容已截断]";
    
    case "log":
      // 日志：保留末尾（最新的错误信息最重要）
      const lines = content.split("\\n");
      const keepLines = Math.floor(maxTokens / 10);  // 估算每行 10 tokens
      return "... [早期日志已省略]\\n" + lines.slice(-keepLines).join("\\n");
    
    case "output":
      // 命令输出：保留开头和末尾（开头有命令信息，末尾有结果）
      const half = Math.floor(maxTokens / 2);
      const start = truncateToTokens(content, half);
      const end = getLastTokens(content, half);
      return start + "\\n\\n... [中间内容已省略] ...\\n\\n" + end;
  }
}`,
      },
    ],
    insights: [
      { icon: "🧠", title: "上下文是 Agent 的「工作记忆」", body: "人类的工作记忆容量有限（研究表明只能同时处理 7±2 个信息块），所以我们会做笔记、列清单。Agent 的上下文窗口就是它的工作记忆，压缩策略就是它的「做笔记」机制。好的压缩策略让 Agent 能处理远超上下文窗口大小的复杂任务。" },
      { icon: "⚡", title: "Auto-compact 是工程优雅的体现", body: "Claude Code 的 Auto-compact 功能是一个精妙的设计：它不是简单地截断历史，而是让模型自己总结历史——因为模型最了解哪些信息是重要的。这种「让 AI 管理自己的记忆」的设计，是 AI 工程中少有的真正优雅的解决方案。" },
      { icon: "📏", title: "上下文大小是成本的主要驱动因素", body: "AI API 的计费通常按 Token 数量计算。一个长时间运行的 Agent，如果不做上下文压缩，每次调用的 Token 数会线性增长，成本会失控。好的压缩策略可以把平均上下文大小控制在一个稳定水平，让 Agent 的运行成本可预测。" },
    ],
    funFact: "Claude Code 有一个「Auto-compact」功能：当上下文快满时，它会自动把历史对话压缩成摘要，然后继续工作，整个过程对用户几乎透明！你可以在 Claude Code 的设置中查看当前上下文使用情况，看看它是如何管理自己的「记忆」的。",
    quiz: [
      {
        question: "上下文压缩（Context Compression）的触发时机是什么？",
        options: ["每隔固定时间自动触发", "当上下文窗口使用率达到预设阈值（如 80%）时", "只有用户手动触发时", "每次工具调用后都触发"],
        correct: 1,
        explanation: "上下文压缩在上下文使用率达到预设阈值时自动触发（Claude Code 称之为 Auto-compact）。触发太早会丢失有用信息，触发太晚可能来不及压缩，所以通常设在 70-85% 的使用率时触发。"
      },
      {
        question: "压缩上下文时，哪些内容应该被保留？",
        options: ["所有历史对话原文", "只保留最近几轮对话", "关键决策、已修改文件列表、当前任务状态、重要错误信息", "只保留用户的原始问题"],
        correct: 2,
        explanation: "好的压缩策略保留'决策性信息'而非'过程性信息'：已做出的架构决策、已修改的文件列表、当前任务的进度状态、以及导致方向调整的重要错误。这些是 Agent 继续工作所必需的。"
      },
      {
        question: "'Context Collapse'和'Auto-compact'的区别是什么？",
        options: ["它们是同一件事", "Context Collapse 是危机（上下文超限崩溃），Auto-compact 是预防（主动压缩避免崩溃）", "Auto-compact 比 Context Collapse 更危险", "Context Collapse 是 Claude 专有技术"],
        correct: 1,
        explanation: "Context Collapse 是灾难场景：上下文超出限制导致 Agent 崩溃或丢失关键信息。Auto-compact 是预防措施：在达到限制之前主动压缩，让 Agent 能继续长时间工作而不崩溃。"
      },
    ],
  },

  // ============================================================
  // A6: 结构化会话记忆
  // ============================================================
  {
    id: "session-memory",
    chapterNum: "A6",
    tag: "进阶篇",
    tagColor: "green",
    emoji: "🗄️",
    title: "组件五：结构化会话记忆",
    subtitle: "「完整档案」vs「核心备忘录」",
    mainDiagram: ADV_CDN.queryLoop,
    mainDiagramCaption: "查询循环中的记忆管理：完整记录与工作记忆双轨并行，支撑长任务的连贯性",
    auxImages: [
      { src: ADV_CDN.sessionMemoryDual, caption: "双层记忆架构：Full Transcript（完整档案）与 Working Memory（工作记忆）各司其职" },
      { src: ADV_CDN.sessionMemory, caption: "会话记忆的存储结构：JSON 文件记录每次交互的完整信息" },
    ],
    paragraphs: [
      "你有没有遇到过这种情况：和 AI 聊了很久，突然关掉了窗口，再打开时一切都消失了，只能从头开始？这是因为大多数 AI 应用没有实现真正的**会话持久化**。对于一个需要运行几个小时的 Coding Agent 来说，这是不可接受的——如果任务中途崩溃，所有进度都会丢失。",
      "**完整记录（Full Transcript）** 是会话持久化的基础。它以 JSON 格式记录所有交互：用户的每条消息、模型的每次回复、每次工具调用的请求和结果、每次错误和恢复。这个文件是 Agent 的「完整日志」，可以用来恢复任务、调试问题、审计行为。Claude Code 把这些文件存储在 `~/.claude/` 目录下，你可以随时查看。",
      "**工作记忆（Working Memory）** 则是一个精简的「当前状态摘要」。它不记录所有细节，只保留：当前任务的目标是什么、已经完成了哪些步骤、还有哪些步骤待完成、有哪些重要的约束和注意事项、当前正在操作哪些关键文件。工作记忆的作用是在漫长的任务中保持「任务连贯性」——让 Agent 始终记得「我在做什么、做到哪了」。",
      "两层记忆各有用途，缺一不可。完整记录用于**恢复**：如果 Agent 崩溃了，可以从完整记录中重建状态，从断点继续。工作记忆用于**连贯**：在每次 LLM 调用时，把工作记忆注入 Prompt，确保模型始终有清晰的任务上下文，不会「跑偏」。",
    ],
    steps: [
      { num: "01", title: "初始化记忆系统", desc: "Agent 启动时创建会话 ID，初始化完整记录文件（JSON）和工作记忆（结构化对象）", icon: "🆕" },
      { num: "02", title: "实时记录交互", desc: "每次用户消息、模型回复、工具调用都追加到完整记录文件，确保不丢失任何信息", icon: "📝" },
      { num: "03", title: "更新工作记忆", desc: "在关键节点（完成子任务、发现重要信息）更新工作记忆，保持任务状态的准确性", icon: "🔄" },
      { num: "04", title: "注入 Prompt", desc: "每次 LLM 调用时，将工作记忆格式化后注入 Prompt，确保模型有清晰的任务上下文", icon: "💉" },
    ],
    compareTable: {
      title: "完整记录 vs 工作记忆",
      headers: ["维度", "完整记录", "工作记忆"],
      rows: [
        { aspect: "存储内容", without: "所有交互的完整原文", with: "当前任务的关键摘要" },
        { aspect: "大小", without: "可能达到数 MB", with: "通常 < 2KB" },
        { aspect: "更新频率", without: "每次交互后追加", with: "关键节点时更新" },
        { aspect: "主要用途", without: "崩溃恢复、审计调试", with: "任务连贯性、上下文注入" },
        { aspect: "注入 Prompt", without: "否（太大）", with: "是（每次调用都注入）" },
        { aspect: "存储位置", without: "磁盘文件（JSON）", with: "内存 + 磁盘备份" },
      ],
    },
    codeBlocks: [
      {
        language: "python",
        label: "会话记忆管理器实现",
        code: `import json
from pathlib import Path
from datetime import datetime

class SessionMemory:
    def __init__(self, session_id: str):
        self.session_id = session_id
        self.transcript_path = Path(f"~/.agent/sessions/{session_id}.json").expanduser()
        self.transcript_path.parent.mkdir(parents=True, exist_ok=True)
        
        # 工作记忆（保存在内存中，也备份到磁盘）
        self.working_memory = {
            "current_goal": "",
            "completed_steps": [],
            "pending_steps": [],
            "key_files": [],
            "important_notes": [],
            "constraints": []
        }
        
    def log_interaction(self, role: str, content: str, tool_call=None):
        """记录一次交互到完整记录"""
        entry = {
            "timestamp": datetime.now().isoformat(),
            "role": role,
            "content": content,
        }
        if tool_call:
            entry["tool_call"] = tool_call
            
        # 追加到 JSON 文件（每次交互后立即写入，防止崩溃丢失）
        with open(self.transcript_path, "a") as f:
            f.write(json.dumps(entry, ensure_ascii=False) + "\\n")
    
    def update_working_memory(self, updates: dict):
        """更新工作记忆"""
        self.working_memory.update(updates)
        # 同时备份到磁盘
        wm_path = self.transcript_path.with_suffix(".wm.json")
        wm_path.write_text(json.dumps(self.working_memory, ensure_ascii=False, indent=2))
    
    def format_for_prompt(self) -> str:
        """将工作记忆格式化为 Prompt 可用的文本"""
        wm = self.working_memory
        parts = [f"## 当前任务状态\\n目标：{wm['current_goal']}"]
        
        if wm["completed_steps"]:
            parts.append("\\n已完成：\\n" + "\\n".join(f"- {s}" for s in wm["completed_steps"]))
        if wm["pending_steps"]:
            parts.append("\\n待完成：\\n" + "\\n".join(f"- {s}" for s in wm["pending_steps"]))
        if wm["key_files"]:
            parts.append("\\n关键文件：" + ", ".join(wm["key_files"]))
        if wm["important_notes"]:
            parts.append("\\n注意事项：\\n" + "\\n".join(f"- {n}" for n in wm["important_notes"]))
            
        return "\\n".join(parts)`,
      },
      {
        language: "bash",
        label: "查看 Claude Code 的会话记录",
        code: `# Claude Code 把会话记录存储在 ~/.claude/ 目录
ls ~/.claude/projects/

# 查看最近的会话文件
ls -lt ~/.claude/projects/*/sessions/ | head -10

# 用 jq 格式化查看会话内容
cat ~/.claude/projects/my-project/sessions/latest.json | jq '.'

# 查看 Agent 的所有工具调用记录
cat session.json | jq '.[] | select(.type == "tool_use") | {tool: .name, input: .input}'

# 统计本次会话的工具调用次数
cat session.json | jq '[.[] | select(.type == "tool_use")] | length'`,
      },
    ],
    insights: [
      { icon: "💾", title: "持久化是 Agent 可靠性的基石", body: "一个不能从崩溃中恢复的 Agent，在生产环境中是不可用的。完整记录机制让 Agent 具备了「断点续传」能力——即使中途崩溃，也能从最后一个成功的状态继续，而不是从头开始。" },
      { icon: "🎯", title: "工作记忆防止「任务漂移」", body: "在漫长的任务中，模型很容易「忘记」最初的目标，被中途遇到的有趣问题带跑偏。工作记忆在每次 LLM 调用时提醒模型「你的目标是什么、你做到哪了」，是防止任务漂移的关键机制。" },
      { icon: "🔍", title: "完整记录是最好的调试工具", body: "当 Agent 做出了奇怪的决策，你可以翻看完整记录，找到它是在哪一步「走偏」的，是什么信息导致了错误的决策。这比在代码里加断点调试要直观得多——你直接看到了 AI 的「思维过程」。" },
    ],
    funFact: "Claude Code 的会话文件存储在 ~/.claude/ 目录下，你可以直接用文本编辑器查看这些 JSON 文件，看 AI 是怎么「思考」的！有些工程师会定期分析这些文件，发现 AI 的决策模式，从而优化他们的 CLAUDE.md 指导文件。",
    quiz: [
      {
        question: "Agent 的会话记忆和知识记忆的核心区别是什么？",
        options: ["会话记忆容量更大", "会话记忆随对话结束消失，知识记忆持久化到磁盘可跨会话复用", "知识记忆更快", "会话记忆更安全"],
        correct: 1,
        explanation: "会话记忆存在于当前上下文窗口中，对话结束即消失，无法跨会话使用。知识记忆则持久化到磁盘（如 ~/.claude/ 目录下的 JSON 文件），可以在下次对话时加载使用。"
      },
      {
        question: "为什么说「每个 Agent 对话都是从全新开始」是一个设计缺陷？",
        options: ["它不是缺陷，这是正常行为", "因为每次对话都要重新建立项目上下文，无法利用历史经验和已学到的教训，导致重复错误和效率低下", "因为这会消耗更多内存", "因为这会使模型混乱"],
        correct: 1,
        explanation: "如果 Agent 每次对话都忘记之前的经验，它会重复同样的错误、重新建立相同的项目上下文。知识记忆让 Agent 能记住「这个项目上次出错的地方」和「用户偏好的代码风格」，持续改进。"
      },
      {
        question: "以下哪种信息最适合存入知识记忆？",
        options: ["每次对话的完整历史", "当前文件的具体内容", "项目的架构决策、用户偏好、历史错误教训等高价值长期知识", "每次调用的具体参数"],
        correct: 2,
        explanation: "知识记忆应存储高价值、长期有效的信息：项目架构决策、用户的个人偏好、历史错误和教训。这些信息跨会话依然有效，值得持久化。"
      },
    ],
  },

  // ============================================================
  // A7: 任务委派与子智能体
  // ============================================================
  {
    id: "delegation",
    chapterNum: "A7",
    tag: "进阶篇",
    tagColor: "amber",
    emoji: "🤝",
    title: "组件六：任务委派与子智能体",
    subtitle: "「老大」带「小弟」干活",
    mainDiagram: ADV_CDN.multiAgent,
    mainDiagramCaption: "多智能体架构：Coordinator 协调者统筹全局，三类专业 Worker 并行执行子任务",
    auxImages: [
      { src: ADV_CDN.multiAgentHierarchy, caption: "子 Agent 层级与约束：每个 Worker 都有明确的权限边界和任务范围" },
      { src: ADV_CDN.multiAgentDelegate, caption: "任务委派流程：协调者拆解任务、分配子 Agent、汇总结果" },
    ],
    paragraphs: [
      "当任务足够复杂，单个 Agent 会遇到两个瓶颈：**上下文窗口限制**（一个 Agent 无法同时处理所有信息）和**串行执行限制**（一个 Agent 只能一步一步做，无法并行）。**多智能体（Multi-Agent）** 架构正是为了突破这两个瓶颈而设计的。",
      "多智能体的核心模式是**「协调者 + 工作者」（Coordinator + Worker）**。协调者（Coordinator）负责理解用户的高层目标，把复杂任务拆解成相对独立的子任务，分配给多个工作者（Worker）并行执行，最后汇总所有结果，形成最终答案。工作者专注于自己的子任务，不需要了解全局情况。",
      "子 Agent 的**权限边界**是多智能体设计中最关键的问题。子 Agent 必须有足够的上下文（知道自己在做什么、为什么做），但权限必须比主 Agent 更受限。常见的限制包括：只读访问（不能修改代码）、禁止创建更多子 Agent（防止无限递归）、限制工具调用深度、限制执行时间。",
      "**「始终综合（Always Synthesize）」** 是协调者的核心职责。协调者不只是把子任务的结果简单拼接在一起，而是要理解每个子任务的结果对整体目标的意义，识别子任务之间的依赖关系和冲突，形成一个连贯的、高质量的最终输出。这是多智能体系统中最难实现的部分，也是区分好坏 Harness 的关键。",
    ],
    steps: [
      { num: "01", title: "任务分析与拆解", desc: "协调者分析用户目标，识别可以并行处理的子任务，确定子任务之间的依赖关系", icon: "🗺️" },
      { num: "02", title: "子 Agent 创建", desc: "为每个子任务创建专属的子 Agent，注入必要的上下文，设置权限边界和执行约束", icon: "🤖" },
      { num: "03", title: "并行执行", desc: "多个子 Agent 同时工作，各自处理自己的子任务，互不干扰（状态隔离）", icon: "⚡" },
      { num: "04", title: "结果综合", desc: "协调者收集所有子 Agent 的结果，分析一致性，解决冲突，综合形成最终答案", icon: "🔗" },
    ],
    compareTable: {
      title: "单 Agent vs 多 Agent 架构",
      headers: ["维度", "单 Agent", "多 Agent"],
      rows: [
        { aspect: "适用任务规模", without: "中小型任务", with: "大型复杂任务" },
        { aspect: "执行方式", without: "串行，一步一步", with: "并行，同时处理多个子任务" },
        { aspect: "上下文管理", without: "单一上下文窗口", with: "多个独立上下文，互不干扰" },
        { aspect: "错误影响范围", without: "一个错误影响全局", with: "子 Agent 错误只影响子任务" },
        { aspect: "实现复杂度", without: "低", with: "高（需要协调逻辑）" },
        { aspect: "典型用例", without: "修复单个 Bug、写一个函数", with: "重构整个模块、全面代码审查" },
      ],
    },
    codeBlocks: [
      {
        language: "python",
        label: "多智能体协调器实现",
        code: `import asyncio
from dataclasses import dataclass

@dataclass
class SubTask:
    id: str
    description: str
    context: str  # 子 Agent 需要的上下文
    constraints: list[str]  # 权限约束

class MultiAgentCoordinator:
    def __init__(self, llm, tools):
        self.llm = llm
        self.tools = tools
    
    async def execute(self, user_goal: str) -> str:
        # 1. 分析并拆解任务
        subtasks = await self.decompose_task(user_goal)
        print(f"任务已拆解为 {len(subtasks)} 个子任务")
        
        # 2. 并行执行子任务
        results = await asyncio.gather(*[
            self.run_sub_agent(task) for task in subtasks
        ])
        
        # 3. 综合结果
        final_answer = await self.synthesize(user_goal, subtasks, results)
        return final_answer
    
    async def run_sub_agent(self, task: SubTask) -> str:
        """创建并运行一个子 Agent"""
        # 子 Agent 的工具集受限（只有只读工具）
        limited_tools = [t for t in self.tools if t.name in READONLY_TOOLS]
        
        sub_agent = SubAgent(
            llm=self.llm,
            tools=limited_tools,
            max_iterations=10,  # 限制迭代次数
            context=task.context,
            constraints=task.constraints
        )
        
        return await sub_agent.run(task.description)
    
    async def synthesize(self, goal: str, tasks: list, results: list) -> str:
        """综合所有子任务结果"""
        synthesis_prompt = f"""
        用户目标：{goal}
        
        子任务执行结果：
        {format_results(tasks, results)}
        
        请综合以上结果，形成一个完整、连贯的最终答案。
        注意识别结果之间的关联性和潜在冲突。
        """
        return await self.llm.chat(synthesis_prompt)`,
      },
      {
        language: "python",
        label: "子 Agent 权限沙箱",
        code: `# 子 Agent 的权限约束实现
class SubAgentSandbox:
    def __init__(self, allowed_paths: list[str], readonly: bool = True):
        self.allowed_paths = allowed_paths
        self.readonly = readonly
        self.call_count = 0
        self.max_calls = 50  # 防止子 Agent 无限循环
    
    def check_tool_call(self, tool_name: str, args: dict) -> bool:
        self.call_count += 1
        
        # 检查调用次数限制
        if self.call_count > self.max_calls:
            raise RuntimeError("子 Agent 超过最大工具调用次数")
        
        # 只读模式：禁止写操作
        if self.readonly and tool_name in WRITE_TOOLS:
            raise PermissionError(f"子 Agent 无权执行写操作: {tool_name}")
        
        # 路径限制：只能访问指定目录
        if "path" in args:
            abs_path = os.path.abspath(args["path"])
            if not any(abs_path.startswith(p) for p in self.allowed_paths):
                raise PermissionError(f"子 Agent 无权访问路径: {args['path']}")
        
        # 禁止创建子 Agent（防止无限递归）
        if tool_name == "create_sub_agent":
            raise PermissionError("子 Agent 不能创建更多子 Agent")
        
        return True`,
      },
    ],
    insights: [
      { icon: "🚀", title: "并行是多智能体的核心价值", body: "单 Agent 串行处理 10 个子任务需要 10 倍时间；多 Agent 并行处理只需要 1 倍时间（加上少量协调开销）。对于大型任务，这种加速是质的飞跃——原本需要 1 小时的任务，可以在 10 分钟内完成。" },
      { icon: "🔒", title: "状态隔离是安全的保障", body: "每个子 Agent 有自己独立的上下文，不会看到其他子 Agent 的中间状态。这种隔离不只是为了安全，也是为了防止「信息污染」——一个子 Agent 的错误推理，不会影响其他子 Agent 的判断。" },
      { icon: "🎭", title: "协调者的质量决定系统的质量", body: "多智能体系统的瓶颈往往不在工作者，而在协调者。如何拆解任务、如何分配上下文、如何综合结果——这些协调逻辑的质量，决定了整个系统的输出质量。一个糟糕的协调者会让优秀的工作者白费力气。" },
    ],
    funFact: "Codex 的子 Agent 通常继承主 Agent 的沙箱环境，而不是强制只读模式——它们的边界更多体现在任务范围和执行深度上。有趣的是，研究发现当子 Agent 数量超过 5 个时，协调开销会急剧增加，反而不如 3-4 个子 Agent 效率高！",
    quiz: [
      {
        question: "多智能体系统中，Coordinator 的核心职责是什么？",
        options: ["直接执行所有任务", "拆解任务、分配给合适的 Worker，并将结果整合成最终答案", "监控系统性能", "存储所有文件"],
        correct: 1,
        explanation: "Coordinator 是多智能体系统的「大脑」：它理解整个任务，将其拆解为子任务，分配给最合适的 Worker，最后将各 Worker 的结果整合成一个连贯的最终答案（Always Synthesize）。"
      },
      {
        question: "为什么子 Agent 之间要保持状态隔离？",
        options: ["节省内存占用", "防止子 Agent 之间相互干扰，确保并行执行的独立性和结果的可预测性", "加快执行速度", "节省 API 调用次数"],
        correct: 1,
        explanation: "状态隔离确保子 Agent A 的操作不会影响子 Agent B 的工作环境。这使并行执行成为可能，同时让每个 Worker 的行为可预测、结果可验证。"
      },
      {
        question: "以下哪种场景最适合使用多智能体架构？",
        options: ["简单的单步骤任务", "只需要一个工具的任务", "需要不同专业技能的复杂任务，如「研究+实现+验证」同时进行", "实时聊天场景"],
        correct: 2,
        explanation: "多智能体的价值在于并行和专业化：当一个任务需要同时进行研究、实现和验证时，三个 Worker 并行工作效率最高。单个 Agent 只能顺序执行，无法并行。"
      },
    ],
  },

  // ============================================================
  // A8 — MCP 协议：AI 工具调用的通用标准
  // ============================================================
  {
  id: "adv-mcp",
  chapterNum: "A8",
  tag: "MCP 协议",
  tagColor: "amber",
  emoji: "🔌",
  title: "MCP：让 AI 接入一切的通用插头",
  subtitle: "Model Context Protocol — 统一 AI 工具调用的开放标准",
  mainDiagram: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/mcp-protocol_0d62eea4.png",
  mainDiagramCaption: "MCP 协议架构：Host（宿主应用）通过标准化 Client-Server 协议连接各类 MCP Server，实现工具、资源、提示词的统一调用",
  auxImages: [
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/adv-tool-permission-flow-Fqxz8k3Jf5RHfEALBnfRPM.webp",
      caption: "MCP 工具调用权限流程：从 Host 发起请求，经 Client 路由，到 Server 执行并返回结果",
    },
  ],
  paragraphs: [
    "2024 年 11 月，Anthropic 发布了 **Model Context Protocol（MCP）**——一个开放的 AI 工具调用标准协议。在此之前，每个 AI 应用都需要为每个外部工具单独编写集成代码：Claude 要调用 GitHub，需要写一套；要调用 Slack，再写一套；要调用数据库，又是一套。这种「每次重新发明轮子」的方式极其低效，也让 AI 应用的生态碎片化严重。",
    "MCP 的核心思想是：**用一个统一的协议，替代所有的一对一集成**。就像 USB 接口统一了各种外设连接方式一样，MCP 定义了 AI 模型（Host）与外部工具（Server）之间通信的标准格式。只要工具实现了 MCP Server 接口，任何支持 MCP 的 AI 应用（Claude Desktop、Cursor、Windsurf 等）都能直接调用它，无需额外适配。",
    "MCP 协议的架构分为三层：**Host**（宿主应用，如 Claude Desktop）负责管理用户会话和 AI 模型；**Client**（协议客户端）嵌入在 Host 内部，负责与各个 Server 建立连接和通信；**Server**（工具服务器）是独立运行的进程，对外暴露工具、资源和提示词三类能力。这三层通过 JSON-RPC 2.0 协议通信，支持本地进程（stdio）和远程服务（HTTP/SSE）两种传输方式。",
    "MCP Server 能提供三类能力：**Tools（工具）**是 AI 可以主动调用的函数，如「读取文件」「执行 SQL 查询」「发送邮件」；**Resources（资源）**是 AI 可以读取的数据源，如「当前打开的文件」「数据库 Schema」「项目文档」；**Prompts（提示词）**是预定义的提示词模板，帮助 AI 在特定场景下更好地完成任务。这三类能力的组合，让 MCP Server 可以代表几乎任何外部系统。",
    "截至 2025 年，MCP 生态已经爆炸式增长。官方和社区提供了数百个 MCP Server，覆盖 GitHub、Slack、Google Drive、PostgreSQL、Figma、Jira、Notion 等主流工具。更重要的是，主流 AI 编程工具（Cursor、Windsurf、Zed）和 AI 应用框架（LangChain、AutoGen）都已支持 MCP，使其成为事实上的行业标准。Karpathy 称 MCP 是「AI 时代的 USB-C」——一个让一切互联的通用接口。",
  ],
  steps: [
    { num: "01", icon: "🏠", title: "Host 发起请求", desc: "用户在 Claude Desktop 或 Cursor 中输入指令，Host 判断需要调用外部工具，通过内嵌的 MCP Client 发起工具调用请求" },
    { num: "02", icon: "📡", title: "Client 路由", desc: "MCP Client 根据工具名称找到对应的 Server 连接，将请求序列化为 JSON-RPC 格式，通过 stdio 或 HTTP/SSE 发送给 Server" },
    { num: "03", icon: "⚙️", title: "Server 执行", desc: "MCP Server 接收请求，调用实际的外部 API 或本地函数（如读取文件、查询数据库），将结果序列化后返回给 Client" },
    { num: "04", icon: "🔄", title: "结果注入上下文", desc: "Client 将 Server 返回的结果传回 Host，Host 将其注入 AI 模型的上下文，AI 基于工具执行结果继续生成响应" },
  ],
  compareTable: {
    title: "MCP vs 传统工具集成方式对比",
    headers: ["对比维度", "传统集成方式", "MCP 协议"],
    rows: [
      { aspect: "开发成本", without: "每个工具单独开发适配层，N 个工具 = N 倍工作量", with: "一次实现 MCP Server，所有支持 MCP 的 Host 均可使用" },
      { aspect: "维护成本", without: "工具 API 变更时，需要更新所有集成代码", with: "只需更新 MCP Server，Host 端无需改动" },
      { aspect: "生态兼容", without: "Claude 的集成无法直接用于 GPT 或 Gemini", with: "一个 MCP Server 可被所有支持 MCP 的 AI 应用调用" },
      { aspect: "安全控制", without: "权限控制分散，难以统一管理", with: "Host 统一管理工具权限，用户可精细控制每个 Server 的访问权限" },
      { aspect: "调试难度", without: "黑盒集成，难以追踪工具调用链路", with: "标准化协议，完整的请求/响应日志，易于调试" },
    ],
  },
  codeBlocks: [
    {
      language: "python",
      label: "创建一个简单的 MCP Server（Python）",
      code: `from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent
import asyncio

# 创建 MCP Server 实例
app = Server("my-file-server")

# 注册工具：读取文件
@app.list_tools()
async def list_tools():
    return [
        Tool(
            name="read_file",
            description="读取指定路径的文件内容",
            inputSchema={
                "type": "object",
                "properties": {
                    "path": {"type": "string", "description": "文件路径"}
                },
                "required": ["path"]
            }
        )
    ]

@app.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "read_file":
        path = arguments["path"]
        with open(path, "r") as f:
            content = f.read()
        return [TextContent(type="text", text=content)]

# 启动 Server（通过 stdio 与 Host 通信）
async def main():
    async with stdio_server() as (read_stream, write_stream):
        await app.run(read_stream, write_stream, app.create_initialization_options())

asyncio.run(main())`,
    },
    {
      language: "bash",
      label: "在 Claude Desktop 中配置 MCP Server",
      code: `# 编辑 Claude Desktop 配置文件
# macOS: ~/Library/Application Support/Claude/claude_desktop_config.json
# Windows: %APPDATA%/Claude/claude_desktop_config.json

cat << 'EOF' > ~/Library/Application\ Support/Claude/claude_desktop_config.json
{
  "mcpServers": {
    "my-file-server": {
      "command": "python3",
      "args": ["/path/to/my_mcp_server.py"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "POSTGRES_CONNECTION_STRING": "postgresql://localhost/mydb"
      }
    }
  }
}
EOF

# 重启 Claude Desktop 后，AI 即可调用这些工具`,
    },
  ],
  insights: [
    { icon: "🌐", title: "MCP 是 AI 生态的基础设施", body: "就像 HTTP 协议统一了 Web 通信，MCP 正在统一 AI 工具调用。一个健康的 MCP 生态意味着：工具开发者只需维护一个 Server，就能让所有 AI 应用受益；AI 应用开发者只需支持 MCP，就能获得整个工具生态的能力。这种网络效应一旦形成，将极大降低 AI 应用的开发门槛。" },
    { icon: "🔐", title: "安全是 MCP 的核心设计原则", body: "MCP 的权限模型要求 Host 在调用工具前必须获得用户明确授权。Server 只能访问它被授权的资源，不能主动连接网络或访问文件系统之外的内容。这种「最小权限原则」的设计，防止了恶意 MCP Server 通过 AI 进行权限提升攻击。" },
    { icon: "🚀", title: "本地 Server 是 MCP 的杀手级特性", body: "与云端 API 不同，MCP Server 可以在用户本地运行，直接访问本地文件、数据库、内网服务。这意味着 AI 可以真正「理解」用户的本地环境——读取你的代码库、查询你的本地数据库、访问你公司内网的 Wiki——而无需将敏感数据上传到云端。" },
  ],
  funFact: "MCP 协议发布后的 3 个月内，GitHub 上出现了超过 1000 个社区维护的 MCP Server，覆盖从「控制 Spotify 播放」到「查询股票价格」再到「操作 3D 打印机」的各种场景。有人甚至做了一个 MCP Server，让 Claude 可以直接控制智能家居设备——用自然语言说「帮我把客厅灯调暗一点」就能执行！",
  quiz: [
    {
      question: "MCP 协议解决了什么核心问题？",
      options: ["让 AI 模型运行更快", "消除 AI 应用与外部工具之间的「N×M 集成爆炸」，用统一标准替代重复的定制集成", "让 AI 模型更聪明", "降低 AI 训练成本"],
      correct: 1,
      explanation: "没有 MCP 时，N 个 AI 应用 × M 个工具 = N×M 个定制集成。MCP 提供统一标准：工具只需实现一次 MCP Server，所有支持 MCP 的 AI 应用都能直接使用，将复杂度从 N×M 降到 N+M。"
    },
    {
      question: "MCP Server 可以向 AI 提供哪三类能力？",
      options: ["读取/写入/执行", "工具（Tools）/资源（Resources）/提示词（Prompts）", "查询/修改/删除", "输入/处理/输出"],
      correct: 1,
      explanation: "MCP Server 提供三类能力：Tools（可执行操作，如搜索、发邮件）、Resources（可读取数据，如文件、数据库记录）、Prompts（预定义提示词模板）。这三类覆盖了 AI 与外部世界交互的所有场景。"
    },
    {
      question: "为什么说 MCP 的本地 Server 是「杀手级特性」？",
      options: ["因为本地运行更快", "因为 AI 可以直接访问本地文件、内网服务，无需将敏感数据上传云端，实现真正的私有化部署", "因为本地 Server 免费", "因为本地 Server 更稳定"],
      correct: 1,
      explanation: "本地 MCP Server 让 AI 能读取你的代码库、查询本地数据库、访问公司内网 Wiki——而无需将敏感数据上传到云端。这对企业私有化部署和个人隐私保护都至关重要。"
    },
  ],
},

// ============================================================
// A9 — AI 基准评估：如何衡量 AI 的真实能力
// ============================================================
{
  id: "adv-benchmarks",
  chapterNum: "A9",
  tag: "AI 基准评估",
  tagColor: "green",
  emoji: "📊",
  title: "AI 基准：给模型打分的科学与艺术",
  subtitle: "从 MMLU 到 ARC-AGI，理解 AI 能力评估的方法论与局限",
  mainDiagram: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/ai-benchmarks_642e5b30.png",
  mainDiagramCaption: "主流 AI 基准评估体系：从知识测试（MMLU）到推理能力（ARC）再到代码生成（HumanEval），不同基准衡量不同维度的 AI 能力",
  auxImages: [
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/adv-harness-layers-FVXqWLCwTKfGBBtJqFqMjZ.webp",
      caption: "AI 能力评估的多维度框架：知识理解、逻辑推理、代码生成、安全对齐、多模态感知",
    },
  ],
  paragraphs: [
    "「这个模型比上一个好 5%」——这句话意味着什么？好在哪里？5% 是怎么算出来的？AI 基准评估（Benchmark）就是回答这些问题的工具。它们是一套标准化的测试题集，用来衡量 AI 模型在特定能力维度上的表现，让不同模型之间的比较有据可查。",
    "最著名的基准之一是 **MMLU（Massive Multitask Language Understanding）**，包含 57 个学科的 57,000 道选择题，从初中数学到医学伦理，覆盖人类知识的广度。GPT-4 在 MMLU 上的得分约为 86%，超过了大多数专业人士的平均水平。但 MMLU 主要测试「知道什么」，而非「会做什么」。",
    "**HumanEval** 和 **SWE-bench** 是代码能力的核心基准。HumanEval 包含 164 道编程题，要求模型生成能通过单元测试的代码；SWE-bench 更难，要求模型解决 GitHub 上真实的 Bug 报告。2024 年，Claude 3.5 Sonnet 在 SWE-bench 上的解决率达到 49%，意味着它能独立修复近一半的真实软件 Bug——这是工程能力的重要里程碑。",
    "**ARC-AGI（Abstraction and Reasoning Corpus for AGI）** 是 François Chollet 设计的「AGI 测试」，专门测试模型的抽象推理和泛化能力。它的题目对人类来说很简单（平均正确率 85%），但对 AI 极难——早期 GPT-4 的得分不到 5%。2024 年底，OpenAI o3 在 ARC-AGI 上达到了 87.5% 的惊人成绩，引发了关于「AGI 是否已经到来」的激烈讨论。",
    "基准评估存在一个根本性的问题：**「基准污染（Benchmark Contamination）」**。当训练数据中包含了测试题目时，模型的高分可能只是「背题」而非真正理解。研究发现，多个主流模型的训练数据中都含有 MMLU 的题目，这让它们的高分大打折扣。这也是为什么 ARC-AGI 的设计者 Chollet 坚持不断更新题目——让模型无法通过记忆取胜。",
  ],
  steps: [
    { num: "01", icon: "📝", title: "选择评估维度", desc: "明确要测试什么能力：知识广度（MMLU）、逻辑推理（ARC）、代码生成（HumanEval）、安全对齐（TruthfulQA）还是多模态理解（MMBench）" },
    { num: "02", icon: "🎯", title: "标准化测试", desc: "用统一的提示词格式向模型提问，确保不同模型在相同条件下接受测试，避免「提示词工程」带来的分数差异" },
    { num: "03", icon: "📏", title: "自动化评分", desc: "选择题用精确匹配评分；代码题用单元测试评分；开放题用另一个 LLM（如 GPT-4）作为评判者打分（LLM-as-Judge）" },
    { num: "04", icon: "🔍", title: "结果分析与解读", desc: "高分不等于实用性强，需结合实际使用场景解读。关注模型在「边缘案例」和「对抗性输入」上的表现，而非只看平均分" },
  ],
  compareTable: {
    title: "主流 AI 基准对比",
    headers: ["基准名称", "测试重点", "难度与特点"],
    rows: [
      { aspect: "MMLU", without: "57 学科知识广度", with: "57K 选择题，覆盖初中到博士水平，最广泛使用的知识基准" },
      { aspect: "HumanEval", without: "Python 代码生成", with: "164 道编程题，用单元测试自动评分，衡量基础编程能力" },
      { aspect: "SWE-bench", without: "真实 Bug 修复", with: "2294 个 GitHub Issue，测试模型在真实软件工程场景的能力" },
      { aspect: "ARC-AGI", without: "抽象推理与泛化", with: "人类 85% vs 早期 AI <5%，专为测试 AGI 级推理设计" },
      { aspect: "GPQA", without: "博士级科学推理", with: "448 道专家级科学题，即使是领域专家也只有 65% 正确率" },
      { aspect: "LMSYS Chatbot Arena", without: "人类偏好对比", with: "盲测投票决定胜负，最接近真实用户体验的评估方式" },
    ],
  },
  codeBlocks: [
    {
      language: "python",
      label: "用 lm-evaluation-harness 运行标准基准测试",
      code: `# 安装 EleutherAI 的评估框架
pip install lm-eval

# 运行 MMLU 基准测试（以 Llama 3 为例）
lm_eval --model hf \
    --model_args pretrained=meta-llama/Meta-Llama-3-8B-Instruct \
    --tasks mmlu \
    --device cuda:0 \
    --batch_size 8 \
    --output_path ./results/llama3-mmlu

# 运行 HumanEval 代码能力测试
lm_eval --model hf \
    --model_args pretrained=meta-llama/Meta-Llama-3-8B-Instruct \
    --tasks humaneval \
    --device cuda:0 \
    --output_path ./results/llama3-humaneval

# 查看结果摘要
cat ./results/llama3-mmlu/results.json | python3 -c "
import json, sys
data = json.load(sys.stdin)
for task, metrics in data['results'].items():
    acc = metrics.get('acc,none', metrics.get('acc_norm,none', 'N/A'))
    print(f'{task}: {acc:.1%}' if isinstance(acc, float) else f'{task}: {acc}')
"`,
    },
    {
      language: "python",
      label: "实现简单的 LLM-as-Judge 评估",
      code: `from openai import OpenAI

client = OpenAI()

def llm_judge(question: str, model_answer: str, reference_answer: str) -> dict:
    """用 GPT-4 作为评判者，对模型回答打分"""
    
    prompt = f"""你是一位严格的 AI 评估专家。请评估以下模型回答的质量。

问题: {question}

参考答案: {reference_answer}

模型回答: {model_answer}

请从以下维度打分（1-10分），并给出简短理由：
1. 准确性：回答是否正确？
2. 完整性：是否涵盖了关键信息？
3. 清晰度：表达是否清晰易懂？

以 JSON 格式返回：{{"accuracy": 分数, "completeness": 分数, "clarity": 分数, "reasoning": "理由"}}"""

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )
    
    return json.loads(response.choices[0].message.content)

# 示例使用
result = llm_judge(
    question="什么是 Transformer 的注意力机制？",
    model_answer="注意力机制让模型关注输入序列中的重要部分...",
    reference_answer="自注意力机制通过计算 Query、Key、Value 的点积..."
)
print(f"准确性: {result['accuracy']}/10")
print(f"完整性: {result['completeness']}/10")
print(f"清晰度: {result['clarity']}/10")`,
    },
  ],
  insights: [
    { icon: "⚠️", title: "「刷榜」是 AI 领域的公开秘密", body: "当一个基准变得重要，模型就会被「针对性训练」来提高该基准的分数，而不是真正提升对应能力。这就是为什么 AI 研究界需要不断推出新的、更难的基准——旧基准一旦被「攻克」，就失去了区分度。Chollet 的 ARC-AGI 2.0 正是为了应对这个问题而设计的。" },
    { icon: "🎭", title: "基准分数 ≠ 实际使用体验", body: "LMSYS Chatbot Arena 的盲测排名与学术基准排名经常不一致。用户在实际使用中更看重：回答是否有用、是否直接、是否符合自己的表达习惯——这些「软性」指标很难被标准化基准捕捉。所以在选择模型时，最好的基准是你自己的实际使用场景。" },
    { icon: "🔭", title: "ARC-AGI 是 AGI 进展的晴雨表", body: "François Chollet 认为，真正的 AGI 需要能够从极少的样本中学习新技能，并将其泛化到全新场景——这正是 ARC-AGI 测试的核心。o3 在 ARC-AGI 上的突破性表现，让 Chollet 本人也承认「这比预期早了很多」。ARC-AGI 的进展速度，是观察 AGI 距离我们有多近的最佳指标之一。" },
  ],
  funFact: "2024 年，研究人员发现一个令人不安的现象：当他们在 MMLU 测试中故意把正确答案从选项 A 改到选项 D，某些模型的得分会显著下降。这说明这些模型可能学会了「正确答案更可能是 A 或 B」这样的统计偏差，而不是真正理解题目内容。这个发现让整个 AI 评估领域重新审视基准设计的严谨性。",
  quiz: [
    {
      question: "为什么 AI 基准测试会出现「污染」（Contamination）问题？",
      options: ["测试题目太难", "训练数据中可能包含了测试题目的答案，导致模型「背题」而非真正理解", "测试环境不稳定", "评测人员不专业"],
      correct: 1,
      explanation: "如果模型的训练数据（来自互联网的海量文本）包含了基准测试的题目和答案，模型可能通过「记忆」而非「推理」获得高分。这是当前 AI 评测面临的最大挑战，也是为什么需要不断创建新的、未公开的测试集。"
    },
    {
      question: "HumanEval 和 MMLU 的主要区别是什么？",
      options: ["难度不同", "HumanEval 测试代码生成能力（通过单元测试验证），MMLU 测试多学科知识理解（选择题）", "语言不同", "题目数量不同"],
      correct: 1,
      explanation: "HumanEval 是代码专项基准：给出函数描述，模型生成代码，用单元测试验证正确性。MMLU 是知识广度基准：57 个学科的选择题，评估知识覆盖面和理解深度。两者互补，共同评估模型能力。"
    },
    {
      question: "「Goodhart 定律」在 AI 评测中意味着什么？",
      options: ["评测越多越好", "当一个指标成为目标时，它就不再是好指标——模型会被优化到「刷榜」而非真正提升能力", "需要更多评测数据", "评测应该更频繁"],
      correct: 1,
      explanation: "一旦某个基准被广泛使用，模型训练就会针对它优化，导致基准分数虚高但实际能力未必提升。这也是为什么需要持续创建新基准，以及为什么 ARC-AGI 这类需要真正泛化能力的测试更有价值。"
    },
  ],
},

// ============================================================
// A10 — 模型量化与部署：让 AI 跑在你的设备上
// ============================================================
{
  id: "adv-quantization",
  chapterNum: "A10",
  tag: "量化部署",
  tagColor: "amber",
  emoji: "⚡",
  title: "模型量化：把大象装进冰箱",
  subtitle: "从 FP32 到 INT4，理解 LLM 量化的原理、方法与实践",
  mainDiagram: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/model-quantization_cf4a43ab.png",
  mainDiagramCaption: "模型量化对比：FP32（全精度）→ FP16（半精度）→ INT8 → INT4，显存占用逐步减半，推理速度逐步提升，精度损失可控",
  auxImages: [
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663516052021/hDoiw3HT3WTJjgbfHJuZAY/adv-context-compression-funnel-Hnr8k6w8Yzx7VJpqJMiWzN.webp",
      caption: "量化压缩漏斗：原始模型参数经过量化、剪枝、蒸馏等技术逐步压缩，最终适合在消费级硬件上运行",
    },
  ],
  paragraphs: [
    "Llama 3 70B 模型的原始参数文件大小约为 **140GB**——这意味着你需要至少两张 A100 80GB 显卡才能运行它。对于大多数人来说，这既昂贵又不现实。**模型量化（Quantization）** 是解决这个问题的核心技术：通过降低参数的数值精度，在几乎不损失性能的前提下，大幅压缩模型体积。",
    "理解量化，首先要理解**浮点数精度**。神经网络的参数默认用 FP32（32位浮点数）存储，每个参数占 4 字节。FP16（16位）将每个参数压缩到 2 字节，体积减半。INT8（8位整数）进一步压缩到 1 字节，INT4（4位整数）只需 0.5 字节。Llama 3 70B 用 INT4 量化后，体积从 140GB 压缩到约 **35GB**，一张消费级 RTX 4090（24GB）甚至无法完整装下，但可以用 CPU 内存辅助运行。",
    "量化的挑战在于：精度降低会导致**信息损失**。FP32 可以表示约 70 亿个不同的数值，而 INT4 只能表示 16 个。如何在 16 个值中最好地「代表」原来的连续分布，是量化算法的核心问题。主流方案包括：**GPTQ**（逐层量化，最小化量化误差）、**AWQ**（激活感知量化，保护重要权重）、**GGUF**（llama.cpp 使用的格式，支持混合精度量化）。",
    "**llama.cpp** 是本地部署量化模型的最流行工具，由 Georgi Gerganov 开发。它用纯 C/C++ 实现，支持 CPU 推理（无需 GPU），并针对 Apple Silicon 的 Metal GPU 做了深度优化。配合 **Ollama**（封装了 llama.cpp 的用户友好工具），普通用户只需一行命令就能在本地运行 Llama、Mistral、Phi 等开源模型，完全离线，数据不出本地。",
    "量化不只是「压缩」，也是**民主化 AI 的关键路径**。DeepSeek R1 671B 的量化版本（INT4）可以在一台配备 512GB 内存的 Mac Studio 上运行；Phi-3 Mini（3.8B 参数）的量化版本甚至可以在手机上实时推理。这意味着：未来每个人的手机和电脑里，都可能内置一个完全离线、保护隐私的个人 AI 助手。",
  ],
  steps: [
    { num: "01", icon: "📦", title: "选择量化格式", desc: "根据硬件和精度需求选择：Q4_K_M（4位，最常用，平衡精度与速度）、Q5_K_M（5位，精度更高）、Q8_0（8位，接近原始精度）。「K」表示使用了 K-Quants 混合精度技术" },
    { num: "02", icon: "⬇️", title: "下载量化模型", desc: "从 Hugging Face 的 TheBloke 或 bartowski 等账号下载 GGUF 格式的量化模型文件，或使用 Ollama 自动下载并管理模型" },
    { num: "03", icon: "🚀", title: "启动推理服务", desc: "用 llama.cpp 的 server 模式或 Ollama 启动本地 API 服务，默认监听 localhost:11434，提供与 OpenAI API 兼容的接口" },
    { num: "04", icon: "🔗", title: "接入应用", desc: "将本地 API 地址配置到 Open WebUI、Cursor、Continue 等工具中，享受完全离线、零成本、保护隐私的本地 AI 体验" },
  ],
  compareTable: {
    title: "主流量化格式对比（以 Llama 3 8B 为例）",
    headers: ["量化格式", "文件大小", "性能与适用场景"],
    rows: [
      { aspect: "FP32（原始）", without: "~32 GB", with: "最高精度，需要专业 GPU，通常只用于训练" },
      { aspect: "FP16 / BF16", without: "~16 GB", with: "半精度，推理标准格式，需要 16GB+ 显存" },
      { aspect: "Q8_0", without: "~8.5 GB", with: "接近原始精度，适合有 8GB+ 显存的 GPU" },
      { aspect: "Q4_K_M", without: "~4.7 GB", with: "最流行的量化格式，精度损失极小，适合大多数消费级 GPU" },
      { aspect: "Q3_K_M", without: "~3.5 GB", with: "更激进压缩，精度有明显下降，适合内存极度受限的场景" },
      { aspect: "Q2_K", without: "~2.7 GB", with: "极度压缩，精度损失较大，仅用于实验性场景" },
    ],
  },
  codeBlocks: [
    {
      language: "bash",
      label: "用 Ollama 在本地运行量化模型",
      code: `# 安装 Ollama（macOS/Linux）
curl -fsSL https://ollama.ai/install.sh | sh

# 下载并运行 Llama 3.1 8B（自动使用 Q4_K_M 量化）
ollama run llama3.1

# 下载并运行 DeepSeek R1 7B（推理模型）
ollama run deepseek-r1:7b

# 下载并运行 Qwen2.5 Coder 7B（代码专用）
ollama run qwen2.5-coder:7b

# 以 API 服务模式运行（兼容 OpenAI API 格式）
ollama serve
# 默认监听 http://localhost:11434

# 用 curl 调用本地 API
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.1",
  "messages": [
    {"role": "user", "content": "用一句话解释量化是什么"}
  ]
}'

# 列出已下载的模型
ollama list`,
    },
    {
      language: "python",
      label: "用 llama-cpp-python 在 Python 中调用量化模型",
      code: `from llama_cpp import Llama

# 加载 GGUF 格式的量化模型
# n_gpu_layers=-1 表示尽可能多地将层卸载到 GPU
llm = Llama(
    model_path="./models/llama-3.1-8b-instruct-q4_k_m.gguf",
    n_ctx=4096,        # 上下文窗口大小
    n_gpu_layers=-1,   # GPU 加速层数（-1 = 全部）
    n_threads=8,       # CPU 线程数
    verbose=False
)

# 聊天补全（兼容 OpenAI 格式）
response = llm.create_chat_completion(
    messages=[
        {"role": "system", "content": "你是一个有用的 AI 助手。"},
        {"role": "user", "content": "什么是模型量化？用简单的话解释。"}
    ],
    max_tokens=512,
    temperature=0.7,
    stream=False
)

print(response["choices"][0]["message"]["content"])

# 流式输出
for chunk in llm.create_chat_completion(
    messages=[{"role": "user", "content": "写一首关于量化的小诗"}],
    stream=True
):
    delta = chunk["choices"][0]["delta"]
    if "content" in delta:
        print(delta["content"], end="", flush=True)`,
    },
  ],
  insights: [
    { icon: "💡", title: "量化精度损失比你想象的小", body: "直觉上，从 32 位降到 4 位似乎会损失大量信息。但实验表明，对于大多数任务，Q4_K_M 量化的 Llama 3 8B 与 FP16 版本的性能差异不超过 2-3%。这是因为神经网络的参数分布相对集中，大多数参数值都接近 0，4 位精度足以区分它们的相对大小。" },
    { icon: "🍎", title: "Apple Silicon 是本地 AI 的最佳平台", body: "M 系列芯片的统一内存架构（CPU 和 GPU 共享同一块内存）意味着：一台 M3 Max MacBook Pro（128GB 内存）可以流畅运行 70B 参数的量化模型，而同等价位的 Windows 笔记本（独立显存 8-16GB）只能运行 7B 模型。这让 Mac 成为本地 AI 开发者的首选平台。" },
    { icon: "🔮", title: "量化是 AI 边缘计算的基础", body: "手机、智能手表、IoT 设备上的 AI 推理，全部依赖量化技术。Apple 的 Core ML、Google 的 TensorFlow Lite、高通的 AI Engine——这些移动端 AI 框架的核心都是量化推理引擎。未来，每个终端设备都将内置量化 AI 模型，实现真正的「AI everywhere」。" },
  ],
  funFact: "2024 年，一位名叫 Georgi Gerganov 的保加利亚程序员，用 C 语言在两周内独立实现了 llama.cpp——让 LLaMA 模型可以在 MacBook 上运行。这个项目迅速成为 GitHub 上最受欢迎的 AI 项目之一，月活跃用户超过 100 万。他后来创立了 ggml.ai 公司，专注于边缘 AI 推理技术。一个人、两周、改变了整个本地 AI 生态——这就是开源的力量。",
  quiz: [
    {
      question: "模型量化的核心思想是什么？",
      options: ["减少模型的层数", "用更低精度的数字格式（如 4 位整数）替代高精度浮点数，大幅减少内存和计算需求", "删除不重要的神经元", "压缩模型的词汇表"],
      correct: 1,
      explanation: "量化是精度换效率的权衡：原始模型用 32 位浮点数存储每个参数，量化后用 4-8 位整数存储。70B 参数模型从 140GB（FP32）压缩到约 4GB（Q4），可在普通消费级 GPU 甚至 CPU 上运行，精度损失通常在 1-3% 以内。"
    },
    {
      question: "Q4_K_M 和 Q8_0 量化格式的主要区别是什么？",
      options: ["Q4_K_M 更新，Q8_0 更旧", "Q4_K_M 用 4 位存储（更小更快但精度略低），Q8_0 用 8 位存储（更大更慢但精度更高）", "Q4_K_M 只支持 CPU，Q8_0 只支持 GPU", "它们完全相同"],
      correct: 1,
      explanation: "Q4_K_M：4 位量化，K 表示使用 K-means 聚类优化，M 表示中等质量，内存约为原始的 1/8，速度最快，适合内存受限场景。Q8_0：8 位量化，精度接近原始模型，内存约为原始的 1/4，适合追求质量的场景。"
    },
    {
      question: "Ollama 相比直接使用 llama.cpp 的主要优势是什么？",
      options: ["Ollama 运行更快", "Ollama 提供了类似 Docker 的用户友好界面，一条命令即可下载和运行模型，无需手动编译和配置", "Ollama 支持更多模型", "Ollama 是免费的"],
      correct: 1,
      explanation: "llama.cpp 是底层引擎，需要手动编译、下载模型文件、配置参数。Ollama 在其上层提供「Docker for AI」体验：ollama pull llama3 一条命令下载，ollama run llama3 一条命令运行，并提供 OpenAI 兼容 API，极大降低了本地 AI 的使用门槛。"
    },
  ],
  },
];

