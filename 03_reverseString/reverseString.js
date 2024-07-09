const reverseString = function(string) {
  let stringArray = Array.from(string);
  let reversedArray = stringArray.toReversed();
  let reversedString = reversedArray.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
