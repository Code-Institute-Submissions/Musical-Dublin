/*const coords = {
    venues: [
        {   name: "National Concert Hall",
            address: "Address:<br> Earlsfort Terrace,<br> Dublin 2.",
            website: "https://www.nch.ie/Online/default.asp",
            lat: 53.334653,
            lng: -6.258785,
            information: `NCH is Ireland's primary
                          venue for Classical music and is home to the
                          RTE Symphony Orchestra. See weekly concerts in styles
                          ranging from Baroque to Contemporary Classical.
                          The venue also regularly hosts travelling Jazz, World
                          and Irish Traditional shows.`,
            genre: "CLASSICAL"
        }, 
        {   name: "Vicar Street",
            address: "Address:<br> 58 Thomas Street,<br>Dublin 8.",
            website: "https://www.vicarstreet.com/",
            lat: 53.342609,
            lng: -6.277989,
            information: `Vicar Street has, for well over 30 years,
                          been the staple venue in Ireland for
                          Rock and Pop concerts. See artists ranging
                          from Christy Moore to Mastodon to Devo.
                          Enjoy a drink pre show at any of the 5 bars 
                          at the venue.`,
            genre: "ROCK & POP"
        }, 
        {   name: "Academy",
            address: "Address:<br>57 Middle Abbey Street,<br> Dublin 8.",
            website: "https://www.theacademydublin.com/",
            lat: 53.348034,
            lng: -6.262003,
            information: `A relatively new venue on the Dublin scene, The Academy
                          has quickly established itself as a quality venue
                          for Rock and Pop music in Ireland. Recent concerts include
                          Mayhem and Jeff Beck.`,
            genre: ""
        }, 
        {   name: "3Arena",
            address: "3 Arena,<br> North Wall Quay,<br> Dublin 1.",
            website: "https://www.3arena.ie/",
            lat: 53.347496,
            lng: -6.228508,
            information: `The 3Arena is Irelands largest venue and go to spot for the world's biggest
                          bands. Big names to have played here include U2, Soundgarden and Queens
                          of the Stoneage. The venue also hosts a range of other types of shows
                          including kids concerts like Hannah Montana and Peppa Pig.`,
            genre: ""
        },
        {   name: "Arthurs",
            address: "Address:<br> 28 Thomas Street,<br> Dublin 8.",
            website: "https://www.arthurspub.ie/",
            lat: 53.343167,
            lng: -6.28168,
            information: `Arthurs is Dublin's go to spot for Jazz & Blues in the capital.
                          Taking over the reins after the unfortunate closure of JJ. Smyth's,
                          Arthurs has fast established itself as a venue attracting quality
                          foreign groups like Jonathan Kreisberg's quartet and homegrown
                          talent such as Ronan Guilfoyle and Greg Felton.`,
            genre: "JAZZ & BLUES"
        }],
    education: [
        {   name: "Newpark/Rock Jam",
            address: "Address:<br> Newtown Park Avenue<br> Blackrock<br> Co. Dublin",
            website: "https://www.newparkmusic.ie/",
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
            genre: "JAZZ"
        },
        {   name: "UCD",
            address: "Address:<br> Belfield Campus,<br> Dublin 4.",
            website: "https://www.ucd.ie/music/",
            lat: 53.294747,
            lng: -6.184702,
            information: `The course at UCD provides an in-depth study into
                          Classical Music in both Theory and Composition.
                          The course also includes a study in various musical traditions
                          including Indian Carnatic music and Irish Traditional music.`,
            genre: "CLASSICAL"
        }, 
        {   name: "BIMM",
            address: "Address:<br> 79 Francis Street,<br> Dublin 7.",
            website: "https://www.bimm.ie/",
            lat: 53.339906,
            lng: -6.273719,
            information: `The Irish branch of BIMM opened in 2012 and has become renowned
                          for the high quality performers it has produced in that time.
                          Offering courses in Pop and Rock performance the school offers
                          a four-year degree in music performance.`,
            genre: "ROCK & POP"
        }, 
        {   name: "Rock School",
            address: "Address:<br>Dublin Road,<br> Kilbarack Lower,<br> Dublin 13.",
            website: "http://www.rockschool.ie/",
            lat: 53.385592,
            lng: -6.140353,
            information: `Frank Kearns Rock School offers lessons to all ages and
                          on all instruments. Lessons are conducted
                          in a one to one setting ranging from 30 minute to 
                          hour long classes.`,
            genre: ""
        }],
    shops: [
        {   name: "XMusic",
            address: "Address:<br> Red Cow Retail Center,<br>Ballymount,<br>Dublin 22.",
            website: "https://www.xmusic.ie/",
            lat: 53.317752,
            lng: -6.360684,
            information: `XMusic is a music superstore stocking everything from drums
                          to guitar equipment. Located beside the Red Cow in Ballymount,
                          Walkinstown just off the m50, XMusic is a three-story store with 
                          something for everyone.`,
            genre: "GENERAL MUSIC STORES"
        }, 
        {   name: "Music Maker",
            address: "Address:<br> 29 Exchequer Street,<br>Dublin 2.",
            website: "https://www.musicmaker.ie/",
            lat: 53.343126,
            lng: -6.262568,
            information: `Music Maker is Ireland's longest running general
                          music shop stocking all manner of instruments and equipment.
                          Feel free to ask any of their friendly staff for help finding the 
                          perfect instrument for you.`,
            genre: ""
        }, 
        {   name: "Waltons",
            address: "Address<br> Waltons Blanchardstown,<br> Blanchardstown Center.",
            website: "https://www.waltons.ie/",
            lat: 53.394871,
            lng: -6.394655,
            information: `Waltons is a long established family business offering quality
                          instruments. Get excellent advice on any of your needs.
                          The shop owners are friendly to musicians playing the 
                          in-store instruments, as seen in the motion picture 'Once'.`,
            genre: ""
        }, 
        {   name: "Goodwins",
            address: "Address:<br> 134 Capel Street,<br> Dublin 1.",
            website: "https://www.goodwinsmusic.ie/",
            lat: 53.348098,
            lng: -6.268734,
            information: `Goodwins is a shop offering traditional Irish instruments as
                          well as instrument repair. Offering great prices on
                          repairs, Goodwins has won a great reputation on the
                          Traditional Irish music scene.`,
            genre: "IRISH TRADITIONAL"
        }, 
        {   name: "McNeela",
            address: "Address:<br> Unit 137,<br> Baldoyle Industrial Estate,<br> Baldoyle,<br> Dublin 13.",
            website: "https://www.mcneelamusic.com/",
            lat: 53.394518,
            lng: -6.145391,
            information: `McNeela Irish Music Instruments is a recently 
                          established business specialising in traditional Irish 
                          instruments and instrument repair.`,
            genre: ""
        }, 
    ]}
    
   /* function getVenuesLocationHTML(locations, locationType) {
        let HTMLString = "";
        locations.forEach((location) => {
          HTMLString += `<h5 class="headers-below"><em>${location.genre}</em></h5><li class="list-js"><a href="${location.website}" target="_blank" class="list">${location.name}</a></li>`;
        });
        return `<h2 class="heading-left">${locationType}</h2><ul>${HTMLString}</ul>`;
      }

    $('#hall').click(function(){
        $(".edu-mob-drop").hide();
        $(".shops-mob-drop").hide();
        $(".venues-mob-drop").slideToggle().html(getVenuesLocationHTML(coords.venues, "VENUES"));
});

    $('#edu').click(function() {
        $(".venues-mob-drop").hide();
        $(".shops-mob-drop").hide();
        $(".edu-mob-drop").slideToggle().html(getVenuesLocationHTML(coords.education, "EDUCATION"));
    });

    $('#shop').click(function(){
        $(".venues-mob-drop").hide();
        $(".edu-mob-drop").hide();
        $(".shops-mob-drop").slideToggle().html(getVenuesLocationHTML(coords.shops, "SHOPS"));
    });


*/














//On Mobile view, this will have the venues drop-down load automatically and give it an active border class. 
/* $(document).ready(function() {
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

    The below 3 functions both add an active border to a clicked image and 
    have the drop-down info show below the image, while closing any other drop-downs if open.
    Also an inactive border class is added to the unclicked photos*/

    /* $('#hall').click(function(){
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
}); */
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

















