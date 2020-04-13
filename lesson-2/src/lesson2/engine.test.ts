import { highPrioritiesCalc, lowestPrioritiesCalc } from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[1, * 32]", () => {
    expect(highPrioritiesCalc([1, "*", 32], 2)).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(highPrioritiesCalc([32, "/", 32], 2)).toEqual([1]);
  });

  it("[32, + 32]", () => {
    expect(highPrioritiesCalc([32, "+", 32], 2)).toEqual([32, "+", 32]);
  });
});

describe("highPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(highPrioritiesCalc([32, "/", 32, "+", 10, "*", 10], 2)).toEqual([
      1,
      "+",
      100,
    ]);
  });
});

describe("secondPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => lowestPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(lowestPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, - 32]", () => {
    expect(lowestPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, - 32, +, 10]", () => {
    expect(lowestPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
