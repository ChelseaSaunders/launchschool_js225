"use strict"

// 1/ What naming convention separates constructor functions from other
// functions?

// Starting with capitalized letter

// 2. What will the code below output? Why?

// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = Lizard();
// lizzy.scamper(); // ?

// LS answer:
// This code will throw a TypeError because scamper is an undefined property on
// lizzy. This is the case because Lizard was invoked without the new operator
// and since there is no explicit return value, the return value is undefined.
// As a result, the value assigned to lizzy is undefined and, consequently
// calling lizzy.scamper results in an error since it is attempting to call the
// scamper method on undefined.

// 3. Alter the code in problem 2 so that it produces the desired output.

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?

