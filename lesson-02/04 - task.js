//  написать функцию logItems(), яка отримує масив та використовує цикл, який для кожного єлементу
// масиву буде виводити в консоль повідомлення у форматі Номер елеименту - Значення елементу.
// Нумерація починається з 1

// есть другие методы, поискать
function logItems(items) {
  let str = "";
  for (let index = 0; index < items.length; index += 1) {
    str += `${index + 1} - ${items[index]} ,`;
  }
  return str.slice(0, str.length - 2);
}
const res1 = logItems(["mango", "poly", "ajax"]);
console.log("res1:", res1);
const res2 = logItems(["apple", "peach", "banana", "lemon"]);
console.log("res2:", res2);
console.log("-----------------------------------");
// написать функцию printInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
// в параметры names будут переданы строки имен и телефонных номеров, разделенные запятыми
// порядковый номер имен и телефон в строках указывают на соответствие. количество их равно

function printInfo(names, phones) {
  const namesArray = names.split(",");
  const phonesArray = phones.split(",");
  if (namesArray.length === phonesArray.length) {
    let phoneBook = "";
    for (let index = 0; index < namesArray.length; index += 1) {
      phoneBook += `${namesArray[index]}:${phonesArray[index]}\n`;
    }
    return phoneBook;
  }
}
const phoneBook = printInfo(
  "jacob, william, solomon, artemis",
  "123, 456, 789, 147"
);
console.log(phoneBook);

console.log("-----------------------------------");
// написать функцию formatTime(minutes)? которая переведет значение
// minutes(количество минут) у строку в формате часов и минут hh: mm
function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const minute = minutes % 60;
  //   console.log("hours:", hours.toString().padStart(2, 0));
  //   console.log("minutes:", hours.toString().padStart(2, 0));
  const hoursToStr = hours.toString().padStart(2, 0);
  const minutesToString = minute.toString().padStart(2, 0);
  return `${hoursToStr}:${minutesToString}`;
}
console.log(formatTime(159));
// padstart - заполняет дурим рядом. (какая длинаБ чем заполнить)
