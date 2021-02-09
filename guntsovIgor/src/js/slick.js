import $ from "jquery";
import "slick-carousel";
import "lightbox2";

$(".header__slider").slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
});

$(function () {
    $('a[href^="#"]').on("click", function (event) {
        event.preventDefault();

        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $("html, body").animate({ scrollTop: dn }, 1000);
    });
});

$(".news__gallery").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
        $(".navigation").css("background-color", "rgba(85,183,255, .75)");
    } else {
        $(".navigation").css("background-color", "transparent");
    }
});

$(".gallery__details-btn").on("click", function (event) {
    event.preventDefault();
    $(".gallery__carousel.hidden").addClass("active");
});
