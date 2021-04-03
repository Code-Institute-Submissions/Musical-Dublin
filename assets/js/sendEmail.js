function sendMail(contactForm) {
    emailjs.send("service_pow46zn", "template_y96c8bc", {"from_name": contactForm.name.value,
"from_email": contactForm.emailaddress.value,
"listing": contactForm.listing.value
})
/*.then(
    function(response){
        console.log("EMAIL SEND SUCCESS", response);
    },
    function(error){
        console.log("EMAIL SEND FAIL", error);
    }
)*/
// alert("We have received your listing. Thank you, we will reply shortly.");
}


// Form validation code largely taken from Web Dev Simplified on YouTube, and modified for this project. Video credited in README file.
const listing = document.getElementById('textarea');
const form = document.getElementById('form');
const errorDisplay = document.getElementById('error');

form.addEventListener("submit", (e) => {
    let errorMessage = [];  //This array will hold any error messages
    if (listing.value === '' || listing.value == null) {
        errorMessage.push('Please supply full details of your business including owners, address, website and/or social media links.')
    }
    if (errorMessage.length > 0){
    e.preventDefault();
    errorDisplay.innerText = errorMessage
    }
})
