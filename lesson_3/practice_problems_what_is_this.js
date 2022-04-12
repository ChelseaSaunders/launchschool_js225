// ** NOTE: done in Chrome Snippits but saved here for posterity

// What does this point to in the code below?

function whatIsMyContext() {
  return this;
}
// Unknown--function invoction provides context, not function definition

// What does this point to in the code below?

function whatIsMyContext() {
  return this;
}

whatIsMyContext();

// The implicit global object, global context for short. In browser this wuould
// be window, in strict mode it would be undefined

// What does this point to in the code below?

function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }

    baz();
  }

  bar();
}

foo();

// Implicit global context, in this case window

// What does this point to in the code below?

let obj = {
  count: 2,
  method() {
    return this.count;
  },
};

obj.method();
// obj

// In strict mode, what does the following program log to the console?

function foo() {
  console.log(this.a);
}

let a = 2;
foo();

// it raises an error since the implicit context in strict mode is undefined
// which has no properties



// What does the following program log to the console?

let a = 1;
function bar() {
  console.log(this.a);
}

let obj = {
  a: 2,
  foo: bar,
};

obj.foo();

// 2 since the context is set to obj since the execution context for any method
// invoked without an explicit context provided is the calling object.

// What does the following code log to the console?

let foo = {
  a: 1,
  bar() {
    console.log(this.baz());
  },

  baz() {
    return this;
  },
};

foo.bar();
let qux = foo.bar;
qux();

// Executing from line 95 sets this in bar to the foo object (via implicit
// method execution context). From the body of the bar method, it then calls
// foo's baz method. baz returns foo since it has foo's context (again via
// implicit method execution context; this === foo following the execution from
// line 12), which causes line 4 to log foo.

// Line 97 calls bar as a function in the global context, window; since baz
// doesn't exist in window, JavaScript raises an error.
