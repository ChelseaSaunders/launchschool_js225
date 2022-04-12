"use strict"

// We want to have an object constructor that returns a new object with a log
// function that cannot be modified. In a normal constructor this is not
// possible. However, using the defineProperties method on Object we can
// provide properties and values and set whether each property can be changed or
// not. Here is an example of creating a property on an object that is
// read-only.

let obj = {
  name: 'Obj',
};

Object.defineProperties(obj, {
  age: {
    value: 30,
    writable: false,
  },
});

console.log(obj.age); // => 30
// obj.age = 32;         // throws an error in strict mode
console.log(obj.age); // => 30

// Using this method, create a function that constructs a new object with a log
// method that is read-only. The log method will use console.log to output the
// name property on itself.

// my solution (works)
function newPerson(name) {
  let personObj = {};
  Object.defineProperties(personObj, {
    log: {
      value: function() {
        console.log(name);
      },
      writable: false,
    },
  });

  return personObj;
}

// LS Simpler way:
// function newPerson(name) {
//   return Object.defineProperties({ name: name }, {
//     log: {
//       value() {
//         console.log(this.name);
//       },
//       writable: false
//     },
//   });
// }

let me = newPerson('Shane Riley');
me.log();     // => Shane Riley
// me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley

// If we wanted to have an object with properties that are all immutable, or not
// able to be changed, we can use the Object.freeze method to prevent anything
// from being changed about an object. This prevents any property values that
// are not objects from being changed or deleted.

let frozen = {
  integer: 4,
  string: 'String',
  array: [1, 2, 3],
  object: {
    foo: 'bar'
  },
  func() {
    console.log('I\'m frozen');
  },
};

Object.freeze(frozen);
frozen.integer = 8;
frozen.string = 'Number';
frozen.array.pop();
frozen.object.foo = 'baz';
frozen.func = function() {
  console.log('I\'m not really frozen');
};

console.log(frozen.integer);      // => 4
console.log(frozen.string);       // => String
console.log(frozen.array);        // => [1, 2]
console.log(frozen.object.foo);   // => baz
frozen.func();                    // => I'm frozen

// Can you explain why the array and object properties are changed, but the
// method is not?
// Because the reference points to the object, not the contents of the object--
// it is a shallow copy; the contents are mutable but you cannot reassing to a
// different object