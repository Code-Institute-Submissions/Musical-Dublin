function getInfo() {
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK")
        .then(response => response.json()) //These are the promises to return response in JSON format
        .then((data) => sortInfo(data));
}

document.getElementById('apibtn').addEventListener('click', getInfo);

function sortInfo(events) {
    console.log(events);
    }






/*https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK */