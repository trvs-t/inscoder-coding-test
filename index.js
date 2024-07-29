import { sortMovies } from "./lib/sort-movies.js";
import { getTMDBImageUrl } from "./lib/tmdb-api/api.js";
import { formatNumber } from "./lib/formatting.js";

// make available to the global scope
window.getTMDBImageUrl = getTMDBImageUrl;
window.formatNumber = formatNumber;

document.addEventListener("alpine:init", () => {
  Alpine.data("movies", () => ({
    movies: [],
    sort: "default",
    get sortedMovies() {
      return sortMovies(this.movies, this.sort);
    },
    toggleSort() {
      this.sort = this.sort === "popularity" ? "default" : "popularity";
    },
    async init() {
      // fetch(popularMoviesUrl, options)
      const response = await fetch("./lib/tmdb-api/sample_response.json").then(
        (res) => res.json()
      );
      this.movies = response.results;
    },
  }));
});
