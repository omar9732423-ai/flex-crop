$(function () {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        $('#formSuccess').removeClass('d-none');
        this.reset();
        setTimeout(function () { $('#formSuccess').addClass('d-none'); }, 4000);
    });
});
