/*
& Rock Paper Scissors
~ A classic game that resonates with folks from around the world. The rules are as follows:

    ~ Rock beats Scissors.
    ~ Scissors beat Paper.
    ~ Paper beats Rock.
~ Let's use conditionals, the random number generator, and create a program that simulates the game between the player and the computer!

~ Begin with a player variable and give it a 0 to represent "Rock", a 1 to represent "Paper", or a 2 to represent "Scissors."

~ Then use Math.random() to generate a number between 0 and 2 for another computer variable.

~ Then, use conditionals to compare the values of
*/
//~ player = 0 => This is Rock
//~ player = 1; => This is Paper
//~ player = 2; => This is Scissors

let player = 0; //~ This is RocK
// const computer = Math.floor(Math.random() * 9);
const computer = Math.floor(Math.random() * 3);
let answer = '';

if (player === 0 && computer === 0) {
    answer = 'Rock';
    console.log('This is a Draw, rethrow!!!');
} else if (player === 0 && computer === 1) {
    answer = 'Paper';
    console.log('The computer wins!!!');
} else if (player === 0 && computer === 2) {
    answer = 'Scissors';
    console.log('The player wins!!!');
} else {
    answer = 'An error has occurred';
}

console.log('Player picked: Rock');
console.log('Computer picked: ' + answer);
console.log();

//& =================================================

player = 1; //~ This is Paper

if (player === 1 && computer === 0) {
    answer = 'Rock';
    console.log('The player wins');
} else if (player === 1 && computer === 1) {
    answer = 'Paper';
    console.log('This is a Draw, rethrow!!!');
} else if (player === 1 && computer === 2) {
    answer = 'Scissors';
    console.log('The computer wins!!!');
} else {
    answer = 'An error has occurred';
}

// console.log(computer);
console.log('Player picked: Paper');
console.log('Computer picked: ' + answer);
console.log();

//& ========================================================

player = 2; //~ This is Scissors

if (player === 2 && computer === 0) {
    answer = 'Rock';
    console.log('The computer wins!!!');
} else if (player === 2 && computer === 1) {
    answer = 'Paper';
    console.log('The player wins!!!');
} else if (player === 2 && computer === 2) {
    answer = 'Scissors';
    console.log('This is a Draw, rethrow!!!');
} else {
    console.log('An error has occurred');
}

console.log('Player picked: Scissors');
console.log('Computer picked: ' + answer);
console.log();
