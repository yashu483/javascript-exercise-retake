const convertToCelsius = function(fahrenheit) {

  let toCelcius = (fahrenheit - 32) * (5 / 9) ;

  if (!Number.isInteger(toCelcius)) {
     toCelcius = Math.round(toCelcius * 10) / 10 ;
  }
  return toCelcius ;
};

const convertToFahrenheit = function(celcius) { 
  let toFahrenheit =( celcius * (9/5)) + 32 ;

toFahrenheit = Math.round(toFahrenheit * 10) / 10 ;
  return toFahrenheit ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
