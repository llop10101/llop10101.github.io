function openLightbox(element) {
    element.parentNode.querySelector('.lightbox-overlay').classList.add('show');
  }
  
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('lightbox-overlay')) {
      event.target.classList.remove('show');
    }
  });
  