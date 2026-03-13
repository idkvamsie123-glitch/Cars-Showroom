// selecting elements
const form = document.getElementById("bookingForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const carInput = document.getElementById("car");
const message = document.getElementById("message");

// form submit event
form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = nameInput.value;
    let email = emailInput.value;
    let car = carInput.value;

    // DOM manipulation
    if(name === "" || email === "" || car === ""){
        message.innerText = "Please fill all fields";
        message.style.color = "yellow";
    }
    else{

        message.innerText = "Booking Successful for " + car + " 🚗";
        message.style.color = "lightgreen";

        // clear form
        form.reset();
    }

});


// input focus effect
nameInput.addEventListener("focus", function(){
    nameInput.style.border = "2px solid orange";
});

emailInput.addEventListener("focus", function(){
    emailInput.style.border = "2px solid orange";
});

carInput.addEventListener("focus", function(){
    carInput.style.border = "2px solid orange";
});



const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", function(){

    if(toggle.checked){
        document.body.classList.add("light-mode");
    }
    else{
        document.body.classList.remove("light-mode");
    }

});

// Simple feedback form validation
document.getElementById("feedbackForm").addEventListener("submit", function(e){
    e.preventDefault(); // prevent form from refreshing page

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const rating = this.rating.value;
    const comments = this.comments.value.trim();

    if(!name || !email || !rating){
        document.getElementById("message").textContent = "Please fill in all required fields.";
        return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        document.getElementById("message").textContent = "Please enter a valid email.";
        return;
    }

    // Success message
    document.getElementById("message").textContent = "Thank you for your feedback! ✅";

    // Clear form
    this.reset();
});

// Select the feedback form
const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    // Redirect to the success page
    window.location.href = "feedbacksubmitted.html"; // Your success page filename
});