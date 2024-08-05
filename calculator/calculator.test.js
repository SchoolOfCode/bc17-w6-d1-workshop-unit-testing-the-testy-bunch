import { expect, test } from "vitest";
import { calculate } from "./calculator";


test("this should times two numbers", () => {
  let result = calculate("*", 9, 9);

  expect(result).toEqual(81);
})

test("this should return an error", () => {
  expect(() => {
    calculate("&", 1, 1);
  }).toThrow("Unsupported operator &");
})

test("this should add two numbers", () => {
  let result = calculate("+", 9, 9);

  expect(result).toEqual(18);
})

test("this should divide two numbers", () => {
  let result = calculate("/", 6, 2);

  expect(result).toEqual(3);
})

test("this should minus two numbers", () => {
  let result = calculate("-", 10, 5);

  expect(result).toEqual(5);
})

test("this should square a number", () => {
  let result = calculate("sq", 10);

  expect(result).toEqual(100);
})