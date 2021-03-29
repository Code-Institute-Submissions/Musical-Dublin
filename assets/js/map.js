let map;

function initMap() {
    var options = {
        center: {lat: 53.350140,lng: -6.266155},
        zoom: 8
    }

    map = new google.maps.Map(document.getElementById("map"), options)
}

