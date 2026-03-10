//& Ternary Operators

/*
& Getting Started
~ When writing a simple conditional statement in JS, it usually features the if and else keywords:

~ if (condition) {
    ~ Run if true
~ } else {
    ~ Run if false
~}
*/


/*
~ This would be a great opportunity to use a ternary operator
~ Ternary operator -> used as a shorthand for an if / else statement
~ Instead of writing an if / else statement across multiple lines, it can do the same thing on a single line

~ condition ? ifTrue : ifFalse;
*/

/*
~ The ternary operators uses a ? question mark operator that evaliates a condition on its left side and either runs the code represented by ifTrue (on one side of the : colon) ot runs code in the ifFalse section (on the other side)
~ The value of ifTrue and ifFalse can be either of the following:
    ~ Raw data, like numbers, strings, etc.
    ~ A defined variable with a value
    ~ A function that returns a value, like console.log()
~ The resulting value of a ternary operation can be saved to a variable
*/

//& Rewrite the follwing code into a ternary operation:
let num = Math.random();

// if (num > 0.5) {
//     console.log('Heads');
// } else {
//     console.log('Tails');
// }

//~ Ternary operator
num > 0.5 ? console.log('Heads') : console.log('Tails');
console.log();



