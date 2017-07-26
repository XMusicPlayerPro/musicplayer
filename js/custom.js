$(document).ready(function(){
      $('.parallax').parallax();
    });

$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true}); 
  autoplay()    
});

  
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 6000);
}