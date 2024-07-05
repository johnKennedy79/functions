
console.log("Hello");

function sayHello() {
    console.log("Hello World!");
}


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


//Function Scope 

//?? what everyones favourit color is??
//jamie magenta 
//riley green 
//james blue 
//kash pastels wheat
//black or Red 

console.log("Hello world!");

const name = "Bob";

function sayHello() {
  console.log("Hello " + name + "!");
}

sayHello();
console.log(name);

// creating variables in the function scope

function sayHelloagain() {
  const name2 = "John";
  console.log("Hello " + name2 + "!");
}

sayHelloagain()

console.log(name2)

// 💭 Variables that are only scoped within a function can be forgotten, saving memory. If we only used global variables, we could never clear anything up behind us.

// 💭 It's worth noticing that with scoped functions you can reuse variables within functions without worrying about pollution or functions affecting other. Global scoped variables used within more than one function could lead to conflicts and unexpected results, as both functions might try to alter the global variable at the same time.