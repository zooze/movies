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

const getMovies = genre => {
  let endpoint = "/api/movies";
  if (genre) endpoint += `?genre=${genre}`; 

  $.get(endpoint, response => {
    let movies = JSON.parse(response);
    let moviesHtml = "";
    movies.forEach(movie => {
      moviesHtml += generateMovieSummaryHtml(movie);
    });
    $('.movies').html(moviesHtml);
  })
};

const onSuccessGenre = response => {
  let genres = JSON.parse(response);

  genres.forEach(genre => {
    let button = $(`<button class='genre-button'>${genre}</button>`);

    button.on("click", function() {
      $('.genre-button').removeClass('active');
      $(this).addClass("active");
      getMovies(genre.toLowerCase());
    });

    $('.buttons').append(button);

  });
}

const getGenres = () => {
  let endpoint = "/api/genres";
  $.get(endpoint, onSuccessGenre);
}

getMovies();
getGenres();