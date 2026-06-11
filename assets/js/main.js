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
