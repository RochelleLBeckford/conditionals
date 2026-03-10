/*
& 5. Fitness Routine
~ Excercising is essential for our health and quality of life, Especially for devs! With so many types of workouts available, taking the first step can feel intimidating
~ Why don't we use conditionals and random nummbers to help us pick an exerscise and make it fun?
~ Create a randomNumber variable that generates a random number between 0 and 3
    ~ Math.floor(Math.random() * 3);
~ Use a conditional statement to log one of these:
    ~ 0: '10 Push-ups';
    ~ 1: '10 Sit-ups';
    ~ 2: '10 Squats';
    ~ 3: '10 Jumping Jacks';
*/

const randomNumber = Math.floor(Math.random() * 4);

// console.log(randomNumber);

let exercise = '';

if (randomNumber === 0) {
    exercise = '10 Push-ups';
} else if (randomNumber === 1) {
    exercise = '10 Sit-ups';
} else if (randomNumber === 2) {
    console.log('10 Squats');
} else if (randomNumber === 3) {
    console.log('10 Jumping Jacks');
}

console.log('Exerise Routine: ' + exercise);

//& ======================================

if (randomNumber === 0) {
    console.log('10 Push-ups');
} else if (randomNumber === 1) {
    console.log('10 Sit-ups');
} else if (randomNumber === 2) {
    console.log('10 Squats');
} else if (randomNumber === 3) {
    console.log('10 Jumping Jacks');
}

