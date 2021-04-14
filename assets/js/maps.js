// Code for google map taken from the Google maps api documentation and then modified for this project

//The coordinates of Dublin City Centre
const dublinCity = { lat: 53.35014, lng: -6.255155 };

//Create the map and give it the default position of Dublin City Centre
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: dublinCity,
    });

// List of all venue marker coordinates inserted on the map
const venuesCoords = [
        {//National Concert Hall
            address: "Address:<br> Earlsfort Terrace,<br> Dublin 2.",
            website: "https://www.nch.ie/Online/default.asp",
            name: "National Concert Hall",
            lat: 53.334653,
            lng: -6.258785,
            information: `NCH is Ireland's primary
                          venue for Classical music and is home to the
                          RTE Symphony Orchestra. See weekly concerts in styles
                          ranging from Baroque to Contemporary Classical.
                          The venue also regularly hosts travelling Jazz, World
                          and Irish Traditional shows.`,
        }, 
    
        {//Vicar Street
            address: "Address:<br> 58 Thomas Street,<br>Dublin 8.",
            website: "https://www.vicarstreet.com/",
            name: "Vicar Street",
            lat: 53.342609,
            lng: -6.277989,
            information: `Vicar Street has, for well over 30 years,
                          been the staple venue in Ireland for
                          Rock and Pop concerts. See artists ranging
                          from Christy Moore to Mastodon to Devo.
                          Enjoy a drink pre show at any of the 5 bars 
                          at the venue.`,
        }, 

        {//The Academy
            address: "Address:<br>57 Middle Abbey Street,<br> Dublin 8.",
            website: "https://www.theacademydublin.com/",
            name: "Academy",
            lat: 53.348034,
            lng: -6.262003,
            information: `A relatively new venue on the Dublin scene, The Academy
                          has quickly established itself as a quality venue
                          for Rock and Pop music in Ireland. Recent concerts include
                          Mayhem and Jeff Beck.`,
        }, 

        {//Arthurs Blues & Jazz
            address: "Address:<br> 28 Thomas Street,<br> Dublin 8.",
            website: "https://www.arthurspub.ie/",
            name: "Arthurs",
            lat: 53.343167,
            lng: -6.28168,
            information: `Arthurs is Dublin's go to spot for Jazz & Blues in the capital.
                          Taking over the reins after the unfortunate closure of JJ. Smyth's,
                          Arthurs has fast established itself as a venue attracting quality
                          foreign groups like Jonathan Kreisberg's quartet and homegrown
                          talent such as Ronan Guilfoyle and Greg Felton.`,
        }, 

        {//Three Arena
            address: "3 Arena,<br> North Wall Quay,<br> Dublin 1.",
            website: "https://www.3arena.ie/",
            name: "3Arena",
            lat: 53.347496,
            lng: -6.228508,
            information: `The 3Arena is Irelands largest venue and go to spot for the world's biggest
                          bands. Big names to have played here include U2, Soundgarden and Queens
                          of the Stoneage. The venue also hosts a range of other types of shows
                          including kids concerts like Hannah Montana and Peppa Pig.`,
        },
    ]
    
// List of all education marker coordinates inserted on the map
const eduCoords = [
        { //Newpark Music Centre & Rock Jam(Also held in Newpark Music Centre)
            address: "Address:<br> Newtown Park Avenue<br> Blackrock<br> Co. Dublin",
            website: "https://www.newparkmusic.ie/",
            name: "Newpark/Rock Jam",
            lat: 53.289883,
            lng: -6.171961,
            information: `Newpark Music Centre is an internationally recognised
                          third level course specialising in
                          Jazz performance. Teaching staff here includes
                          luminaries on the Irish and International scenes
                          like Ronan Guilfoyle and Tommy Halferty. 
                          The school is also the location of Rock Jam, a 
                          school offering lessons in a band performance setting
                          where students learn to play as part of a band rather
                          than one on one classes. The school is primarily
                          aimed at ages 5-18.`,
        },

        {//UCD
            address: "Address:<br> Belfield Campus,<br> Dublin 4.",
            website: "https://www.ucd.ie/music/",
            name: "UCD",
            lat: 53.294747,
            lng: -6.184702,
            information: `The course at UCD provides an in-depth study into
                          Classical Music in both Theory and Composition.
                          The course also includes a study in various musical traditions
                          including Indian Carnatic music and Irish Traditional music.`,
        }, 

        {//BIMM
            address: "Address:<br> 79 Francis Street,<br> Dublin 7.",
            website: "https://www.bimm.ie/",
            name: "BIMM",
            lat: 53.339906,
            lng: -6.273719,
            information: `The Irish branch of BIMM opened in 2012 and has become renowned
                          for the high quality performers it has produced in that time.
                          Offering courses in Pop and Rock performance the school offers
                          a four-year degree in music performance.`,
        }, 

        {//Frank Kearns Rock School
            address: "Address:<br>Dublin Road,<br> Kilbarack Lower,<br> Dublin 13.",
            website: "http://www.rockschool.ie/",
            name: "Rock School",
            lat: 53.385592,
            lng: -6.140353,
            information: `Frank Kearns Rock School offers lessons to all ages and
                          on all instruments. Lessons are conducted
                          in a one to one setting ranging from 30 minute to 
                          hour long classes.`,
        }]
 
// List of all shop marker coordinates inserted on the map
const shopCoords = [
        {//XMusic
            address: "Address:<br> Red Cow Retail Center,<br>Ballymount,<br>Dublin 22.",
            website: "https://www.xmusic.ie/",
            name: "XMusic",
            lat: 53.317752,
            lng: -6.360684,
            information: `XMusic is a music superstore stocking everything from drums
                          to guitar equipment. Located beside the Red Cow in Ballymount,
                          Walkinstown just off the m50, XMusic is a three-story store with 
                          something for everyone.`,
        }, 

        {//Music Maker
            address: "Address:<br> 29 Exchequer Street,<br>Dublin 2.",
            website: "https://www.musicmaker.ie/",
            name: "Music Maker",
            lat: 53.343126,
            lng: -6.262568,
            information: `Music Maker is Ireland's longest running general
                          music shop stocking all manner of instruments and equipment.
                          Feel free to ask any of their friendly staff for help finding the 
                          perfect instrument for you.`,
        }, 

        {//Waltons School of Music
            address: "Address<br> Waltons Blanchardstown,<br> Blanchardstown Center.",
            website: "https://www.waltons.ie/",
            name: "Waltons",
            lat: 53.394871,
            lng: -6.394655,
            information: `Waltons is a long established family business offering quality
                          instruments. Get excellent advice on any of your needs.
                          The shop owners are friendly to musicians playing the 
                          in-store instruments, as seen in the motion picture 'Once'.`,
        }, 

        {//Goodwins Music
            address: "Address:<br> 134 Capel Street,<br> Dublin 1.",
            website: "https://www.goodwinsmusic.ie/",
            name: "Goodwins",
            lat: 53.348098,
            lng: -6.268734,
            information: `Goodwins is a shop offering traditional Irish instruments as
                          well as instrument repair. Offering great prices on
                          repairs, Goodwins has won a great reputation on the
                          Traditional Irish music scene.`,
        }, 

        {//McNeela Irish Music Instruments
            address: "Address:<br> Unit 137,<br> Baldoyle Industrial Estate,<br> Baldoyle,<br> Dublin 13.",
            website: "https://www.mcneelamusic.com/",
            name: "McNeela",
            lat: 53.394518,
            lng: -6.145391,
            information: `McNeela Irish Music Instruments is a recently 
                          established business specialising in traditional Irish 
                          instruments and instrument repair.`,
        }, 
    ];

    var InfoObj = [];

/* Empty array to hold all markers. This will then be looped through in the clearCoords() 
function below as a way of clearing the map and entering only the relevant markers when certain images
are clicked. */
    var businessCoords = [];

/*Function to loop over the venues coordinates to be invoked later*/
function venuesLocations(){
    for (let i = 0; i < venuesCoords.length; i++) {
        const contentString =
            '<h3 class="info-window-header">' +
            venuesCoords[i].name +
            "</h3>" +
            '<p class="info-window-p">' +
            venuesCoords[i].information +
            "</p>" +
            '<p class="info-window-p">' +
            venuesCoords[i].address +
            "</p>" +
            '<a class="info-window-a" href="' +
            venuesCoords[i].website +
            '"target=_blank>Website</a>';

        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(venuesCoords[i].lat, venuesCoords[i].lng),
            map: map, //This is the map that the markers will be attached to, the value is the variable "map"
            title: venuesCoords[i].name, //Will add business name when icon is hovered over
            animation: google.maps.Animation.DROP, //or BOUNCE
            // icon: customIcons[myCoordinates[i].type].icon,
        });

        businessCoords.push(marker);

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500,
        });

        marker.addListener("click", function () {
            closeOtherInfo();
            infowindow.open(map, marker);
            InfoObj[0] = infowindow;
        });

        marker.addListener("click", () => {
            map.setZoom(15);
            map.setCenter(marker.getPosition());
        });
    }
}

/*Function to loop over the education coordinates to be invoked later*/
function educationLocations(){
    for (let i = 0; i < eduCoords.length; i++) {
        const contentString =
            '<h3 class="info-window-header">' +
            eduCoords[i].name +
            "</h3>" +
            '<p class="info-window-p">' +
            eduCoords[i].information +
            "</p>" +
            '<p class="info-window-p">' +
            eduCoords[i].address +
            "</p>" +
            '<a class="info-window-a" href="' +
            eduCoords[i].website +
            '"target=_blank>Website</a>';

        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(eduCoords[i].lat, eduCoords[i].lng),
            map: map, //This is the map that the markers will be attached to, the value is the variable "map"
            title: eduCoords[i].name, //Will add business name when icon is hovered over
            animation: google.maps.Animation.DROP, //or BOUNCE
            // icon: customIcons[myCoordinates[i].type].icon,
        });

        businessCoords.push(marker);

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500,
        });

        marker.addListener("click", function () {
            closeOtherInfo();
            infowindow.open(map, marker);
            InfoObj[0] = infowindow;
        });

        marker.addListener("click", () => {
            map.setZoom(15);
            map.setCenter(marker.getPosition());
        });
    }
}

/*Function to loop over the shops coordinates to be invoked later*/
function shopsLocations(){
    for (let i = 0; i < shopCoords.length; i++) {
        const contentString =
            '<h3 class="info-window-header">' +
            shopCoords[i].name +
            "</h3>" +
            '<p class="info-window-p">' +
            shopCoords[i].information +
            "</p>" +
            '<p class="info-window-p">' +
            shopCoords[i].address +
            "</p>" +
            '<a class="info-window-a" href="' +
            shopCoords[i].website +
            '"target=_blank>Website</a>';

        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(shopCoords[i].lat, shopCoords[i].lng),
            map: map, //This is the map that the markers will be attached to, the value is the variable "map"
            title: shopCoords[i].name, //Will add business name when icon is hovered over
            animation: google.maps.Animation.DROP, //or BOUNCE
            // icon: customIcons[myCoordinates[i].type].icon,
        });

        businessCoords.push(marker);

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500,
        });

        marker.addListener("click", function () {
            closeOtherInfo();
            infowindow.open(map, marker);
            InfoObj[0] = infowindow;
        });

        marker.addListener("click", () => {
            map.setZoom(15);
            map.setCenter(marker.getPosition());
        });
    }
}


// Function to clear all coordinates on the map, before relevant markers are shown relative to button clicked
function clearCoords() {
    for (let i = 0; i < businessCoords.length; i++) {
        businessCoords[i].setMap(null);
    }
};

// Below function loads the venues info by default upon screen-load and gives the venues image an active border
$(document).ready(function(){
$(".concert-hall").show(function(){
    $(".venues-drop").html(`
    <h2 class="heading-left">Venues</h2>
    <ul>
    <li><h5 class="headers-below">Classical</h5></li>
    <li><a href="https://www.nch.ie" target="_blank" class="list">The National Concert Hall (NCH)</a></li>
    <li><h5 class="headers-below">Rock & Pop</h5></li>
    <li><a href="https://www.vicarstreet.com" target="_blank" class="list">Vicar Street</a></li>
    <li><a href="https://www.theacademydublin.com" target="_blank" class="list">The Academy</a></li>
    <li><a href="https://www.3arena.ie" target="_blank" class="list">Three Arena</a></li>
    <li><h5 class="headers-below">Jazz & Blues</h5></li>
    <li><a href="https://www.arthurspub.ie" target="_blank" class="list">Arthurs, Blues & Jazz club</a></li>
    </ul>
    `);
   clearCoords();
   venuesLocations();
})
}); 


/*Below three functions load info relative to a clicked image as well as load map markers relative to the image and info.
Also they clear any markers that were present before the new image was clicked*/
$(".concert-hall").click(function(){
    $(".venues-drop").html(`
    <h2 class="heading-left">Venues</h2>
    <ul>
    <li><h5 class="headers-below">Classical</h5></li>
    <li><a href="https://www.nch.ie" target="_blank" class="list">The National Concert Hall (NCH)</a></li>
    <li><h5 class="headers-below">Rock & Pop</h5></li>
    <li><a href="https://www.vicarstreet.com" target="_blank" class="list">Vicar Street</a></li>
    <li><a href="https://www.theacademydublin.com" target="_blank" class="list">The Academy</a></li>
    <li><a href="https://www.3arena.ie" target="_blank" class="list">Three Arena</a></li>
    <li><h5 class="headers-below">Jazz & Blues</h5></li>
    <li><a href="https://www.arthurspub.ie" target="_blank" class="list">Arthurs, Blues & Jazz club</a></li>
    </ul>
    `);
   clearCoords();
   venuesLocations();
});

$(".education").click(function(){
    $(".venues-drop").html(`
    <h2 class="heading-left">Education</h2>
    <ul>
    <li><h5 class="headers-below">Jazz</h5></li>
    <li><a href="https://www.newparkmusic.ie" target="_blank" class="list">Newpark Music Centre</a></li>
    <li><h5 class="headers-below">Classical</h5></li>
    <li><a href="https://www.ucd.ie/music/" target="_blank" class="list">UCD</a></li>
    <li><h5 class="headers-below">Rock & Pop Performance</h5></li>
    <li><a href="https://www.bimm.ie" target="_blank" class="list">BIMM</a></li>
    <li><a href="https://www.rockjam.ie" target="_blank" class="list">Rock Jam</a></li>
    <li><a href="https://www.rockschool.ie" target="_blank" class="list">Rock School</a></li>
    </ul>`);
    clearCoords();
    educationLocations();
});

$(".shops").click(function(){
    $(".venues-drop").html(`
    <h2 class="heading-left">Shops</h2>
    <ul>
    <li><h5 class="headers-below">General Music Stores</h5></li>
    <li><a href="https://www.xmusic.ie" target="_blank" class="list">Xmusic</a></li>
    <li><a href="https://www.musicmaker.ie" target="_blank" class="list">Music Maker</a></li>
    <li><a href="https://www.waltons.ie/home/our-stores/" target="_blank" class="list">Waltons Music</a></li>
    <li><a href="https://www.goodwinsmusic.ie" target="_blank" class="list">Goodwins Music</a></li>
    <li><h5 class="headers-below">Tradional Irish</h5></li>
    <li><a href="https://www.mcneelamusic.com" target="_blank" class="list">McNeela Music Instruments</a></li>
    </ul>`);
   clearCoords();
   shopsLocations();
});

  function closeOtherInfo() {
        if (InfoObj.length > 0) {
            InfoObj[0].set("marker", null);
            InfoObj[0].close();
            InfoObj.length = 0;
        }
    }
}
