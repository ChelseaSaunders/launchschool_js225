"use strict"

// In these problems, we will be developing a factory function for objects
// representing countries.

// Consider the code below:

// let chile = {
//   name: 'The Republic of Chile',
//   continent: 'South America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// let canada = {
//   name: 'Canada',
//   continent: 'North America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// let southAfrica = {
//   name: 'The Republic of South Africa',
//   continent: 'Africa',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// Think about what is necessary and unnecessary in this code. Where is there
// duplication?

// keys are the same, values are not, exceptfor the function

// Given our observations about the code above, implement a factory function for
// our country objects following the template laid out below:

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      let haveVisited = this.visited ? 'have' : "haven't";
      return `${this.name} is located in ${this.continent} I ${haveVisited} ${this.name}.`;
    },
    visit() {
      this.visited = true;
    },
  };
}

chile.getDescription();       // "The Republic of Chile is located in South America."
canada.getDescription();      // "Canada is located in North America."
southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."

// We've decided that we want to track which countries we've visited, and which
// we haven't. Alter the factory function so that the object it returns includes
// a property visited with a value of false.

// Let's add a method to our country objects that lets us visit them. Implement
// a method visitCountry that sets the visited property to true.

// Finally, let's update our getDescription function to reflect the visited
// data. Assuming that canada.visited is false, your code should look like
// this: