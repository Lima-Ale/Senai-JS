import promptSync from 'prompt-sync';
const prompt = promptSync();

const base = Number(prompt("Entre com a base do triângulo: "));
const lado1 = Number(prompt("Entre com o 1º lado do triângulo: "));
const lado2 = Number(prompt("Entre com o 2º lado do triângulo: "));

if (Number.isNaN(base) || Number.isNaN(lado1) || Number.isNaN(lado2)) {
    console.log("Erro: Digite apenas números válidos!");  
} 

else if (base + lado1 <= lado2 || base + lado2 <= lado1 || lado1 + lado2 <= base) {
    console.log("Erro: Essas medidas não formam um triângulo!");
} 

else if (base === lado1 && base === lado2) {
    console.log('Triângulo Equilátero');
} 
else if (base === lado1 || base === lado2 || lado1 === lado2) {
    console.log('Triângulo Isósceles');
} 
else {
    console.log('Triângulo Escaleno');
}