const removeFromArray = function(array, ...removals) {
  let finalArray = array.filter(item => !(removals.includes(item)));
  return finalArray;
}

// Do not edit below this line
module.exports = removeFromArray;
