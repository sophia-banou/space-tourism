$(document).ready(function () {
  $("header nav .item").on({
    mouseenter: function () {
      if (!$(this).hasClass("active")) {
        $(this).addClass("hovered");
      }
    },
    mouseleave: function () {
      $(this).removeClass("hovered");
    },
    click: function () {
      $("header nav .item").removeClass("active");
      $(this).removeClass("hovered");
      $(this).addClass("active");
    },
  });
  $(".explanation__nav .item").on({
    mouseenter: function () {
      if (!$(this).hasClass("active")) {
        $(this).addClass("hovered");
      }
    },
    mouseleave: function () {
      $(this).removeClass("hovered");
    },
    click: function () {
      $(".explanation__nav .item").removeClass("active");
      $(this).removeClass("hovered");
      $(this).addClass("active");
    },
  });
  $(".home__main .explore").on({
    mouseenter: function () {
      $(this).addClass("hovered");
    },
    mouseleave: function () {
      $(this).removeClass("hovered");
    },
  });

  $(".crew__main .pagination .dot").on({
    mouseenter: function () {
      if (!$(this).hasClass("active")) {
        $(this).addClass("hovered");
      }
    },
    mouseleave: function () {
      $(this).removeClass("hovered");
    },
  });

  $(".technology__main .pagination .pag-circle").on({
    mouseenter: function () {
      if (!$(this).hasClass("active")) {
        $(this).addClass("hovered");
      }
    },
    mouseleave: function () {
      $(this).removeClass("hovered");
    },
  });
  $(".header__mobile").on({
    click: function () {
      $(".mobile-wrapper").css("display", "flex");
      $(".mobile__backdrop").show();
      $("body").css("position", "fixed");
    },
  });
  $("#mobile-close").on({
    click: function () {
      $(".mobile-wrapper").hide();
      $(".mobile__backdrop").hide();
      $("body").css("position", "static");
    },
  });
});
