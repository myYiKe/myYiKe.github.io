// ============================================================
// 作品集内容配置：更新网站内容只需要修改这一个文件
// 添加项目 / 经历 / 动态 = 在对应数组里复制一个块、改文字即可
// 不需要改动任何 HTML / CSS / 渲染代码
// ============================================================

const SITE_CONTENT = {
  // ---------- 个人信息 ----------
  profile: {
    name: "你的名字",
    status: "求职中",            // 侧边栏名字旁边的状态小字，如：求职中 / 在读 / 开发中
    role: "研究者 / 开发者 / 创作者",  // 问候卡里的一句话定位
    // 头像：当前为生成的占位图，换成自己的图片路径或链接即可
    avatar: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cute%20kawaii%20grey%20cat%20avatar%2C%20round%20face%2C%20soft%20pastel%20colors%2C%20flat%20vector%20illustration%2C%20clean%20cream%20background&image_size=square",
  },

  // ---------- 首页装饰照片墙（占位图，可换成自己的照片/作品图） ----------
  homePhoto: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cute%20polaroid%20photo%20collage%2C%20cats%20sunflowers%20and%20goldfish%2C%20washi%20tape%20stickers%2C%20soft%20pastel%20colors%2C%20flat%20illustration%2C%20cozy%20aesthetic&image_size=landscape_4_3",

  // ---------- 侧边栏菜单 ----------
  // enabled: false 的条目不会显示。以后博客上线后把它改成 true 即可出现入口
  nav: [
    { label: "首页", href: "#home", icon: "home", enabled: true },
    { label: "我的项目", href: "#projects", icon: "grid", enabled: true },
    { label: "经历", href: "#timeline", icon: "clock", enabled: true },
    { label: "技能", href: "#skills", icon: "star", enabled: true },
    { label: "联系", href: "#contact", icon: "mail", enabled: true },
    { label: "博客", href: "./blog/", icon: "globe", enabled: false },
  ],

  // ---------- 首页社交按钮 ----------
  // dark: true 会显示为黑色按钮（适合 GitHub）
  social: [
    { label: "GitHub", icon: "github", url: "https://github.com/myYiKe", dark: true },
    { label: "邮箱", icon: "mail", url: "mailto:your@email.com" },
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/" },
  ],

  // ---------- 最新动态 ----------
  // 以后博客上线后，这里可以换成最新文章
  updates: {
    title: "最新动态",
    items: [
      { title: "作品集网站上线", desc: "个人主页第一版正式发布", date: "2026/9/8" },
    ],
  },

  // ---------- 项目（两列卡片流） ----------
  // icon: 图标里的文字（1-2 个字符效果最佳）；hue 可选：mint / lemon / sky / rose / lilac
  // links 里不需要的链接可以删掉对应那一行
  projects: {
    title: "我的项目",
    items: [
      {
        icon: "AR",
        hue: "mint",
        name: "项目一：主打作品名称",
        year: "2026",
        tags: ["Web", "UI/UX"],
        description: "用一句话概括这个项目解决了什么问题、有什么亮点，以及你在其中承担了什么角色。",
        links: { website: "#", github: "#" },
      },
      {
        icon: "Re",
        hue: "sky",
        name: "项目二：研究或论文展示",
        year: "2025",
        tags: ["Research", "Demo"],
        description: "适合放毕业设计、论文可视化、实验平台、数据故事等更偏学术的成果。",
        links: { website: "#" },
      },
      {
        icon: "Pd",
        hue: "lemon",
        name: "项目三：产品或界面案例",
        year: "2025",
        tags: ["产品", "体验"],
        description: "可以展示交互设计、品牌官网、产品主页、工具平台或前端工程项目。",
        links: { github: "#" },
      },
      {
        icon: "To",
        hue: "rose",
        name: "项目四：工具或开源项目",
        year: "2024",
        tags: ["Tool", "Open Source"],
        description: "开源工具、效率脚本、命令行程序等，展示工程能力的项目。",
        links: { website: "#", github: "#" },
      },
    ],
  },

  // ---------- 经历时间线 ----------
  timeline: {
    title: "经历与时间线",
    items: [
      { year: "2026", title: "当前阶段", description: "正在做什么、研究什么、想解决什么问题。" },
      { year: "2025", title: "重要项目或实习", description: "可以写你主导的项目、实习经历、竞赛成果或代表性合作。" },
      { year: "2024", title: "起点与积累", description: "介绍你如何进入这个领域，以及早期积累的技能与兴趣。" },
    ],
  },

  // ---------- 技能矩阵 ----------
  skills: {
    title: "技能矩阵",
    items: ["Frontend", "HTML/CSS", "JavaScript", "UI Design", "Figma", "Research", "Data Storytelling", "GitHub Pages"],
  },

  // ---------- 联系方式 ----------
  contact: {
    title: "联系我",
    text: "这里可以放一段欢迎联系的话，比如实习/合作/交流意向。",
    links: [
      { label: "your@email.com", icon: "mail", url: "mailto:your@email.com" },
      { label: "GitHub", icon: "github", url: "https://github.com/myYiKe", dark: true },
      { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/" },
    ],
  },
};
