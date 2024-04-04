const a = [1, 2, 3];
const b = a;
b[1] = 123;
const createReversedArray = function () {
  const numbers = Array.from(arguments);
  const reversedNumber = numbers.toReversed();

  return reversedNumber;
};
res = createReversedArray(1, 2, 3);
console.log("res anti:", res);
