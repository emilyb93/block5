const findSmallestMultiple = require("../smallestMultiple.js");

describe("findSmallestMultiple", () => {
  test("should take a number and return a number", () => {
    const result = findSmallestMultiple(10);
    expect(typeof result).toBe("number");
  });

  test("should return the smallest number divisble by all values from 1 to n ", () => {
    const result = findSmallestMultiple(10);

    expect(result).toBe(2520);
  });
});

console.log(findSmallestMultiple(20));
