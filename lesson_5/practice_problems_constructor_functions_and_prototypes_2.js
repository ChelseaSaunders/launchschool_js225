"use strict"

// 1. Follow the steps below:

//     Create an object called shape that has a getType method.
//     Define a Triangle constructor function whose prototype is shape. Objects created with Triangle should have four own properties: a, b, c (representing the sides of a triangle), and type.
//     Add a new method to the prototype called getPerimeter.

// Test your implementation with the following code:

let shape = {
  getType() {
    return this.getType;
  },
};

function Triangle(side1, side2, side3) {
  this.type = 'triangle';
  this.a = side1;
  this.b = side2;
  this.c = side3;
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

Triangle.prototype.constructor = Triangle;

let t = new Triangle(3, 4, 5);
t.constructor;                 // Triangle(a, b, c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 12
t.getType();                   // "triangle"

// 2. Since a constructor is just a function, it can be called without the new
//    operator, and this can lead to unexpected results and errors especially
//    for inexperienced programmers.

// Write a constructor function that can be used with or without the new
// operator, and return the same result in either form. Use the code below to
// check your solution:

function User(first, last) {
  if (!(this instanceof User)) return new User(first, last);
  this.name = `${first} ${last}`;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

// 3. Create a function that can create an object with a given object as its
//    prototype, without using Object.create.

function createObject(obj) {
  funtction NewObject() {}
  newObject.prototype = obj;
  return new NewObject();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
foo.isPrototypeOf(bar);         // true

// 4. Similar to the problem above, without using Object.create, create a
// begetObject method that you can call on any object to create an object
// inherited from it:

let foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  function CopyPrototype() {};
  CopyPrototype.prototype = this;
  return new CopyPrototype();
}

let bar = foo.begetObject();
foo.isPrototypeOf(bar);         // true

// 5. Create a function neww, so that it works like the new operator. For this
// practice problem, you may use Object.create.

function neww(constructor, args) {
  let newObject = Object.create(constructor.prototype);
  let result = constructor.apply(newObject, args);

  return typeof result === 'object' ? result : newObject;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}

