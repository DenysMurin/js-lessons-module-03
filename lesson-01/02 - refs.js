// !передача за посиланням і за значенням
const firstId = [1, 2, 3];
const secondId = firstId;
console.log("b:", secondId);
console.log("a:", firstId);
firstId[0] = 500;
console.log("a:", firstId);
console.log("b:", secondId);
// --------------------
let x = 3; //по ссылке
let y = x; //3
y = 10; //по значению
