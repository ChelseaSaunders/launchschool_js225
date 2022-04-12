"use strict"

// 1. Is JavaScript a garbage-collected language, and if so, what does this
// entail?

// My (wrong) answer
// Programmers cannot implement garbage collection manually, but JS periodically
// does garbage colleciton for variables that are not used subsequently in
// the program.

// LS Answer:
// JavaScript is a garbage-collected language. This means that the JS runtime,
// rather than the developer, handles memory deallocation.


// 2. Consider the code below:
let myNum = 1;

function foo() {
  let myArr = ['this is an array'];
  // what is eligible for GC here?
}

foo();

// what is eligible for GC here? // my arr

// more code

// Are either of the values 1 or ['this is an array] eligible for garbage
// collection on line 21? What about on line 26?

// LS Answer:
// Neither value is eligible for garbage collection on line 21. Since variables
// that contain numbers are stored on the stack, the value 1 is never eligible
// for GC. The array is also not eligible for GC since it is still referenced by
// the myArr variable.

// ['this is an array'] is eligible for garbage collection on line 26. Since
// myArr is function-scoped, the variable's reference to ['this is an array'] is
// broken after the function finishes running.


// 3. Consider the code below:

function makeGreeting() {
  let foo = { greeting: 'hello' };
  return function(name) {
    foo.name = name;
    return foo;
  };
}

let greeting = makeGreeting();

// is the object eligible for GC here?

// more code

// Is the object created and assigned to foo on line 2 eligible for garbage
// collection on line 56?

// No because the greeting variable is bound to the foo object.  The closure
// prevents the object from being garbage collected.

// 4. Consider the scrppt below:

let bash = {};

// Will the object {} ever be eligible for garbage collection?
// Yes. After the script finishes running the object will be eligible for
// garbage collection.