"use strict"

// 1. What will the code below log to the console?

// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;

// console.log(bar.a); // 1

// // 2. What will the code below log to the console?

// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;
// bar.a = 2;
// console.log(bar.a); // 2

// 3. Given the code below, do we know for certain that on the last line we are
// ultimately referencing a property owned by boo? How can we test that far is
// not delegating to boo?

let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

far.myProp;       // 1

// far.hasOwnProperty('myProp') or
// Object.getOwnPropertyNames(far).includes('myProp')

// LS ANSWER
// No, we don't know for certain, because there could be a property myProp
// created on far in the omitted code between the declaration and assignment of
// far and the property reference on the last line.

// Given the code, we can use hasOwnProperty to test whether myProp is a
// property owned by far or it is just delegating to boo.

