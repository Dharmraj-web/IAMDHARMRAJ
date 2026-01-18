// Typing Animation Logic
const typingText = document.querySelector('.typing-text');
const roles = [
    "Full Stack Developer",
    "Machine Learning & AI Engineer",
    "DevOps & Cloud Engineer",
    "Cybersecurity Engineer",
    "Blockchain Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Project Filtering Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active class
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Initializations
window.onload = () => {
    type();
};

// Navbar Scroll Background Change
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});
function getFormData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !phone || !message) {
        alert("Please fill all fields");
        return null;
    }

    return { name, email, phone, message };
}

// ✅ Send on WhatsApp
function sendWhatsApp() {
    let data = getFormData();
    if (!data) return;

    let whatsappNumber = "917499002379"; // Your number

    let text =
        `Name: ${data.name}%0A` +
        `Email: ${data.email}%0A` +
        `Phone: ${data.phone}%0A` +
        `Message: ${data.message}`;

    let url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
}

// ✅ Send on Email
function sendEmail() {
    let data = getFormData();
    if (!data) return;

    let subject = encodeURIComponent("New Contact Form Message");
    let body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n\n` +
        `Message:\n${data.message}`
    );

    let emailAddress = "dharmrajpatil010@gmail.com";

    let mailtoURL = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    window.location.href = mailtoURL;
}