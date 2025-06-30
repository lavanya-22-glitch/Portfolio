document.getElementById('theme-toggle').addEventListener('click', () => {
    const themeLink = document.getElementById('theme-style');
    themeLink.href = themeLink.href.includes('light.css') ? './dark.css' : './light.css';
});

const hamburger = document.getElementById("hamburger");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");

  // Toggle cross animation
  line1.classList.toggle("rotate-45");
  line1.classList.toggle("translate-y-[9px]"); // push down

  line2.classList.toggle("opacity-0");

  line3.classList.toggle("-rotate-45");
  line3.classList.toggle("-translate-y-[9px]"); // pull up
});

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
  });
});