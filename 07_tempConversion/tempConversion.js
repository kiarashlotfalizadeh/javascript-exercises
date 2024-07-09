const convertToCelsius = function(number) {
  let celsius = (number - 32) * (5/9);
  
  return parseFloat(celsius.toFixed(1)); 
};

const convertToFahrenheit = function(number) {
  let fahrenheit = (number * (9/5) + 32);

  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
