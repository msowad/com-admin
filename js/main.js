(function ($) {
  "use strict";
  // Scroll Bar
  let jscr1 = $(".js-scrollbar1");
  let jscr2 = $(".nice-scr1");
  let jscr3 = $(".nice-scr2");
  let jscr4 = $(".nice-scr3");
  if (jscr1[0]) {
    const ps1 = new PerfectScrollbar(".js-scrollbar1");
  }
  if (jscr2[0]) {
    const ps2 = new PerfectScrollbar(".nice-scr1");
  }
  if (jscr3[0]) {
    const ps3 = new PerfectScrollbar(".nice-scr2");
  }
  if (jscr4[0]) {
    const ps3 = new PerfectScrollbar(".nice-scr3");
  }

  // Chart Label
  const dot = $(".dot");
  dot.each(function () {
    const that = $(this);
    const dotColor = that.data("color");
    that.css("background", dotColor);
  });

  // Side Bar Toggle
  $(".btn-sidebar-toogle").on("click", function () {
    $(".navbar-nav").toggleClass("navbar-show");
    $(".body-overlay").toggleClass("overlay-show");
  });

  // Dropdown
  const dropdown = $(".js-dropdown-button");
  dropdown.on("click", function () {
    const targetDropdown = $(this).data("target");
    $("." + targetDropdown).toggleClass("js-dropdown-show not-focus-close");
  });

  const closeDropdowns = (event) => {
    const dropdowns = $(".js-dropdown-button");
    dropdowns.each(function () {
      const targetDropdown = $(this).data("target");
      const element = $("." + targetDropdown)[0];

      if (event.target !== element)
        $("." + targetDropdown).removeClass("js-dropdown-show not-focus-close");
    });
  };

  // Close dropdowns on click body
  $(window).on("mouseup", function (event) {
    closeDropdowns(event);
  });

  // Close dropdown on scroll
  $(window).on("scroll", (event) => {
    closeDropdowns(event);
  });
})(jQuery);
