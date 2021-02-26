"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

require("slick-carousel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_jquery["default"]);
(0, _jquery["default"])('.aboutAs_slider').slick({
  arrows: false,
  dots: true
});
(0, _jquery["default"])('.news__slider').slick({
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
  }, {
    breakpoint: 820,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  }]
});

function initMap() {
  var uluru = {
    lat: 50.0886,
    lng: 36.25930
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    center: uluru,
    zoom: 10
  });
  var image = "../images/marker.png";
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: "We are here :)"
  });
}

;