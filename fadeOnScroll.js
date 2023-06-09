window.addEventListener('scroll', function() {
    var imageContainer = document.getElementById('image-container');
    var scrollPosition = window.scrollY || window.pageYOffset;
    
    if (scrollPosition > 0) {
        imageContainer.classList.add('fade');
    } else {
        imageContainer.classList.remove('fade');
    }
});
