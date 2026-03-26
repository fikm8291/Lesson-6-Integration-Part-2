// -------------------------------------------
// Exercise 2: Intro to JavaScript
// -------------------------------------------
//
// GOAL:
// 1. Master JavaScript syntax: let, const, and console.log().
// 2. Understand the difference between == and ===.
// 3. Use Arithmetic and Comparison operators.
// 4. Practise the Core Git Workflow: Stage -> Commit -> Push.
//
// -------------------------------------------

// -------------------------------------------
// NEW CONCEPT: The "Strict" Equality (===)
// -------------------------------------------
/* In JavaScript, you will see two ways to check if things are equal:
1.  ==  (Loose Equality): This checks the VALUE but ignores the DATA TYPE.
    "5" == 5 is TRUE (even though one is text and one is a number).
    
2.  === (Strict Equality): This checks both the VALUE and the DATA TYPE.
    "5" === 5 is FALSE (because a String is not a Number).

BEST PRACTICE: Always use ===. It prevents bugs and makes your program more "strict"
and predictable, just like professional developers do.
*/

// -------------------------------------------
// Task 0: Running your JavaScript
// -------------------------------------------
// To run this file, we use a tool called Node.js in the terminal.
//
// TODO:
// 1. Open your terminal in Codespaces.
// 2. Type: node filename.js 
// 3. (Note: You must replace 'filename.js' with the actual name of your file).
// -------------------------------------------

console.log("-------------------------------------------\n"
    + "Task 1: Variables & Template Literals\n"
    + "-------------------------------------------");

// GUIDANCE:
// In JavaScript, we don't just create variables; we tell the computer how to 
// treat them. 
// - Use 'const' for things that never change (like your name or a math constant).
// - Use 'let' for things that will change (like a score or a price).
// - To combine text and variables, we use backticks `` (usually found next to the number 1) 
//   and the ${variable} syntax. This is called a Template Literal.
// -------------------------------------------

// TODO:
// 1. Create a 'const' variable for your favourite food.
// 2. Create a 'let' variable for its price (e.g. 12.50).
// 3. Create a 'let' variable for quantity (e.g. 2).
// 4. Create a variable called 'total' that multiplies price and quantity.
// 5. Print the result using a Template Literal (backticks).
//
// EXPECTED OUTPUT: 2 servings of Pasta will cost £25.

// Write your code below:


console.log("\n-------------------------------------------\n"
    + "Task 2: Decision Making (if / else)\n"
    + "-------------------------------------------");

// GUIDANCE:
// JavaScript 'if' statements require brackets () around the condition and 
// curly braces {} around the code you want to run.
// Unlike some other languages, indentation doesn't define the block—the { } do!
// -------------------------------------------

// TODO:
// 1. Create a variable 'userAge' and set it to a number.
// 2. Use an if/else statement to check:
//    - If userAge is 18 or older, print "Access granted."
//    - Otherwise, print "Access denied."
// 3. Remember to use === for your comparison!

// Write your code below:


console.log("\n-------------------------------------------\n"
    + "Task 3: The Remainder Operator (%)\n"
    + "-------------------------------------------");

// GUIDANCE:
// The % operator (Modulus) finds the "remainder" left over after division.
// If you divide a number by 2 and the remainder is 0, the number is EVEN.
// If the remainder is 1, the number is ODD.
// This is a very common way to create logic for patterns or game turns in a program.
// -------------------------------------------

// TODO:
// 1. Create a variable 'numberToCheck' and set it to 7 (or any number).
// 2. Write an if/else statement using (numberToCheck % 2 === 0).
// 3. If true, print "The number is even."
// 4. If false, print "The number is odd."

// Write your code below:


// -------------------------------------------
// SAVING YOUR WORK
// -------------------------------------------
// 1. Save this file (Ctrl+S).
// 2. Run in terminal (replace filename.js with your file name):
//    git add filename.js
//    git commit -m "Completed core JS logic tasks 1-3"
//    git push origin main
// -------------------------------------------


// -------------------------------------------
// EXTENSION ACTIVITIES
// -------------------------------------------

console.log("\n-------------------------------------------\n"
    + "Extension 1: The Simple Calculator\n"
    + "-------------------------------------------");

// TODO:
// 1. Create two variables: 'num1' and 'num2' with any numbers.
// 2. Create a variable 'operator' and set it to either "+", "-", "*", or "/".
// 3. Use if/else if/else logic to check which operator was chosen.
// 4. Perform the math and print the result in a template literal.
// 5. Hint: Use else if (operator === "+") { ... }

// Write your code below:


console.log("\n-------------------------------------------\n"
    + "Extension 2: Speed Camera\n"
    + "-------------------------------------------");

// TODO:
// 1. Create a variable 'speed' and 'speedLimit'.
// 2. If speed is more than 10% over the limit, print "Fine issued."
// 3. If speed is over the limit but less than 10% over, print "Warning."
// 4. Otherwise, print "Safe driving."

// Write your code below:


console.log("\n-------------------------------------------\n"
    + "Extension 3: Variable Swap (Logic Puzzle)\n"
    + "-------------------------------------------");

// TODO:
// 1. Create two variables: let a = 5 and let b = 10.
// 2. Without just typing a = 10, try to swap their values.
// 3. Hint: You might need a third "temporary" variable to hold a value 
//    while you move them around!
// 4. Print 'a' and 'b' at the end to prove they have swapped.

// Write your code below:


// -------------------------------------------
// SAVING YOUR WORK
// -------------------------------------------
// 1. Save this file.
// 2. Run (replace filename.js with your file name):
//    git add filename.js
//    git commit -m "Completed JS extensions"
//    git push origin main
// -------------------------------------------


console.log("\n-------------------------------------------\n"
    + "ADVANCED ACTIVITY: The FizzBuzz Challenge\n"
    + "-------------------------------------------");

// TODO:
// FizzBuzz is a classic developer interview question used to test logic.
// 1. Create a variable 'testNum'.
// 2. Check the following conditions in order:
//    - If the number is divisible by 3 AND 5, print "FizzBuzz".
//    - If divisible by 3, print "Fizz".
//    - If divisible by 5, print "Buzz".
//    - Otherwise, just print the number itself.
//
// Hint: In JS, "AND" is written as '&&'. 
// Example: if (number % 3 === 0 && number % 5 === 0)

// Write your code below:


// -------------------------------------------
// SAVING YOUR WORK
// -------------------------------------------
// 1. Save this file.
// 2. Run (replace filename.js with your file name):
//    git add filename.js
//    git commit -m "Completed FizzBuzz challenge"
//    git push origin main
// -------------------------------------------
