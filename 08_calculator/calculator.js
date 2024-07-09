const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((totalSum, currentValue) => totalSum += currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, currentValue) => product *= currentValue, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let finalNum = 1;
  for (let i = num; i > 0; i--) {
    finalNum *= i;
  } 
  
  return finalNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
