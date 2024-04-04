// напиши скарипт, который подсчитвывает сумму всех парних числе в массиве
const numbers = [1, 5, 8, 9, 12, 4, 115, 27, 30, 18, 14];
let total = 0;
function sumEvenNumbers(params) {
  for (const param of params) {
    if (param % 2 === 0) {
      total += param;
      console.log("this is even numer", param);
      // }
    }
  }
}
const sum = sumEvenNumbers(numbers);
console.log(total);
console.log("-------------------------------");
// напиши скрипт, выводящий в консоль имя пользователя и его na номер
// в переменных names/phone сохраняются строки имен и na номеров, разделенные запятыми
// порядковый номер имен и телефонов у строках указывает на соответствие.
// количество имен и телефонов гарантированно одиноково
const names = "jacob,wiiliam,solomon,artemis";

const phones = "8500, 8600, 8700, 8800";
function showPhoneNumbers(namesAsString, phonesAsString) {
  const namesArray = namesAsString.split(",");
  const phonesArray = phonesAsString.split(",");
  for (let index = 0; index < namesArray.length; index += 1) {
    const name = namesArray[index];
    const phone = phonesArray[index];
    console.log(`${name} has phone number ${phone}`);
  }
}
showPhoneNumbers(names, phones);
console.log("-------------------------------");
// написать скрипт, который выводит в консоль все слова строки, кроме первого и последнего.
// результирющая строка должна начинаться или закансиваться символом пробела.
// скирипт должен работать для любогй строки
const string = "welcome to the future";
function printMiddleForString(str) {
  const trimmedStr = str.trim();
  const arrayFromStr = trimmedStr.split(" ");
  const start = 1;
  const end = arrayFromStr.length - 1;
  for (const word of arrayFromStr.slice(start, end)) {
    console.log(word);
  }
  //   console.log(trimmedStr.split(" "));
}
printMiddleForString(string);

console.log("-------------------------------");
// написать скрипт поиска наименьшего числа в массиве. Код должен работать для любого массива. Используй цикл
const values = [2, 17, 94, 10, 23, 37];
let min;
function findMinimum(arr) {
  min = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (min < arr[index]) {
      continue;
    } else {
      min = element;
    }
  }
  return min;
}
min = findMinimum(values);
console.log("min:", min);
