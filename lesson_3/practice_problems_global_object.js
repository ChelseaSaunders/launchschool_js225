// NOTE: REAL ASSIGNMENT DONE IN CHROME SNIPPETS!!
// Just saving here for reference/posterity.

// With strict mode not enabled, what object serves as the implicit execution
// context? What happens when strict mode is enabled?

// Without strict mode, the global object is the implicit execution context.  In
// strict mode, the global object is not accessible as the implicit execution
// context and instead window/undefined is the implicit execution context.

// What does the console below log?

a = 10;

console.log(window.a === a);
// true

// Initializing an undeclared variable, as we do on line 1 in the code above,\
// automatically creates that variable as a property on window since the global
// object is the implicit context for evaluating expressions.

// What does the code below do?

function func() {
  let b = 1;
}

func();

console.log(b);

// Throw an error because let variables have block scope and isn't accessible
// outside of the function

// What does the code below do?

function func() {
  b = 1;
}

func();

console.log(b);

// since there is no variable declaration, the variable `b` is assigned to the
// global object, so when invoked outside of the function on line 43, `b` is
// accessible, as it is in the global scope, so 1 is output in the console.

// What does the code below log?

// "use strict"

function func() {
  b = 1;
}

func();

console.log(b);

// error; strict mode wil not let you initialize variables without a declaration
// LS answer:
// Line 4 raises a ReferenceError. In strict mode, we don't have access to the
//  global object as the implicit execution context. Thus, all variables have to
// be first declared before being used.