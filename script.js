// Button Click Event
document.getElementById("btn").onclick = function() {
    alert("Hello! Welcome to my website.");
};

// Form Validation
document.querySelector("form").onsubmit = function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill out all fields.");
        event.preventDefault(); // Form submit hone se rokne ke liye
    } else {
        alert("Thank you! Your message has been sent.");
    }
};

document.getElementById("Submit").onclick = function() {
    alert("Hello! Welcome to my first .");
};