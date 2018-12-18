const generateMovieSummaryHtml = movie => {
  return `<div class='movie'>
    <a class='movie-link' href='/movies/${movie.id}'>
      <div class='image-frame'>
        <img src='${movie.poster_url}'>
        <h2>${movie.title}</h2>
      </div>
    </a>
  </div>`
}

var endpoint = "/api/movies";
var onSuccess = function(response) {
  var movies = JSON.parse(response);
  let moviesHtml = "";
  movies.forEach(function(movie) {
    moviesHtml += generateMovieSummaryHtml(movie);
  });
  $('.movies').html(moviesHtml);
};

setTimeout(() => {
  $.get(endpoint, onSuccess)
}, 500);