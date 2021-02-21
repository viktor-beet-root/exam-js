let map;
function initMap(){
    map =  new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.031266, lng: 30.653218 },
        zoom: 11,
        disableDefaultUI: true,
    });

    const markerIcon = {
        url: "./image/marker.png",
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(35, 35),
    };

    const marker = new google.maps.Marker({
        position: { lat: 51.031514, lng: 30.654002 },
        map,
        icon: markerIcon,
    });

}

window.initMap = initMap;
