// // ---------------------- Chapter 3: Operators -------------------

// // What are Operators?

// //        Operators are special symbols or keywords in JavaScript used to perform operations on values
// //        (operands).

// //        You’ll use them in calculations, comparisons, logic, assignments, and even type checks.
// //        Think of them as the verbs of your code — they act on data.

// //.       1.Arithmetic Operators -
// //.                            Used for basic math.


//                         let a = 10, b = 3;
//                         console.log(a + b); // 13
//                         console.log(a % b); // 1
//                         console.log(2 ** 3); // 8            
                        
                        

// //.        2.Assignment Operators -
// //                               Assign values to variables.


                        // // assigns value
                        // += // a += b => a = a + b
                        // -= // a -= b
                        // *=, /=, %=


//                         let score = 5;
//                         score += 2; // score = 7


// //          3.Comparison Operators - 
// //                                 Used in condition checks.  

//                         == // equal (loose)
//                         === // equal (strict – value + type)
//                         != // not equal (loose)
//                         !== // not equal (strict)
//                         > < >= <=



// //.     Example:

//                     console.log(5 == "5"); // true
//                     console.log(5 === "5"); // false



// //          3.Logical Operators -
// //                          Used to combine multiple conditions.

//                      && // AND – both must be true
//                      || // OR – either one true
//                      ! // NOT – negates truthiness



// //      Example:

//                     let age = 20, hasID = true;
//                     if (age >= 18 && hasID) {
//                     console.log("Allowed");
//                     }

            

// //           4. Unary Operators -
// //                            Used on a single operand.

//                     + // tries to convert to number
//                     - // negates
//                     ++ // increment
//                     -- // decrement
//                     typeof // returns data type


// //      Example: 

//                   let x = "5";
//                   console.log(+x); // 5 (converted to number)


// //           5.Ternary Operator (Conditional) -
// //                                          The ternary operator in JavaScript is a short way to write an if...else statement.

// //                            condition ? valueIfTrue : valueIfFalse
                  
                 
// //        Example:

//                       let score = 80;
//                       let grade = score > 50 ? "Pass" : "Fail";



// //          6. typeof Operator -   
// //                           In JavaScript, the typeof operator is used to find the data type of a value or variable.     

// typeof 123 // "number"
// typeof "hi" // "string"
// typeof null // "object" (JS bug)
// typeof [] // "object"




// ------------------------ Chapter 4: Control Flow -----------------


 
// What is Control Flow?

// Control flow decides which code runs, when it runs, and how many times it runs.
// It's like decision-making + direction in your JavaScript program.
// If operators are the verbs, control flow is the traffic signal.



//          1. if, else if, else -


// if (condition) {
// // runs if condition is true
// } else if (anotherCondition) {
// // runs if first was false, second is true
// } else {
// // runs if none are true
// }



//         2. switch-case -

// Great for checking one variable against many values.

// switch (value) {
// case value1:
// // code
// break;
// case value2:
// // code
// break;
// default:
// // fallback






// ----------------- How to take input from the user ----------------------




// first import module readline -

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// and now we can take input like 


rl.question("Enter first number: ", (a) => {
    rl.question("Enter second number: ", (b) => {

        a = Number(a);
        b = Number(b);

        console.log("Sum =", a + b);

        rl.close();
    });
});






// Question 

// Write a function getGrade(score) that:
// • Takes a student's marks (0 to 100)
// • Returns the grade based on this logic:
// 90–100 A+
// 80–89 A
// 70–79 B
// 60–69 C
// 33–59 D
// 0–32 Fail
// Anything else        Invalid marks ❌








function getGrade(score){
    if (90 <= score && score <= 100){
        return "Grade A+";
    } 

    else if (80 <= score && score <= 89){
        return "Grade A";
    }

    else if (70 <= score && score <= 79){
        return "Grade B";
    }

    else if (60 <= score && score <= 69){
        return "Grade C";
    }

    else if (33 <= score && score <= 59){
        return "Grade D";
    }

    else if (0 <= score && score <= 32){
        return "Fail";
    }

    else if (100 < score && score < 0){
        return "invalid choice";
    }
};



console.log(getGrade(400));




// 4. Write a program to check whether a person is eligible to vote.

function eligible(a){

if (a >= 18){
    return "you are eligible";
}
else {return "you are not eligible"}

}


console.log(eligible("18"))