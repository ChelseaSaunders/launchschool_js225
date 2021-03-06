"use strict";

// Implement an ancestors method that returns the prototype chain (ancestors) of
// a calling object as an array of object names. Here's an example output:

// name property added to make objects easier to identify
const foo = {name: 'foo'};
foo.ancestors = function() {
  let names = [];
  let currentPrototype = Object.getPrototypeOf(this);
  while (Object.getPrototypeOf(currentPrototype) !== null) {
    names.push(currentPrototype.name);
    currentPrototype = Object.getPrototypeOf(currentPrototype);
  }

  names.push('Object.prototype');
  return names;
};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

// LS Solution:
// Object.prototype.ancestors = function ancestors() {
//   const ancestor = Object.getPrototypeOf(this);

//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }

//   return ['Object.prototype'];
// };

