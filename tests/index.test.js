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
