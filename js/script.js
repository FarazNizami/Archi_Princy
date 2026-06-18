// Dynamic header camouflage (dark/light theme detection based on sections)
function updateNavbarTheme() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    const navHeight = navbar.offsetHeight;
    const navCenterY = window.scrollY + (navHeight / 2);
    
    // Default to dark theme (since hero and headers are dark)
    let isDarkBg = true;
    
    // Query only direct layout sections and footer
    const elements = document.querySelectorAll('section, footer');
    
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const absoluteBottom = absoluteTop + rect.height;
        
        // Check if navbar center lies within this section's boundary
        if (navCenterY >= absoluteTop && navCenterY <= absoluteBottom) {
            const isDark = el.classList.contains('bg-dark') || 
                           el.classList.contains('hero-section') || 
                           el.tagName.toLowerCase() === 'footer';
            isDarkBg = isDark;
        }
    });
    
    if (isDarkBg) {
        navbar.classList.remove('navbar-light-theme');
        navbar.classList.add('navbar-dark-theme');
    } else {
        navbar.classList.remove('navbar-dark-theme');
        navbar.classList.add('navbar-light-theme');
    }
}

// Navbar scroll state toggle
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        updateNavbarTheme();
    }
}
window.addEventListener('scroll', handleScroll);

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

// Initialize observer and handlers on load
document.addEventListener('DOMContentLoaded', function() {
    // Initial check in case page starts scrolled
    handleScroll();
    updateNavbarTheme();
    
    // Scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }
    
    console.log('ArchiPrincy website premium theme loaded');
});
