"use strict"

// Write a function named makeMultipleLister that, when invoked and passed a
// number, returns a function that logs every positive integer multiple of that
// number less than 100. Usage looks like this:

function makeMultipleLister(num) {
  return function listLogger() {
    if (num >= 100) return;
    let multiplier = 1;
    while(num * multiplier < 100) {
      console.log(num * multiplier);
      multiplier += 1;
    }
  };
}

let lister = makeMultipleLister(13);
// lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91

// Write a program that uses two functions, add and subtract, to manipulate a
// running total value. When you invoke either function with a number, it should
// add or subtract that number from the running total and log the new total to
// the console. Usage looks like this:
let total = 0;

function add(num) {
  return total += num;
}

function subtract(num) {
  return total -= num;
}


console.log(add(1));
// 1
console.log(add(42));
// 43
console.log(subtract(39));
// 4
console.log(add(6));
// 10

// Given the following code:

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
let systemStatus = // ?

// How can you set the value of systemStatus to the value of the inner variable
// status without changing startup in any way?
// You cant

// LS Answer:
// You can't do this. There is no way to access the value of the variable from
// outside the function. status is only available to the closure formed by the
// anonymous function returned by startup.

// This technique lets us define "private" variables.
