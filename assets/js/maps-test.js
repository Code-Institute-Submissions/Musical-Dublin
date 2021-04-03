/* var map;

var placesMarkers = [];

var venuesMarkers = [{
location: {
    lat: 53.334653,
    lng: -6.258785
},
content: `Hello it worked`,
},
{
location: {
    lat: 53.289883, 
    lng: -6.171961,
},
content: `Hello it worked`,
},
];

var eduMarkers = [{
    location: {
        lat: 53.339906, 
        lng: -6.273719
    },
    content: `It worked`,
},
{
    location: {
        lat: 53.339906, 
        lng: -6.273719,
    },
    content: `It worked`,
}
];

var shopMarkers = [
{
    location: {
        lat: 53.343126, 
        lng: -6.262568,
    },
    content: `It worked again`
},
{
   location: {
        lat: 53.394871,  
        lng: -6.394655,
    },
    content: `It worked again`
}];

function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center: {
            lat: 53.350140, 
            lng: -6.255155
        },
        zoom: 12
    })
}

var infoWindow = new google.maps.InfoWindow();

function addMarker(places) {
    var marker = new google.maps.Marker({
        position: places.location,
        map: map,
        animation: google.maps.Animation.DROP,
    })
}

placesMarkers.push(marker);

marker.addListener("click", function(){
    infoWindow.close();
    infoWindow.setContent(places.content)
    infoWindow.open(map, marker);
});

function showMarkers(markers) {
for (i = 0; i < markers.length; i++){
    addMarker(markers[i]);
}
}

function clearMarkers() {
    for(let i = 0; i < placesMarkers.length; i++){
        placesMarkers[i].setMap(null);
    }
}

$(document).ready(function() {
    $('.concert-hall').on("click", function(){
        clearMarkers();
        showMarkers(venuesMarkers);
    });
    $('.education').on("click", function(){
        clearMarkers();
        showMarkers(eduMarkers);
    })
    $('.shops').on('click', function(){
        clearMarkers();
        showMarkers(shopMarkers);
    })





})

*/
