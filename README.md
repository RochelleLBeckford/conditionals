<!-- & This creates a banner for the ReadMe -->
<img src="img/cherry-blossom-andriod.png" alt="" width="100%" height="500">

# <p align="center">🌸 Conditionals: JavaScript's Decision Maker 🌸</p>

## Practice: Learning how to teach our programs how to think and choose

### Understanding JS -> Giving our code the power to make decisions

<hr>

## <p align="center">💫 Overview</p>
-   [ ] Conditionals give programs something more powerful, the ability to make choices. Instead of just running the same way every single time, my code can look at the world around it, evaluate what's happening, and decide what to do next. It's like coming to a fork in the road and actually being able to read the signs. This is where programs stop being robots and start having a little personality.

<hr>

## <p align="center">🎨 Key Design Features</p>
-   [ ] <b>Control Flow</b>
    -   [ ] The order in which individual statements, instructions, or function calls are executed, like choosing which path to take at a crossroads.
-   [ ] <b>If Statement</b>
    -   [ ] Tests a condition and runs code only if that condition is true, the most basic form of decision-making.
-   [ ] <b>else Clause</b>
    -   [ ] Gives the program a backup plan, something to do when the if condition isn't true
-   [ ] <b>else if</b>
    -   [ ] Adds more than two possible paths, creating a whole tree of decisions.
-   [ ] <b>Comparison Operators</b>
    -   [ ] The tools for comparing values: ===, !==, >, <, >=, <=
-   [ ] <b>Logical Operators</b>
    -   [ ] Combining conditions with &&(AND), ||(OR), and!(NOT) tot make more complex decisions
-   [ ] <b>Math.random()</b>
    -   [ ] Bringing a little chaos into our programs, random numbers that make each run unique
-   [ ] <b>Nested if Statements</b>
    -   [ ] Decisions within decisions, asking 'what if?' inside another 'what if?'
-   [ ] <b>Ternary Operator</b>
    -   [ ] A shortcut for simple if/else decisionsm all on one line

<hr>

-   [ ] Simple practice to understand how programs make decisions and respond differently based on conditions
    -   [ ] Control Flow is what makes programs interactive and responsive
    -   [ ] Random numbers let us simulate unpredictability, like flipping a coin or rolling dice
    -   [ ] Logical operators let us check multiple conditions at once
    -   [ ] Nested conditionals let us drill down into more specific situations
    -   [ ] Ternary operators give us a clean, concise way to write simple decisions

<hr>

## <p align="center">👩🏾‍💻 JavaScript Outline</p>
-   [ ] The <b>if statement</b>:
    -   [ ] Tests a condition and executes code only if that condition is true
        -   [ ] The condition goes inside parentheses ()
        -   [ ] The code to run goes inside curly braces {}
        ```javascript
            let hour = 7;
            if (hour < 12) {
                console.log('Good morning 🌞 it is ' + hour + ' am');
            }
            //~ The ouput: Good morning 🌞 it is 7 am
        ```
-   [ ] The <b>else clause</b>:
    -   [ ] Gives the program something to do when the if condition is false
    -   [ ] Creates two possible paths: one for true, one for false
        ```javascript
            let grade = 55;
            if (grade > 60) {
                console.log('You passed.');
            } else {
                console.log('You failed');
            }
            //~ The output: You failed
        ```
-   [ ] The <b>else if</b> statement:
    -   [ ] Adds more than two possible paths to our decision tree
    -   [ ] Can have as many else if statements as needed
    -   [ ] Only the first true condition's code runs; the rest are skipped
        ```javascript
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
            //~ The output: A
        ```
-   [ ] <b>Comparison Operator</b>:
    -   [ ] Used to compare two values in a condition
    -   [ ] Each return either true or false
        ```javascript
            //~ === strict value
            console.log(5 === 5); //~ The output: true
            console.log(5 === '5'); //~ The output: false (different data types)

            //~ !== strict not equal
            console.log(5 !== 3); //~ The output: true
            console.log(5 !== 5); //~ The output: false
        ```
-   [ ] The <b>Math.random()</b> method:
    -   [ ] Returns a random decimal number between 0 and 1
    -   [ ] Each time it's called, a different number appears
    -   [ ] Can be combined with Math.floor() to get random integers
        ```javascript
            console.log(Math.random());
            //~ The output: 0.5181413840718504

            //~Get a random integer between 0 and 9
            console.log(Math.floor(Math.random() * 10));

            //~Get a random integer between 1 and 9
            console.log(Math.floor(Math.random() * 9) + 1);
        ```
-   [ ] <b>Logical Operators</b>:
    -   [ ] Combine multiple conditions into one decision
    -   [ ] && (AND): true only if both conditions are true
    -   [ ] || (OR): true if at least one condition is true
    -   [ ] ! (NOT): reverses true to false and false to true
        ```javascript
            //~ && (AND) operator
            if (hunger > 4 && anger > 1) {
                console.log('Hangry');
            }
            //~ Only prints if both conditions are true

            //~ || (OR) operator
            if (matcha > 0 || bubbleTea > 0) {
                console.log('😊');
            }
            //~ Prints if at least one condition is true

            //~ ! (NOT) operator
            if (!tired) {
                console.log('Time to code!');
            }
            //~ Prints if tired is false
        ```
-   [ ] <b>Nested if Statements</b>:
    -   [ ] if statements inside other if statements
    -   [ ] Lets you check more specific conditions after a general condition is met
        ```javascript
            let time = 15;
            let matcha = false;

            if (time > 10) {
                if (matcha == true) {
                    console.log('Time to start coding! 👩🏾‍💻');
                } else {
                    console.log('Time to make some Matcha. 🍵!');
                }
            } else {
                console.log('Make sure t0 get good sleep! '😴);
            }
            //~ The output: Time to make some Matcha. 🍵!
        ```
-   [ ] <b>Ternary Operator</b>:
    -   [ ] A shorthand for somple if/else statements
    -   [ ] Syntax: condition ? ifTrue : ifFalse
    -   [ ] Everything on one line instead of multiple lines
        ```javascript
            //~ Traditional if/else
            let num = Math.random();
            if (num > 0.5) {
                console.log('Heads');
            } else {
                console.log('Tails')
            }

            //~ Same thing with ternary operator
            num > 0.5 ? console.log('Heads') : console.log('Tails');
        ```

<hr>

## <p align="center">✨ Encompassed Technologies</p>
-   [ ] <b>JavaScript:</b>
    -   [ ] The programming language that is the magic behind the scenes that makes webpages react, calculate, and come alive. Turning static pages into conversations.
-   [ ] <b>Browser Developer Tools:</b>
    -   [ ] The little laboratory inside browsers likes Chrome and Safari where you can write, test, and debug code without messing up the actual webpage
-   [ ] <b>The Console:</b>
    -   [ ] The dedicated space to output a message and experimentation
-   [ ] <b>VS Code:</b>
    -   [ ] A lightweight but powerful source code editor that provides an integrated terminal, syntax highlighting, and extensions for writing and testing code efficiently
        -   [ ] A digital notebook where all the coding happens.


