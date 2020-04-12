import { mul, div, add, minus, exp, pow, fact } from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it("exp 4 ** 3 to equal 64", () => {
    expect(exp(4, 3)).toBe(64);
  });

  it("pow 4** to equal 16", () => {
    expect(pow(4)).toBe(16);
  });

  it("fact 4! to equal 24", () => {
    expect(fact(4)).toBe(24);
  });
});
