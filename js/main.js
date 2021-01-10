
(function ($) {
    "use strict";
    // Scroll Bar
    let jscr1 = $('.js-scrollbar1');
    if(jscr1[0]) {
        const ps1 = new PerfectScrollbar('.js-scrollbar1');      
    }

    // Chart Label
    const dot = $(".dot");
    dot.each(function() {
        const that = $(this);
        const dotColor = that.data('color');
        that.css('background', dotColor);
    });

    // Side Bar Toggle
    $(".btn-sidebar-toogle").on('click', function() {
        $(".navbar-nav").toggleClass('navbar-show');
        $(".body-overlay").toggleClass('overlay-show');
    });

    // Dropdown
    const dropdown = $(".js-dropdown-button");
    dropdown.on('click', function() {
        const targetDropdown = $(this).data('target');
        $("." + targetDropdown).toggleClass('js-dropdown-show not-focus-close');
    });

    // Close dropdown on click body
    $(window).on('mouseup', function(event) {
        const dropdowns = $(".js-dropdown-button");
        dropdowns.each(function() {
            const targetDropdown = $(this).data('target');
            const element = $("." + targetDropdown);
            if(event.target != element && event.target.parentNode != element)
                $("." + targetDropdown).removeClass('js-dropdown-show not-focus-close');
        });
    });
})(jQuery)
