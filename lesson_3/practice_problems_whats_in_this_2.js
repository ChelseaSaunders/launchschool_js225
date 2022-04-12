// NOTE: Real practice problems done in Chrome snippets; saved here for
// posterity

// While working through these practice problems, assume that the code runs
// within a web page.

// What does this point to in the code below, and what does the method return?
let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

myObject.myChildObject.myMethod();

// undefined because myChildObject doesn't havea count property

// In the previous problem, how would you change the context, or the value of
// this, to be the parent myObject?

myObject.myChildObject.myMethod.call(myObject);

// What does the following code log to the console?

let person = {
  firstName: 'Peter',
  lastName: 'Parker',
  fullName() {
    console.log(this.firstName + ' ' + this.lastName +
                ' is the Amazing Spiderman!');
  },
};

let whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();
// Peter Parker is the Amazing Spiderman!

// What does the following code log to the console?

let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    let self = this;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());

//

// If you want this program to log 34000, how would you fix it