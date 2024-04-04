let res;
function fn() {
  console.log(arguments);

  const args = Array.from(arguments);
  console.log("args:", args);
}
res = fn(1, 2, 3);
console.log("res:", res);
console.log("-------------------------------------------");
// напиши функцию add для складання довільної кількості аргументів (чисел)
const add = function () {
  let sum = 0;

  for (const argument of arguments) {
    sum += argument;
  }
  return sum;
};
console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));

console.log("-------------------------------------------");
//
// напиши функцию calcAverage(), которая принимает довільну куоткість аргументів і повертає їхнє
// середнє значення. усі аргументи будуть лише числами
function calcAverage() {
  let sum = 0;
  for (const argument of arguments) {
    sum += argument;
  }
  return sum / arguments.length;
}
console.log(calcAverage(1, 5, 9, 5, 6));
calcAverage(1, 5, 9, 5, 6);
