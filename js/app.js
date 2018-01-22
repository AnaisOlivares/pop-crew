$(function () {
  $apiKeyTdbm = '26ae59014ea0da877c1779bb203cb4da';
  $apiLen = '&language=es-ES&include_adult=false&sort_by=created_at.asc';
  $apiJustLen = '&language=es-ES';
  $apiTdbm = 'https://api.themoviedb.org/3/genre/';
  $api = 'https://api.themoviedb.org/3/';
  $apiYoutbe = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=';
  $apiYoutbe2 = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=';
  $apiSpotify = 'https://api.spotify.com/v1/search?q='
  $tokenSpotify = ' -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQASB8aJXldF9MA0ZoM71o2h4AreaIiBezNIrcGxFTS8VXPoI71Ry"'

  $('.genero-movie').on('click', function (event) {
    event.preventDefault();
    if(window.sessionStorage){
      sessionStorage.setItem('generoId', $(this).attr('id'));
    }
    document.location.href = '../search/';
    console.log(window.location.href);

  });

  if (sessionStorage.getItem('generoId')) {
    $('#container-peliculas').html('');
    $genreId = sessionStorage.getItem('generoId');
    $.getJSON(($api + 'genre/' + $genreId + '/movies?api_key=' + $apiKeyTdbm + $apiLen),gotDataGenre);
    function gotDataGenre (data) {
      //console.log(data.results.length);
      for (var i = 0; i < data.results.length; i++ ){
        //console.log(data.results[i]);
        $currentMovie = data.results[i];
        $('#container-peliculas').append("<div id=" + $currentMovie.id + " class='movie-click movie-click-main'><img src= 'https://image.tmdb.org/t/p/w185/" + $currentMovie.poster_path + "  '><h2>" + $currentMovie.title + "</h2></div>");

      }

      $('.movie-click-main').on('click', function () {
        console.log('hola');
        if(window.sessionStorage){
          sessionStorage.setItem('movieId', $(this).attr('id'));
        }
        //sessionStorage.setItem('movieId', $('.movie-click').attr('id'));
        document.location.href = '../movie/';
        //return false;
      });

    }
  }

  if (sessionStorage.getItem('movieId')) {
    $idMovie = sessionStorage.getItem('movieId');
    $.getJSON(($api + 'movie/' + $idMovie + '?api_key=' + $apiKeyTdbm + $apiJustLen),gotDataMovie);
    function gotDataMovie (data) {
      console.log(data);
      $('#title-movie').text(data.title);
      $('#tagline-movie').text(data.tagline);
      $('#plot-movie').text(data.overview);
      $('#genero-movie').text(data.genres[1].name);
      $('#runtime-movie').text(data.runtime + 'min');
      $('#year-movie').text(data.release_date);
      $('#portada').html("<img class='img-responsive' src='https://image.tmdb.org/t/p/w185/" + data.poster_path + "'>")

      $.getJSON(($apiYoutbe + data.original_title + 'behind the scenes' + '&type=video&key=AIzaSyBezaSWH0w7yaDcfjmuoaq4Vhc6eAf9-_o'),gotDataBehind);

      function gotDataBehind (data) {
        console.log(data.items);
        $.each(data.items, function (index, item) {
          console.log(item);
          $('#main-container-videos').append("<div class='video-behind col-md-6'> <iframe class='video' width='520' height='300' src='//www.youtube.com/embed/" + item.id.videoId + "' frameborder='0' allowfullscreen> </iframe> <h2 class='title-video col-md-6 col-md-push-2'> " + item.snippet.title  + "</h2></div>") ;
        });

      }

      //BEHIND THE SCENES CLICK
      $('#behind').on('click', function (event) {
        event.preventDefault();
        $('#main-container-videos').html('');
        $('#cast-container').html('');
        $('#director-container').html('');
        $('#review-container').removeClass('d-block');

        $.getJSON(($apiYoutbe + data.original_title + 'behind the scenes' + '&type=video&key=AIzaSyBezaSWH0w7yaDcfjmuoaq4Vhc6eAf9-_o'),gotDataBehind);

        function gotDataBehind (data) {
          console.log(data.items);
          $.each(data.items, function (index, item) {
            console.log(item);
            $('#main-container-videos').append("<div class='video-behind col-md-6'> <iframe class='video' width='520' height='300' src='//www.youtube.com/embed/" + item.id.videoId + "' frameborder='0' allowfullscreen> </iframe> <h2 class='title-video col-md-6 col-md-push-2'> " + item.snippet.title  + "</h2></div>") ;
          });
        }
      });

      //TOP SCENES CLICK
      $('#top-scenes').on('click', function (event) {
        event.preventDefault();
        $('#main-container-videos').html('');
        $('#cast-container').html('');
        $('#director-container').html('');
        $('#review-container').removeClass('d-block');

        $.getJSON(($apiYoutbe + data.original_title + 'movie scenes' + '&type=video&key=AIzaSyBezaSWH0w7yaDcfjmuoaq4Vhc6eAf9-_o'),gotDataScenes);

        function gotDataScenes (data) {
          console.log(data.items);
          $.each(data.items, function (index, item) {
            console.log(item);
            $('#main-container-videos').append("<div class='video-behind col-md-6'> <iframe class='video' width='520' height='300' src='//www.youtube.com/embed/" + item.id.videoId + "' frameborder='0' allowfullscreen> </iframe> <h2 class='title-video col-md-6 col-md-push-2'> " + item.snippet.title  + "</h2></div>") ;
          });
        }
      });

      //SPOTIFY CLICK
      $('#extra').on('click', function () {
        event.preventDefault();
        $('#main-container-videos').html('');
        $('#cast-container').html('');
        $('#director-container').html('');
        $('#review-container').removeClass('d-block');
        
        $.getJSON(($apiYoutbe2 + data.original_title + 'original full soundtrack' + '&type=video&key=AIzaSyBezaSWH0w7yaDcfjmuoaq4Vhc6eAf9-_o'),gotSoundtrack);

        function gotSoundtrack (data) {
          $.each(data.items, function (index, item) {
            console.log(item);
            $('#main-container-videos').append("<div class='video-behind col-md-6'> <iframe class='video' width='520' height='300' src='//www.youtube.com/embed/" + item.id.videoId + "' frameborder='0' allowfullscreen> </iframe> <h2 class='title-video col-md-6 col-md-push-2'> " + item.snippet.title  + "</h2></div>") ;
          });
        }

      });


    }

    
    $('#inputGroups').on('keypress', function() {
        $('#input-respuestas').html('');
        if($(this).val()==''){
          $('#input-respuestas').html('');
        }
        if($(this).val().length>4){
          $inputval = $(this).val();
          $.getJSON(($api + 'search/movie?api_key=' + $apiKeyTdbm + $apiJustLen + '&query=' + $inputval), gotPreviewMovie);
          function gotPreviewMovie (data) {
            $.each(data.results, function (index, item) {
            console.log(item);
            $('#input-respuestas').append("<div class='movie-click-main' id=" + item.id  +"><h3 class='title-input'> " + item.title  + "</h3><p>" +  item.release_date + "</p>") ;

            $('.movie-click-main').on('click', function () {
              console.log('hola');
              if(window.sessionStorage){
                sessionStorage.setItem('movieId', $(this).attr('id'));
              }
              //sessionStorage.setItem('movieId', $('.movie-click').attr('id'));
              document.location.href = '../movie/';
              //return false;
            });
          });
        }
      } else {
        $('#input-respuestas').html('');
      }
    })

    //CAST COMPLETO CLICK
    $('#cast').on('click', function (event) {
      $('#main-container-videos').html('');
      $('#cast-container').html('');
      $('#director-container').html('');
      $('#review-container').removeClass('d-block');
      event.preventDefault();

      $.getJSON(($api + 'movie/' + $idMovie + '/credits?api_key=' + $apiKeyTdbm + $apiJustLen), gotCastMovie);
      function gotCastMovie (data) {
        for (var i = 0; i < 10 ; i++) {
          $('#cast-container').append("<li id=" + data.cast[i].id + " class='movie-single-actor col-md-4'><img src= 'https://image.tmdb.org/t/p/w185/" + data.cast[i].profile_path + "  '><h2>" + data.cast[i].name + "</h2></li>")
        }
        $('#director-container').append("<div id=" + data.crew[0].id + " class='movie-single-director'><img src= 'https://image.tmdb.org/t/p/w185/" + data.crew[0].profile_path + "  '><h2>" + data.crew[0].name + "</h2><h4>" + data.crew[0].job + "</h4></div>");
        console.log(data);
      }
    });

    //REVIEW COMPLETO CLICK
    $('#review').on('click', function (event) {
      $('#main-container-videos').html('');
      $('#cast-container').html('');
      $('#director-container').html('');
      $('#review-container').addClass('d-block');
      event.preventDefault();

      $.getJSON(($api + 'movie/' + $idMovie + '/reviews?api_key=' + $apiKeyTdbm + $apiJustLen), gotReviews);
      function gotReviews (data) {
        console.log(data);
      }

      firebase.database().ref('posts').on('child_added', function(snapshot) {
        $thisPost = '';
        $elemento = snapshot.val();
        $userName = $elemento.name;
        $postConent = $elemento.message;
        $userPhoto = $elemento.photo;

        $thisPost = "<br><div class='single-response col-md-8 col-md-push-4'><img class='user-img' src=" + $userPhoto + "><div class='content-review'><p>" + $elemento.message + "</p></div></div>";
        $('#responses').prepend($thisPost);
        $('.user-img').css("width:50px");
      });


      $('#submit-review').on('click', function () {
        console.log($('#input-review').val());
        
        firebase.auth().onAuthStateChanged( function(user) {
          if(user) {
            var user = firebase.auth().currentUser;
            if($('#input-review').val() !== '' ){
              console.log('hola');
              // $('#responses').prepend("<img class='user-img' src=" + user.photoURL + "> <div class='content-review'><p>" + $('#input-review').val() + "</p></div>" );
              var newPost = {
                name: user.displayName,
                photo: user.photoURL,
                message: $('#input-review').val()
              };
              firebase.database().ref('posts/').push(newPost);
            }
          }
        });
      });
    });
  }

  /* mostrar menu de lista de generos */
  $('#btnSlide').on('click',function() {
    $("#slideIzq").toggleClass('block');
    $("#slideIzq").animate({
      width: "toggle"
    });
  }); 
  
  // funcion de mostrar cerrar sesion
  $('#btn-profile').on('click',function(event){
    event.preventDefault();
    $('.slide-profile').toggleClass('hiden');
  })
  
  // funcion agregar favoritos
  $('#favorito').on('click',function(){
    $('.icon-favorito').addClass('red');
    $('.add-favorito').append('<p><span class="img-port col-md-3">'+$('#portada').html()+'</span><span col-md-9>'+$('#title-movie').html()+'</span></p><hr>');
  });
  
  $('#i-favorito').on('click',function(event){
    event.preventDefault();
    $('.add-favorito').toggleClass('hiden');
  })

  var menuSearch = $('.genero-movie');
  $('.genero-movie').on('click', function() {
   
    $('#container-peliculas').append('h2');
    $('h2').prependTo()  
      $(".genero-movie").each(function(i){
        $(this).attr("title");
        $('#container-peliculas').show();
     });
    
    
   

  })

});
  
