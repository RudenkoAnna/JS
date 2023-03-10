// creating user object  +  and sayHello reply
function createUser(name, age) {
  return {
    name: name,
    age: age,
    getNameAndAge() {
      return `Привіт, я ${this.name}, мені ${this.age} років`;
    },
  };
}

const showMessage = function (user) {
  if (!user) {
    return;
  }

  const userInfo = user.getNameAndAge();
  console.log(`${userInfo}`);
};

const Anna = createUser("Anna", 30);
const Brian = createUser("Brian", 29);

showMessage(Anna);
showMessage(Brian);
