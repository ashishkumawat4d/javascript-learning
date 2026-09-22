//  ------------ Chapter 1: Variables & Declarations --------------


//  Variables -
//           Variables are containers that hold data.
//           numbers to complex data like arrays and objects.
//           They help us store, reuse, and update information 
//           in JavaScript from simple values like


//  var, let, and const Line-by-Line Comparison


//    1. var
//    var is used to declare a variable.
//    Its value can be changed, and it can also be declared again.
   
var name = "Aman";
console.log(name); // Aman

name = "Rahul";
console.log(name); // Rahul





//     2. let
//     let is used to declare a variable whose value can change.
//     It cannot be declared again in the same block.

let age = 20;
console.log(age); // 20

age = 21;
console.log(age); // 21





//     3. const
//     const is used to declare a constant variable.
//     Its value cannot be changed after it is declared.

const country = "India";
console.log(country); // India

// country = "USA"; // Error: Assignment to constant variable


// Example: When to use var, let, and const

var oldVariable = "Avoid var in modern JavaScript";

let score = 50;
score = 75; // let value can change

const pi = 3.14;
// pi = 3.14159; // Error: const value cannot change

console.log(oldVariable);
console.log(score);
console.log(pi);







// ------------------ Scope in JavaScript ---------------------



// Scope means where a variable can be accessed or used in a program.



//       1. Global Scope -
//                  A variable declared outside any function or block can be used anywhere.




let name = "Aman";

function showName() {
  console.log(name); // Aman
}

showName();
console.log(name); // Aman





//        2. Function Scope -
//                    A variable declared with var inside a function can only be used inside that function.





function showAge() {
  var age = 20;
  console.log(age); // 20
}

showAge();

// console.log(age); // Error: age is not defined






//         3. Block Scope -
//                    A variable declared with let or const inside { } can only be used inside that block.





if (true) {
  let city = "Delhi";
  const country = "India";

  console.log(city); // Delhi
  console.log(country); // India
}

// console.log(city); // Error: city is not defined
// console.log(country); // Error: country is not defined


// var is NOT block-scoped.

if (true) {
  var score = 90;
}

console.log(score); // 90





// ---------------------- Hoisting in JavaScript -------------------------





//.    Hoisting -       
//             Hoisting is JavaScript's behavior of moving variable and function declarations
//.            to the top of their scope before the code runs.



// hoisting => 
//             ek variable ko jab js mein banaate hai to wo
//             variable do hisso mein toot jaata hai and uska declare part
//             upar chala jaata hai and uska initialization part neeche reh
//             jata hai



// Example 1: var hoisting

console.log(name); // undefined
var name = "Aman";



// JavaScript treats it similar to:
var name;
console.log(name); // undefined
name = "Aman";


// Example 2: let and const hoisting

// console.log(age); // Error
let age = 20;

// console.log(country); // Error
const country = "India";

// let and const are hoisted too,
// but they cannot be used before their declaration line.
// This period is called the Temporal Dead Zone (TDZ).


// Example 3: function hoisting

sayHello(); // Hello

function sayHello() {
  console.log("Hello");
}

// Function declarations can be called before they are written.





// ----------------- Chapter 2: Data Types + Type System -------------------



// ----------  Data Types ---------


//   Data Types -
//              Data types tell JavaScript what kind of value a variable stores.

// Example:

let name = "Aman";      // String data type
let age = 20;           // Number data type
let isStudent = true;   // Boolean data type

console.log(name);
console.log(age);
console.log(isStudent);


// There are two categories:

//.  1.Primitive types – stored directly.
//.  2.Reference types – stored as memory references.



// [1.] Primitive Data Types -


//   primitives -> aisi saari values jinko copy karne par
//   tumhe ek real copy mil jaaye

//    string, number, boolean, null, undefined, symbol, bigint



// 1. String → Text
// Example: "hello" , 'Ashish'



// 2. Number → Any numeric value
//  Example: 3 , -99 , 3.14


// 3. Boolean → True or false
// Example: true , false


// 4. Undefined → Variable declared but not assigned
// Example: let x; → x is undefined

// 5. Null → Intentional empty
// Example: let x = null;
// value

// 6. Symbol →
// Example: Unique identifier (rarely used)

// 7. BigInt → Very large integers
// Example: 123456789012345678901234567890n






//  [2.] Reference Data Types:




//   reference -> inko copy karne par real copy nahi milegi
//   but aapko reference milega parent ka

//   arrays, objects, functions




//      1.bject → 
//       Example:{ name: "Harsh", age: 26 }


//      2.Array → 
//       Example: [10, 20, 30]

//      3.Function → 
//        Example: function greet() {}

//      Arrays — collections of same-type values, e.g. int[] scores = {90, 80};
//      Classes and objects — custom structured data
//      Interfaces — contracts implemented by classes
//      Enums — a fixed set of named constants
//      Wrapper classes — object forms of primitives, such as Integer, Double, and Boolean





// ------------------ Type Coercion (Auto-Conversion) ----------------------




//    Type Coerction -
//                     Type coercion is JavaScript automatically converting a value from one 
//                     data type to another when an operation needs it.

//    Example:
              console.log("5" + 2); // "52"



Other examples:
               console.log(true + 1);       // 2
               console.log(false + 1);      // 1
               console.log("10" * 2);       // 20
               console.log(null + 5);       // 5
               console.log(undefined + 5);  // NaN


//  Common Confusions -


// -> why NAH(Not a Number) is a number -

//              Even though it means “Not a Number”, NaN is actually of type number .
//              This is because operations like 0 / 0 or parseInt("abc") still produce a numeric result —
//              just an invalid one.

//  -> typeof null is "object" — this is a bug.

//  -> undefined -> means the variable was never assigned. 
         
//. -> null - means you intentionally set it to "nothing".
//              '5' + 1 is "51" but '5' - 1 is 4 .