document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Create the email body
        const mailtoLink = `mailto:ierenkilisli@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Clear the form
        contactForm.reset();
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success mt-3';
        successMessage.textContent = 'Thank you for your message! Your default email client has been opened.';
        
        contactForm.appendChild(successMessage);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}); 