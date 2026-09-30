/**
 * -------------------------------------------------------------
 * ACTIVE NAVIGATION
 *
 * Tracks the user's scroll position and highlights the active
 * navigation link in the sidebar.
 * -------------------------------------------------------------
 */

document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('.ledger-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                const activeId = entry.target.getAttribute('id');

                const activeLink =
                    document.querySelector(`.nav-link[href="#${activeId}"]`);

                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }

        });

    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

});


/**
 * -------------------------------------------------------------
 * DARK / LIGHT THEME
 * -------------------------------------------------------------
 */

document.addEventListener('DOMContentLoaded', () => {

    const toggleButton = document.getElementById('theme-toggle');

    if (!toggleButton) {
        return;
    }

    const savedTheme = localStorage.getItem('theme');

    const systemPrefersDark =
        window.matchMedia('(prefers-color-scheme: dark)').matches;


    /*
     * Determine initial theme.
     *
     * Priority:
     * 1. User's saved preference
     * 2. System preference
     * 3. Light mode
     */

    if (savedTheme === 'dark' || savedTheme === 'light') {

        document.documentElement.setAttribute(
            'data-theme',
            savedTheme
        );

    } else {

        document.documentElement.setAttribute(
            'data-theme',
            systemPrefersDark ? 'dark' : 'light'
        );

    }


    /*
     * Toggle theme when button is clicked.
     */

    toggleButton.addEventListener('click', () => {

        const currentTheme =
            document.documentElement.getAttribute('data-theme');

        const newTheme =
            currentTheme === 'dark' ? 'light' : 'dark';


        document.documentElement.setAttribute(
            'data-theme',
            newTheme
        );

        localStorage.setItem(
            'theme',
            newTheme
        );

    });

});