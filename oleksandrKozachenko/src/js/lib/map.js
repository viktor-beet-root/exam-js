let map;
function initMap() {
    const coordinates = {
        lat: 49.5896094035668,
        lng: 34.551092219961426
    }
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 14,
    });
    const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: 'The center of Poltava',
        icon: './images/marker.png'
    });
}

export default initMap;
