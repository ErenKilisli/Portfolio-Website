document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateNavbarVisibility() {
        const scrollY = window.scrollY;
        const homeSection = document.getElementById('home');
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;

        if (scrollY > homeSectionBottom - navbar.offsetHeight) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }
    }

    function highlightNavigation() {
        let fromTop = window.scrollY + navbar.offsetHeight + 20;

        sections.forEach(section => {
            const { offsetTop, offsetHeight } = section;
            const sectionId = section.getAttribute('id');
            
            if (
                offsetTop <= fromTop &&
                offsetTop + offsetHeight > fromTop
            ) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                highlightNavigation();
                updateNavbarVisibility();
                ticking = false;
            });
            ticking = true;
        }
    });

    highlightNavigation();
    updateNavbarVisibility();
    window.addEventListener('resize', () => {
        highlightNavigation();
        updateNavbarVisibility();
    });
}); 
