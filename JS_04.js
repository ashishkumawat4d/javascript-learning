// --------------- Chapter 5: Loops -------------------------


// Why Loops - 
//             Loops help us repeat code without rewriting it.
//             If a task needs to be done multiple times 
//             loops are the backbone.



// 1.for Loop -


//    for (Start ;End ; change) {

//        ---code---

//    }



for (let i = 0; i < 5; i++) {
console.log(i);
}




// 2. while Loop -



//         Start
//         while (End) {
        
//             ----- code ------
         
//         Change
//         }




let i = 0;
while (i < 5) {
console.log(i);
i++;
}


//  3. do-while Loop



//        Start
//        do {
       
//        --- code ----
//        Change
       
//        } while (End);







let i = 0;
do {
console.log(i);
i++;
} while (i < 5);






//   4. for-of – Arrays & Strings


for (let char of "Ashish") {
console.log(char);
}






//  5.forEach – Arrays -


let nums = [10, 20, 30];
nums.forEach((num) => {
console.log(num);
});







//  6.for-in – Objects (and arrays if needed) 

let user = { name: "Harsh", age: 26 };
for (let key in user) {
console.log(key, user[key]);
}





//   ---------- PRACTIC QUESTIONS ON LOOPS ----------------






//.  Q1.Print numbers from 1 to 10.


console.log("Print numbers from 1 to 10.")
for (i = 0; i < 11; i++){
    console.log(i)

}






//.  Q2.Print all even numbers from 1 to 50.


console.log("Print all even numbers from 1 to 50.")


for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}






// Q3.Print the multiplication table of a number.

console.log("Print the multiplication table of a number.")


let num = Number(prompt("Enter a number :"))

for (i = 1;i <= 10; i++){
    console.log(num * i)
}








// Q4.Find the sum of numbers from 1 to N.

console.log("Find the sum of numbers from 1 to N.")

let N = Number(prompt("Enter The Value of N :"))
let a = 0
for (i = 0;i <= N;i++){
    a = a + i
}

console.log(a)






// Q5.Find the factorial of a number.

console.log("Find the factorial of a number.")

let N = Number(prompt("Enter the value of N :"))


let a = 1
for (let i = 1;i <= N;i++){
    a = a*i
}

console.log(a)






// Q.6 Print even numbers between 1 to 20

for (let i = 10;i> 0;i--){
    console.log(i*2)
}

// using while loop

let i = 10;

while(i>0){
     console.log(i*2);
    i--;
}




// Q7.Reverse a string using loop

console.log("Reverse a string using loop")



let str = prompt("Enter a String: ");
let reverse = "";

for (let i = str.length - 1; i >= 0 ;i--){
    reverse = reverse + str[i];
}

console.log(reverse)









// Q8.Count the number of digits in a number.


console.log("Count the number of digits in a number");

let str = prompt("Enter a number: ");

let count = 0;

for (let i = 0; i < str.length; i++) {
    count = count + 1;
}

console.log(count);









// Q9.Check whether a string is a palindrome.

console.log("Check whether a string is a palindrome.")

let str = prompt("Enter a string:");
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

if (str === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}




// Q10.Count the number of spaces in a sentence.

console.log("Count the number of spaces in a sentence");

let str = prompt("Enter a sentence: ");

let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        count++;
    }
}

console.log(count);






// Q11. Count the number of words in a sentence.


console.log("Count the number of words in a sentence");

let str = prompt("Enter a sentence: ");

let count = 1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        count++;
    }
}

console.log(count);







// Q12. Print every character along with its position.


console.log("Print every character along with its position");

let str = prompt("Enter a string: ");

for (let i = 0; i < str.length; i++) {
    console.log(str[i], i);
}








// Q13.Count vowels in a string

console.log("Count vowels in a string");

let str = prompt("Enter a string: ");
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
    ) {
        count++;
    }
}

console.log("Vowels:", count);






// Q14. Print characters at even positions


let str = prompt("Enter a string: ");

for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        console.log(str[i]);
    }
}