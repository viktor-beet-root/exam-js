import $ from 'jquery';
import 'slick-carousel';
$(document).ready(function($) {
    $('.popup-open').click(function() {
        $('.popup-fade').fadeIn();
        return false;
    });

    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });
});

$('.container_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});