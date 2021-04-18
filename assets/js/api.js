var xhr = new XMLHttpRequest();
var data = 

xhr.open("GET", "https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK")
xhr.send(); 

function setData(jsonData){
    data = jsonData;
    console.log(data);
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 ) {
        setData(JSON.parse(this.responseText));
    }
};



  



/* document.getElementById('apiContainer').innerHTML =  
console.log(JSON.parse(this.responseText));*/









/* function getInfo() {
    //GET request
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK")
        .then(response => response.json()) //This promise returns response in JSON format
        .then((data) => sortInfo(data));
}

function sortInfo(events) {
    console.log(events);
}

getInfo();   */
















/*https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK */

/*https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK */