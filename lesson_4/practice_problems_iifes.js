// "use strict"

// // 1. Will the code below execute?

// function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();

// // No because it is not wrapped in parentheses.

// // 2. Edit the code from problem one so it executes without error.

// (function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// // })();

// // 3. The code below throws an error:

// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// // function sum(arr) {
// //   return arr.reduce(function(sum, number) {
// //     sum += number;
// //     return sum;
// //   }, 0);
// // }
// // sum += sum(numbers);  // ?

// // IIFE
// sum += (function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// // What kind of problem does this error highlight? Use an IIFE to address it, so
// // that code runs without error.
// // This demonstrates the problem of duplicate variable names.


// // 4. Consider the output below:

// countdown(7);
// // 7
// // 6
// // 5
// // 4
// // 3
// // 2
// // 1
// // 0
// // Done!

// // Implement a function countdown that uses an IIFE to generate the desired
// // output.
// function countdown(num) {
//   (function() {
//     while (num >= 0) {
//       console.log(num);
//       num -= 1;
//     }
//     console.log('Done!');
//   })(num);
// }

// countdown(7);

// // 5. Is the named function in this IIFE accessible in the global scope?

// (function foo() {
//   console.log('Bar');
// })();

// foo() // ?

// // No. Although the function is named, it isn't visible outside of the scope
// // created by the IIFE.

// // 6. For an extra challenge, refactor the solution to problem 4 using
// // recursion, bearing in mind that a named function created in an IIFE can be
// // referenced inside of the IIFE.

function countdown(number) {
  (function recursiveCounter(num) {
    console.log(num);
    if (num === 0) {
      console.log('Done!');
    } else  {
      recursiveCounter(num - 1);
    }
  })(number);
}

countdown(7);

