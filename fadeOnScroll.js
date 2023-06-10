window.addEventListener('scroll', function() {
  var imageContainer = document.getElementById('image-container');
  var textOverlay = document.getElementById('text-overlay');
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > 0) {
      //imageContainer.classList.add('fade');
      textOverlay.classList.add('fade');
  } else {
      //imageContainer.classList.remove('fade');
      textOverlay.classList.remove('fade');
  }
});
