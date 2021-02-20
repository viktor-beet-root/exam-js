import $ from 'jquery';
import 'slick-carousel';

function headerSlider(){ $('.header__slider').slick({
    vertical: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  })
  }
  headerSlider()

  export default headerSlider;
