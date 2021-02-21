import NewsList from './newsList';
import $ from 'jquery';

const newsList = JSON.parse(localStorage.getItem('news'));

const newsListRender = new NewsList('.news__slider', newsList);

$('.news__slider').slick({
    vertical: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    sutoplaySpeed: 4000,
})
