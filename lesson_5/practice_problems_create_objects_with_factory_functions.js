"use strict"

// 1. What are the two disadvantages of working with factory functions?
// You cannot use instanceof to identify inheritence relationships
// You always copy the entire contents of the class

// LS Answer:
// Each object created by the factory function owns the same methods, which can
// be redundant.
// There is no way to tell whether an object was created by any given function.


// 2. Rewrite the code below to use object-literal syntax to generate the
// returned object:

// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

// 3. In the following problems, we'll be working through an invoice processing
// program. To get you started, we provide you with the following code that can
// process one invoice:

// let invoice = {
//   phone: 3000,
// //   internet: 6500,
// // };

// // let payment = {
// //   phone: 1300,
// //   internet: 5500,
// // };

// // let invoiceTotal = invoice.phone + invoice.internet;
// // let paymentTotal = payment.phone + payment.internet;
// // let remainingDue = invoiceTotal - paymentTotal;

// // console.log(paymentTotal);         // => 6800
// // console.log(remainingDue);         // => 2700

// // To be able to process multiple invoices, we'll need to have a factory
// // function that we can use to create invoices. The requirements for this
// // factory function are the following:

//     // It returns an invoice object, with phone and internet properties, and a
//     // total method.
//     // The default value for the phone service is 3000, and the internet service
//     // is 5500 (in cents, of course!).
//     // The function takes an object argument with attributes to override the
//     // default values.

// // Your implemented function should be able to work with the code below:

// function createInvoice(services = {}) {
//   return {
//     phone: services.phone || 3000,
//     internet: services.internet || 5500,
//     total() {
//       return this.phone + this.internet;
//     },
//   };
// }

// function invoiceTotal(invoices) {
//   let total = 0;
//   let i;

//   for (i = 0; i < invoices.length; i += 1) {
//     total += invoices[i].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({
//   internet: 6500,
// }));

// invoices.push(createInvoice({
//   phone: 2000,
// }));

// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices));             // => 31000

// // 4. Now let's build a factory function to create payments. The function can
// // take an object argument in one of 3 forms:

//     // Payment for one service, such as: {internet: 1000} or {phone: 1000}
//     // Payment for both services, such as: {internet: 2000, phone: 1000}.
//     // Payment with just an amount property, such as: {amount: 2000}.

// // and should return an object that has paid services, and a total method that
// // returns the payment total. If the amount property is not present, this should
// // return the sum of phone and internet services; if the amount property is
// // present, just return the value of that property.

// // Your code should work with the following:

function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total() {
      return this.amount || this.phone + this.internet;
    },
  };
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000

// 5. Update your createInvoice function to make it possible to add payment(s)
// to invoices. Use the code below as a guideline:

// eslint-disable-next-line max-lines-per-function
function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
    total() {
      return this.phone + this.internet;
    },

    addPayment(newPayment) {
      this.payments.push(newPayment);
    },

    addPayments(newPayments) {
      newPayments.forEach ((newPayment) => this.addPayment(newPayment));
    },

    totalPayments() {
      let total = 0;
      this.payments.forEach((paymentObj) => {
        total += (paymentObj.phone || 0);
        total += (paymentObj.internet || 0);
        total += (paymentObj.amount || 0);
      });

      return total;
    },

    amountDue() {
      return this.total() - this.totalPayments();
    }
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0

