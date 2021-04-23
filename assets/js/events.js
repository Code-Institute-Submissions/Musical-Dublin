// Make call to ticketmaster API and invoke displayEvents function when results are sent to console.
function makeApiCall(){
fetch("https://app.ticketmaster.com/discovery/v2/events.json?&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK&city=['dublin']")
.then(response => response.json())
.then((data) => displayEvents(data))
}

// Code for inserting info from api results into the DOM. Some of this code is taken from a Discovery API tutorial on
// the ticketmaster api website. Website available here https://developer.ticketmaster.com/products-and-docs/tutorials/events-search/search_events_with_discovery_api.html
function displayEvents(data) {
  var items = $('#events .list-group-item');
  var events = data._embedded.events;
  var item = items.first();   
  for (var i = 0; i < events.length; i++) {
    item.children('.heading-events').text(events[i].name);
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
  console.log(data);
}

// When document loads, api call function will be executed. 
$(document).ready(function() {
  makeApiCall();
});



 
