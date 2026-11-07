$(function () {
    // Back-to-top button
    $(window).on('scroll', function () {
        $(this).scrollTop() > 300 ? $('#btn-back-to-top').fadeIn() : $('#btn-back-to-top').fadeOut();
    });
    $('#btn-back-to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // Close mobile menu after clicking a link
    $('.navbar-nav .nav-link').on('click', function () {
        bootstrap.Collapse.getOrCreateInstance('#navbarNav', { toggle: false }).hide();
    });
});
