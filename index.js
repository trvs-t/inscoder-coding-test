// #region tmdb
const popularMoviesUrl =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTkwNDIzNDY3ODZhOTIxY2E3MzJmZmM0YzAxYTIxZiIsIm5iZiI6MTcyMTgwNzc3MC40NTAyNzcsInN1YiI6IjY2YTBhN2VhZjdhMTE0YTA4M2UwZDRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SQjgB9waWCim1CPQFSbrHehebcAcr4uDQV8iIYgIrps",
  },
};

function getTMDBImageUrl(path, size = "w500") {
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
// #endregion

// #region formatting
function formatNumber(value) {
  return Math.round(value).toLocaleString("en-US");
}
// #endregion

// #region data
document.addEventListener("alpine:init", () => {
  Alpine.data("movies", () => ({
    movies: [],
    async init() {
      // fetch(popularMoviesUrl, options)
      const response = await fetch("./sample_response.json").then((res) =>
        res.json()
      );
      this.movies = response.results;
    },
  }));
});
// #endregion
