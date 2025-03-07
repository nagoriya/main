// Validate the form when the user submits it
document.querySelector("form").addEventListener("submit", function(event) {
    // Get the values of the form fields
    let name = document.querySelector("input[name='name']").value;
    let email = document.querySelector("input[name='email']").value;
    let message = document.querySelector("textarea[name='message']").value;

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        event.preventDefault(); // Prevent form submission
    } else {
        alert("Thank you for your message! We will get back to you soon.");
    }
});