document.getElementById('year').textContent = new Date().getFullYear();

const videos = document.querySelectorAll('video[autoplay]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}, { threshold: 0.2 });

videos.forEach((video) => observer.observe(video));
const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("site-theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", "Switch to night mode");
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");

    localStorage.setItem("site-theme", isLight ? "light" : "dark");

    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to night mode" : "Switch to day mode"
    );
  });
}
