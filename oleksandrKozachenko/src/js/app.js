
import $ from 'jquery';
import 'slick-carousel';
import 'lightbox2';

import initMap from './lib/map';
window.initMap = initMap;

import headerSlider from './lib/headerSlider';
headerSlider();

import newsSlider from './lib/newsSlider';
newsSlider();

import sliderResize from './lib/sliderResize';
sliderResize(); 


function scrollToElement() {

  const elementClick = $(this).attr("href");
  $('html').animate({
    scrollTop: $(elementClick).offset().top
  }, 1000);
  return false;
}

const scrollHeader = $('.header__scroll');
scrollHeader[0].addEventListener('click', scrollToElement);

const menuLink = $('.header__link');
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', scrollToElement);
}

const seeMore = document.querySelector('.gallery__more');
seeMore.addEventListener('click', function () {
  const row = document.querySelector('.gallery__row');
  row.classList.remove('d-hidden')
})
