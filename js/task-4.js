// function getShippingCost(country) {
  
//   switch (country) {
//     case "China":
//     return `Shipping to ${country} will cost 100 credits`;
    
//     case "Chile":
//       return `Shipping to ${country} will cost 250 credits`;

//     case "Australia":
//       return `Shipping to ${country} will cost 170 credits`;
    
//     case "Jamaica":
//       return `Shipping to ${country} will cost 120 credits`;
    
//     default:
//       return "Sorry, there is no delivery to your country";
//   }
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3));

// const fruits = "pineapple";

// switch (fruits) {
//   case "apple":
//     console.log('Apple selected');
//     break;
//   case "banana":
//     console.log('Banana selected');
//     break;
//   case "orange":
//     console.log('Orange selected');
//     break;
//   default:
//   console.log('The fruit is unknown');
// }

// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const logItems = function(array) {
//   for (let i = 0; i < array.length; i++){
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const words = message.split(" ");
//   return words.length * pricePerWord;
  
// };

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


// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//   const words = string.split(" ");
//   let longestWord = "";
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
// const formatString = function(string) {
//   if (string.length > 40) {
//     return `${string.slice(0, 40)}...`;
//   }
//   return string;
// };

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

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function(message) {
//   const spamWord_1 = "sale";
//   const spamWord_2 = "spam";
//   if (message.toLowerCase().includes(spamWord_1) || message.toLowerCase().includes(spamWord_2)) {
//     return true;
//   }
//   return false;
// };

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;
// do {
//   input = prompt("enter your number");
//   if (input !== null) {
//     const number = parseFloat(input);
//     if (!isNaN(number)) {
//       numbers.push(number);
//     } else {
//       alert("Было введено не число, попробуйте еще раз");
//     }
//   }
// } while (input !== null)
// if (numbers.length > 0) {
//   for (const number of numbers) {
//     total += number;
//   }
//   console.log(numbers);
//   console.log(`Общая сумма чисел равна ${total}`);
// }


// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
//   return login.length >= 4 && login.length <= 16;
// };

// const isLoginUnique = function(allLogins, login) {
//   return !allLogins.includes(login);
// };

// const addLogin = function(allLogins, login) {
//   if (!isLoginValid(login)) {
//     return 'Ошибка! Логин должен быть от 4 до 16 символов';
//   }
//   if (!isLoginUnique(allLogins, login)) {
//     return 'Такой логин уже используется!';
//   }
//   allLogins.push(login);
//   return 'Логин успешно добавлен!';
// };

// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'