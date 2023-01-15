// Smooth Scrolling
$('nav a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
  
  // Show/Hide Comments
  $('#show-comments').on('click', function() {
    $('#recent-comments').slideToggle();
    $(this).text(function(i, text) {
      return text === "Show Comments" ? "Hide Comments" : "Show Comments";
    });
  });
  
  // Image Slideshow
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slideshow-image");
    let dots = document.getElementsByClassName("slideshow-dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
  }
  