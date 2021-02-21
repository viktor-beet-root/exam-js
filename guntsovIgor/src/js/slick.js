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
    $(".gallery__carousel").after(` 
    <div class="gallery__carousel ">
    <div class="gallery__carousel-main">
        <a href="images/gall1.jpg" data-lightbox="roadtrip" data-title="NY"><img class="gallery__carousel-image1" src="images/gall1.jpg" alt="photo1" /></a>
    </div>
    <div class="gallery__carousel-secondary">
        <div>
            <a href="images/gall2.jpg" data-lightbox="roadtrip" data-title="LA"><img class="gallery__carousel-image2" src="images/gall2.jpg" alt="photo2" /></a>
            <a href="images/gall3.jpg" data-lightbox="roadtrip" data-title="SF"><img class="gallery__carousel-image3" src="images/gall3.jpg" alt="photo3" /></a>
        </div>
        <div>
            <a href="images/gall4.jpg" data-lightbox="roadtrip" data-title="TX"><img class="gallery__carousel-image4" src="images/gall4.jpg" alt="photo4" /></a>
            <a href="images/gall5.jpg" data-lightbox="roadtrip" data-title="Mayami"><img class="gallery__carousel-image5" src="images/gall5.jpg" alt="photo5" /></a>
        </div>
    </div>
    </div>
    `);
});
