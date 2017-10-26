$(document).ready(function () {
    $('.nav-link, .nav-mobile-link').each(function () {
        $(this).attr('data-hover', $(this).text());
    });
    $('.btn-hamburger').click(function () {
        $(this).toggleClass('is-open');
        $('.nav-mobile').toggleClass('is-open');
    });
    $(document).click(function () {
        $('.btn-hamburger').removeClass('is-open');
        $('.nav-mobile').removeClass('is-open');
    });

    function clickStop(div) {
        div.click(function (evt) {
            evt.stopPropagation();
        });
    };
    clickStop($('.btn-hamburger'));
    clickStop($('.nav-mobile'));
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        fade: true,
        speed:1500
    });
    $('.slider-box, .form').height($(this).height() - 54);
    $('.venobox').venobox({
        bgcolor: '#000'
    });
});