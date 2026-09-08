// 页面渲染逻辑：从 assets/content.js 的 SITE_CONTENT 读取数据并填充页面
// 一般不需要修改这个文件，改内容请编辑 content.js

function createElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderSectionHeader(containerId, eyebrow, title) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.append(
    createElement("p", "eyebrow", eyebrow),
    createElement("h2", "", title)
  );
}

function renderProfile(profile) {
  document.title = `${profile.name} | 个人作品集`;
  document.getElementById("site-brand").textContent = profile.brand;
  document.getElementById("hero-eyebrow").textContent = profile.eyebrow;
  document.getElementById("hero-name").textContent = profile.name;
  document.getElementById("hero-lead").textContent = profile.lead;
  document.getElementById("profile-avatar").textContent = profile.initials;
  document.getElementById("profile-title").textContent = profile.card.title;
  document.getElementById("profile-subtitle").textContent = profile.card.subtitle;
  document.getElementById("profile-text").textContent = profile.card.text;

  const stats = document.getElementById("hero-stats");
  profile.stats.forEach((item) => {
    const li = createElement("li");
    li.append(
      createElement("strong", "", item.value),
      createElement("span", "", item.label)
    );
    stats.append(li);
  });

  const tags = document.getElementById("profile-tags");
  profile.card.tags.forEach((tag) => tags.append(createElement("li", "", tag)));
}

function renderNav(navItems) {
  const nav = document.getElementById("site-nav");
  navItems
    .filter((item) => item.enabled)
    .forEach((item) => {
      const link = createElement("a", "", item.label);
      link.href = item.href;
      nav.append(link);
    });
}

function renderAbout(about) {
  renderSectionHeader("about-header", about.eyebrow, about.title);
  const grid = document.getElementById("about-grid");
  about.panels.forEach((panel) => {
    const card = createElement("article", "panel");
    card.append(createElement("h3", "", panel.title));
    (panel.paragraphs || []).forEach((text) => card.append(createElement("p", "", text)));
    if (panel.bullets) {
      const list = createElement("ul", "feature-list");
      panel.bullets.forEach((text) => list.append(createElement("li", "", text)));
      card.append(list);
    }
    grid.append(card);
  });
}

function renderProjects(projects) {
  renderSectionHeader("projects-header", projects.eyebrow, projects.title);
  const grid = document.getElementById("project-grid");
  projects.items.forEach((item) => {
    const card = createElement("article", "project-card");
    card.append(
      createElement("span", "project-card__badge", item.badge),
      createElement("h3", "", item.title),
      createElement("p", "", item.description)
    );
    const meta = createElement("ul", "project-card__meta");
    item.meta.forEach((text) => meta.append(createElement("li", "", text)));
    const link = createElement("a", "", item.link.label);
    link.href = item.link.url;
    link.setAttribute("aria-label", `${item.link.label}：${item.title}`);
    card.append(meta, link);
    grid.append(card);
  });
}

function renderTimeline(timeline) {
  renderSectionHeader("timeline-header", timeline.eyebrow, timeline.title);
  const list = document.getElementById("timeline-list");
  timeline.items.forEach((item) => {
    const row = createElement("article", "timeline-item");
    const body = createElement("div");
    body.append(
      createElement("h3", "", item.title),
      createElement("p", "", item.description)
    );
    row.append(createElement("span", "timeline-item__year", item.year), body);
    list.append(row);
  });
}

function renderSkills(skills) {
  renderSectionHeader("skills-header", skills.eyebrow, skills.title);
  const cloud = document.getElementById("skills-cloud");
  skills.items.forEach((text) => cloud.append(createElement("span", "", text)));
}

function renderContact(contact) {
  renderSectionHeader("contact-header", contact.eyebrow, contact.title);
  document.getElementById("contact-text").textContent = contact.text;
  const links = document.getElementById("contact-links");
  contact.links.forEach((item) => {
    const link = createElement("a", "", item.label);
    link.href = item.url;
    if (item.url.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    links.append(link);
  });
}

// ---------- 明暗主题切换 ----------
function initThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  if (localStorage.getItem("portfolio-theme") === "light") {
    document.body.classList.add("light");
  }
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      const nextTheme = document.body.classList.contains("light") ? "light" : "dark";
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  }
}

renderProfile(SITE_CONTENT.profile);
renderNav(SITE_CONTENT.nav);
renderAbout(SITE_CONTENT.about);
renderProjects(SITE_CONTENT.projects);
renderTimeline(SITE_CONTENT.timeline);
renderSkills(SITE_CONTENT.skills);
renderContact(SITE_CONTENT.contact);
initThemeToggle();
