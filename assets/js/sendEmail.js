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
alert("We have received your listing. Thank you, we will reply shortly.");
}
