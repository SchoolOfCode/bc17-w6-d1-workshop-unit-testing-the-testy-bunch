import { test, expect } from "vitest";
import { sum } from "./sum.js";

test("add 2 numbers", () => {
  expect(sum(2,2)).toEqual(4);
})