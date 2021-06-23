import { add, divide } from "../fns/math";

describe("add function test", () => {
  test("add(1,2) to be 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("divide function test", () => {
  test("divide(4,2) to be 3", () => {
    expect(divide(4, 2)).toBe(2);
  });

  test("divide(4,0) to be null", () => {
    expect(divide(4, 1)).toBeNull();
  });
});
