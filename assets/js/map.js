const dublinCity = { lat: 53.350140, lng: -6.266155}; //The coordinates of Dublin City Centre
     
//Create the map and give it a default position
function initMap() {
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: dublinCity
  });

   // List of all marker coordinates inserted on the map 
      const myCoordinates = [
          {"name": "NCH", "lat": 53.334653, "lng": -6.258785, "information": 'NCH is the countrys primary'}, //National Concert Hall
          {"name": "Vicar Street", "lat": 53.342609,"lng": -6.277989, "information": 'Vicar Street is ...'}, //Vicar Street
          {"name": "Academy", "lat": 53.348034, "lng": -6.262003, "information": 'The Academy has hosted some of the biggest Rock and Pop'}, //The Academy
          {"name": "Arthurs", "lat": 53.343167, "lng": -6.28168, "information": "Arthurs is Dublin go to spot for Jazz & Blues in thecapital"}, //Arthurs Blues & Jazz
          {"name": "3Arena", "lat": 53.347496, "lng": -6.228508, "information": "The Three Arena is..."}, //Three Arena
          {"name": "Newpark/Rock Jam", "lat": 53.289883, "lng": -6.171961, "information": "Nmc is this..."}, //Newpark Music Centre & Rock Jam(Also held in Newpark Music Centre)
          {"name": "UCD", "lat": 53.294747, "lng": -6.184702, "information": "UCD is..."}, //UCD 
          {"name": "BIMM", "lat": 53.339906, "lng": -6.273719, "information": "BIMM opened in 2010 and has fast become Ireland's"}, //BIMM
          {"name": "Rock School", "lat": 53.385592, "lng": -6.140353, "information": "The Rock School offers..."}, //Frank Kearns Rock School
          {"name": "XMusic", "lat": 53.317752, "lng": -6.360684, "information": "XMusic is ...."}, //XMusic
          {"name": "Music Maker", "lat": 53.343126, "lng": -6.262568, "information": "Music Maker...."}, //Music Maker
          {"name": "Waltons", "lat": 53.394871, "lng": -6.394655, "information": "Waltons...."}, //Waltons School of Music
          {"name": "Goodwins", "lat": 53.348098, "lng": -6.268734, "information": "Goodwins is..."}, //Goodwins Music 
          {"name": "McNeela", "lat": 53.394518, "lng": -6.145391, "information": "McNeela...."}, //McNeela Irish Music Instruments
    ];
    
    //Loop over and insert myCoordinates onto map & name of venue
    for (let i = 0; i < myCoordinates.length; i++) {
        new google.maps.Marker({
        position: new google.maps.LatLng(myCoordinates[i].lat, myCoordinates[i].lng),
        map: map,  //This is the map that the markers will be attached to, the value is the variable "map"
        title: myCoordinates[i].name //Will add business name when icon is hovered over
    });
    }
}
