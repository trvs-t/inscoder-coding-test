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
    bannerIndex: 0,
    get banner() {
      if (!this.movies.length) return "";
      return getTMDBImageUrl(
        this.movies[this.bannerIndex].backdrop_path,
        "original"
      );
    },
    get sortedMovies() {
      return sortMovies(this.movies, this.sort);
    },
    toggleSort() {
      this.sort = this.sort === "popularity" ? "default" : "popularity";
    },
    nextBanner() {
      console.log("next banner", this.bannerIndex);
      this.bannerIndex = (this.bannerIndex + 1) % 5;
    },
    async init() {
      const response = await fetchPopularMovies();
      this.movies = response.results;
      setInterval(this.nextBanner.bind(this), 5000);
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
