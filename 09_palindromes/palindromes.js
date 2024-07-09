const palindromes = function (string) {
  let letters = string.replaceAll(" ", "");
  letters = letters.replaceAll("!", "");
  letters = letters.replaceAll(".", "");
  letters = letters.replaceAll(",", "");
  originalString = letters.toLowerCase();

  let reversedArr = originalString.split("");
  reversedArr.reverse();

  let reversedString = reversedArr.join("");

  if (originalString === reversedString) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
