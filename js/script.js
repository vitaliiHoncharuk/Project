$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 400,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 5
  });
    $('.bx-wrapper').css({
        "max-width": "1200px",
        "margin": "0 auto",
        "margin-bottom": "40px"
    });
});
window.onresize = function() {
  var newWidth = ($(window).width() * .9);
  $(".bx-wrapper").css({
    "maxWidth": newWidth
  });
}

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
        window.location.hash = hash;
      });
    } 
  });
});