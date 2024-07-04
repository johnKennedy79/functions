
console.log("Hello");

function sayHello() {
    console.log("Hello World!");
}
sayHello();

function argumentFunction(ar1, ar2){
    console.log(ar1, ar2);
}

function sayHelloTo(userName) {
    console.log("Hello " + userName + "!");
}

sayHelloTo("bob");
sayHelloTo("John");
sayHelloTo("Alice");

function greet( greeting, userName) {
    console.log(greeting + " " + userName + "!");
}

greet("Good morning", "Bob");
greet("Good afternoon", "John");
greet("Good evening", "Alice");

function add(a, b) {
    return a + b;
}

const result = add(1, 5);
console.log("The result is", result);
const anoutherResult = add(2, 10);
console.log("Anouther result is", anoutherResult);

function multiply(a, b) {
    return a*b;
}
function subtract(a, b){
return a-b;}

function divide(a, b){
    return a/b;
}

function calculate(a, b, operator) {
    if (operator === "+") {
      return add(a, b);
    } else if (operator === "-") {
      return subtract(a, b);
    } else if (operator === "*") {
      return multiply(a, b);
    } else if (operator === "/") {
      return divide(a, b);
    }
  }

  function calculate(a, b, operator) {
    switch (operator) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "*":
        return multiply(a, b);
      case "/":
        return divide(a, b);
    }
  }

  const result2 = calculate(1, 5, "+");
  console.log("The result is", result);

  const anotherResult = calculate(2, 10, "*");
console.log("Another result is", anotherResult);

calculate(15, 7, "-")
