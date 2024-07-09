const fibonacci = function(num) {
  if (num < 0) {
    return "OOPS";
  } else if (num == 0) {
    return 0;
  }

  let fibonacciArr = [1, 1];

  for (let i = 2; i < 25; i++) {
    fibonacciArr[i] = fibonacciArr[i-1] + fibonacciArr[i-2];
  }

  return fibonacciArr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
