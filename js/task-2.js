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

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       sum += arg;
//       count++;
//     }
    
//   }
//   return sum /count;
// }

// console.log(caclculateAverage(5, 10, 15));


// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const messageArray = message.split(" ");
//   return messageArray.length * pricePerWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function (string) {
//   const words = string.split(' ');
//   let longestWord = " ";
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// Задание 4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.


// const formatString = function(string) {
//   if (string.length > 40) {
//     return `${string.slice(0, 40)}...`;
//   }
//   return string;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка


// Задание 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {
//   const spamWord1 = "spam";
//   const spamWord2 = "sale";
//   const lowerCaseStr = message.toLowerCase();
//   if (lowerCaseStr.includes(spamWord1) || lowerCaseStr.includes(spamWord2)) {
//     return true;
//   }
//   return false;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


// Задание 6
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.


const numbers = [];
let total = 0;
let input = prompt("Введите число");
while (true) {
  
  if (input === null) {
    break;
  }
}
const number = Number(input);

  if (isNaN(number)) {
    alert('Было введено не число, попробуйте еще раз');
    continue; // Если введено не число, переходим к следующей итерации цикла
  }

  numbers.push(number); // Добавляем число в массив


for (const number of numbers) {
  total += number; // Считаем сумму всех чисел
}

alert(`Общая сумма чисел равна ${total}`);