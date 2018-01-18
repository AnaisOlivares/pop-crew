$(document).ready(function()
{
  $('#slider1').tinycarousel();
  $('.slider2').tinycarousel()

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

  var $menuBar = $('#inputGroups');
  $('#inputGroups').on('input', function() {
    if (sessionStorage.getItem('movieId')) {
      $idMovie = sessionStorage.getItem('movieId');
      $menubar.show(data);
    }
  var menuSearch =  $('.genero-movie');
  $('.genero-movie').on('click', function() {
  
    $('#container-peliculas').append('h2');
    $('h2').prependTo().menuSearch.attr('title');
    $('#container-peliculas').show();


    // $("a").on("click", function(event)
    // {
    //     //Cancela el evento del href, por defecto al pinchar en un link
    //     // te envia a este, con esto evitamos que ejecute el link
    //     event.preventDefault();            

    //    //Cargamos el contenido del enlace
    //     $('#contenido').load(this.href);
  })
 
});