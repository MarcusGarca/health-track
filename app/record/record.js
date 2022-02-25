// Initialize and add the map
window.initMap = function () {
    // A localização de Fortaleza
    const FOR = { lat: -3.731862, lng: -38.526669 };
    // O mapa de  Fortaleza
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: FOR,
    });
    // O marcador, posicionado em Fortaleza
    const marker = new google.maps.Marker({
        position: FOR,
        map: map,
    });
}