const themeToggle = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("portfolio-theme");

if (storedTheme === "light") {
  document.body.classList.add("light");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const nextTheme = document.body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("portfolio-theme", nextTheme);
  });
}
