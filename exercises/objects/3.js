// In JavaScript, comparing two objects either with == or === checks for object
// identity. In other words, the comparison evaluates as true if it's the same
// object on either side of == or ===. This is a limitation, in a sense, because
// sometimes we need to check if two objects have the same key/value pairs.
// JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and returns
// true or false depending on whether the objects have the same key/value pairs.

function objectsEqual(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (!matchingArrays(obj1Keys, obj2Keys)) return false;

  let obj1Vals = Object.values(obj1);
  let obj2Vals = Object.values(obj2);

  return matchingArrays(obj1Vals, obj2Vals);
}

function matchingArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false