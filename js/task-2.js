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

function logItems(array) {
  let str = '';
  
  for (let i = 0; i < array.length; i += 1) {
    str += `${i + 1} - ${array[i]}\n`;
  }
  return str;
}

console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));