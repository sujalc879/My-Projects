// Typed.js initialization
var typeData = new Typed(".role", {
    strings: [
        "Full Stack Developer",
        "Tech Enthusiast"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// Load the user's theme preference from localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});