// What function can we use to permanently bind a function to a particular
// execution context?

// the function method .bind(context)

// What will the code below log to console?

// let obj = {
//   message: 'JavaScript',
// };

// function foo() {
//   console.log(this.message);
// }

// foo.bind(obj);

// Nothing. Unlike call and apply, bind doesn't invoke the receiver function.
// Rather, it returns a new function that is permanently bound to the context
// argument.

// What will the code below output?

// let obj = {
//   a: 2,
//   b: 3,
// };

// function foo() {
//   return this.a + this.b;
// }

// let bar = foo.bind(obj);

// console.log(bar());
// 5


// What will the code below log to the console?

// let positiveMentality = {
//   message: 'JavaScript makes sense!',
// };

// let negativeMentality = {
//   message: 'JavaScript makes no sense!',
// };

// function foo() {
//   console.log(this.message);
// }

// let bar = foo.bind(positiveMentality);

// negativeMentality.logMessage = bar;
// negativeMentality.logMessage();

// 'JavaScript makes sense!'

// What will the code below output?

// let obj = {
//   a: 'Amazebulous!',
// };
// let otherObj = {
//   a: "That's not a real word!",
// };

// function foo() {
//   console.log(this.a);
// }

// let bar = foo.bind(obj);

// bar.call(otherObj);
// 'Amazebulous