    function initMap() {
        // The location of the National Concert Hall
        const concertHall = { lat: 53.334653, lng: -6.258785 };
        // The map, centered at the National Concert Hall
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 11,
          center: concertHall,
        });
        // The marker, positioned at the National Concert Hall
        const marker = new google.maps.Marker({
          position: concertHall,
          map: map,
        });

        // List of all marker coordinates inserted on the map 
      const myCoordinates = [
          {"lat": 53.342609,"lng": -6.277989,}, //Vicar Street
          {"lat": 53.348034, "lng": -6.262003,}, //The Academy
          {"lat": 53.343167, "lng": -6.28168,}, //Arthurs Blues & Jazz
          {"lat": 53.347496, "lng": -6.228508,}, //Three Arena
          {"lat": 53.289883, "lng": -6.171961,}, //Newpark Music Centre & Rock Jam(Also held in Newpark Music Centre)
          {"lat": 53.294747, "lng": -6.184702,}, //UCD 
          {"lat": 53.339906, "lng": -6.273719,}, //BIMM
          {"lat": 53.385592, "lng": -6.140353,}, //Frank Kearns Rock School
          {"lat": 53.317752, "lng": -6.360684,}, //XMusic
          {"lat": 53.343126, "lng": -6.262568,}, //Music Maker
          {"lat": 53.394871, "lng": -6.394655}, //Waltons School of Music
          {"lat": 53.348098, "lng": -6.268734}, //Goodwins Music 
          {"lat": 53.394518, "lng": -6.145391}, //McNeela Irish Music Instruments
    ];
    
    //Loop over myCoordinates 

    for (let i = 0; i < myCoordinates.length; i++) {
        const marker = new google.maps.Marker({position: myCoordinates[i]});
        marker.setMap(map);
    }
      }

     
