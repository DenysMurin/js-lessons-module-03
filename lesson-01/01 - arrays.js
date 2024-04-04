// !массивы
[1, 2, 3, 4, 5];
// лучше всего однотипные данные сохранять
const courses = ["html", "css", "javascript", "react"];
console.log(courses);
console.table(courses);
// 2 методаЖ
const user = new Array();
console.log("user:", user);
// так создавать проще:
const userOne = [];
console.log("user:", userOne);
// -------------------------------------------------------------опередление n-элемента
const firstElement = courses[2];
console.log("firstElement:", firstElement);
// ------------------------------------------------------------------

function getElementFromArray(index) {
  return courses[index];
}
const secondElement = getElementFromArray(2);
console.log("secondElement:", secondElement);
// переназначение значения элемента
console.log("courses before:", courses);
courses[0] = "vue";
console.log("courses after:", courses);
// ------------------------------------------------------------

const users = ["poly", "mnago", "ajax"];
console.log("users:", users);
// users = 3; //не сработает;
console.log("🚀 ~ users after 3:", users);
// !длина массива
// courses.length;
console.log("courses length:", courses.length);
// перезапись массива с новой длиной/обрезка оригинального массива, не slice
courses.length = 3;
console.log("courses :", courses);
// !индекс последнего элемента
// всегда на 1 меньше , чем длина массива
function getLastArrayElement(array) {
  const lastElementIndex = array.length - 1;
  return array[lastElementIndex];
  //   console.log("🚀 ~ getLastArrayElement ~ lastElementIndex:", lastElementIndex);
  // покажет 2 потому что в тсроке 3 обрезка массива
}
const lastElement = getLastArrayElement(courses);
console.log("lastElement:", lastElement);
