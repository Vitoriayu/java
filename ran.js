// Função para converter Celsius para Fahrenheit
function converterCelsiusParaFahrenheit(tempCelsius) {
    return (tempCelsius * 9/5) + 32;
  }
  
  // Função para converter Celsius para Kelvin
  function converterCelsiusParaKelvin(tempCelsius) {
    return tempCelsius + 273.15;
  }
  
  // Função para converter Celsius para Rankine
  function converterCelsiusParaRankine(tempCelsius) {
    return (tempCelsius + 273.15) * 9/5;
  }
  
  // Função para converter Fahrenheit para Celsius
  function converterFahrenheitParaCelsius(tempFahrenheit) {
    return (tempFahrenheit - 32) * 5/9;
  }
  
  // Função para converter Fahrenheit para Kelvin
  function converterFahrenheitParaKelvin(tempFahrenheit) {
    return (tempFahrenheit - 32) * 5/9 + 273.15;
  }
  
  // Função para converter Fahrenheit para Rankine
  function converterFahrenheitParaRankine(tempFahrenheit) {
    return tempFahrenheit + 459.67;
  }
  
  // Função para converter Kelvin para Celsius
  function converterKelvinParaCelsius(tempKelvin) {
    return tempKelvin - 273.15;
  }
  
  // Função para converter Kelvin para Fahrenheit
  function converterKelvinParaFahrenheit(tempKelvin) {
    return (tempKelvin - 273.15) * 9/5 + 32;
  }
  
  // Função para converter Kelvin para Rankine
  function converterKelvinParaRankine(tempKelvin) {
    return tempKelvin * 1.8;
  }
  
  // Função para converter Rankine para Celsius
  function converterRankineParaCelsius(tempRankine) {
    return (tempRankine - 491.67) * 5/9;
  }
  
  // Função para converter Rankine para Fahrenheit
  function converterRankineParaFahrenheit(tempRankine) {
    return tempRankine - 459.67;
  }
  
  // Função para converter Rankine para Kelvin
  function converterRankineParaKelvin(tempRankine) {
    return tempRankine * 5/9;
  }
  
  // Valores de temperatura predefinidos
  var temperaturaCelsius = 25;
  var temperaturaFahrenheit = 77;
  var temperaturaKelvin = 298.15;
  var temperaturaRankine = 537.67;
  
  // Chame as funções e exiba os resultados no console
  var resultadoCelsiusParaFahrenheit = converterCelsiusParaFahrenheit(temperaturaCelsius);
  var resultadoCelsiusParaKelvin = converterCelsiusParaKelvin(temperaturaCelsius);
  var resultadoCelsiusParaRankine = converterCelsiusParaRankine(temperaturaCelsius);
  
  var resultadoFahrenheitParaCelsius = converterFahrenheitParaCelsius(temperaturaFahrenheit);
  var resultadoFahrenheitParaKelvin = converterFahrenheitParaKelvin(temperaturaFahrenheit);
  var resultadoFahrenheitParaRankine = converterFahrenheitParaRankine(temperaturaFahrenheit);
  
  var resultadoKelvinParaCelsius = converterKelvinParaCelsius(temperaturaKelvin);
  var resultadoKelvinParaFahrenheit = converterKelvinParaFahrenheit(temperaturaKelvin);
  var resultadoKelvinParaRankine = converterKelvinParaRankine(temperaturaKelvin);
  
  var resultadoRankineParaCelsius = converterRankineParaCelsius(temperaturaRankine);
  var resultadoRankineParaFahrenheit = converterRankineParaFahrenheit(temperaturaRankine);
  var resultadoRankineParaKelvin = converterRankineParaKelvin(temperaturaRankine);
  
  console.log("Celsius para Fahrenheit: " + resultadoCelsiusParaFahrenheit);
  console.log("Celsius para Kelvin: " + resultadoCelsiusParaKelvin);
  console.log("Celsius para Rankine: " + resultadoCelsiusParaRankine);
  
  console.log("Fahrenheit para Celsius: " + resultadoFahrenheitParaCelsius);
  console.log("Fahrenheit para Kelvin: " + resultadoFahrenheitParaKelvin);
  console.log("Fahrenheit para Rankine: " + resultadoFahrenheitParaRankine);
  
  console.log("Kelvin para Celsius: " + resultadoKelvinParaCelsius);
  console.log("Kelvin para Fahrenheit: " + resultadoKelvinParaFahrenheit);
  console.log("Kelvin para Rankine: " + resultadoKelvinParaRankine);
  
  console.log("Rankine para Celsius: " + resultadoRankineToCelsius);
  console.log("Rankine para Fahrenheit: " + resultadoRankineToFahrenheit);
  console.log("Rankine para Kelvin: " + resultadoRankineToKelvin);
  