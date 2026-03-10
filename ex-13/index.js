//& Good afternoon

/*
& else Clause
~ else clause can be optionally added to the end of an if statment
if (condition) {
    Do something
} else {
    Do something else
}

~ If the condition is true execute the code inside the if
~ Else the condition is false execute the code inside the else
*/

//~ if/else statement
let grade = 65;

if (grade > 60) {
    console.log('You passed.');
} else {
    console.log('You failed');
}
console.log();

grade = 55;

if (grade > 60) {
    console.log('You passed.');
} else {
    console.log('You failed');
}
console.log();

/*
~ If grade > 60 is true, then the program prints 'You passed'
~ Else, the program prints 'You failed'
*/

/*
& Comparison Operators
~ In a condition we are comparing two values -> we use comparison operator:
    ~ ===-> strict equal
    ~ !==-> strict not equal
    ~ > -> greater than
    ~ >= -> greater than or equal
    ~ < -> less than
    ~ <= -> less than or equal
~
*/

//& ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
& Create a program that prints a message if it's early in the day

~ Define an hour variable and give it the current time of day.

~ Write an if statement for the following:

~ If hour < 12, print “Good morning 🌞” and some of your morning routines.
~ else, print "Good afternoon ☁️" and some of your afternoon rituals
*/

let hour = 7;

if (hour < 12) {
    console.log('Good morning 🌞, it is ' + hour + ' am');
    console.log('Time to spread your bed and stretch');
    console.log('Time to get ready for the day and do your skincare');
} else {
    console.log('Good afternoon ☁️, it is ' + hour + ' pm');
    console.log('Time to make some Matcha 🍵');
    console.log('Time to make some Lunch 🥗');
}
console.log();

//& ================================

hour = 12;

if (hour < 12) {
    console.log('Good morning 🌞 it is ' + hour);
    console.log('Time to spread your bed and stretch');
    console.log('Time to get ready for the day and do your skincare');
} else {
    console.log('Good afternoon ☁️, it is ' + hour + ' pm');
    console.log('Time to make some Matcha 🍵');
    console.log('Time to make some Lunch 🥗');
}
console.log();

//& ===================================

hour = 8;

if (hour < 12) {
    console.log('Good morning 🌞 it is ' + hour + ' am');
    console.log('Time to spread your bed and stretch');
    console.log('Time to get ready for the day and do your skincare');
} else {
    console.log('Good afternoon ☁️, it is ' + hour + ' pm');
    console.log('Time to make some Matcha 🍵');
    console.log('Time to make some Lunch 🥗');
}
