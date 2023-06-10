function openLightbox(image) {
    var lightbox = document.querySelector('.lightbox-overlay');
    var lightboxImage = document.querySelector('.lightbox-image');
  
    lightboxImage.src = image.src;
    lightbox.classList.add('show');
  }
  
  function closeLightbox() {
    var lightbox = document.querySelector('.lightbox-overlay');
    lightbox.classList.remove('show');
  }
  