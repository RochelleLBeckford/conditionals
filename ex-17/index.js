//& Rock Paper Scissors
/*
~ Conditionals control the order in whic the program's code executes
~ if statement checks a condition for truth and executes the code if it is
~ else executes the code if none of the above is True
~ One or more else ifs can be added between if and else
~ Comparison operators compare two values: ===, !==, >, >=, <, <=
~ Logical operators combine two or more conditions: &&, ||, !
*/

//& if / else if / else
let review = 2;

if (review > 4.5) {
    console.log('Extraordinary');
} else if (review >= 4) {
    console.log('Excellent');
} else if (review >= 3) {
    console.log('Good');
} else {
    console.log('Eh');
}
//~ The Output => Eh
//& ==============================================
review = 3;

if (review > 4.5) {
    console.log('Extraordinary');
} else if (review >= 4) {
    console.log('Excellent');
} else if (review >= 3) {
    console.log('Good');
} else {
    console.log('Eh');
}
//~ The Output => Good
//& ==============================================

review = 4;

if (review > 4.5) {
    console.log('Extraordinary');
} else if (review >= 4) {
    console.log('Excellent');
} else if (review >= 3) {
    console.log('Good');
} else {
    console.log('Eh');
}
//~ The Output => Excellent
//& ==============================================

review = 6;

if (review > 4.5) {
    console.log('Extraordinary');
} else if (review >= 4) {
    console.log('Excellent');
} else if (review >= 3) {
    console.log('Good');
} else {
    console.log('Eh');
}
//~ The Output => Extraordinary
//& ==============================================
