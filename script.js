// Existing script for menu toggle and header visibility
const menuToggle = document.querySelector('.menu-toggle');
const menuWindow = document.querySelector('.menu-window');
const logoElements = document.querySelectorAll('.logo, .logo-image');
const siteHeader = document.querySelector('.site-header');
const progressBar = document.getElementById('myProgressBar'); // Get the progress bar element

window.onload = function() {
    // Scroll to the top of the page on load
    window.scrollTo(0, 0);
    
    // Remove the anchor from the URL without reloading the page
    if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
    }
}

// Toggle the menu open/close
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    menuWindow.classList.toggle('open');
    logoElements.forEach(el => el.classList.toggle('hidden'));
    siteHeader.classList.toggle('header-transparent');
});

let lastScrollY = window.scrollY;
let headerHidden = false;

// Function to check if the header is out of view
const checkHeaderVisibility = () => {
    const headerHeight = siteHeader.offsetHeight; // Get the header's height

    // Check if we've scrolled past the header's height
    if (window.scrollY > headerHeight && !headerHidden) {
        siteHeader.classList.add('hidden');
        headerHidden = true;
    } else if (window.scrollY <= headerHeight && headerHidden) {
        siteHeader.classList.remove('hidden');
        headerHidden = false;
    }
};

// Update the progress bar based on scroll position
const updateProgressBar = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    progressBar.style.width = `${scrolled}%`;
};

// Add scroll event listener to check header visibility and update progress bar on scroll
window.addEventListener('scroll', () => {
    checkHeaderVisibility();
    updateProgressBar();
    lastScrollY = window.scrollY;
});

// Initial check in case the page loads scrolled down
checkHeaderVisibility();
updateProgressBar(); // Ensure the progress bar is updated on page load

const letters = "ゲネバコンヰゾケウユハポフチヘツムカザルマボレピスルベトペアドプヤブヲンタシデラソミネブニヌレクサゲガバーネゼ";
const subtext = document.getElementById("subtext");
const finalText = subtext.textContent;
let iteration = 0;

function scrambleText() {
    const duration = 1710; // Total duration of the scramble effect in milliseconds
    const startTime = Date.now(); // Record the start time

    const scrambleInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime; // Time elapsed since the start
        iteration = Math.min(finalText.length, Math.floor((elapsedTime / duration) * finalText.length));

        subtext.textContent = finalText.split("").map((char, i) => {
            if (i < iteration) {
                return finalText[i]; // Show correct letters once they've scrambled enough
            }
            return letters[Math.floor(Math.random() * letters.length)]; // Random character
        }).join("");

        // Stop when the full text is revealed
        if (iteration >= finalText.length) {
            clearInterval(scrambleInterval);
        }
    }, 55); // Interval time to control the smoothness of the effect
}

// Initially hide the text completely
subtext.style.visibility = 'hidden';

// Show the text after a 0.5-second delay and start the scramble effect
setTimeout(() => {
    subtext.style.visibility = 'visible'; // Make the text visible
    subtext.style.opacity = '1'; // Transition to full opacity
    scrambleText(); // Start the scramble effect
}, 0); // 0.5 seconds delay

// restart page when "Luke Zhuang" menu button is pressed
document.getElementById('restart-page').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.reload(); // Reload the page
});

// restart page when "Luke Zhuang" menu button is pressed
document.getElementById('restart-home').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.reload(); // Reload the page
});

// Add logic to close the menu and scroll to "Resume & Skills" section
document.getElementById('resume-skills-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Close the menu
    menuToggle.classList.remove('open');
    menuWindow.classList.remove('open');
    logoElements.forEach(el => el.classList.remove('hidden'));
    siteHeader.classList.remove('header-transparent');

    // Scroll to the "About" section smoothly
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
});

// Add logic to close the menu and scroll to "Portfolio" section
document.querySelector('.menu-link[data-number="03"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Close the menu
    menuToggle.classList.remove('open');
    menuWindow.classList.remove('open');
    logoElements.forEach(el => el.classList.remove('hidden'));
    siteHeader.classList.remove('header-transparent');

    // Scroll to the "Portfolio" section smoothly
    document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' });
});