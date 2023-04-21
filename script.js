// Hamburger Menu

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
  
// Main logo hover 

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

// Arrow CLicked 

document.querySelector(".scroll-arrow").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link behavior
  const targetElement = document.querySelector("#main-content");
  
  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
});
