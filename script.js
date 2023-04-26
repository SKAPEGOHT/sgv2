// hamburger menu

$(document).ready(function () {
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
  
// main logo hover 

const logo = document.querySelector(".logo img");

logo.addEventListener("mouseover", () => {
  const hoverSrc = logo.getAttribute("data-src");
  logo.setAttribute("data-src", logo.src);
  logo.src = hoverSrc;
});

logo.addEventListener("mouseout", () => {
  const normalSrc = logo.getAttribute("data-src");
  logo.setAttribute("data-src", logo.src);
  logo.src = normalSrc;
});

// arrow clicked 

document.querySelector(".scroll-arrow").addEventListener("click", (event) => {
  event.preventDefault(); // prevent the default link behavior
  const targetElement = document.querySelector("#main-content");
  
  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
});

// smooth scroll to top 

const scrollToTop = document.querySelector(".scroll-to-top");

scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// show or hide scroll-to-top arrow based on scroll position
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTop.classList.add("visible");
  } else {
    scrollToTop.classList.remove("visible");
  }
});

// header typed out 

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

