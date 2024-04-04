// !join из массива делает строку
const courses = ["html", "css", "javascript", "react"];
courses[10] = "vue"; //пустые ячейки не делать

const strfromCourses = courses.join(" ");
console.log(strfromCourses);
// !split - обратное действие
// все, что в скобках - разделитель
const title = "qwe rty uio";
const arrayFromTitle = title.split(" ");
console.log("arrayFromTitle:", arrayFromTitle);

const title2 = "мама папа баба кака";
const arrayFromTitle2 = title2.split("а");
console.log("arrayFromTitle:", arrayFromTitle2);

// !slice - срез массива, возвращает новый массив
const copyOfCourses = courses.slice(1, 3);
console.log(copyOfCourses);
console.log("🚀 ~ courses:", courses); //добавлен последний элемент, между ними - ...
// ! concat слияние массивов
//не меняет оригинал
const newCoursesList = ["vue", "angular", "javascript"];
const updatedCourses = courses.concat(newCoursesList);
console.log("updatedCourses:", updatedCourses);
// !indexOf - индекс элемента в массиве до первого совпадения
const searchIndex = updatedCourses.indexOf("javascript");
console.log("searchIndex:, номер совпадения", searchIndex);
console.table(updatedCourses);
// !push/pop  - добавление и удалениев конец массива
updatedCourses.push("typescript"); //добавили в конец
updatedCourses.push("python");
console.table(updatedCourses);
updatedCourses.pop(); //удаляет гарантированно последний
console.table(updatedCourses);
