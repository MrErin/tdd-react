import { add, total } from "../LevelUpApp";

// This is a unit test because it tests exactly one function
test("add", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(5, -3)).toBe(2);
  expect(add(5, 0)).toBe(5);
  expect(add(0, 0)).toBe(0);
});

// This is an integration test because it's testing a function that relies on another function. In React the equivalent is testing one component that renders another component
test("total", () => {
  expect(total(5, 20)).toBe("$25");
});
