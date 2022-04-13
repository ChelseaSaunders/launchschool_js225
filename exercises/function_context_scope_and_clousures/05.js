"use strict";

// Our earlier implementation of the Function.prototype.bind was simplistic.
// Function.prototype.bind has another trick up its sleeve besides hard-binding
// functions to context objects. It's called partial function application. Read
// this assignment and the MDN documentation to learn more about partial
// function application.

// Alter the myBind function written in the previous exercise to support partial
// function application.

function myBind(funct, context, someArgs) {
  return function(...args) {
    let allArgs = someArgs.concat(args);
    return funct.apply(context, allArgs);
  };
}