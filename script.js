function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

function contactUs() {
    alert("Thank you for your interest! Please fill out the form below.");
}

function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Here you can handle the form submission (e.g., send it to a server)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
    // Display success message within the webpage instead of alert
    const successMessage = document.createElement('div');
    successMessage.textContent = "Thank you for your message, we will get back to you soon!";
    successMessage.style.color = "green";
    successMessage.style.marginTop = "10px";
    document.getElementById('contact').appendChild(successMessage);
    
    // Clear the form
    document.getElementById('contact-form').reset();
}

// Close menu when a link is clicked
const menuLinks = document.querySelectorAll('#navbar a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.getElementById('navbar');
        navbar.classList.remove('active');
    });
});
