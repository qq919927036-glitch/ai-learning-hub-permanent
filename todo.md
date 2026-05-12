# AI Learning Hub - 永久网站迁移 TODO

## 全局配置
- [x] 配置 index.html 引入 Playfair Display 字体
- [x] 配置 index.css 全局主题变量（羊皮纸背景、森林绿、琥珀金）
- [x] 配置 App.tsx 路由和主题

## 内容数据迁移
- [x] 迁移 lib/deepBasicContent.ts（24个基础章节 B1-B24）
- [x] 迁移 lib/deepAdvancedContent.ts（10个进阶模块 A1-A10）
- [x] 迁移 lib/practiceContent.ts（5个实践工具）
- [x] 迁移 lib/tweetContent.ts（8位AI大佬推文墙）

## 核心组件迁移
- [x] QuizBlock 互动测验组件
- [x] ImageLightbox 图片放大组件
- [x] DeepBasicSection 基础篇深度章节组件
- [x] DeepAdvancedSection 进阶篇模块组件

## 辅助组件迁移
- [x] PracticeSection 实践工具介绍组件
- [x] TweetWall 大佬推文墙组件
- [x] KnowledgeMap 知识地图可视化组件
- [x] TableOfContents 目录侧边栏组件

## 页面布局组件迁移
- [x] Navbar 响应式导航栏组件
- [x] HeroSection 首页英雄区组件
- [x] Footer 页脚组件
- [x] Home 首页整合

## 验证与部署
- [x] 构建验证通过
- [x] 编写 vitest 测试
- [x] 保存检查点并交付

## 第一优先级：补齐短板
- [x] 为 B1-B4 补充互动测验（quiz）
- [x] 为 B1-B15 补充对比表格（已全部存在，无需补充）

## 第二优先级：新增章节
- [x] 新增 B25：AI 记忆系统（短期/长期/工作记忆）
- [x] 新增 B26：AI 评估与基准测试入门
- [x] 新增 B27：开源 vs 闭源模型
- [x] 新增 B28：AI 成本经测试学- [x] 更新知识地图数量（B24 → B28）
- [x] 保存检查点并交付

## 进阶篇扩充 A11-A14
- [x] 新增 A11：AI 安全红队测试
- [x] 新增 A12：多模态 Agent
- [x] 新增 A13：长上下文工程
- [x] 新增 A14：AI 系统可观测性
- [x] 更新全站进阶篇数量（10 → 14）
- [x] 保存检查点并交付

## 大佬说板块扩充
- [x] 新增 Jensen Huang 推文卡片（3-4 条）
- [x] 新增 Dario Amodei 推文卡片（3-4 条）
- [x] 新增 Andrew Ng 推文卡片（3-4 条）
- [x] 新增 Fei-Fei Li 推文卡片（3-4 条）
- [x] 更新全站推文数量显示
- [x] 保存检查点并交付

## 全面扩充（第三批）
- [x] 基础篇扩展 B29：AI 幻觉与事实性
- [x] 基础篇扩展 B30：嵌入（Embeddings）与向量搜索
- [x] 基础篇扩展 B31：AI 推理能力（Chain-of-Thought、o1）
- [x] 基础篇扩展 B32：AI 与版权/法律
- [x] 基础篇扩展 B33：Token 经济学
- [x] 进阶篇扩展 A15：RAG 系统设计
- [x] 进阶篇扩展 A16：AI Agent 工具调用与编排
- [x] 进阶篇扩展 A17：模型微调（Fine-tuning）实战
- [x] 进阶篇扩展 A18：Prompt 工程高级技巧
- [x] 进阶篇扩展 A19：多 Agent 协作架构
- [x] 进阶篇扩展 A20：AI 产品设计模式
- [x] 新板块：AI 里程碑时间线组件和数据
- [x] 新板块：学习路径/路线图组件和数据
- [x] 实践工具扩充（v0、Bolt、Replit Agent、NotebookLM、Perplexity）
- [x] 更新知识地图数量（B33、A20、10 工具）
- [x] 更新首页英雄区统计数字
- [x] 新板块在导航栏和首页中有入口
- [x] 更新测试用例
- [x] 构建验证通过

## 技术债务修复 + 术语表 + 阅读进度
- [x] 删除推测性时间线条目（2025 Jun Claude 4 Opus 与 GPT-4.5）
- [x] 统计数字动态化（HeroSection + KnowledgeMap 从数据数组计算）
- [x] 测试断言改为灵活断言（不再硬编码数量）
- [ ] 术语表 Glossary 新板块
- [x] 阅读进度追踪

## 第四批功能扩充（8项任务）
- [x] 任务一：进阶/实践篇接入阅读进度（DeepAdvancedSection + PracticeSection 添加已读标记）
- [x] 任务二：暗色模式（主题切换按钮、CSS变量、localStorage持久化）
- [x] 任务三：移动端响应式检查与修复（Timeline/Glossary/LearningPath/ProgressBar）
- [x] 任务四：基础篇 B34-B38（AI搜索引擎、本地部署、AI音频、AI视频、AI编程助手）
- [x] 任务五：进阶篇 A21-A24（合成数据、模型蒸馏、端侧AI、AI评估框架）
- [x] 任务六：常见误区 Myths vs Facts 新板块
- [x] 任务七：AI 工具对比器新板块
- [x] 任务八：章节间知识依赖图新板块

## 部署配置（GitHub Pages）
- [x] vite.config.ts 添加 base: '/ai-learning-hub-permanent/'
- [x] 创建 .github/workflows/deploy.yml（GitHub Actions 自动部署）
- [x] 创建 client/public/404.html（SPA 路由回退）
- [x] index.html 添加 sessionStorage 重定向恢复脚本
- [x] package.json 添加 build:static 脚本（仅 vite 构建）

## 全站搜索功能
- [x] 创建 useSearch hook（搜索索引 + 实时过滤）
- [x] 创建 SearchDialog 组件（模态搜索框 + 分类结果 + 高亮匹配）
- [x] App.tsx 添加 Cmd+K / Ctrl+K 全局快捷键
- [x] Navbar 添加搜索按钮 + 快捷键提示
- [x] 支持中英文搜索、暗色模式、ESC 关闭、点击跳转
