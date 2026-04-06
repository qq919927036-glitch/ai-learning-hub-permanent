#!/usr/bin/env python3
"""Add quiz data to B3 and B4 sections in deepBasicContent.ts"""

import re

with open('/home/ubuntu/ai-learning-hub-permanent/client/src/lib/deepBasicContent.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# B3 quiz data to insert before B3's closing brace (before B4 comment)
b3_quiz = '''    quiz: [
      {
        question: "AI 智能体与普通聊天机器人的最本质区别是？",
        options: [
          "智能体比聊天机器人更聪明",
          "智能体可以调用工具执行真实操作，而聊天机器人只能用语言回答",
          "智能体有记忆，聊天机器人没有记忆",
          "智能体不会犯错，聊天机器人会犯错",
        ],
        correct: 1,
        explanation: "工具使用是核心区别。普通聊天机器人被关在玻璃房里，只能说话；AI 智能体则装备了搜索、代码执行、文件操作等工具，能真正完成任务。就像一个只会给建议的顾问 vs 一个会亲自动手的助手。",
      },
      {
        question: "AI 智能体的「感知-思考-行动」循环中，「思考」阶段由什么完成？",
        options: [
          "由预先编写好的规则完成",
          "由 LLM 分析当前状态并决定下一步使用哪个工具、如何使用",
          "由用户手动指定每一步该做什么",
          "由随机算法选择行动",
        ],
        correct: 1,
        explanation: "AI 智能体的「大脑」就是 LLM。在「思考」阶段，LLM 分析当前感知到的信息，制定计划，决定下一步调用哪个工具、传入什么参数。这就是为什么 LLM 的质量直接决定了 Agent 的表现。",
      },
      {
        question: "以下哪个任务是 AI 智能体的典型应用场景？",
        options: [
          "回答「今天天气怎么样？」",
          "翻译一段英文文章",
          "自动调研竞争对手、整理数据并生成分析报告",
          "写一首诗",
        ],
        correct: 2,
        explanation: "自动调研竞争对手并生成报告需要：搜索网络、整理数据、分析对比、生成文档——多步骤、调用工具，正是 Agent 的强项。而回答天气、翻译、写诗这类单次任务，普通 LLM 就完全够用。",
      },
    ],
'''

b4_quiz = '''    quiz: [
      {
        question: "Harness 在 AI Agent 系统中扮演什么角色？",
        options: [
          "Harness 就是 LLM 本身，是 AI 的大脑",
          "Harness 是给 LLM 配备工具、记忆、权限的工程化基础设施，让裸 LLM 变成能干活的智能体",
          "Harness 是一种新型的 AI 训练方法",
          "Harness 是用来测试 AI 性能的基准工具",
        ],
        correct: 1,
        explanation: "Harness 是 LLM 的「外骨骼」——LLM 本身只是一个会说话的大脑，Harness 给它配备了工具（手脚）、记忆管理（大脑延伸）、权限控制（安全边界）和系统提示词（行为规范）。就像钢铁侠的战甲，让天才真正能改变世界。",
      },
      {
        question: "「系统提示词」（System Prompt）的作用是什么？",
        options: [
          "让 LLM 运行更快",
          "减少 LLM 的内存占用",
          "在每次对话开始时注入，定义 AI 的身份、能力边界和行为规范，是 LLM 行为的「宪法」",
          "自动更新 LLM 的训练数据",
        ],
        correct: 2,
        explanation: "系统提示词是 Harness 最重要的组件之一。它在对话开始时就被注入，告诉 LLM：你是谁、你能做什么、你不能做什么、你应该怎么做。一个设计良好的系统提示词，能让 AI 的行为更稳定、可预测、安全。",
      },
      {
        question: "当上下文窗口快满时，Harness 会怎么做？",
        options: [
          "直接报错，停止运行",
          "把所有历史记录都删掉，从头开始",
          "自动压缩历史记录，保留最重要的信息，让对话能持续进行",
          "把任务转交给另一个 AI 模型",
        ],
        correct: 2,
        explanation: "上下文窗口就像 LLM 的「工作桌面」——有限的空间。当桌面快满时，Harness 不是把所有东西推到地上，而是智能地整理：把暂时不用的归档（写入长期记忆），保留关键信息，让桌面保持整洁，对话得以持续。",
      },
    ],
'''

# Insert B3 quiz before B4 comment block
b3_pattern = r'(    keyTakeaways: \[\n      "AI 智能体 = LLM 大脑 \+ 工具调用能力 \+ 多步骤规划 \+ 记忆系统".*?    \],\n  \},\n\n  // ─{45}\n  // B4:)'
b3_replacement = lambda m: m.group(0).replace(
    '    ],\n  },\n\n  // ' + '─'*45 + '\n  // B4:',
    '    ],\n' + b3_quiz + '  },\n\n  // ' + '─'*45 + '\n  // B4:'
)

# Use simple string replacement instead
b3_marker = '    keyTakeaways: [\n      "AI 智能体 = LLM 大脑 + 工具调用能力 + 多步骤规划 + 记忆系统"'
b3_end_marker = '  },\n\n  // ─────────────────────────────────────────────\n  // B4: Harness'

# Find and replace for B3
b3_section_end = content.find(b3_end_marker)
if b3_section_end == -1:
    print("ERROR: Could not find B3 end marker")
else:
    # Find the closing ], of keyTakeaways in B3
    b3_start = content.find(b3_marker)
    # Find the },\n\n  // B4 after B3 start
    insert_pos = b3_section_end + len('  },')
    # Insert quiz before the closing },
    closing = '  },\n\n  // ─────────────────────────────────────────────\n  // B4: Harness'
    new_closing = '  ' + b3_quiz.rstrip() + '\n  },\n\n  // ─────────────────────────────────────────────\n  // B4: Harness'
    content = content.replace(closing, new_closing, 1)
    print("B3 quiz inserted successfully")

# Find B4 end marker
b4_end_marker = '  },\n];\n\n// ─────────────────────────────────────────────\n// B5:'
b4_section_end = content.find(b4_end_marker)
if b4_section_end == -1:
    print("ERROR: Could not find B4 end marker")
    # Try alternative
    b4_end_marker2 = '],\n};\n\n// ─────────────────────────────────────────────\n// B5:'
    b4_section_end = content.find(b4_end_marker2)
    if b4_section_end != -1:
        print("Found alternative B4 end marker")
        closing4 = '],\n};\n\n// ─────────────────────────────────────────────\n// B5:'
        new_closing4 = '],\n' + b4_quiz + '};\n\n// ─────────────────────────────────────────────\n// B5:'
        content = content.replace(closing4, new_closing4, 1)
        print("B4 quiz inserted successfully (alternative)")
else:
    closing4 = '  },\n];\n\n// ─────────────────────────────────────────────\n// B5:'
    new_closing4 = '  ' + b4_quiz.rstrip() + '\n  },\n];\n\n// ─────────────────────────────────────────────\n// B5:'
    content = content.replace(closing4, new_closing4, 1)
    print("B4 quiz inserted successfully")

with open('/home/ubuntu/ai-learning-hub-permanent/client/src/lib/deepBasicContent.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done!")
