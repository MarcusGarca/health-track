// Initialize and add the map
function initMap() {
    // The location of Fortaleza
    const FOR = { lat: -3.731862, lng: -38.526669 };
    // The map, centered at Fortaleza
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: FOR,
    });
    // The marker, positioned at Fortaleza
    const marker = new google.maps.Marker({
        position: FOR,
        map: map,
    });
}