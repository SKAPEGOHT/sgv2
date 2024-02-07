$(document).ready(function () {
  // Hamburger Menu Functionality
  $('.hamburger-menu').click(function () {
      $(this).toggleClass('open');
      $('.nav-links').slideToggle();
  });

  $(window).resize(function () {
      if ($(window).width() > 768) {
          $('.nav-links').removeAttr('style');
          $('.hamburger-menu').removeClass('open');
      }
  });
});

// Main Logo Hover Effect
const logo = document.querySelector(".logo img");

logo.addEventListener("mouseover", () => {
  const hoverSrc = logo.getAttribute("data-src-hover");
  logo.setAttribute("data-src-hover", logo.src); // Swap the URLs
  logo.src = hoverSrc;
});

logo.addEventListener("mouseout", () => {
  const normalSrc = logo.getAttribute("data-src-hover");
  logo.setAttribute("data-src-hover", logo.src); // Swap back
  logo.src = normalSrc;
});

// Smooth Scroll for the Scroll-Arrow
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".scroll-arrow").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    const targetElement = document.querySelector("#main-content");

    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Smooth Scroll to Top Functionality
const scrollToTop = document.querySelector(".scroll-to-top");

scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
      scrollToTop.classList.add("visible");
  } else {
      scrollToTop.classList.remove("visible");
  }
});

// Header Typed-Out Effect
const header = document.querySelector('#header');
const text = header.textContent;
header.textContent = '';

for (let i = 0; i < text.length; i++) {
  const span = document.createElement('span');
  span.textContent = text[i];
  span.style.animationDelay = `${i * 0.1}s`;
  header.appendChild(span);
}

const cursor = document.createElement('span');
cursor.className = 'cursor';
header.appendChild(cursor);
