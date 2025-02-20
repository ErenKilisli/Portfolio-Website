$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Navbar active state on scroll
    $(window).scroll(function() {
        const scrollDistance = $(window).scrollTop();
        
        // Highlight active section in navbar
        $('section').each(function() {
            const sectionTop = $(this).offset().top - 100;
            const sectionBottom = sectionTop + $(this).outerHeight();
            
            if (scrollDistance >= sectionTop && scrollDistance < sectionBottom) {
                const targetLink = $('a.nav-link[href="#' + $(this).attr('id') + '"]');
                $('.nav-link').removeClass('active');
                targetLink.addClass('active');
            }
        });
    }).scroll();

    // Theme switching functionality
    const themeToggle = $('#themeToggle');
    const icon = themeToggle.find('i');
    
    // Set initial dark theme
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.removeClass('fa-sun').addClass('fa-moon');
    
    themeToggle.on('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Toggle icon
        if (newTheme === 'dark') {
            icon.removeClass('fa-sun').addClass('fa-moon');
        } else {
            icon.removeClass('fa-moon').addClass('fa-sun');
        }
        
        // Save theme preference
        localStorage.setItem('theme', newTheme);
    });
    
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        icon.removeClass('fa-sun').addClass('fa-moon');
    }

    // Contact Form Handling
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();
        
        // Here you would typically send this to a server
        // For now, we'll just open the mail client
        const mailtoLink = `mailto:ierenkilisli@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`;
        window.location.href = mailtoLink;
        
        // Clear the form
        this.reset();
    });
}); 