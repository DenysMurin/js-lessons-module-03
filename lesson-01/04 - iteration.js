// !итерация по массиву
const friends = ["mango", "kiwi", "Poly", "ajax"];
// console.table(friends);

const end = friends.length;
let table = "| Index | Value|\n";
for (let index = 0; index < end; index += 1) {
  table += `|  ${index}  | ${friends[index]}   |\n`;
  // const tableCell = `|  ${index}  | ${friends[index]}   |`;
  //   console.log(index);
  //   console.log(friends[index]);
  // console.log(tableCell);
  console.log(table);
}
console.log("----------includes-----------------------");
// !includes // возвращает true или false
console.log(friends.includes("saturn"));
console.log(friends);

function findFriend(friendName) {
  const isFriends = friends.includes(friendName);
  if (isFriends) {
    return `hoorah, ${friendName} is my friend`;
  }
  return `hoorah, ${friendName} is  not my friend`;
}
const res = findFriend("ajax");
console.log("res:", res);
console.log("----------for... of-----------------------");
// !for... of
for (let friend of friends) {
  console.log(friend);
  console.log(friends);
}
// написать скрипт вычисления площади прамоугольника, значение сторон которых
// сохраняется в переменной в виде строки
const values = "8 11";
function calculateSquare(values) {
  const squareParams = values.split(" ");
  console.log("squareParams:", squareParams);
  const width = squareParams[0];
  const height = squareParams[1];
  return width * height;
}
const res2 = calculateSquare(values);
console.log("res2:", res2);
console.log("--------------------------------");
// написать скрипт для перевоба массива fruits/ для каждого элемента массива выведи в консоль
// строку в формате Номер элемента: значние элемента. нумерация начинается с 1.
const fruits = ["apple", "peach", "banana", "lemon"];
function printFruitsToConsole(array) {
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    console.log(index + 1, element);
  }
}
const result = printFruitsToConsole(fruits);
