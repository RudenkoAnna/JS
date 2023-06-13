describe("Check user event", () => {
  const desc = "<p>Check if button was clicked</p>";

  describe(desc, () => {
    it("Check if button was clicked", () => {
      spyOn(console, "log");
      onClick({
        target: "button",
      });
      expect(console.log).toHaveBeenCalled();
    });
  });
});
// tests for  lesson 23

describe("Array Operations", () => {
  let arr;

  beforeEach(() => {
    arr = [20, 30, 40, 90, 120, true, false, 11, 189, 1, 18, 31, "word"];
  });

  it("should calculate the sum of numbers in the array", () => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        sum = sum + arr[i];
      }
    }
    expect(sum).toBe(440);
  });

  it("should find the maximum value among the numbers in the array", () => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
    }
    expect(max).toBe(189);
  });

  it("should find the minimum value among the numbers in the array", () => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        if (arr[i] < min) {
          min = arr[i];
        }
      }
    }
    expect(min).toBe(1);
  });
});

describe("Semi Tree", () => {
  it("should generate the semi tree with the given depth", () => {
    let depth = 5;
    let char = "#";
    let output = "";
    for (let i = 1; i <= depth; i++) {
      output += char.repeat(i);
      output += "\n";
    }
    expect(output).toBe("#\n##\n###\n####\n#####\n");
  });
});
