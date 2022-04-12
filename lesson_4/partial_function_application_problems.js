"use strict"

// Write a function named greet that takes two arguments and logs a greeting:

function greet(greeting, name) {
  let firstLetter = greeting.slice(0, 1).toUpperCase();
  let restOfletters = greeting.slice(1, greeting.length).toLowerCase();
  greeting = firstLetter + restOfletters;
  console.log(`${greeting}, ${name}!`);
}

greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!

// Use the partial function shown above and your solution to problem 1 to create
// sayHello and sayHi functions that work like this:

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}
let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi');

sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!
