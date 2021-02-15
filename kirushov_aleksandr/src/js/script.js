$(document).ready(function () {
    const $slider = $('.header__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.header__dots'),
        vertical: true,
        dotsClass: 'slick-dots',
        autoplay: true,
        autoplaySpeed: 4000,
    });

    const header = document.getElementById('header');
    const bgNum = [1, 2, 3, 4, 5];
    $slider.on('afterChange', function (e, slick, index) {
        header.style.backgroundImage = 'url(/kirushov_aleksandr/build/image/bg_footer' + bgNum[index] + '.jpg)';
        header.style.transition = 'background-image .5s ease-in-out';

    });

    const settings = {
        dots: true,
        dotsClass: 'slick-dots',
        appendDots: $('.news__slider-dots'),
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,


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
        ]
    };

    const $sliderNews = $('.news__list').slick(settings);

    const arrowNewsSlider = $('.news__list button.slick-arrow');
    const arrowNewsSliderArr = $.makeArray(arrowNewsSlider);
    const arrowPrev = document.createElement('div');
    const arrowNext = document.createElement('div');
    arrowPrev.classList.add('news__arrow-prev');
    arrowNewsSlider[0].appendChild(arrowPrev);
    arrowNext.classList.add('news__arrow-next');
    arrowNewsSlider[1].appendChild(arrowNext);

    const logoLink = $('.logo__link');
    logoLink[0].addEventListener('click', scrollToElement);

    const menuLink = $('.menu__link');
    for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].addEventListener('click', scrollToElement);
    }

    const scrollHeader = $('.header__scroll');
    scrollHeader[0].addEventListener('click', scrollToElement);

    const galleryBtn = $('.gallery__btn');
    const galleryImgHidden = $('.gallery__img-row02');


    galleryBtn[0].addEventListener('click', function () {

        const elementClick = $(this).attr("href");
        const destination = $(elementClick).offset().top - 200;
        $('html').animate({
            scrollTop: destination
        }, 2000);
        return false;
    });
    galleryBtn[0].addEventListener('click', function () {
        show(galleryImgHidden[0]);
    });

    function scrollToElement() {

        const elementClick = $(this).attr("href");
        const destination = $(elementClick).offset().top;
        $('html').animate({
            scrollTop: destination
        }, 2000);
        return false;
    }

    function show(element) {
        if (element.classList.contains('gallery__hidden')) {
            element.classList.remove('gallery__hidden')
        };
    };

    const sectionAbout = $('#whatWeDo');
    const menuFixed = $('.menu__wrapp');

    $(window).scroll(function () {

        if ($(this).scrollTop() > 500 && menuFixed.hasClass("menu__noSticky")) {
            menuFixed.fadeOut('fast', function () {
                $(this).removeClass("menu__noSticky").addClass("menu__sticky").fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= 500 && menuFixed.hasClass("menu__sticky")) {
            menuFixed.fadeOut('fast', function () {
                $(this).removeClass("menu__sticky").addClass("menu__noSticky").fadeIn('fast');
            });
        }
    });

    const menuList = $('.menu__item');

    $(window).scroll(function () {
        const sections = $('section');
        sections.each(function (i, el) {
            const top = $(el).offset().top - 100;
            const bottom = top + $(el).height();
            const scroll = $(window).scrollTop();
            const id = $(el).attr('id');

            if (scroll > top && scroll < bottom) {
                $('a.menu__active').removeClass('menu__active');
                $('a[href="#' + id + '"]').addClass('menu__active');
            }
            if (scroll < $(sections[0]).offset().top - 100) {
                $('a.menu__active').removeClass('menu__active');
            }
        })
    });
})
