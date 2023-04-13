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
  