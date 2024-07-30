import { sortMovies } from "./lib/sort-movies.js";
import { fetchPopularMovies, getTMDBImageUrl } from "./lib/tmdb-api/api.js";
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
      const response = await fetchPopularMovies();
      this.movies = response.results;
    },
  }));
  Alpine.store("mobileMenu", {
    open: false,
    toggle() {
      console.log(this.open);
      this.open = !this.open;
    },
  });
});
