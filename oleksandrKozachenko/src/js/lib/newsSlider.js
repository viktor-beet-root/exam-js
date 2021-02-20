import $ from 'jquery';
import 'slick-carousel';

function newsSlider() {
    $('.news__slider').slick({
      vertical: false,
      dots: true,
      dotsClass: 'slick-dots',
      prevArrow: $('.news__navigation--prev'),
      nextArrow: $('.news__navigation--next'),
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 4000,
  
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: 'unslick'
      },
      ]
    })
  }
newsSlider();
  
  export default newsSlider;
