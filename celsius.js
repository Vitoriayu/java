// Função para converter Celsius para Fahrenheit
function converterCelsiusParaFahrenheit(tempCelsius) {
  return (tempCelsius * 9/5) + 32;
}
// Função para converter Celsius para Kelvin
function converterCelsiusParaKelvin(tempCelsius) {
  return tempCelsius + 273.15;
}
function converterCelsiusParaRankine(tempCelsius) {
  return (tempCelsius + 273.15) * 9/5;
}

function converterRankineParaCelsius(tempRankine) {
  return (tempRankine - 491.67) * 5/9;
}

function converterRankineParaFahrenheit(tempRankine) {
  return tempRankine - 459.67;
}

// Função para converter Celsius para Kelvin
function converterRankineParaKelvin(tempRankine) {
  return tempRankine * 5/9;
}
// Função para converter Fahrenheit para Celsius
function converterFahrenheitParaCelsius(tempFahrenheit) {
  return (tempFahrenheit - 32) * 5/9;
}

// Função para converter Fahrenheit para Kelvin
function converterFahrenheitParaKelvin(tempFahrenheit) {
  return (tempFahrenheit - 32) * 5/9 + 273.15;
}
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
function converterKelvinParaRankine(tempKelvin) {
  return tempKelvin * 1.8;
}

// Valores de temperatura predefinidos
var temperaturaCelsius = 25;
var temperaturaFahrenheit = 77;
var temperaturaKelvin = 298.15;
var temperaturaRankine = 537.67;

// Chame as funções e exiba os resultados no console
console.log(temperaturaCelsius + "°C é igual a " + converterCelsiusParaFahrenheit(temperaturaCelsius).toFixed(2) + "°F");
console.log(temperaturaCelsius + "°C é igual a " + converterCelsiusParaKelvin(temperaturaCelsius).toFixed(2) + "K");
console.log(temperaturaCelsius + "°C é igual a " + converterCelsiusParaRankine(temperaturaCelsius).toFixed(2) + "°R");

console.log(temperaturaRankine + "°R é igual a " + converterRankineParaCelsius(temperaturaRankine).toFixed(2) + "°R");
console.log(temperaturaRankine + "°R é igual a " + converterRankineParaFahrenheit(temperaturaRankine).toFixed(2) + "R");
console.log(temperaturaRankine + "°R é igual a " + converterRankineParaKelvin(temperaturaRankine).toFixed(2) + "°R");

console.log(temperaturaFahrenheit + "°F é igual a " + converterFahrenheitParaCelsius(temperaturaFahrenheit).toFixed(2) + "°C");
console.log(temperaturaFahrenheit + "°F é igual a " + converterFahrenheitParaKelvin(temperaturaFahrenheit).toFixed(2) + "K");
console.log(temperaturaFahrenheit + "°F é igual a " + converterFahrenheitParaRankine(temperaturaFahrenheit).toFixed(2) + "°R");

console.log(temperaturaKelvin + "K é igual a " + converterKelvinParaCelsius(temperaturaKelvin).toFixed(2) + "°C");
console.log(temperaturaKelvin + "K é igual a " + converterKelvinParaFahrenheit(temperaturaKelvin).toFixed(2) + "°F");
console.log(temperaturaKelvin + "K é igual a " + converterKelvinParaRankine(temperaturaKelvin).toFixed(2) + "°R");

