//& pH Levels

/*
& else if
~ if/else only gives two options
~ Adding else if section between the if and else in your control flow gives more than 2 options


if (condition) {
    Do something
} else if (condition) {
    Do this, instead
} else {
    Do this if none of the above is true
}

~ It is possible to include as many else ig statements desired
*/

let grade = 93;

if (grade > 90) {
    console.log('A');
} else if (grade > 80) {
    console.log('B');
} else if (grade > 70) {
    console.log('C');
} else if (grade > 60) {
    console.log('D');
} else {
    console.log('F');
}
console.log();

/*
~ Like the if statement, the code in an else if statement runs if its condition is true and the code in the rest of the if/ else if / else statement is skipped
~ since the grade is 93 the output is A
*/

//& =======================================

/*
& Create a program that checks whether a pH level is basic, acidic, or neutral

~ In chemistry, pH is a scale used to specify the acidity or basically of a fluid
~ Create a variable called pH and give it a value between 0 & 14
~ Written an if / else if / else statement that:
    ~ If pH is greater than 7, output 'Basic'
    ~ else if pH is less than 7, output 'Acidic'
    ~ Else, output 'Neutral'
*/

let pH = 7;

if (pH > 7) {
    console.log('The pH level of ' + pH + ' is Basic');
} else if (pH < 7) {
    console.log('The pH level of ' + pH + ' is Acidic');
} else {
    console.log('The pH level of ' + pH + ' is Neutral');
}
console.log();

//& ==================================

pH = 10;

if (pH > 7) {
    console.log('The pH level of ' + pH + ' is Basic');
} else if (pH < 7) {
    console.log('The pH level of ' + pH + ' is Acidic');
} else {
    console.log('The pH level of ' + pH + ' is Neutral');
}
console.log();

//& ==================================
pH = 5

if (pH > 7) {
    console.log('The pH level of ' + pH + ' is Basic');
} else if (pH < 7) {
    console.log('The pH level of ' + pH + ' is Acidic');
} else {
    console.log('The pH level of ' + pH + ' is Neutral');
}
console.log();

