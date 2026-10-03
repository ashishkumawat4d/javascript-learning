// ---------------- FUNCTIONS ------------------

//.     A function is a reusable block of code that performs a specific task.
//.     We create a function using the 'function' keyword.
//.     A function runs only when we call it.

//.      Syntax:
//.      function functionName() {
//.          // code
//.      }


//       1. Simple Function
//       A function can be created without parameters.

function greet() {
    console.log("Hello Ashish!");
}

greet();


//        2. Function with Parameters
//        Parameters are variables that receive values when the function is called.
//        They make functions more flexible.

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Ashish");


//         3. Function with Multiple Parameters
//         A function can have more than one parameter.

function add(a, b) {
    console.log(a + b);
}

add(10, 20);


//          4. Return Statement
//          'return' sends a value back from the function.
//          The returned value can be stored in a variable or used in another expression.

function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(10, 20);
console.log(result);


//           5. Function with User Input -
//           Functions can work with values taken from the user.

function square(num) {
    return num * num;
}

let number = Number(prompt("Enter a number:"));
console.log(square(number));








//.        6. Function Expression
//.        A function can be stored inside a variable.
//.        The function is called using the variable name.

let greet = function() {
    console.log("Hello!");
};

greet();


//          7. Arrow Function
//          Arrow functions provide a shorter way to write functions.
//          They are commonly used in modern JavaScript.

let greetUser = () => {
    console.log("Hello Ashish!");
};

greetUser();


//            8. Arrow Function with Parameters
//            Parameters can be used in arrow functions just like normal functions.

let add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


//            9. Short Arrow Function
//            If an arrow function has only one statement that returns a value,
//            curly brackets and the 'return' keyword can be removed.
           
let multiply = (a, b) => a * b;

console.log(multiply(5, 4));


//.            10. Default Parameters
//.            A default parameter is used when no value is passed for that parameter.

function greet(name = "User") {
    console.log("Hello " + name);
}

greet();
greet("Ashish");


//             11. Function Calling Another Function
//             One function can call another function.

function square(num) {
    return num * num;
}

function displaySquare(num) {
    console.log(square(num));
}

displaySquare(5);


//.             12. Function with Multiple Return Possibilities
//.             A function can return different values depending on a condition.

function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(-5));


//               13. Function Scope
//               Variables created inside a function are generally accessible only inside that function.
//               They cannot normally be accessed outside the function.

function test() {
    let message = "Hello";
    console.log(message);
}

test();


//               14. Reusing a Function
//               One of the main advantages of functions is that the same function
//               can be called multiple times with different values.

function cube(num) {
    return num * num * num;
}

console.log(cube(2));
console.log(cube(3));
console.log(cube(5));




//               15. Higher-Order Functions (HOF) -
//               A Higher-Order Function is a function that takes another function as 
//               an argument OR returns a function.


// Example :

function sayHello() {
    console.log("Hello");
}

function myFunction(action) {
    action();
}

myFunction(sayHello);