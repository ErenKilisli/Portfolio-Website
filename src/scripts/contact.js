document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const mailtoLink = `mailto:ierenkilisli@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        window.location.href = mailtoLink;
        
        contactForm.reset();
        
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success mt-3';
        successMessage.textContent = 'Thank you for your message! Your default email client has been opened.';
        
        contactForm.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}); 
