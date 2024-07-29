import { test, expect } from "vitest";
import { sortMovies } from "./sort-movies";

test("Sort by popularity", () => {
  const movies = [{ popularity: 1 }, { popularity: 3 }, { popularity: 2 }];
  const sorted = sortMovies(movies, "popularity");
  expect(sorted).toEqual([
    { popularity: 3 },
    { popularity: 2 },
    { popularity: 1 },
  ]);
});

test("Sort by default", () => {
  const movies = [{ title: "A" }, { title: "C" }, { title: "B" }];
  const sorted = sortMovies(movies, "default");
  expect(sorted).toEqual([{ title: "A" }, { title: "C" }, { title: "B" }]);
});

test("Sort by popularity with missing popularity", () => {
  const movies = [{ popularity: 1 }, { popularity: 3 }, { title: "B" }];
  const sorted = sortMovies(movies, "popularity");
  expect(sorted).toEqual([
    { popularity: 3 },
    { popularity: 1 },
    { title: "B" },
  ]);
});

test("original array is not mutated", () => {
  const movies = [{ popularity: 1 }, { popularity: 3 }, { popularity: 2 }];
  sortMovies(movies, "popularity");
  expect(movies).toEqual([
    { popularity: 1 },
    { popularity: 3 },
    { popularity: 2 },
  ]);
});
