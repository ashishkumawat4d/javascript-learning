//   ------------- Arrays -----------------


//.       Arrays - 
//             An array is used to store multiple values in 
//             a single variable.
     
     
//             JavaScript arrays can contain strings, numbers, booleans, 
//             arrays, objects, functions, and more.


let array = [
    "String",
    10,
    true,
    [1, 2],
    {name: "Ashish"}
];



//          An index of an array is the position number of an element in the array.
//          starts from zero


//.         Array methods -





//           1.push() — Add at the end


let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
// ["Apple", "Banana", "Mango"]






//          2.pop() — pop() removes the last element from an array.


fruits.pop("Apple");






//          3. unshift() — Add at the beginning


fruits.unshift("Orange");



//.          4. shift() — Remove from the beginning



fruits.shift();


//.          5. length — Find number of elements



let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);


//            6. indexOf() — Find the index


console.log(fruits.indexOf("Mango"));




//            7. includes() — Check if an element exists


console.log(fruits.includes("Apple"));




//.            8. slice() — Get a portion of an array
//                it will give a new array 


let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.slice(1, 3));
// ["Banana", "Mango"]



//            9. splice() — Add/remove elements
//                it will change the actual array


let fruit = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1);

console.log(fruits);
// ["Apple", "Mango"]



//.            10. join() — Convert array into a string


let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(", "));
// Apple, Banana, Mango



//             11. reverse() — Reverse the array



fruits.reverse();


//             12. sort() — Sort the array




let fruits = ["Mango", "Apple", "Banana"];

fruits.sort();

console.log(fruits);
// ["Apple", "Banana", "Mango"]






// Q1. Create an array of 5 fruits and print the array.

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(fruits);




// Q2. Print the first element of an array.

let fruits2 = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits2[0]);




// Q3. Print the last element of an array.

let fruits3 = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits3[fruits3.length - 1]);






// Q4. Find the length of an array.

let fruits4 = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits4.length);





// Q5. Add an element to the end of an array.

let fruits5 = ["Apple", "Banana", "Mango"];

fruits5.push("Orange");

console.log(fruits5);




// Q6. Remove the last element using pop().

let fruits6 = ["Apple", "Banana", "Mango"];

fruits6.pop();

console.log(fruits6);





// Q7. Add an element to the beginning using unshift().

let fruits7 = ["Banana", "Mango"];

fruits7.unshift("Apple");

console.log(fruits7);





// Q8. Remove the first element using shift().

let fruits8 = ["Apple", "Banana", "Mango"];

fruits8.shift();

console.log(fruits8);





// Q9. Find the index of a particular element using indexOf().

let fruits9 = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits9.indexOf("Mango"));






// Q10. Check whether an element exists using includes().

let fruits10 = ["Apple", "Banana", "Mango"];

console.log(fruits10.includes("Banana"));






// Q11. Print every element of an array using a for loop.

let numbers11 = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers11.length; i++) {
    console.log(numbers11[i]);
}






// Q12. Find the sum of all numbers in an array.

let numbers12 = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < numbers12.length; i++) {

    sum = sum + numbers12[i];
}

console.log(sum);




// Q13. Find the largest number in an array.

let numbers13 = [10, 50, 30, 80, 20];

let largest = numbers13[0];

for (let i = 1; i < numbers13.length; i++) {
    if (numbers13[i] > largest) {
        largest = numbers13[i];
    }
}




console.log(largest);


// Q14. Find the smallest number in an array.

let numbers14 = [10, 50, 30, 80, 20];

let smallest = numbers14[0];

for (let i = 1; i < numbers14.length; i++) {
    if (numbers14[i] < smallest) {
        smallest = numbers14[i];
    }



}

console.log(smallest);