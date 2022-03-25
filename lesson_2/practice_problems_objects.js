"use strict"

let invoices = { unpaid: [], };

invoices.add = function(name, amount) {
  this.unpaid.push({ name, amount, });
};

invoices.totalDue = function() {
  return this.unpaid.map((item) => item.amount)
                    .reduce((sum, currentAmount) => sum + currentAmount);
};

invoices.paid = [];

invoices.payInvoice = function(clientName) {
  let unpaid = [];
  this.unpaid.forEach((invoice) => {
    if (invoice.name === clientName) {
      this.paid.push(invoice);
    } else {
      unpaid.push(invoice);
    }
  });
  this.unpaid = unpaid;
};

invoices.totalPaid = function() {
  return this.paid.map((item) => item.amount)
                    .reduce((sum, currentAmount) => sum + currentAmount);
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue());
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());