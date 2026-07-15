/**
 * Usability enhancement: 
 * Tracks the user's scroll position and highlights the active 
 * navigation link in the sidebar so the user always knows 
 * their structural location on the page.
 */

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.ledger-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Intersection Observer options
    // The margin ensures the active state triggers just before the 
    // section hits the very top of the viewport.
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to the link matching the section in view
                const activeId = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${activeId}"]`);
                
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all main sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});