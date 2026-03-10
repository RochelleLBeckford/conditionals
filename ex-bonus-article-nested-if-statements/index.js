//& Nested If Statements
/*
& Syntax
~ Asking 'what if' can lead to 'what ifs'
~ This is the same in JS and programming in general
~ Conditional statements use the if and else keywords to tell the computer the steps to take in a program bases on certain conditions
*/

let time = 15;

// if (time > 10) {
//     console.log("Let's start coding! 👩🏾‍💻");
// } else {
//     console.log('Make sure to get good sleep 😴');

// }

//~ However you can also noest your if statements
//~ A nested if statement is an if statement inside another if statement:
let matcha = false;
if (time > 10) {
    if (matcha == true) {
        console.log("Let's start coding! 👩🏾‍💻");
    } else {
        console.log('Time to make some Matcha. 🍵!');
    }
} else {
    console.log('Make sure to get good sleep! 😴');
}
console.log();

//& ======================================================
time = 10;

if (time > 10) {
    if (coffee == true) {
        console.log("Let's start coding! 👩🏾‍💻");
    } else {
        console.log('Time to make some Matcha. 🍵!');
    }
} else {
    console.log('Make sure to get some good sleep! 😴');
}
console.log();

/*
& How the logic works:
~ if(conditionA){...} -> true -> if(subCondition){...} -> true -> do this
~ false                        -> false [else{...}] -> do this
~ else {...} -> do this

~ Any code inside of an if statement that evaluates to true will run, including more conditional statements
*/

/*
& Example
~ The following shows how nested if statements can affect the output of a program:
*/
let weather = 'Sunny';
let temperature = 85;

if (weather == 'Sunny') {
    if (temperature > 80) {
        console.log("Yay, let's go to the beach! 🏖️");
    } else {
        console.log("Let's do something fun outdoors! ⛰️");
    }
} else {
    console.log("Let's watch some shows on the couch! 🍿");
}
console.log();

//~ The Output -> Yay, let's go to the beach! 🏖️

weather = 'Sunny';
temperature = 75;

if (weather == 'Sunny') {
    if (temperature > 80) {
        console.log("Yay, let's go to the beach! 🏖️");
    } else {
        console.log("Let's do something fun outdoors! ⛰️");
    }
} else {
    console.log("Let's watch some shows on the couch! 🍿");
}
console.log();
