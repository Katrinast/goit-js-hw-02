// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totalPrice = pricePerDroid * quantity;
//   if (totalPrice <= customerCredits) {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   } else {
//     return "Insufficient funds!"
//   }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// Задание 1
// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

// const name = "Генератор защитного поля";
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// Задание 2
// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 130;
// if (ordered > total) {
//   console.log("На складе недостаточно твоаров!")
  
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер")
// }

// Задание 3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// let yourUserPassword = prompt("Enter your password");
// if (yourUserPassword === null) {
//   message = "Cancelled by user!";
// } else if (yourUserPassword === ADMIN_PASSWORD) {
//   message = "You are welcome!"
// } else {
//   message = "Access is denied, the password is incorrect!";
// }

// alert(message);

// Задание 4
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// const credits = 23580;
// const pricePerDroid = 3000;

// let droidsToBuy = prompt("enter how much do you want to buy?")

// if (droidsToBuy === null) {
//   console.log("Cancelled by user");
// }

// let totalPrice = droidsToBuy * pricePerDroid;

// if (totalPrice > credits) {
//   console.log("There are not enough funds in the account!")
// } else {
//   console.log(`You buyed ${droidsToBuy}, there are ${credits - totalPrice} credits left in the account `)
// }

// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// const country = prompt(enter your country);
// let price;

// switch (country.toLowerCase()) {
//   case "Chine":
//     price = 120;
//     break
  
//   case "Chile":
//     price = 250;
//     break
  
//   case "Australia":
//     price = 170;
//     break
  
//   case "India":
//     price = 80;
//     break
  
//   case "Jamaica":
//     price = 120;
//     break
  
//   default:
//     alert("Delivery is not available in your country");
    
// }
    
// if (price !== undefined) {
//   alert(`Delivery in ${country} will cost ${price} credits`);
// }