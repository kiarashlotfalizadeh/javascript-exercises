const sumAll = function(first, second) {
  let highEnd;
  let lowEnd;

  if (typeof first !== "number" || typeof second !== "number") return "ERROR";
  if (first < 0 || second < 0) return "ERROR";
  if (first > second) {
    highEnd = first;
    lowEnd = second;
  } else {
    highEnd = second;
    lowEnd = first;
  }

  let finalSum = 0;

  for (let i = lowEnd; i < (highEnd + 1); i++) {
    finalSum += i;
  }

  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
