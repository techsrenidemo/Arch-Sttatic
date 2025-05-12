document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".img-fluid"); // Select all images
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("imageModalLabel");
  
    images.forEach(img => {
      img.addEventListener("click", () => {
        const imgSrc = img.getAttribute("data-bs-image");
        const caption = img.getAttribute("caption");
  
        modalImage.src = imgSrc;
        modalImage.alt = caption;
        modalTitle.textContent = caption; // Update modal header title
      });
    });
  });

  
  