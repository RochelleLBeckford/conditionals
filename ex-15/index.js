//& Magic 8 Ball

/*
& Math.random();
~ A random number generator to add some more fun to the program
~ It returns a decimal number between 0 and 1
*/
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log();

/*
~ 3 different numbers that look something like this:
~ 0.5181413840718504
~ 0.6600848299455555
~ 0.22475243631707542

~ To get a random integer between 0 and 9
*/
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log();
/*
~ This is multiplying the decimal number by 10 and then rounding it down to the nearest integer with Math.floor()
 */

//& =====================================

/*
~ The Magic 8 Ball is a popular office toy and children's toy invented in the 1940's for fortune-telling and advice seeking. 🎱

~ It's an oversized 8 ball with some of the following answers:

~ Yes - definitely.
~ It is decidedly so.
~ Without a doubt.
~ Reply hazy, try again.
~ Ask again later.
~ Better not tell you now.
~ My sources say no.
~ Outlook not so good.
~ Very doubtful.
*/

/*
& Create a program that can respond to any Yes or No questions with a different answer each time it executes
~ The output:
    ~ Question: [Question]
    ~ Magic 8 Ball: [Answer]

~ Example output:
    ~ Question: Is Codédex better than Udemy yet?
    ~ Magic 8 Ball: Better not tell you now.
*/

// let question = 'Is learning the basics of JavaScript helpful?'
// let question = 'Is learning the basics of JavaScript helpful?';

// const randomNumber = Math.floor(Math.random() * 9) + 1;

// console.log(randomNumber);
// console.log
// if (randomNumber > 9) {
//     console.log('Question: ' + question);
//     console.log('Answer: Yes - definitely');
// } else if (randomNumber > 8) {
//     console.log('Question: ' + question);
//     console.log('Answer: It is decidedly so');
// }   else if (randomNumber > 7) {
//     console.log('Question: ' + question);
//     console.log('Answer: Without a doubt');
// } else if (randomNumber > 6) {
//     console.log('Question: ' + question);
//     console.log('Answer: Reply hazy, try again');
// } else if (randomNumber > 5) {
//     console.log('Question: ' + question);
//     console.log('Answer: Ask again later');
// } else if (randomNumber > 4) {
//     console.log('Question: ' + question);
//     console.log('Answer: Better not tell you now');
// } else if (randomNumber > 3) {
//     console.log('Question: ' + question);
//     console.log('Answer: My sources say no');
// } else if (randomNumber > 2) {
//     console.log('Question: ' + question);
//     console.log('Answer: Outlook not so good');
// } else if (randomNumber > 1) {
//     console.log('Question: ' + question);
//     console.log('Answer: Very doubtful');
// } else {
//     console.log('Question: ' + question);
//     console.log('Answer: I am at a lost, roll again');
// }

/*
~ Random number generator part:
~ const randomNumber = Math.floor(Math.random() * 9) + 1;
~ The generated number is stored in a randomNumber variable, but it can be any variable name you choose
~ The next step would be to creat an if / else if / else statement using the random number to log some text based on the number
*/

//& ===============================
//~ Another way to create this program

let question = 'Is learning the basics of JavaScript helpful?';

const randomNumber = Math.floor(Math.random() * 9) + 1;

let answer = '';

console.log;
if (randomNumber === 1) {
    answer = 'Yes - definitely';
} else if (randomNumber === 2) {
    answer = 'It is decidedly so'
} else if (randomNumber === 3) {
    answer = 'Answer: Without a doubt'
} else if (randomNumber === 4) {
    answer = 'Reply hazy, try again';
} else if (randomNumber === 5) {
    answer = 'Ask again later';
} else if (randomNumber === 6) {
    answer = 'Better not tell you now';
} else if (randomNumber === 7) {
    answer = 'My sources say no';
} else if (randomNumber === 8) {
    answer = 'Outlook not so good';
} else if (randomNumber === 9) {
    answer = 'Very doubtful';
} else {
    answer = 'Error';
}

console.log("Question: " + question);
console.log("Answer: " + answer);
