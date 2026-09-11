// ============================================================
// 作品集内容配置：更新网站内容只需要修改这一个文件
// 添加项目 / 经历 / 动态 = 在对应数组里复制一个块、改文字即可
// 不需要改动任何 HTML / CSS / 渲染代码
// ============================================================

const SITE_CONTENT = {
  // ---------- 个人信息 ----------
  profile: {
    name: "李明阳",
    status: "求职中",            // 侧边栏名字旁边的状态小字，如：求职中 / 在读 / 开发中
    role: "AI应用技术 / 端到端架构 / 产品技术闭环 / 计算机视觉",  // 问候卡里的一句话定位
    // 头像：使用站点内 assets/头像.jpg
    avatar: "./assets/头像.jpg",
  },

  // ---------- 首页装饰照片墙（占位图，可换成自己的照片/作品图） ----------
  homePhoto: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cute%20polaroid%20photo%20collage%2C%20cats%20sunflowers%20and%20goldfish%2C%20washi%20tape%20stickers%2C%20soft%20pastel%20colors%2C%20flat%20illustration%2C%20cozy%20aesthetic&image_size=landscape_4_3",

  // ---------- 侧边栏菜单 ----------
  // enabled: false 的条目不会显示。以后博客上线后把它改成 true 即可出现入口
  nav: [
    { label: "首页", href: "#home", icon: "home", enabled: true },
    { label: "我的项目", href: "#projects", icon: "grid", enabled: true },
    { label: "经历", href: "#timeline", icon: "clock", enabled: false },
    { label: "技能", href: "#skills", icon: "star", enabled: true },
    { label: "联系", href: "#contact", icon: "mail", enabled: true },
    { label: "博客", href: "./blog/", icon: "globe", enabled: false },
  ],

  // ---------- 首页社交按钮 ----------
  // dark: true 会显示为黑色按钮（适合 GitHub）
  social: [
    { label: "GitHub", icon: "github", url: "https://github.com/myYiKe", dark: true },
    { label: "邮箱", icon: "mail", url: "mailto:3037372286@qq.com" },
    { label: "电话", icon: "globe", url: "tel:13981942948" },
  ],

  // ---------- 最新动态 ----------
  // 以后博客上线后，这里可以换成最新文章
  updates: {
    title: "最新动态",
    items: [
      { title: "项目仓库整理上线", desc: "NoSQL 服务器、AI 视频巡检、U-Net 口腔 AR、校园二手网已整理到 GitHub", date: "2026/9/9" },
      { title: "AR 导航系统持续迭代", desc: "从单目轮廓到 RGB-D 深度相机的第三代方案，建立 10 case 离线评测", date: "2026" },
      { title: "软件研发实习", desc: "成都亚利欣科技 · 参与 ShelfMind 超市智能视频巡检系统", date: "2025/06 - 09" },
    ],
  },

  // ---------- 项目（两列卡片流） ----------
  // icon: 图标里的文字（1-2 个字符效果最佳）；hue 可选：mint / lemon / sky / rose / lilac
  // links 里不需要的链接可以删掉对应那一行
  // note: 可选，会在卡片最下方以小字形式提示
  projects: {
    title: "我的项目",
    items: [
      {
        icon: "AI",
        hue: "sky",
        name: "ShelfMind · AI 视频巡检",
        year: "2026",
        tags: ["YOLOv8", "CLIP", "FAISS", "LLM", "Gradio"],
        description: "面向连锁便利店与校园商超的多模态巡检系统：视频抽帧→YOLO 检测→CLIP 图文对齐→FAISS 检索→LLM 问答→Gradio 可解释展示。我负责环境整备、端到端链路搭建与多后端 LLM 适配。",
        links: { github: "https://github.com/myYiKe/AI-Video-Inspection" },
        note: "本项目只展示了我完成的框架还请谅解",
      },
      {
        icon: "DB",
        hue: "lemon",
        name: "NoSQL_Server",
        year: "2024",
        tags: ["C11", "epoll", "pthread", "哈希+BST"],
        description: "在 Linux 上从零实现高并发 KV 存储服务：自研二进制通信协议、epoll 边缘触发多线程网络模型、哈希+二叉搜索树混合索引、TTL 过期与磁盘持久化。我负责核心存储引擎的哈希层与 BST 优化。",
        links: { github: "https://github.com/myYiKe/NoSQL_Server" },
      },
      {
        icon: "AR",
        hue: "mint",
        name: "U-Net Oral AR Navigation",
        year: "2026",
        tags: ["PyTorch", "OpenCV", "Open3D", "RGB-D", "U-Net"],
        description: "无标记 AR 口腔手术导航系统，历经单目纯轮廓、轮廓+关键点、RGB-D 深度相机三次技术迭代。我全栈独立负责数据生成、U-Net/KeypointUNet 训练、2D-3D 配准栈、Gemini215 SDK 集成与离线评测体系。",
        links: { github: "https://github.com/myYiKe/U-Net_Oral_AR_Navigation_Algorithm" },
        note: "本项目只能展示部分框架还请谅解",
      },
      {
        icon: "MP",
        hue: "rose",
        name: "Campus Second-hand",
        year: "2026",
        tags: ["Spring Boot", "Vue 3", "微信小程序", "MySQL"],
        description: "三端一后端的校园二手交易平台，以校园认证、商品审核、交易治理为主线的可信交易闭环。我担任产品经理与小程序端负责人，输出 PRD/原型，独立完成 9 页面微信小程序并统筹多端联调。",
        links: { github: "https://github.com/myYiKe/Campus_Second-hand_Website" },
      },
    ],
  },

  // ---------- 经历时间线 ----------
  timeline: {
    title: "经历",
    groups: [
      {
        title: "教育经历",
        items: [
          { year: "2023.09 - 2027.07", title: "四川大学 · 软件学院 · 软件工程", description: "本科在读，均分 80+，预计 2027 年毕业。", detail: "./assets/credentials/学籍信息.png" },
        ],
      },
      {
        title: "实习经历",
        items: [
          { year: "2025.06 - 2025.09", title: "成都亚利欣科技有限公司 · 软件研发（含技术支持）", description: "参与超市智能视频巡检系统开发，承担研发协作与技术支持相关工作。", detail: "./assets/credentials/实习证明01.jpg" },
        ],
      },
      {
        title: "竞赛奖项",
        items: [
          { year: "2024", title: "蓝桥杯 C++ 组省三等奖", description: "获得蓝桥杯 C++ 组省级三等奖。", detail: "./assets/credentials/蓝桥杯.png" },
          { year: "2024", title: "全国大学生医学创新大赛交叉学科二等奖", description: "获得全国大学生医学创新大赛交叉学科二等奖。", detail: "./assets/credentials/医创赛.jpg" },
        ],
      },
    ],
  },

  // ---------- 技能矩阵 ----------
  skills: {
    title: "技能矩阵",
    items: ["Java", "C++", "Python", "Spring Boot", "MyBatis", "PyTorch", "Open3D", "YOLO", "CLIP", "Gradio", "微信小程序", "Vue", "MySQL", "AI Agent"],
  },

  // ---------- 联系方式 ----------
  contact: {
    title: "联系我",
    text: "正在寻找实习/校招机会。定位AI应用技术/业务线技术Owner（非纯技术岗）。具备模型应用架构、Agent系统、后端开发的能力；拥有产品思维，能主导产品技术路线并推动业务落地。致力于将前沿技术转化为实际商业价值。欢迎有AI落地场景的团队交流。",
    links: [
      { label: "3037372286@qq.com", icon: "mail", url: "mailto:3037372286@qq.com" },
      { label: "GitHub", icon: "github", url: "https://github.com/myYiKe", dark: true },
      { label: "微信 / 电话 13981942948", icon: "globe", url: "tel:13981942948" },
    ],
  },
};
