"use strict"

// In the following code, when can JavaScript garbage collect each of the
// following arrays? [1], [2], and [1, 2].

let a = [1];

function add(b) {
  a = a.concat(b); // can garbage collect [1]/ let variable a  from line 6 since
}                  // it is reassigned to local function variable a

function run() {
  let c = [2];
  let d = add(c);
}
 // can garbage collect [2] since c is local variable, no longer in use after
 // run returns

run();
// can garbage collect  [1, 2]
// We can GC [1, 2] only after the program ends. Since a is a global variable,
// the reference to [1, 2] doesn't go away until JS discards the a variable, and
// that only occurs when the program terminates.

// In the following code, when can JavaScript garbage collect the value
// ["Steve", "Edie"]?

function makeHello(names) {
  return function() {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);

// ["Steve", "Edie"] is eligible for GC when the program finishes; specifically,
// after JavaScript garbage collects the function referenced by
// helloSteveAndEdie.