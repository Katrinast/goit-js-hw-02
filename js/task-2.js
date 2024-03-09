// function formatMessage(message, maxLength) {
//   if (message.length > maxLength) {
//     return `${message.slice(0, maxLength)}...`;
//   } else {
//     return message;
//   }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis в nunc fringilla"

// function logItems(array) {
//   let str = '';
  
//   for (let i = 0; i < array.length; i += 1) {
//     str += `${i + 1} - ${array[i]}\n`;
//   }
//   return str;
// }

// console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

// console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));

// function min(a, b) {
// if (a > b) {
//   return b;
// } else {
//   return a;
// }

// }
// console.log(min(5, 15));


// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

// const musicArray = [«Джаз», «Блюз»];

// musicArray.push("Рок-н-рол");

// const findIndex = musicArray.indexOf[«Блюз»];
// if (findIndex !== -1) {
//   musicArray.splice(findIndex, 1, "Класика")
// }
// console.log(musicArray.shift);
// console.log(musicArray.unshift(«Реп», «Реггі»));
// console.log(musicArray);

//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
// const logins = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }

// }

//logItems(logins);

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//   let smallerNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallerNumber) {
//       smallerNumber = number;
//     }
//   }
//   return smallerNumber;
// }
// console.log(findSmallerNumber(numbers));


//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function caclculateAverage(...args) {
  let sum = 0;
  let count = 0;
  for (const arg of args) {
    if (typeof arg === "number") {
      sum += arg;
      count++;
    }
    
  }
  return sum /count;
}

console.log(caclculateAverage(5, 10, 15));