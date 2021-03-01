import $ from 'jquery';
import 'slick-carousel';

$('.container_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});