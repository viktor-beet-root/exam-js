import $ from 'jquery';
import 'slick-carousel';

console.log($)


$('.aboutAs_slider').slick({
    arrows: false,
    dots: true,
});


$('.news__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});

function initMap() {
    const uluru = {
        lat: 50.0886,
        lng: 36.25930
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: uluru,
        zoom: 10,
    });
    const image = "../images/marker.png";
    const marker = new google.maps.Marker({
        position: uluru,
        map,
        title: "We are here :)",
    });
};
