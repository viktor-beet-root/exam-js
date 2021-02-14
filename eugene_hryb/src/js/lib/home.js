
import $ from 'jquery';
import 'slick-carousel';

$('.home__slider').slick({
    vertical: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: false,
    sutoplaySpeed: 2000,
})
