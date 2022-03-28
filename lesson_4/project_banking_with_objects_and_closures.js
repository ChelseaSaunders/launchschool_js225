"use strict"

// In this assignment, we'll build a small banking application and look at how
// we can use closures to control access to the application's data. We'll
// proceed through this assignment using some example code and then you will
// write code that satisfies it.

// 1. Create an object named account that represents a bank account. It should
//    contain a balance property that stores the account's current balance.

// let account = {
//   balance: 0,
// };

// 2. Add a deposit method to the account object that takes a single argument,
//    the value of the deposit. The deposit method adds the value of the
//    argument passed to it to the account's balance, and then returns it.

// let account = {
//   balance: 0,
//   deposit(amount) {
//     this.balance += amount;
//     return amount;
//   }
// };

// console.log(account.balance);
// // 0
// account.deposit(12);
// // 12
// console.log(account.balance);
// // 12
// account.deposit(10);
// // 10
// console.log(account.balance);
// // 22

// 3. Add a withdraw method to the account object that takes a single argument,
//    the amount to withdraw. It should subtract the amount from the account's
//    balance and return the amount subtracted.

// let account = {
//   balance: 100,
//   deposit(amount) {
//     this.balance += amount;
//     return amount;
//   },

//   withdraw(amount) {
//     this.balance -= amount;
//     return amount;
//   },
// };

// console.log(account.balance);
// // 100
// account.withdraw(19);
// // 19
// console.log(account.balance);
// // 81

// . If the account contains less than the withdrawal amount, the method should
//    limit the withdrawal to the amount available, and return the actual amount
//    withdrawn. This should leave the account with a balance of 0.

// let account = {
//   balance: 100,
//   deposit(amount) {
//     this.balance += amount;
//     return amount;
//   },

//   withdraw(amount) {
//     if (amount > this.balance) amount = this.balance;
//     this.balance -= amount;
//     return amount;
//   },
// };

// account.balance;
// 81
// account.withdraw(91);
// 81
// account.balance;
// 0

// 4. Each account should have a record of every deposit and withdrawal applied
//    to it. To do this, add a property named transactions to account that
//    contains an array of transactions, each of which is an object with type
//    and amount properties.

// let account = {
//   balance: 0,
//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push({type: 'deposit', amount,});
//     return amount;
//   },

//   withdraw(amount) {
//     if (amount > this.balance) amount = this.balance;
//     this.balance -= amount;
//     this.transactions.push({type: 'withdrawal', amount,});
//     return amount;
//   },

//   transactions: [],
// };

// console.log(account.deposit(23));
// // 23
// console.log(account.transactions);
// // [{...}]
// console.log(account.transactions[0]);
// // {type: "deposit", amount: 23}

// 5. We want to create more than one account. Move the account creation code to
//    a function named makeAccount that returns a new account object.

// function makeAccount() {
//   return {
//     balance: 0,
//     transactions: [],
//     deposit(amount) {
//       this.balance += amount;
//       this.transactions.push({type: 'deposit', amount,});
//       return amount;
//     },

//     withdraw(amount) {
//       if (amount > this.balance) amount = this.balance;
//       this.balance -= amount;
//       this.transactions.push({type: 'withdrawal', amount,});
//       return amount;
//     },
//   };
// }

// let account = makeAccount();
// console.log(account.deposit(15));
// // 15
// console.log(account.balance);
// // 15
// let otherAccount = makeAccount();
// console.log(otherAccount.balance);
// // 0

// 6. We also need an object to manage accounts: a bank. Create a function that
//    returns an object that represents a bank. The bank should have a property
//    named accounts that represents a list of accounts.

// function makeBank() {
//   return {
//     accounts: [],
//   };
// }

// function makeAccount() {
//   return {
//     balance: 0,
//     deposit(amount) {
//       this.balance += amount;
//       this.transactions.push({type: 'deposit', amount,});
//       return amount;
//     },

//     withdraw(amount) {
//       if (amount > this.balance) amount = this.balance;
//       this.balance -= amount;
//       this.transactions.push({type: 'withdrawal', amount,});
//       return amount;
//     },

//     transactions: [],
//   };
// }

// let bank = makeBank();
// console.log(bank.accounts);
// // []

// 7. Add a new method named openAccount to the object returned by makeBank. It
//    should create a new account, add it to the bank's accounts collection, and
//    return the new account. Each new account should have a unique account
//    number, starting at 101; each account number should be one greater than
//    the previous account created.

// function makeBank() {
//   let number = 101;
//   return {
//     accounts: [],
//     openAccount() {
//       let newAccount = makeAccount(number);
//       number += 1;
//       this.accounts.push(newAccount);
//       return newAccount;
//     },
//   };
// }

// function makeAccount(number) {
//   return {
//     number,
//     balance: 0,
//     deposit(amount) {
//       this.balance += amount;
//       this.transactions.push({type: 'deposit', amount,});
//       return amount;
//     },

//     withdraw(amount) {
//       if (amount > this.balance) amount = this.balance;
//       this.balance -= amount;
//       this.transactions.push({type: 'withdrawal', amount,});
//       return amount;
//     },

//     transactions: [],
//   };
// }

// let bank = makeBank();
// let secondBank = makeBank();
// let account = bank.openAccount();
// console.log(account.number);
// // 101
// console.log(bank.accounts);
// // [{...}]
// console.log(bank.accounts[0]);
// // {number: 101, balance: 0, transactions: Array[0]}
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number);
// // 102
// let secondBankAccount = secondBank.openAccount();
// console.log(secondBankAccount.number);

// 8. Add a new method to the bank object that transfers money from one account
//   to another.

// function makeBank() {
//   let number = 101;
//   return {
//     accounts: [],
//     openAccount() {
//       let newAccount = makeAccount(number);
//       number += 1;
//       this.accounts.push(newAccount);
//       return newAccount;
//     },
// // My attepmt
// // transfer(sourceAccount, destinationAccount, amount) {
// //   let sourceIndex = this.accounts.indexOf(sourceAccount);
// //   let destinationIndex = this.accounts.indexOf(destinationAccount);
// //   let modifiedAmount = this.accounts[sourceIndex].withdraw(amount);
// //   this.accounts[destinationIndex].deposit(modifiedAmount);
// //   return modifiedAmount;
// // },
// // LS's better version:
//   transfer(source, destination, amount) {
//     return destination.deposit(source.withdraw(amount));
//   },
// };

// function makeAccount(number) {
//   return {
//     number,
//     balance: 0,
//     deposit(amount) {
//       this.balance += amount;
//       this.transactions.push({type: 'deposit', amount,});
//       return amount;
//     },

//     withdraw(amount) {
//       if (amount > this.balance) amount = this.balance;
//       this.balance -= amount;
//       this.transactions.push({type: 'withdrawal', amount,});
//       return amount;
//     },

//     transactions: [],
//   };
// }

// let bank = makeBank();
// let source = bank.openAccount();
// console.log(source.deposit(10));
// // 10
// let destination = bank.openAccount();
// console.log(bank.transfer(source, destination, 7));
// // 7
// console.log(source.balance);
// // 3
// console.log(destination.balance);
// // 7
// console.log(bank.transfer(source, destination, 20));
// // 3
// console.log(source.balance);
// // 3
// console.log(destination.balance);
// // 7

// 9. Change the code so that users can access the account balance, account
//     number, and transactions list by calling methods, but not by directly
//     accessing those properties.

// eslint-disable-next-line max-lines-per-function
// function makeBank() {
//   let currentAccountNumber = 101;
//   let accounts = []
//   // eslint-disable-next-line max-lines-per-function
//   function makeAccount(number) {
//     let transactions = [];
//     let balance = 0;

//     return {
//       deposit(amount) {
//         balance += amount;
//         transactions.push({type: 'deposit', amount,});
//         return amount;
//       },

//       withdraw(amount) {
//         if (amount > this.balance) amount = this.balance;
//         this.balance -= amount;
//         this.transactions.push({type: 'withdrawal', amount,});
//         return amount;
//       },

//       balance() {
//         return balance;
//       },

//       number() {
//         return number;
//       },

//       transactions() {
//         return transactions;
//       },
//     };
//   }

//   return {
//     accounts: [],
//     openAccount() {
//       let newAccount = makeAccount(currentAccountNumber);
//       currentAccountNumber += 1;
//       accounts.push(newAccount);
//       return newAccount;
//     },

//     transfer(source, destination, amount) {
//       return destination.deposit(source.withdraw(amount));
//     },
//   };
// };

// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.balance());
// // 0
// console.log(account.deposit(17));
// // 17
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number());
// // 102
// console.log(account.transactions());
// // [Object]

// 10. Change the code so that users can no longer access the list of accounts.

// eslint-disable-next-line max-lines-per-function
function makeBank() {
  let currentAccountNumber = 101;
  let accounts = []
  // eslint-disable-next-line max-lines-per-function
  function makeAccount(number) {
    let transactions = [];
    let balance = 0;

    return {
      deposit(amount) {
        balance += amount;
        transactions.push({type: 'deposit', amount,});
        return amount;
      },

      withdraw(amount) {
        if (amount > this.balance) amount = this.balance;
        this.balance -= amount;
        this.transactions.push({type: 'withdrawal', amount,});
        return amount;
      },

      balance() {
        return balance;
      },

      number() {
        return number;
      },

      transactions() {
        return transactions;
      },
    };
  }

  return {
    openAccount() {
      let newAccount = makeAccount(currentAccountNumber);
      currentAccountNumber += 1;
      accounts.push(newAccount);
      return newAccount;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
};

let bank = makeBank();
console.log(bank.accounts);
// undefined