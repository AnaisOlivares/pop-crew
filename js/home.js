$(document).ready(function()
{
  $('#slider1').tinycarousel();
  $('.slider2').tinycarousel()

  $('.carousel').carousel({
    interval: 2000
  })

  var menuSearch = $('.genero-movie');
  // $('.genero-movie').on('click', function() {
  //   $('#container-peliculas').append('h2');
  //   $('h2').prependTo().menuSearch.attr('title');
  //   $('#container-peliculas').show();

  // })
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