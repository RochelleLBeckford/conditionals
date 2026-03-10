//& Air Quality Index

/*
& Logical Operators
~ As the if/if else/else statements get bigger and more complex, so do the conditionals
~ we can combine conditions with logical operators

~ Logical operators -> also known as Boolean operators, combine and evaluate two conditions
~ They are &&, ||, and ! operators:
    ~ The AND logical operator && returns true if both conditions are true and returns false otherwise
    ~ The OR logical operator || returns true if at least one of the conditions is true, and false otherwise
    ~ The NOT logical operator ! returns true if the condition is false, and vice versa

    if (hunger > 4 && anger > 1) {
        console.log('Hangry');
    }
    ~ If the 'hunger' variable is greater than 4 and the 'anger' variable is greater than 1, then the program prints "Hangry"
*/

/*
if (coffee > 0 || bubble-tea > 0) {
    console.log('😊');
}
~ If the coffee variable is greater then 0 or the bubble-tea variable is greater than 0, then the program prints a smiley face
*/

/*
if (!tired) {
    console.log("Let's code!");
}
~ If 'tired' variable is not true, then the program prints 'Let's code!'
~ && and || are considered awfully similar

~ This is a way to remember the differences between the two?
~   A       B       A && B      A || B
~ false   false     false       false
~ false.  true.     false.      true
~ true    false     false       true
~ true    true      true        true
*/

//& =====================================
/*
& Create an AQI (Air Quality Index)
~ The aqi in my area is 35 -> Good
~ Create a variable for this
~ Write an if/else if/else statement with the following logic:
    ~ If aqi is between 0 and 50, print 'Good'
    ~ Else if aqi is between 51 and 100, print 'Moderate'
    ~ Else if aqi is between 101 and 150, print 'Unhealthy (Sensitive Groups)'
    ~ Else if aqi is between 151 and 200, print 'Unhealthy'
    ~ Else if aqi is between 201 and 300, print 'Very Unhealthy'
    ~ Else, print 'Hazardous'
*/

let aqi = 35;

if (aqi > 0 && aqi < 50) {
    console.log('Good');
} else if (aqi > 51 && aqi < 100) {
    console.log('Moderate');
} else if (aqi > 101 && aqi < 150) {
    console.log('Unhealthy (Sensitivity Groups)');
} else if (aqi > 151 && aqi < 200) {
    console.log('Unhealthy');
} else if (aqi > 201 && aqi < 300) {
    console.log('Very Unhealthy');
} else {
    console.log('Hazardous');
}

//& ====================================

aqi = 75;

if (aqi > 0 && aqi < 50) {
    console.log('Good');
} else if (aqi > 51 && aqi < 100) {
    console.log('Moderate');
} else if (aqi > 101 && aqi < 150) {
    console.log('Unhealthy (Sensitivity Groups)');
} else if (aqi > 151 && aqi < 200) {
    console.log('Unhealthy');
} else if (aqi > 201 && aqi < 300) {
    console.log('Very Unhealthy');
} else {
    console.log('Hazardous');
}

//& ====================================

aqi = 105;

if (aqi > 0 && aqi < 50) {
    console.log('Good');
} else if (aqi > 51 && aqi < 100) {
    console.log('Moderate');
} else if (aqi > 101 && aqi < 150) {
    console.log('Unhealthy (Sensitivity Groups)');
} else if (aqi > 151 && aqi < 200) {
    console.log('Unhealthy');
} else if (aqi > 201 && aqi < 300) {
    console.log('Very Unhealthy');
} else {
    console.log('Hazardous');
}

//& ====================================

aqi = 175;

if (aqi > 0 && aqi < 50) {
    console.log('Good');
} else if (aqi > 51 && aqi < 100) {
    console.log('Moderate');
} else if (aqi > 101 && aqi < 150) {
    console.log('Unhealthy (Sensitivity Groups)');
} else if (aqi > 151 && aqi < 200) {
    console.log('Unhealthy');
} else if (aqi > 201 && aqi < 300) {
    console.log('Very Unhealthy');
} else {
    console.log('Hazardous');
}

//& ====================================

aqi = 275;

if (aqi > 0 && aqi < 50) {
    console.log('Good');
} else if (aqi > 51 && aqi < 100) {
    console.log('Moderate');
} else if (aqi > 101 && aqi < 150) {
    console.log('Unhealthy (Sensitivity Groups)');
} else if (aqi > 151 && aqi < 200) {
    console.log('Unhealthy');
} else if (aqi > 201 && aqi < 300) {
    console.log('Very Unhealthy');
} else {
    console.log('Hazardous');
}

//& ====================================

aqi = 315;

if (aqi > 0 && aqi < 50) {
    console.log('Good');
} else if (aqi > 51 && aqi < 100) {
    console.log('Moderate');
} else if (aqi > 101 && aqi < 150) {
    console.log('Unhealthy (Sensitivity Groups)');
} else if (aqi > 151 && aqi < 200) {
    console.log('Unhealthy');
} else if (aqi > 201 && aqi < 300) {
    console.log('Very Unhealthy');
} else {
    console.log('Hazardous');
}
