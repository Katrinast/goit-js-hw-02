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

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const values = Object.values(salaries);
  for (const salary of values){
    totalSalary += salary
  }
  return totalSalary;

}

console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


