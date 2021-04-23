// Make contact with emailJs api, code taken from emailJs documentation
function sendMail(contactForm) {
    emailjs.send("service_pow46zn", "template_y96c8bc", {"from_name": contactForm.name.value,
"from_email": contactForm.emailaddress.value,
"listing": contactForm.listing.value
});
}

// Form validation code mostly taken from Web Dev Simplified on YouTube, and modified in this project. 
// Video available here https://www.youtube.com/watch?v=In0nB0ABaUk
const listing = document.getElementById('textarea');
const form = document.getElementById('form');
const errorDisplay = document.getElementById('error');
// Have by default, the cursor already in the name input on the contact page.
document.getElementById('name').focus();

// Below is code to handle textarea being submitted empty and inform the user with a message or else inform user
// that form was recieived if textarea was filled in.
form.addEventListener("submit", (e) => {
    let errorMessage = [];  //This array will hold any error messages
    if (listing.value === '' || listing.value == null) {
        errorMessage.push('Please supply full details of your business including owners, address, website and/or social media links.');
    }
    if (errorMessage.length > 0){
    e.preventDefault();
    errorDisplay.innerText = errorMessage;
    } else if (errorMessage.length <= 0) {
        alert("We have received your listing. Thank you, we will reply shortly.");
    }
});


