/*
& 3. TGIF
~ In many places, people celebrate Friday as the start of the weekend. Some express this with 'TGIF' (short for "Thank God It's Friday")
~ Use conditionals to see if the weekend's near
~ Define a day variable as a number between 1 and 7, where 1 means Monday, 2 means Tuesday and so on
~ Based on the value of a day variable use conditionals to log one of the following:
    ~ If it's a weekday, log 'Not Friday, yet!
    ~ If it's Friday, log 'TGIF 💃🏾'
    ~ If it's a weekend, log 'Yay, weekends ! 🙌🏾'
    ~ Otherwise, log 'Wait, what day is it?'
*/

//~ day:
//~ 1 - Monday
//~ 2 - Tuesday
//~ 3 - Wednesday
//~ 4 - Thursday
//~ 5 - Friday
//~ 6 - Saturday
//~ 7 - Sunday

let day = 1;

if (day >= 1 && day <= 4) {
    console.log('Not Friday, yet!');
} else if (day =5) {
    console.log('TGIF 💃🏾');
} else if (day === 6 || day === 7) {
    console.log('Yay, weekends! 🙌🏾');
} else {
    'Wait, what day is it?'
}
console.log();

//& ===================

day = 2;

if (day >= 1 && day <= 4) {
    console.log('Not Friday, yet!');
} else if (day ===5) {
    console.log('TGIF 💃🏾');
} else if (day === 6 || day === 7) {
    console.log('Yay, weekends! 🙌🏾');
} else {
    'Wait, what day is it?'
}
console.log();

//& ===================

day = 5;

if (day >= 1 && day <= 4) {
    console.log('Not Friday, yet!');
} else if (day ===5) {
    console.log('TGIF 💃🏾');
} else if (day === 6 || day === 7) {
    console.log('Yay, weekends! 🙌🏾');
} else {
    'Wait, what day is it?'
}
console.log();

//& ===================

day = 7;

if (day >= 1 && day <= 4) {
    console.log('Not Friday, yet!');
} else if (day ===5) {
    console.log('TGIF 💃🏾');
} else if (day === 6 || day === 7) {
    console.log('Yay, weekends! 🙌🏾');
} else {
    'Wait, what day is it?'
}
console.log();

//& ===================

day = 8;

if (day >= 1 && day <= 4) {
    console.log('Not Friday, yet!');
} else if (day ===5) {
    console.log('TGIF 💃🏾');
} else if (day === 6 || day === 7) {
    console.log('Yay, weekends! 🙌🏾');
} else {
    console.log('Wait, what day is it?')
}
console.log();

