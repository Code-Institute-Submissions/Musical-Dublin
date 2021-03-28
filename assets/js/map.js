

function initMap() {
    const mapSpecs = {
            center: new google.maps.LatLng(53, -6),
            zoom: 5,
};
const map = new google.maps.Map(document.getElementById("map"), mapSpecs);
}

initMap();




        /*var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 53.33306,
                    lng: -6.24889
                }
            });*/