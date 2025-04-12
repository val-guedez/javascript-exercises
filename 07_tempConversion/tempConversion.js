const convertToCelsius = function(tempFarenheit) {
  let tempCelsius = (tempFarenheit - 32) * (5 / 9);
  tempCelsius = Math.round(tempCelsius * 10) / 10;
  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFarenheit = (tempCelsius * (9 / 5)) + 32;
  tempFarenheit = Math.round(tempFarenheit * 10) / 10;
  return tempFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
