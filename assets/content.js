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
    role: "计算机视觉 / AR 导航 / 全栈产品落地",  // 问候卡里的一句话定位
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
    { label: "邮箱", icon: "mail", url: "mailto:3037372286@qq.com" },
    { label: "电话", icon: "globe", url: "tel:13981942948" },
  ],

  // ---------- 最新动态 ----------
  // 以后博客上线后，这里可以换成最新文章
  updates: {
    title: "最新动态",
    items: [
      { title: "作品集网站上线", desc: "Pastel 风格的个人主页已经完成首版搭建", date: "2026/9/9" },
      { title: "AR 导航系统持续优化", desc: "聚焦深度相机链路、姿态估计稳定性与实时性调优", date: "2026" },
      { title: "软件研发实习经历", desc: "完成超市智能视频巡检系统相关研发与技术支持工作", date: "2025/09" },
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
        name: "基于深度相机与计算机视觉的 AR 导航定位系统",
        year: "2026",
        tags: ["AR", "Depth Camera", "OpenCV", "PnP"],
        description: "面向真实场景导航与空间指引需求，设计并实现结合深度相机、关键点检测、PnP 位姿估计与轮廓/深度优化的 AR 导航系统。我负责整体视觉感知链路设计与实现，并完成实时性与稳定性调优。",
        links: { website: "#" },
      },
      {
        icon: "AI",
        hue: "sky",
        name: "超市智能视频巡检系统",
        year: "2025",
        tags: ["YOLO", "CLIP", "LLM", "Gradio"],
        description: "面向连锁便利店与校园商超场景，打造可查看、可检索、可追问的智能巡检产品原型。我负责产品经理工作，并参与 LLM 问答与 Gradio 页面交互实现。",
        links: { website: "#" },
      },
      {
        icon: "MP",
        hue: "lemon",
        name: "多端二手交易平台",
        year: "2025",
        tags: ["小程序", "Vue", "Java", "MySQL"],
        description: "聚焦校园场景的二手交易平台，覆盖 PC 网站与移动端。我负责产品经理工作与小程序端开发，完成页面搭建、接口联调、功能实现与兼容性适配。",
        links: { website: "#" },
      },
      {
        icon: "DB",
        hue: "rose",
        name: "高并发 NoSQL 数据库",
        year: "2024",
        tags: ["C++", "算法", "数据库"],
        description: "面向多客户端键值对存储场景，实现添加、删除、模糊查询与更新等操作。我担任算法负责人，完成哈希处理与二叉搜索树优化。",
        links: { website: "#" },
      },
    ],
  },

  // ---------- 经历时间线 ----------
  timeline: {
    title: "经历与时间线",
    items: [
      { year: "2025.06 - 2025.09", title: "成都亚利欣科技有限公司 · 软件研发（含技术支持）", description: "参与超市智能视频巡检系统开发，承担研发协作与技术支持相关工作。" },
      { year: "2023.09 - 2027.07", title: "四川大学 · 软件学院 · 软件工程", description: "本科在读，均分 80+，预计 2027 年毕业。" },
      { year: "竞赛 / 奖项", title: "蓝桥杯省三等奖 · 医学创新大赛二等奖", description: "获得蓝桥杯 C++ 组省三等奖，以及全国大学生医学创新大赛交叉学科二等奖。" },
    ],
  },

  // ---------- 技能矩阵 ----------
  skills: {
    title: "技能矩阵",
    items: ["Java", "C++", "Python", "Spring Boot", "MyBatis", "PyTorch", "Open3D", "YOLO", "CLIP", "Gradio", "微信小程序", "Vue", "MySQL", "AI Agent", "GitHub Pages"],
  },

  // ---------- 联系方式 ----------
  contact: {
    title: "联系我",
    text: "目前正在寻找合适的实习 / 校招机会，方向聚焦计算机视觉、算法工程、全栈研发与产品技术结合岗位，欢迎交流。",
    links: [
      { label: "3037372286@qq.com", icon: "mail", url: "mailto:3037372286@qq.com" },
      { label: "GitHub", icon: "github", url: "https://github.com/myYiKe", dark: true },
      { label: "微信 / 电话 13981942948", icon: "globe", url: "tel:13981942948" },
    ],
  },
};
