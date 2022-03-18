// let me = {
//   firstName = 'Chelsea',
//   lastName = 'Saunders',
// };

let me = {};
me.firstName = 'Chelsea';
me.lastName = 'Saunders';

let friend = {
  firstName: 'Ali',
  lastName: 'Legge',
};

let mother = {
  firstName: 'Janeene',
  lastName: 'Porcher',
};

let father = {
  firstName: 'Steve',
  lastName: 'Chilcoat',
};

let invalid = 'invalid';

// let people = [];

// people.push(me);
// people.push(friend);
// people.push(mother);
// people.push(father);

let people = {
  let lastIndex = collection.length - 1;

  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) return;
    lastIndex += 1;
    this.collection[lastIndex] = person;
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      // eslint-disable-next-line max-len
      if (comparator.firstName === person.firstName && comparator.lastName === person.lastName) {
        index = i;
      }
    });

    return index;
  },

  remove: function(person) {
    let index;
    if (this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) return;

    this.collection.splice(index, 1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) return;

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) return;

    let existingPersonId = this.getIndex(person);
    if(existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

// function fullName(person) {
//   console.log(person.firstName + ' ' + person.lastName);
// }

// function rollCall(collection) {
//   let length;
//   let i;
//   for (i = 0 ,length = collection.length; i < length; i += 1) {
//     fullName(collection[i]);
//   }
// }

// function rollCall(collection) {
//   collection.forEach(function(item) {
//     fullName(item);
//   });
// }

// function rollCall(collection) {
//   collection.forEach(fullName);
// }

// fullName(me);
// fullName(friend);
// fullName(mother);
// fullName(father);

// rollCall(people);

people.rollCall();

console.log(people.getIndex(friend));
people.remove(friend);
console.log(people.getIndex(friend));
people.add(friend);
people.rollCall();
people.add(invalid);
people.rollCall();