
/**
 * PRECISION DESIGN - Main JavaScript
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

  // Carousel URL & Caption

  document.addEventListener("DOMContentLoaded", function () {

    const projects = [
      {
        id: "project1",
        images: [
          {"url": "img/tanks/bathroom-1.jpg", "caption": "Bathroom"},
          {"url": "img/tanks/bathroom-2.jpg", "caption": "Bathroom"},
          {"url": "img/tanks/bathroom-3.jpg", "caption": "Bathroom"},
          {"url": "img/tanks/bathroom-4.jpg", "caption": "Bathroom"},
          {"url": "img/tanks/bedroom-1.jpg", "caption": "Bedroom"},
          {"url": "img/tanks/bedroom-2.jpg", "caption": "Bedroom"},
          {"url": "img/tanks/bedroom-3.jpg", "caption": "Bedroom"},
          {"url": "img/tanks/bedroom-4.jpg", "caption": "Bedroom"},
          {"url": "img/tanks/bedroom-5.jpg", "caption": "Bedroom"},
          {"url": "img/tanks/bedroom-6.jpg", "caption": "Bedroom"},
          {"url": "img/tanks/kitchen-1.jpg", "caption": "Kitchen"},
          {"url": "img/tanks/kitchen-2.jpg", "caption": "Kitchen"},
          {"url": "img/tanks/kitchen-3.jpg", "caption": "Kitchen"},
          {"url": "img/tanks/kitchen-4.jpg", "caption": "Kitchen"},
          {"url": "img/tanks/livingroom-1.jpg", "caption": "Livingroom"},
          {"url": "img/tanks/livingroom-2.jpg", "caption": "Livingroom"},
        ],
      },
    {
      id: "project2",
      images: [
        {"url": "img/karias/bathroom-1.jpg", "caption": "Bathroom"},
        {"url": "img/karias/bathroom-2.jpg", "caption": "Bathroom"},
        {"url": "img/karias/bedroom-1.jpg", "caption": "Bedroom"},
        {"url": "img/karias/bedroom-2.jpg", "caption": "Bedroom"},
        {"url": "img/karias/bedroom-3.jpg", "caption": "Bedroom"},
        {"url": "img/karias/bedroom-4.jpg", "caption": "Bedroom"},
        {"url": "img/karias/bedroom-5.jpg", "caption": "Bedroom"},
        {"url": "img/karias/bedroom-6.jpg", "caption": "Bedroom"},
        {"url": "img/karias/dining-1.jpg", "caption": "Dining"},
        {"url": "img/karias/dining-2.jpg", "caption": "Dining"},
        {"url": "img/karias/kitchen-1.jpg", "caption": "Kitchen"},
        {"url": "img/karias/kitchen-2.jpg", "caption": "Kitchen"},
        {"url": "img/karias/livingroom-1.jpg", "caption": "Livingroom"},
        {"url": "img/karias/livingroom-2.jpg", "caption": "Livingroom"},
        {"url": "img/karias/livingroom-3.jpg", "caption": "Livingroom"},
      ],
    },
    {
      id: "project3",
      images: [
        {"url": "img/dandas/bathroom-1.jpg", "caption": "Bathroom"},
        {"url": "img/dandas/bathroom-2.jpg", "caption": "Bathroom"},
        {"url": "img/dandas/bathroom-3.jpg", "caption": "Bathroom"},
        {"url": "img/dandas/bathroom-4.jpg", "caption": "Bathroom"},
        {"url": "img/dandas/kitchen-1.jpg", "caption": "Kitchen"},
        {"url": "img/dandas/kitchen-2.jpg", "caption": "Kitchen"},
        {"url": "img/dandas/kitchen-3.jpg", "caption": "Kitchen"},
        {"url": "img/dandas/livingroom-1.jpg", "caption": "Livingroom"},
        {"url": "img/dandas/livingroom-2.jpg", "caption": "Livingroom"},
        //{"url": "img/dandas/livingroom-3.jpg", "caption": "Livingroom"},
      ],
    },
    {
      id: "project4",
      images: [
        {"url": "img/vasas/bedroom-1.jpg", "caption": "Bedroom"},
        {"url": "img/vasas/bedroom-2.jpg", "caption": "Bedroom"},
        {"url": "img/vasas/kitchen-1.jpg", "caption": "Kitchen"},
        {"url": "img/vasas/kitchen-2.jpg", "caption": "Kitchen"},
]
    },
    {
      id: "project5",
      images: [
        {"url": "img/wadhwas/bathroom-1.jpg", "caption": "Bathroom"},
        {"url": "img/wadhwas/bathroom-2.jpg", "caption": "Bathroom"},
        {"url": "img/wadhwas/bathroom-3.jpg", "caption": "Bathroom"},
        {"url": "img/wadhwas/kitchen-1.jpg", "caption": "Kitchen"},
        {"url": "img/wadhwas/kitchen-2.jpg", "caption": "Kitchen"},
        {"url": "img/wadhwas/kitchen-3.jpg", "caption": "Kitchen"},
        {"url": "img/wadhwas/livingroom-1.jpg", "caption": "Livingroom"},
        {"url": "img/wadhwas/livingroom-2.jpg", "caption": "Livingroom"},
        {"url": "img/wadhwas/livingroom-3.jpg", "caption": "Livingroom"},
      ],
    },
    {
      id: "project6",
      images: [
        {"url": "img/patels/bathroom-1.jpg", "caption": "Bathroom"},
        {"url": "img/patels/bathroom-2.jpg", "caption": "Bathroom"},
        {"url": "img/patels/bedroom-1.jpg", "caption": "Bedroom"},
        {"url": "img/patels/bedroom-2.jpg", "caption": "Bedroom"},
        {"url": "img/patels/bedroom-3.jpg", "caption": "Bedroom"},
        {"url": "img/patels/kitchen-1.jpg", "caption": "Kitchen"},
        {"url": "img/patels/kitchen-2.jpg", "caption": "Kitchen"},
        {"url": "img/patels/kitchen-3.jpg", "caption": "Kitchen"},
      ],
    },
      // Add more project objects for other sections (project3, project4, etc.)
    ];

    const itemsPerSlide = 3; // Number of items per slide
const carouselInterval = 3000; // Timer interval in milliseconds (3 seconds)

projects.forEach((project) => {
  const carouselInner = document.querySelector(`#${project.id} .carousel-inner`);
  const carouselId = `carouselExample-${project.id}`; // Unique ID for each carousel

  if (!carouselInner) return; // Skip if the section does not exist

  // Update the carousel's ID and button targets dynamically
  const carouselElement = document.querySelector(`#${project.id} .carousel`);
  if (carouselElement) carouselElement.setAttribute("id", carouselId);

  const prevButton = document.querySelector(`#${project.id} .carousel-control-prev`);
  if (prevButton) prevButton.setAttribute("data-bs-target", `#${carouselId}`);

  const nextButton = document.querySelector(`#${project.id} .carousel-control-next`);
  if (nextButton) nextButton.setAttribute("data-bs-target", `#${carouselId}`);

  for (let i = 0; i < project.images.length; i += itemsPerSlide) {
    const carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${i === 0 ? "active" : ""}`;
    carouselItem.setAttribute("data-bs-interval", carouselInterval);

    // Add images to the current slide
    const slideContent = project.images.slice(i, i + itemsPerSlide)
      .map((data) => `
        <div style="flex: 1; padding: 5px; height: 100%;">
          <img src="${data.url}" class="d-block w-100" alt="${data.caption}" data-bs-toggle="modal" data-bs-target="#imageModal" data-caption="${data.caption}" style="height: 100%; object-fit: cover; border-radius: 10px;">
        </div>
      `).join("");

    carouselItem.innerHTML = `<div style="display: flex; height: 100%;">${slideContent}</div>`;
    carouselInner.appendChild(carouselItem);
  }

  // Initialize carousel with a timer
  const bootstrapCarousel = new bootstrap.Carousel(carouselElement, {
    interval: carouselInterval,
    ride: "carousel",
  });
});

// Modal functionality (shared across all projects)
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("imageModalLabel");

document.body.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG" && e.target.dataset.bsToggle === "modal") {
    modalImage.src = e.target.src;
    modalTitle.textContent = e.target.getAttribute("data-caption");
  }
});

  });





