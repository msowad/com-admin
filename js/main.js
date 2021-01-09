
(function ($) {
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
})(jQuery)