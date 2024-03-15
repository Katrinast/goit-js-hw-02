// const blackListedWord_1 = 'spam';
// const blackListedWord_2 = 'sale';

// function checkForSpam(message) {
//   const normolizedString = message.toLowerCase();
//   const hasSpamWord1 = normolizedString.includes(blackListedWord_1);
//   const hasSpamWord2 = normolizedString.includes(blackListedWord_2);
//   if (hasSpamWord1 || hasSpamWord2) {
//     return true;
//   } else {
//     return false;
//   }
  
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// const salaries = {
//   Jhon: 100,
//   Ann: 160,
//   Peter: 130,
// };
// const salariesArray = Object.values(salaries)

// let sum = 0;
// if (salariesArray.length) {
//   for (const salary of salariesArray) {
// sum += salary
//   }
//   console.log(sum);
// } else {
//   console.log(sum);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// const book = {
//   title: "The Last Kingdom",
//   автор: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   values.push(apartment[key]);
  
// }

// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const salary of values){
//     totalSalary += salary
//   }
//   return totalSalary;

// }

// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   values.push(apartment[key]);
  
// }

// console.log(values);


/**
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/**
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /**
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {},

  /**
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {},

  /**
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {},

  /**
   * Метод повертає поточний баланс
   */
  getBalance() {},

  /**
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},

  /**
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},

  /* ============== Додаткові методи ============== */
  /**
   * Метод видаляє всі транзакції та скидає баланс рахунку до 0.
   */
  resetAccount() {},

  /**
   * Метод повертає кількість всіх транзакцій.
   */
  getTransactionCount() {},
  /**
   * Метод повертає середнє значення по типу транзакції за всю історію.
   * Якщо транзакцій немає повертає 0.
   */
  getAverageTransactionValue(type) {},
};
