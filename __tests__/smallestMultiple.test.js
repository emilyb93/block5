const findSmallestMultiple = require("../smallestMultiple.js");

describe("findSmallestMultiple", () => {
  test("should take a number and return a number", () => {
    const result = findSmallestMultiple(10);
    expect(typeof result).toBe("number");
  });
});
