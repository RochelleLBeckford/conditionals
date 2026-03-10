/*
& Create a program that prints a message if it's early in the day

~ Define an hour variable and give it the current time of day.

~ Write an if statement for the following:

~ If hour < 12, print “Good morning 🌞” and some of your morning routines.
~ After you run the code, change hour's value and run it again.
~ Do this a few times to make sure the program is working as intended.
*/

let hour = 7;

if (hour < 12) {
    console.log('Good morning 🌞 it is ' + hour + ' am');
    console.log('Time to spread your bed and stretch');
    console.log('Time to get ready for the day and do your skincare');
}
console.log();

hour = 12;

if (hour < 12) {
    console.log('Good morning 🌞 it is ' + hour);
    console.log('Time to spread your bed and stretch');
    console.log('Time to get ready for the day and do your skincare');
}
console.log();

hour = 8;

if (hour < 12) {
    console.log('Good morning 🌞 it is ' + hour + ' am');
    console.log('Time to spread your bed and stretch');
    console.log('Time to get ready for the day and do your skincare');
}
