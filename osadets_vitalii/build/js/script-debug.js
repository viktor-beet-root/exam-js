"use strict";

// header slider
$(".slider").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 200000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  vertical: true,
  dotsClass: "vertical-dots",
  responsive: [{
    breakpoint: 1400,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 1000,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 400,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
}); // news slider

$(".news_slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 200000,
  responsive: [{
    breakpoint: 1000,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      arrows: false
    }
  }, {
    breakpoint: 568,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false
    }
  }]
}); //google map init

function initMap() {
  var cords = {
    lat: 49.01187,
    lng: 24.37308
  };
  var ivanoFrankivskCords = {
    lat: 48.9215,
    lng: 24.70972
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    center: cords,
    zoom: 10,
    styles: [{
      elementType: "geometry",
      stylers: [{
        color: "#f5f5f5"
      }]
    }, {
      elementType: "labels.icon",
      stylers: [{
        visibility: "off"
      }]
    }, {
      elementType: "labels.text.fill",
      stylers: [{
        color: "#616161"
      }]
    }, {
      elementType: "labels.text.stroke",
      stylers: [{
        color: "#f5f5f5"
      }]
    }, {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#bdbdbd"
      }]
    }, {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{
        color: "#eeeeee"
      }]
    }, {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#757575"
      }]
    }, {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{
        color: "#e5e5e5"
      }]
    }, {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#9e9e9e"
      }]
    }, {
      featureType: "road",
      elementType: "geometry",
      stylers: [{
        color: "#ffffff"
      }]
    }, {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#757575"
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{
        color: "#dadada"
      }]
    }, {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#616161"
      }]
    }, {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#9e9e9e"
      }]
    }, {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{
        color: "#e5e5e5"
      }]
    }, {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{
        color: "#eeeeee"
      }]
    }, {
      featureType: "water",
      elementType: "geometry",
      stylers: [{
        color: "#c9c9c9"
      }]
    }, {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#9e9e9e"
      }]
    }]
  });
  var marker = new google.maps.Marker({
    position: ivanoFrankivskCords,
    map: map,
    title: "Ivano-Frankivsk",
    icon: "../image/pin.png"
  });
}