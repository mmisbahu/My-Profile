// Welcome to Canada - Main Application JavaScript

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupLanguageToggle();
    setupSearch();
});

// Initialize app
function initializeApp() {
    console.log('Welcome to Canada app initialized');
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLanguage);
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup active navigation
    setupNavigation();
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup active navigation link highlighting
function setupNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        performSearch(searchTerm);
    });
}

// Search functionality
function performSearch(term) {
    const infCards = document.querySelectorAll('.info-card, .service-card, .housing-option, .bank-card, .transport-option');
    let foundCount = 0;
    
    infCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const title = card.querySelector('h4, h5');
        
        if (text.includes(term)) {
            card.style.display = '';
            if (title) {
                title.parentElement.style.borderLeftColor = term ? 'var(--success)' : 'var(--primary-color)';
            }
            foundCount++;
        } else {
            card.style.display = term ? 'none' : '';
        }
    });
    
    // Show/hide no results message
    const searchContainer = document.querySelector('.search-results');
    if (term && foundCount === 0 && searchContainer) {
        searchContainer.innerHTML = '<div class="alert alert-info">No results found for "' + term + '"</div>';
    }
}

// Language setup
function setupLanguageToggle() {
    const languageBtn = document.getElementById('languageToggle');
    if (languageBtn) {
        languageBtn.addEventListener('click', function() {
            const currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
            const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
            setLanguage(newLanguage);
            localStorage.setItem('preferredLanguage', newLanguage);
            this.textContent = newLanguage === 'en' ? 'FR' : 'EN';
        });
        
        // Set initial button text
        const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
        languageBtn.textContent = savedLanguage === 'en' ? 'FR' : 'EN';
    }
}

// Set language
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en], [data-fr]');
    elements.forEach(el => {
        if (lang === 'en' && el.dataset.en) {
            el.textContent = el.dataset.en;
        } else if (lang === 'fr' && el.dataset.fr) {
            el.textContent = el.dataset.fr;
        }
    });
}

// Print function
function printPage() {
    window.print();
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll-to-top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollToTopBtn');
    if (scrollButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        });
        
        scrollButton.addEventListener('click', scrollToTop);
    }
});

// Utility: Get current page title
function getPageTitle() {
    const heading = document.querySelector('h1');
    return heading ? heading.textContent : 'Welcome to Canada';
}

// Utility: Generate page summary
function getPageSummary() {
    const summary = [];
    const sections = document.querySelectorAll('.section-title');
    sections.forEach(section => {
        summary.push(section.textContent);
    });
    return summary.join(', ');
}

// Accessibility: Skip to main content
document.addEventListener('DOMContentLoaded', function() {
    const skipLink = document.createElement('a');
    skipLink.href = '#mainContent';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        z-index: 100;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.prepend(skipLink);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Alt + H: Go to home
    if (e.altKey && e.key === 'h') {
        window.location.href = 'index.html';
    }
    // Alt + T: Go to top
    if (e.altKey && e.key === 't') {
        scrollToTop();
    }
});

// Notification system
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        max-width: 300px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, duration);
}

// Export for use in other scripts
window.welcomeToCanada = {
    printPage,
    scrollToTop,
    showNotification,
    setLanguage,
    getPageTitle,
    getPageSummary,
    performSearch
};
