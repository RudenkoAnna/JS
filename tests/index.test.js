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

  describe("Sum of Numbers", () => {
    it("should calculate the sum of numbers in the array", () => {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
          sum = sum + arr[i];
        }
      }
      expect(sum).toBe(570);
    });
  });

  describe("Maximum Value", () => {
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
  });

  describe("Minimum Value", () => {
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
});
describe("Semi Tree", () => {
  describe("Generation", () => {
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
});

//tests for lesson 26
describe("isEmpty", () => {
  it("should return true for an empty object", () => {
    const emptyObj = {};
    expect(isEmpty(emptyObj)).toBe(true);
  });

  it("should return false for a non-empty object", () => {
    const nonEmptyObj = { name: "Anna", age: 30 };
    expect(isEmpty(nonEmptyObj)).toBe(false);
  });
});

describe("createUser", () => {
  it("should create a user object with the provided name and age", () => {
    const user = createUser("Anna", 30);
    expect(user.name).toBe("Anna");
    expect(user.age).toBe(30);
  });

  it("should return the expected greeting with the user's name and age", () => {
    const user = createUser("Anna", 30);
    const greeting = user.getNameAndAge();
    expect(greeting).toBe("Привіт, я Anna, мені 30 років");
  });
});

describe("showMessage", () => {
  it("should log the user's name and age if the user object is provided", () => {
    spyOn(console, "log");
    const user = createUser("Anna", 30);
    showMessage(user);
    expect(console.log).toHaveBeenCalledWith("Привіт, я Anna, мені 30 років");
  });

  it("should not log anything if the user object is not provided", () => {
    spyOn(console, "log");
    showMessage(null);
    expect(console.log).not.toHaveBeenCalled();
  });
});

describe("calculator", () => {
  beforeEach(() => {
    spyOn(window, "prompt").and.returnValues("5", "3");
    5;
  });

  it("should ask for the first and second numbers", () => {
    calculator.ask();
    expect(window.prompt).toHaveBeenCalledTimes(2);
  });

  it("should return the sum of the first and second numbers", () => {
    const sum = calculator.sum();
    expect(sum).toBe(8);
  });

  it("should return the multiplication of the first and second numbers", () => {
    const multiplication = calculator.mul();
    expect(multiplication).toBe(15);
  });
});

///tests for lesson 28
describe("scrollToElement", () => {
  let element;

  beforeEach(() => {
    element = document.createElement("div");
    element.id = "testElement";
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it("should scroll to the element with the given ID", () => {
    spyOn(element, "scrollIntoView");
    scrollToElement("testElement");
    expect(element.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("should not scroll if the element ID is not found", () => {
    spyOn(element, "scrollIntoView");
    scrollToElement("nonExistentElement");
    expect(element.scrollIntoView).not.toHaveBeenCalled();
  });
});

describe("keydown event listener", () => {
  beforeEach(() => {
    spyOn(window, "scrollToElement");
  });

  it("should scroll to element 'f' when 'f' key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "F" });
    document.dispatchEvent(event);
    expect(window.scrollToElement).toHaveBeenCalledWith("f");
    expect(event.defaultPrevented).toBe(true);
  });

  it("should scroll to element 'a' when 'a' key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "A" });
    document.dispatchEvent(event);
    expect(window.scrollToElement).toHaveBeenCalledWith("a");
    expect(event.defaultPrevented).toBe(true);
  });

  it("should scroll to element 'b' when 'b' key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "B" });
    document.dispatchEvent(event);
    expect(window.scrollToElement).toHaveBeenCalledWith("b");
    expect(event.defaultPrevented).toBe(true);
  });

  it("should scroll to element 'c' when 'c' key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "C" });
    document.dispatchEvent(event);
    expect(window.scrollToElement).toHaveBeenCalledWith("c");
    expect(event.defaultPrevented).toBe(true);
  });

  it("should scroll to element 'd' when 'd' key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "D" });
    document.dispatchEvent(event);
    expect(window.scrollToElement).toHaveBeenCalledWith("d");
    expect(event.defaultPrevented).toBe(true);
  });

  it("should scroll to element 'e' when 'e' key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "E" });
    document.dispatchEvent(event);
    expect(window.scrollToElement).toHaveBeenCalledWith("e");
    expect(event.defaultPrevented).toBe(true);
  });

  it("should not scroll when a different key is pressed", () => {
    const event = new KeyboardEvent("keydown", { key: "X" });
    document.dispatchEvent(event);
    expect(window.scrollToElement).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);
  });
});
