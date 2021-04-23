function makeApiCall(){
fetch("https://app.ticketmaster.com/discovery/v2/events.json?&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK&city=['dublin']")
.then(response => response.json())
.then((data) => displayEvents(data))
}

function displayEvents(data) {
  var items = $('#events .list-group-item');
  var events = data._embedded.events;
  var item = items.first();   
  for (var i = 0; i < events.length; i++) {
    item.children('.heading').text(events[i].name);
    item.children('.date').text(events[i].dates.start.localDate);
    try {
    item.children('.venue').text(events[i]._embedded.venues[0].name);
    item.children('.status').text(events[i].dates.status.code);
    item.children('.promoter').text(events[i].promoters[1].name);
    item.children('.note').text(events[i].pleaseNote);
    item.children('.venue').text(events[i]._embedded.venues[0].name); 
    } catch (err) {
      console.log(err);
    }
   item=item.next();   
  }
}

$(document).ready(function() {
  makeApiCall();
});



 
