// polyfill for Array.prototype.toSorted
Array.prototype.toSorted ??= function (compareFn) {
  return this.slice().sort(compareFn);
};

export function sortMovies(movies, sort) {
  switch (sort) {
    case "popularity":
      return movies.toSorted((a, b) => b.popularity - a.popularity);
    default:
      return movies;
  }
}
