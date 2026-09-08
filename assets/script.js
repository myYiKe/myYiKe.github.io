// 页面渲染逻辑：从 assets/content.js 的 SITE_CONTENT 读取数据并填充页面
// 一般不需要修改这个文件，改内容请编辑 content.js

// ---------- 图标库（SVG path） ----------
const ICONS = {
  home: "M12 3l9 8h-3v9h-4v-6h-4v6H6v-9H3l9-8z",
  grid: "M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z",
  clock: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm1 4h-2v6.4l4.8 2.9 1-1.7-3.8-2.2V6z",
  star: "M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.5 5.8 21l1.6-7L2 9.3l7.1-.7L12 2z",
  mail: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.9L4.2 7v10.8h15.6V7L12 12.9z",
  globe: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm7.9 9h-2.9c-.2-2-.7-3.7-1.3-5A8 8 0 0 1 19.9 11zM12 4.2c.9 1.2 1.6 3.3 1.8 6.8h-3.6c.2-3.5.9-5.6 1.8-6.8zM8.3 6c-.6 1.3-1.1 3-1.3 5H4.1A8 8 0 0 1 8.3 6zM4.1 13h2.9c.2 2 .7 3.7 1.3 5a8 8 0 0 1-4.2-5zm6.1 0h3.6c-.2 3.5-.9 5.6-1.8 6.8-.9-1.2-1.6-3.3-1.8-6.8zm5.5 5c.6-1.3 1.1-3 1.3-5h2.9a8 8 0 0 1-4.2 5z",
  github: "M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z",
  linkedin: "M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.4v6.3zM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1zM7.1 20.4H3.6V9h3.5v11.4z",
};

function icon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", ICONS[name] || ICONS.grid);
  svg.append(path);
  return svg;
}

function createElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// ---------- 侧边栏 ----------
function renderSidebar(profile, nav) {
  document.title = `${profile.name} | 个人作品集`;
  document.getElementById("sidebar-avatar").src = profile.avatar;
  document.getElementById("sidebar-name").textContent = profile.name;
  document.getElementById("sidebar-status").textContent = profile.status;

  const menu = document.getElementById("site-menu");
  nav
    .filter((item) => item.enabled)
    .forEach((item, index) => {
      const link = createElement("a", "menu__item" + (index === 0 ? " is-active" : ""));
      link.href = item.href;
      link.append(icon(item.icon), createElement("span", "", item.label));
      // 点击菜单时切换高亮
      link.addEventListener("click", () => {
        menu.querySelectorAll(".menu__item").forEach((el) => el.classList.remove("is-active"));
        link.classList.add("is-active");
      });
      menu.append(link);
    });
}

// ---------- 首页小组件 ----------
function renderHome(content) {
  document.getElementById("home-photo").src = content.homePhoto;

  // 问候卡：根据当前时间显示不同问候语
  const hour = new Date().getHours();
  const hello = hour < 6 ? "Good Night" : hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  document.getElementById("greeting-hello").textContent = hello;
  document.getElementById("greeting-avatar").src = content.profile.avatar;
  document.getElementById("greeting-role").textContent = content.profile.role;

  const intro = document.getElementById("greeting-intro");
  intro.append("I'm ", createElement("strong", "", content.profile.name), " , Nice to meet you!");

  // 社交按钮
  const row = document.getElementById("social-row");
  content.social.forEach((item) => row.append(buildSocialButton(item)));

  // 最新动态
  document.getElementById("updates-title").textContent = content.updates.title;
  const list = document.getElementById("updates-list");
  content.updates.items.forEach((item) => {
    const thumb = createElement("img", "updates__thumb");
    thumb.src = content.profile.avatar;
    thumb.alt = "";
    const body = createElement("div");
    body.append(
      createElement("p", "updates__name", item.title),
      createElement("p", "updates__desc", item.desc),
      createElement("p", "updates__date", item.date)
    );
    list.append(createElement("div", "updates__item"));
    list.lastElementChild.append(thumb, body);
  });
}

function buildSocialButton(item) {
  const btn = createElement("a", "social-btn" + (item.dark ? " social-btn--dark" : ""), "");
  btn.href = item.url;
  if (item.url.startsWith("http")) {
    btn.target = "_blank";
    btn.rel = "noreferrer";
  }
  btn.append(icon(item.icon), createElement("span", "", item.label));
  return btn;
}

// ---------- 时钟与日历 ----------
function initClock() {
  const timeEl = document.getElementById("clock-time");
  const dateEl = document.getElementById("clock-date");
  const weekNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

  function tick() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    timeEl.textContent = `${hh}:${mm}`;
    dateEl.textContent = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${weekNames[now.getDay()]}`;
  }

  tick();
  setInterval(tick, 10000);
}

function initCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();
  const weekNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

  document.getElementById("calendar-title").textContent =
    `${year}/${month + 1}/${today} ${weekNames[now.getDay()]}`;

  const grid = document.getElementById("calendar-grid");
  // 周一为一周第一天：把周日(0)换算成 7
  const firstDay = new Date(year, month, 1).getDay() || 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i < firstDay; i++) {
    grid.append(createElement("span", "calendar__day", ""));
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const cls = day === today ? "calendar__day calendar__day--today" : "calendar__day";
    grid.append(createElement("span", cls, String(day)));
  }
}

// ---------- 项目 ----------
function renderProjects(projects) {
  document.getElementById("projects-title").textContent = projects.title;
  const grid = document.getElementById("project-grid");

  projects.items.forEach((item) => {
    const card = createElement("article", "card card--hover project-card");

    const head = createElement("div", "project-card__head");
    head.append(createElement("div", `project-card__icon hue-${item.hue || "mint"}`, item.icon));

    const nameWrap = createElement("div");
    const nameLine = createElement("span", "project-card__name", item.name);
    const year = createElement("span", "project-card__year", item.year);
    nameWrap.append(nameLine, year);
    head.append(nameWrap);

    const tags = createElement("ul", "project-card__tags");
    item.tags.forEach((tag) => tags.append(createElement("li", "", tag)));

    const desc = createElement("p", "project-card__desc", item.description);

    const links = createElement("div", "project-card__links");
    if (item.links.website) {
      const btn = createElement("a", "link-btn", "");
      btn.href = item.links.website;
      btn.append(createElement("span", "", "Website"));
      links.append(btn);
    }
    if (item.links.github) {
      const btn = createElement("a", "link-btn link-btn--dark", "");
      btn.href = item.links.github;
      btn.append(icon("github"), createElement("span", "", "GitHub"));
      links.append(btn);
    }

    card.append(head, tags, desc, links);
    grid.append(card);
  });
}

// ---------- 经历时间线 ----------
function renderTimeline(timeline) {
  document.getElementById("timeline-title").textContent = timeline.title;
  const list = document.getElementById("timeline-list");

  timeline.items.forEach((item) => {
    const row = createElement("article", "card card--hover timeline-item");
    const body = createElement("div");
    body.append(
      createElement("h3", "", item.title),
      createElement("p", "", item.description)
    );
    row.append(createElement("span", "timeline-item__year", item.year), body);
    list.append(row);
  });
}

// ---------- 技能 ----------
function renderSkills(skills) {
  document.getElementById("skills-title").textContent = skills.title;
  const cloud = document.getElementById("skills-cloud");
  skills.items.forEach((text) => cloud.append(createElement("span", "", text)));
}

// ---------- 联系 ----------
function renderContact(contact) {
  document.getElementById("contact-title").textContent = contact.title;
  document.getElementById("contact-text").textContent = contact.text;
  const links = document.getElementById("contact-links");
  contact.links.forEach((item) => links.append(buildSocialButton(item)));
}

// ---------- 启动 ----------
renderSidebar(SITE_CONTENT.profile, SITE_CONTENT.nav);
renderHome(SITE_CONTENT);
renderProjects(SITE_CONTENT.projects);
renderTimeline(SITE_CONTENT.timeline);
renderSkills(SITE_CONTENT.skills);
renderContact(SITE_CONTENT.contact);
initClock();
initCalendar();
