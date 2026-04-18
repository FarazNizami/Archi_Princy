// Floating Buttons Toggle Function
function toggleFloatingButtons() {
    const buttons = document.getElementById('floatingButtons');
    if (buttons) {
        buttons.classList.toggle('expanded');
    }
}

// Close floating buttons when clicking outside
document.addEventListener('click', function(event) {
    const floatingButtons = document.getElementById('floatingButtons');
    const toggleBtn = document.querySelector('.toggle-btn');
    
    if (floatingButtons && !floatingButtons.contains(event.target)) {
        floatingButtons.classList.remove('expanded');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('ArchiPrincy website loaded');
});
