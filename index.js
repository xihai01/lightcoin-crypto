class Account {
  constructor(username) {
    this.username = username;
    //keep track of transactions
    this.transactions = [];
  }

  get balance() {
    //calculate balance using the transactions objects
    let balance = 0;
    for (const trans of this.transactions) {
      balance += trans.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    //validate transaction
    if ((this.account.balance + this.value) >= 0) {
      //keep track of the date of the transaction
      this.time = new Date();
      //add the transaction to the account
      this.account.addTransaction(this);
      console.log(`Remaining balance: $${this.account.balance}`);
    } else {
      console.log('Withdrawal unsuccessful. Withdrawal exceeds remaining balance.');
    }
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}


class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('billybob');
/*
console.log('Starting Balance:', myAccount.balance);
 */
const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

const t3 = new Withdrawal(20.00, myAccount);
t3.commit();

const t4 = new Withdrawal(51, myAccount);
t4.commit();

/* console.log('Ending Balance:', myAccount.balance);
console.log(myAccount); */
/* t1 = new Withdrawal(50.25);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', balance);

t3 = new Deposit(120.00);
t3.commit();
console.log('Transaction 3:', t3);
 */
