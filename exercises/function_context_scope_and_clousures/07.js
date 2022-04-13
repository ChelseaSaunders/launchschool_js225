"use strict";

// Read the following code carefully. Will the JavaScript garbage collection
// mechanism garbage collect the array assigned to the variable array after the
// function pushIt is run on line 10?

function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();
// No since the function is assigned to a constant which retains a reference
// to that array

//LS ANSWER:
// No. Since pushIt can be called multiple times, it needs to retain a reference
// to the array variable in the closure. Since array is never reassigned, every
// call to pushIt returns a pointer to the same array. The array gets mutated by
// each invocation, but it's the same array, so it is not eligible for garbage
// collection.
