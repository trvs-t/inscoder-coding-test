import { test, expect } from "vitest";
import { formatNumber } from "./formatting";

test("Format outputs a string", () => {
  expect(typeof formatNumber(100)).toBe("string");
});

test("Format returns empty string if value is not a number", () => {
  expect(formatNumber("one hundred")).toBe("");
});

test("Number does not change", () => {
  expect(formatNumber(100)).toBe("100");
});

test("Number separates with comma", () => {
  expect(formatNumber(1000)).toBe("1,000");
});

test("Number rounds to nearest whole number", () => {
  expect(formatNumber(100.5)).toBe("101");
});

test("Number separates with comma and rounds to nearest whole number", () => {
  expect(formatNumber(1000.5)).toBe("1,001");
});
