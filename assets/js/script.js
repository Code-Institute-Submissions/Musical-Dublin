//On Mobile view, this will have the venues drop-down load automatically and give it an active border class. 
$(document).ready(function() {
    $('#hall').show(function() {
        $(this).addClass("border-images");
        $(".edu-mob-drop").hide();
        $(".shops-mob-drop").hide();
        $(".venues-mob-drop").show().html(`
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
        $('#edu, #shop').addClass('image-border');
        $('#hall').removeClass('image-border');
    });

    /*The below 3 functions both add an active border to a clicked image and 
    have the drop-down info show below the image, while closing any other drop-downs if open.
    Also an inactive border class is added to the unclicked photos*/

    $('#hall').click(function(){
        $(this).addClass('border-images');
        $(".edu-mob-drop").hide();
        $(".shops-mob-drop").hide();
        $(".venues-mob-drop").slideToggle().html(`
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
        $('#edu, #shop').removeClass('border-images');
        $('#edu, #shop').addClass('image-border');
        $('#hall').removeClass('image-border');
    });

    $('#edu').click(function() {
        $(this).addClass('border-images');
        $(".venues-mob-drop").hide();
        $(".shops-mob-drop").hide();
        $(".edu-mob-drop").slideToggle().html(`
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
        $('#hall, #shop').removeClass('border-images');
        $('#hall, #shop').addClass('image-border');
        $('#edu').removeClass('image-border');
    });

    $('#shop').click(function(){
        $(this).addClass('border-images');
        $(".venues-mob-drop").hide();
        $(".edu-mob-drop").hide();
        $(".shops-mob-drop").slideToggle().html(`
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
        $('#hall, #edu').removeClass('border-images');
        $('#hall, #edu').addClass('image-border');
        $('#shop').removeClass('image-border');
    });
});

    // Allow user to open & close drop downs on mobile view, also enter html into a different div located underneath each image
 /*$(".concert-hall").click(function(){
    $(".venues-mob-drop").slideToggle().html(`
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
   // venuesLocations();
}); 

$(".education").click(function(){
    $(".edu-mob-drop").slideToggle().html(`
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
    // educationLocations();
});

$(".shops").click(function(){
    $(".shops-mob-drop").slideToggle().html(`
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
   // shopsLocations();
});

*/







function getInfo() {
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK")
        .then(response => response.json()) //These are the promises to return response in JSON format
        .then((data) => sortInfo(data));
}

document.getElementById('apibtn').addEventListener('click', getInfo);

function sortInfo(events) {
    console.log(events);
    }
















