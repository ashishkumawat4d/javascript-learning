// ---------------- PRACTICE QUESTIONS -----------------

// --------------- LEVEL 1 BASICS ---------------

// Q1.Take two numbers as input and print their sum, difference, product, and division.


console.log("Take two numbers as input and print their sum, difference, product, and division.")

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));


    a = Number(a);
    b = Number(b);

    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);




// Q2.Take a number and check whether it is even or odd.



console.log("Take a number and check whether it is even or odd.")

let c = Number(prompt("Enter your number:"));

if (c % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}
  


// Q3. Take a number and check whether it is positive, negative, or zero.






console.log("Take a number and check whether it is even or odd.")


let d = Number(prompt("Enter your number:"));

if (d < 0){
    console.log("your number is negative")
}
else if(d >= 0){
    console.log("Your number is positive ")
}

else {
    console.log("invalid choice")

}
    


// Q4.Take two numbers and print the larger number.



console.log("Take two numbers and print the larger number.");

let e = Number(prompt("Enter first number :"))
let f = Number(prompt("Enter second number :"))

if (e > f) {
    console.log("The largest number is :",e)
}

else {
    console.log("The largest number is :",f)
}




// Q5.Take a number and check whether it is divisible by both 3 and 5.

console.log("Take a number and check whether it is divisible by both 3 and 5.")

let g = Number(prompt("Enter your number :"))
if (g % 3 == 0 && g % 5 ==0){
    console.log("Divisible by both")
}
else {
    console.log("not divisible")
}





// ------------- Level 2 — Conditions ------------



// Q1.Take marks and print the grade:
//   90+ → A+
//   79–89 → A
//   60–79 → B
//   32–59 → C
//   00-32 → Failed

console.log("Take marks and print the grade")



let h = Number(prompt("Enter your marks :"))

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

console.log(getGrade(h))




// Q2.Take a year and check whether it is a leap year.



console.log("Take a year and check whether it is a leap year.")

let i = Number(prompt("Enter year :"))

if (i % 4 == 0){
    console.log("leap year")
}

else{
    console.log("not a leap year")
}



// Q3.Take three sides and check whether they can form a triangle.


console.log("Take three sides and check whether they can form a triangle.")

let j = Number(prompt("Enter first side"))
let k = Number(prompt("Enter second side"))
let l = Number(prompt("Enter third side"))

if (j+k <= l || k+l <= j || j+l <= k){
    console.log("they can't form a triangle.")
}
else{
    console.log("they can form a triangle.")
}



// Q4.Take a character and check whether it is a vowel or consonant.


console.log("Take a character and check whether it is a vowel or consonant.")


let character = prompt("Enter a character:");

if (
    character == "a" ||
    character == "e" ||
    character == "i" ||
    character == "o" ||
    character == "u"
) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}




// Q5.Take a number and check whether it is a 2-digit number.

console.log("Take a number and check whether it is a 2-digit number.")

let num = Number(prompt("Enter number :"))

if (number >= 10 && number <= 99) {
    console.log("2 digit number ")
} else {
    console.log("not a 2 digit number ")
}