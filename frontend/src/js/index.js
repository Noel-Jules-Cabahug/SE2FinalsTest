// Initialize Lucide icons when the page loads
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

function handleGoogleLogin() {
    // Simulate Google OAuth redirect to the backend auth route
    window.location.href = "/auth/google";
}

function handleTrackingSearch(e) {
    e.preventDefault();
    const trackingCode = document.getElementById('trackingCode').value.trim();
    
    if (trackingCode) {
        // Redirect to tracking page with the provided code
        window.location.href = `/tracking/${encodeURIComponent(trackingCode)}`;
    } else {
        alert('Please enter a tracking code.');
    }
}

// Make functions available globally for onclick handlers
window.handleGoogleLogin = handleGoogleLogin;
window.handleTrackingSearch = handleTrackingSearch;

// Add some interactivity to the search input
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('trackingCode');
    const searchButton = document.querySelector('.search-bar-pill button');
    
    if (searchInput) {
        // Add focus effects
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.borderColor = '#3A4FA4';
            this.parentElement.style.boxShadow = '0 4px 16px rgba(58, 79, 164, 0.2)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.borderColor = '#e9ecef';
            this.parentElement.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
        });
        
        // Allow Enter key to submit
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleTrackingSearch(e);
            }
        });
    }
    
    // Add hover effects to search button
    if (searchButton) {
        searchButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        searchButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}); 