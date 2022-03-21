"use strict"

// What will the code below output to the console?

// let message = 'Hello from the global scope!';

// function func(message) {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func(message); // 'Hello from the function scope!'
// console.log(message); // 'Hello from the global scope!'

// What will the code below log to the console? What does this output
// demonstrate in relation to the output of problem one?

// let myObj = { message: 'Greetings from the global scope!' };

// function func(obj) {
//   obj.message = 'Greetings from the function scope!';
//   console.log(obj.message);
// }

// func(myObj);

// console.log(myObj.message);  // 'Greetings from the function scope!'

// In example 1, the reassignmet on line 8 only impacts the function-scoped
// variable 'message', but does not alter the outer-scope `message` variable,
// demonstrating that primitive values cannot be mutated by functions.  In
// the second example, the value assigned to the `message` key within `myObj` is
// reassigned.  When this reassignment takes place, `obj.message` is referencing
// the global scope `myObj.message` key, rather than just a function-scoped
// variable, and therefore the `func` function mutates the `myObject` object.

// What will the code below log to the console?

// let message = 'Hello from the global scope!';

// function func() {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func(); // 'Hello from the function scope!'
// console.log(message); // 'Hello from the function scope!'

// Since `message` is not passed as an argument, nor is it initialzied as a
// local variable within the function, it references the outer-scope `message`
// variable so the reassignment occurs for the outer-scope `message` variable.

// What will the code below log to the console?

// let a = 10;
// let obj = {
//   a
// }

// let newObj = obj;
// newObj.a += 10;

// console.log(obj.a === a); // false
// console.log(newObj.a === obj.a); // true

// Consider the code below:

let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true

// If objects are mutable, why does the second to last line return false?

// Line 77 creates a new object and assigns it to animal, reassigning the
// variable rather than mutating the original value. This new object isn't the
// same as the object initialized on line 68, and as a result, line 84 evaluates
// to false, and line 85 evaluates to true.