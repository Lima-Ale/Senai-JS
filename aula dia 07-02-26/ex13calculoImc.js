import promptSync from 'prompt-sync';
const prompt = promptSync();


let pesoStr = prompt("Digite seu peso em kg (ex: 70.5): ");
let alturaStr = prompt("Digite sua altura em metros (ex: 1.75): ");
let imc = 0;

let peso = Number(pesoStr.replace(',', '.'));
let altura = Number(alturaStr.replace(',', '.'));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Erro: Por favor, insira valores numéricos válidos e maiores que zero.");
} else {
    
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    console.log("\n--- Resultado ---");
    console.log('Seu IMC é:' +(imc.toFixed(2)));
    console.log('Classificação: '+classificacao);
}