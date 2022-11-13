// Multiplication table
// Write a program that asks the user for a number, 
// then shows the multiplication table for this number.
// When you are done, improve the program so it only accepts numbers between 2 and 9 
// (use the previous exercise as a blueprint).
    // let userNum = 0
    // let multiTable = []

    // while(userNum <= 2 || userNum > 9){
    //     userNum = prompt('Please enter a number between 2 and 9:')
    // }
    // if(userNum > 2 && userNum <= 9){
    //     for(i=1; i <= 12; i++){
    //         multiTable[i]= userNum * i
    //     }
    //     console.log(multiTable)
    // }
        

// Neither yes nor no 
// Write a program that plays "neither yes, nor no" with the user. 
// Specifically, the programs asks the user to enter text 
// until either "yes" or "no" is typed, which ends the game.

    // let userInput = ''
    // while(userInput !== 'yes' && userInput !== 'no'){
    //     userInput = prompt('Please enter yes or no:')
    // }


// Improved hello
// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// // Say hello to the user
    // function sayHello() {
    //     let firstName = prompt('What is your first name?')
    //     let lastName = prompt('What is your last name?')
    //     const message = `Hello, ${firstName} ${lastName}!`;
    //     console.log(message)
    // }
    // sayHello()
// // TODO: ask user for first and last name
// // TODO: call sayHello() and show its result


// Number squaring
// Complete the following program so that the square1() and square2() functions work properly.

// // // Square the given number x
//     function square1(x) {
//         return x * x
//     }

// // // Square the given number x
//     const squareTo10 = () => {
//         for(i=0; i<=10; i++){
//             console.log(i * i)
//         }
//     }

//     console.log(square1(0)); // Must show 0
//     console.log(square1(2)); // Must show 4
//     console.log(square1(5)); // Must show 25

//     console.log(squareTo10())
// // When it's done, update the program so that it shows the square of every number between 0 and 10.

// // Writing 10 dumb calls to square() is forbidden! You know how to repeat statements, don't you? ;)

// Minimum of two numbers
// Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that 
// the min() function returns the minimum of its two received numbers.

// // // TODO: write the min() function
//     const minOfTwo = (num1, num2) => {
//         if(num1 > num2){
//             return num2
//         }else if(num1 < num2){
//             return num1
//         }else{
//             return num1
//         }
//     }
// console.log(minOfTwo(4.5, 5)); // Must show 4.5
// console.log(minOfTwo(19, 9));  // Must show 9
// console.log(minOfTwo(1, 1));   // Must show 1

// Calculator
// Complete the following program so that it offers the four basic arithmetical operations:
//  addition, subtraction, multiplication and division. 
//  You can use either a function declaration or a function expression.

// // TODO: complete program
// const calculate = (num1, operand, num2) => {
//     switch(operand) {
//         case '+':
//             console.log(num1 + num2);
//             break;
//         case '-':
//             console.log(num1 - num2);
//             break;
//         case '*':
//             console.log(num1 * num2);
//             break;
//         case '/':
//             console.log(num1 / num2);
//             break;
//     }
// }
// calculate(4, "+", 6);  // Must show 10
// calculate(4, "-", 6);  // Must show -2
// calculate(2, "*", 0);  // Must show 0
// calculate(12, "/", 0); // Must show Infinity

// Circumference and area of a circle
// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. 
// // Test it using user input.
// let radius = Number(prompt('What is the radius of the circle?'))
    // const circumference = () => {
    //     console.log(Math.PI * (2 * radius))
    // }
    // const areaOfCircle = () => {
    //     return (Math.PI * (radius ** 2))
    // }
    // circumference()
    // console.log(areaOfCircle())
    // console.log(Math.PI)
    // console.log(radius)
// // Here are some tips for solving this exercise:

// // Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
// // The value of number π (Pi) is obtained with Math.PI in JavaScript.
// // You might want to use the exponentiation operator ** to perform computations.
// //console.log(2 ** 3); // 8: 2 * 2 * 2
// //console.log(3 ** 2); // 9: 3 * 3

