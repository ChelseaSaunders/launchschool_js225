"use strict"

// // 1. What does the following code log to the console?

// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo(); //2

// foo.bar(); // 2
// Foo(); // 2

// obj = {};
// Foo.call(obj); // 2
// obj.bar(); // 2

// console.log(this.a); // 2


// // LS ANSWER:
// // Line 13 creates a new object foo with the constructor function. The
// // constructor function calls the bar method while constructing the object,
// // which logs 2 out. foo.bar() logs the next 2. With Foo(), we're calling the
// // Foo function with the global object context which sets the global object's a
// // to 2, and logs out the next 2. Foo.call(obj) adds the a property and the bar
// // method to the obj object, then called the bar method, logging out the next 2.
// // At this point, we can now call the bar method directly on obj so this logs
// // out the fifth 2. Finally, since the global object's a property is already
// // changed to 2, the last 2 is logged out.

// // 2. What does the following code log to the console?

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area();
//   this.perimeter = RECTANGLE.perimeter();
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);
// // NaN because this is in RECTANGLE

// // How do you fix this problem?
// // use.call with this as arg in Rectangle
// //   this.area = RECTANGLE.area.call(this);
// //   this.perimeter = RECTANGLE.perimeter.call(this);

// // 3. Write a constructor function Circle, that takes a radius as an argument.
// // You should be able to call an area method on the created objects to get the
// // circle's area. Test your implementation with the following code:

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * (this.radius ** 2);
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27

// // 4. What will the following code log out and why?

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword()); // true

// // 5. What will the following code log out and why?

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// console.log(ninja.swingSword());
// Uncaught TypeError: ninja.swingSword is not a function

// In this case, we didn't add a new method to the constructor function's
// prototype object by mutating it, but rather made it point to a different
// object. The ninja object, meanwhile, still inherited from the original
// prototype object, therefore it couldn't find a swingSword method anywhere on
// its prototype chain.

// // 6. Implement the method described in the comments below:

let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};

console.log(ninjaA.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // must log true

// // 7. In this problem, we'll ask you to create a new instance of an object,
// // without having direct access to the constructor function:

// let ninjaA = (function() {
//   function Ninja(){};
//   return new Ninja();
// })();

// let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));
// OR
//
// let ninjaB = new ninjaA.constructor;

// console.log(ninjaB.constructor === ninjaA.constructor);    // should log true

