(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    $(window).scroll(function () {
      // Scroll up
      if ($(window).scrollTop() >= 400) {
        $("div#scroll").slideDown(600);
      } else {
        $("div#scroll").slideUp(600);
      }

      if ($(window).scrollTop() >= 80) {
        $(".header-top").addClass("fixtopmenu");
      } else {
        $(".header-top").removeClass("fixtopmenu");
      }
    });

    $("#currentYear").html(new Date().getFullYear());

    // Smooth Scroll
    $('.main-menu ul li a[href*="#"]:not([href="#"])').on("click", function () {
      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            0
          );
          return false;
        }
      }
    });

    // Back to Top
    $("div#scroll a").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        0
      );
    });

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Nav Menu
    $(".menu-btn").on("click", function () {
      $(".off-canvas-menu").addClass("active");
    });

    $(".menu-close-btn, .main-menu ul li a").on("click", function () {
      $(".off-canvas-menu").removeClass("active");
    });

    // WOW js
    new WOW().init({
      mobile: false,
    });

    // All Window Load Function
    jQuery(window).load(function () {
      jQuery(".preloader").fadeOut("slow");
    });
  });
})(jQuery);
