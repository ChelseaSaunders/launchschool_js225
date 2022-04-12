"use strict"

// 1. Use the method we learned above to assign foo below to a new Object with
//    prot as its prototype.

let prot = {};

let foo = Object.create(prot);

// 2. Use getPrototypeOf to demonstrate the prototypal relationship between prot
//    and foo.

console.log(Object.getPrototypeOf(foo) === prot); // true

// 3. Use isPrototypeOf to demonstrate the prototypal relationship between prot
//    and foo.

console.log(prot.isPrototypeOf(foo)); // true

// 4. What will the last two lines of the code below return? Why?

console.log(prot.isPrototypeOf(foo));
console.log(Object.prototype.isPrototypeOf(foo));

// LS Answer:
// Each line will return true. The first line returns true because we assign foo
// on line 3 a new object with prot set explicitly as its prototype. The second
// line returns true because of prototype chaining. The default prototype
// object, Object.prototype, is prot's object prototype since it was created as
// an Object literal. Because of the relationship between foo and prot,
// Object.prototype is on foo's prototype chain.

