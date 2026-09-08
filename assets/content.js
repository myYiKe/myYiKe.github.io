// ============================================================
// 作品集内容配置：更新网站内容只需要修改这一个文件
// 添加项目 / 经历 / 技能 = 在对应数组里复制一个块、改文字即可
// 不需要改动任何 HTML / CSS / 渲染代码
// ============================================================

const SITE_CONTENT = {
  // ---------- 个人信息与首屏 ----------
  profile: {
    brand: "Portfolio",          // 左上角站名
    initials: "YN",              // 名片头像字母
    name: "你的名字",
    eyebrow: "HELLO, I AM",
    lead: "研究者 / 开发者 / 创作者。这里可以放一句最能代表你的定位，比如“专注于交互设计、全栈开发与科研可视化表达”。",
    // 首屏三个数据点，可增删
    stats: [
      { value: "8+", label: "项目实践" },
      { value: "3", label: "核心方向" },
      { value: "100%", label: "可定制展示" },
    ],
    // 右侧名片卡片
    card: {
      title: "个人名片",
      subtitle: "城市 / 学校 / 公司",
      tags: ["Web", "UI/UX", "Research"],
      text: "这里适合放一段 2-3 行的简介，比如你擅长把复杂问题转化成清晰、好看、可落地的产品与项目成果。",
    },
  },

  // ---------- 导航栏 ----------
  // enabled: false 的条目不会显示。以后博客上线后把它改成 true 即可出现入口
  nav: [
    { label: "关于我", href: "#about", enabled: true },
    { label: "项目", href: "#projects", enabled: true },
    { label: "经历", href: "#timeline", enabled: true },
    { label: "联系", href: "#contact", enabled: true },
    { label: "博客", href: "./blog/", enabled: false },
  ],

  // ---------- 关于我 ----------
  about: {
    eyebrow: "ABOUT",
    title: "关于我",
    panels: [
      {
        title: "个人介绍",
        paragraphs: [
          "这里可以介绍你的专业背景、研究方向、工作内容或你最关心的问题。建议写成 3-4 句，让访问者在 10 秒内知道你是谁、你擅长什么。",
        ],
      },
      {
        title: "我的优势",
        bullets: [
          "把抽象想法变成可展示的界面与产品原型",
          "兼顾技术实现、视觉表达和项目叙事",
          "适合展示科研、开发、设计与跨学科作品",
        ],
      },
    ],
  },

  // ---------- 精选项目 ----------
  projects: {
    eyebrow: "SELECTED WORK",
    title: "精选项目",
    items: [
      {
        badge: "Featured",
        title: "项目一：主打作品名称",
        description: "用一句话概括这个项目解决了什么问题、有什么亮点，以及你在其中承担了什么角色。",
        meta: ["角色：设计 / 开发", "技术：HTML / CSS / JS"],
        link: { label: "查看详情", url: "#" },
      },
      {
        badge: "Research",
        title: "项目二：研究或论文展示",
        description: "适合放毕业设计、论文可视化、实验平台、数据故事等更偏学术的成果。",
        meta: ["角色：研究 / 实现", "成果：论文 / Demo"],
        link: { label: "查看详情", url: "#" },
      },
      {
        badge: "Product",
        title: "项目三：产品或界面案例",
        description: "可以展示交互设计、品牌官网、产品主页、工具平台或前端工程项目。",
        meta: ["角色：负责人", "方向：产品 / 体验"],
        link: { label: "查看详情", url: "#" },
      },
    ],
  },

  // ---------- 经历时间线 ----------
  timeline: {
    eyebrow: "TIMELINE",
    title: "经历与时间线",
    items: [
      { year: "2026", title: "当前阶段", description: "正在做什么、研究什么、想解决什么问题。" },
      { year: "2025", title: "重要项目或实习", description: "可以写你主导的项目、实习经历、竞赛成果或代表性合作。" },
      { year: "2024", title: "起点与积累", description: "介绍你如何进入这个领域，以及早期积累的技能与兴趣。" },
    ],
  },

  // ---------- 技能矩阵 ----------
  skills: {
    eyebrow: "SKILLS",
    title: "技能矩阵",
    items: ["Frontend", "HTML/CSS", "JavaScript", "UI Design", "Figma", "Research", "Data Storytelling", "GitHub Pages"],
  },

  // ---------- 联系方式 ----------
  contact: {
    eyebrow: "CONTACT",
    title: "一起合作",
    text: "这里可以放邮箱、GitHub、LinkedIn、微信或其他你希望别人联系你的方式。",
    links: [
      { label: "your@email.com", url: "mailto:your@email.com" },
      { label: "GitHub", url: "https://github.com/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/" },
    ],
  },
};
