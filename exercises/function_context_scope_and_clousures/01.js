"use strict"

// Read the following code carefully. What do you think is logged on line 7. Try
// to answer the question before you run the code.

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// NaN because .fullName is invoked in the global context; there is no firstName
// or lastName properties on the global object, thus it points to undefined +
// undefined which is NaN;