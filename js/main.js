
/**
 * ArchVista Design - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
  
  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const projectType = document.getElementById('projectType').value;
      const message = document.getElementById('message').value;
      const newsletter = document.getElementById('newsletter').checked;
      
      // Simple form validation
      if (!firstName || !lastName || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // In a real application, you would send this data to a server
      console.log('Form submitted:', {
        firstName,
        lastName,
        email,
        phone,
        projectType,
        message,
        newsletter
      });
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset the form
      contactForm.reset();
    });
  }
  
  // Add animation to project cards
  const projectCards = document.querySelectorAll('.project-card');
  
  if (projectCards.length > 0) {
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('project-hover');
      });
      
      card.addEventListener('mouseleave', () => {
        card.classList.remove('project-hover');
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
