    function initMap() {
        // The location of Dublin City Centre
        const dublinCity = { lat: 	53.350140, lng: -6.266155 };
        // The map, centered on Dublin City Centre
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 11,
          center: dublinCity,
        });
        
        // The marker, positioned at the National Concert Hall
        /* const marker = new google.maps.Marker({
          position: concertHall,
          map: map,
        }); */

        // List of all marker coordinates inserted on the map 
      const myCoordinates = [
          {"lat": 53.334653, "lng": -6.258785, "name": "NCH"}, //National Concert Hall
          {"lat": 53.342609,"lng": -6.277989, "name": "Vicar Street"}, //Vicar Street
          {"lat": 53.348034, "lng": -6.262003, "name": "Academy"}, //The Academy
          {"lat": 53.343167, "lng": -6.28168, "name": "Arthurs"}, //Arthurs Blues & Jazz
          {"lat": 53.347496, "lng": -6.228508, "name": "3Arena"}, //Three Arena
          {"lat": 53.289883, "lng": -6.171961, "name": "Newpark/Rock Jam"}, //Newpark Music Centre & Rock Jam(Also held in Newpark Music Centre)
          {"lat": 53.294747, "lng": -6.184702, "name": "UCD"}, //UCD 
          {"lat": 53.339906, "lng": -6.273719, "name": "BIMM"}, //BIMM
          {"lat": 53.385592, "lng": -6.140353, "name": "Rock School"}, //Frank Kearns Rock School
          {"lat": 53.317752, "lng": -6.360684, "name": "XMusic"}, //XMusic
          {"lat": 53.343126, "lng": -6.262568, "name": "Music Maker"}, //Music Maker
          {"lat": 53.394871, "lng": -6.394655, "name": "Waltons"}, //Waltons School of Music
          {"lat": 53.348098, "lng": -6.268734, "name": "Goodwins"}, //Goodwins Music 
          {"lat": 53.394518, "lng": -6.145391, "name": "McNeela"}, //McNeela Irish Music Instruments
    ];
    
    //Loop over and insert myCoordinates onto map & name of venue

    for (let i = 0; i < myCoordinates.length; i++) {
        const marker = new google.maps.Marker({
        position: new google.maps.LatLng(myCoordinates[i].lat, myCoordinates[i].lng),
        map: map,
        title: myCoordinates[i].name
    });
        
        
        
        //setMap(map);
    }
}

     
