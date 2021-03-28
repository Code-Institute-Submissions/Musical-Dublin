$(document).ready(function(){});

$(".concert-hall").click(function(){
    $(".images-below").html(`
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
    `).scrollDown(10000);
})

$(".education").click(function(){
    $(".images-below").html(`
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
})

$(".shops").click(function(){
    $(".images-below").html(`
    <ul>
    <li><h5 class="headers-below">General Music Stores</h5></li>
    <li><a href="https://www.xmusic.ie" target="_blank" class="list">Xmusic</a></li>
    <li><a href="https://www.musicmaker.ie" target="_blank" class="list">Music Maker</a></li>
    <li><a href="https://www.waltons.ie/home/our-stores/" target="_blank" class="list">Waltons Music</a></li>
    <li><a href="https://www.goodwinsmusic.ie" target="_blank" class="list">Goodwins Music</a></li>
    <li><h5 class="headers-below">Tradional Irish</h5></li>
    <li><a href="https://www.mcneelamusic.com" target="_blank" class="list">McNeela Music Instruments</a></li>
    </ul>`);
})














/* $(".concert-hall").click(function(){
    //$(".concert-hall-below").addClass("height");
    $(".concert-hall-below").addClass("height").html(`
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
}) */
