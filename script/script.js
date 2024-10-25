const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


// getting form data

const form = document.getElementById('signup-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    
    if (!firstName) {
        alert('First Name is required');
        isValid = false;
    }

    if (!lastName) {
        alert('Last Name is required');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number');
        isValid = false;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        isValid = false;
    }

    if (isValid) {
        console.log({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: password
        });
        form.reset();
    }
});