// JavaScript to handle form submission
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    // Simple validation
    if (name && email) {
        document.getElementById("message").textContent = `Thank you, ${name}! You've successfully subscribed with ${email}.`;
        document.getElementById("subscribe-form").reset(); // Reset the form
    } else {
        document.getElementById("message").textContent = "Please fill in all fields.";
    }
}
