window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var currentScrollPos = window.pageYOffset;
  
    if (currentScrollPos > 0) {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; /* Canvi de color en desplaçar-te */
    } else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; /* Color de fons inicial */
    }
  });
  