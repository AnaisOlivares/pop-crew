$(document).ready(function()
{
  $('#slider1').tinycarousel();
  $('.slider2').tinycarousel()

  $('.carousel').carousel({
    interval: 2000
  })
  // $('#slick1').slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // });
  // $('.slider2').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // });
  // $('#slider1').tinycarousel({fullWidth: true}); 
  // autoplay();   
  // function autoplay() {
  //   $('#slider1').tinycarousel('next');
  //   setTimeout(autoplay, 2000);
  // }
});