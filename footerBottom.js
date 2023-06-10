window.addEventListener("scroll", function() {
    var textOverlay = document.getElementById("text-overlay");
    var flipCardContainer = document.getElementById("flip-card-container");
    var textOverlayHeight = textOverlay.offsetHeight;
    var scrollPosition = window.pageYOffset;
  
    if (scrollPosition > textOverlayHeight) {
      textOverlay.classList.add("fade");
      flipCardContainer.classList.add("show");
    } else {
      textOverlay.classList.remove("fade");
      flipCardContainer.classList.remove("show");
    }
  });