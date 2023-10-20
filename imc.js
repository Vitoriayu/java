// Função para calcular o IMC com valores predefinidos
function calcularIMC(peso, altura) {
    // Calcule o IMC
    var imc = peso / (altura * altura);
    return imc;
  }
  
  // Valores de peso e altura predefinidos
  var peso = 70; // em quilogramas
  var altura = 1.75; // em metros
  
  // Chame a função e exiba o resultado no console
  var imcCalculado = calcularIMC(peso, altura);
  console.log("Seu IMC é: " + imcCalculado.toFixed(2));
  