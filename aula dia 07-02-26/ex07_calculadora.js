import promptSync from 'prompt-sync';
const prompt = promptSync();

const n1 = Number(prompt("Entre com o 1º número "));
const n2 = Number(prompt("Entre com o 2º número "));
const operador = Number(prompt("Escolha o cálculo desejado: 1 - Adição / 2 - Subtração / 3 - Multiplicação / 4 - Divisão  "));

if (Number.isNaN(n1) || Number.isNaN(n2)){
    alert("Erro: Digite apenas números válidos!")
}
else if(operador == 1)
    console.log('O resultado da soma é =' +(n1 + n2));

else if(operador == 2)
    console.log('O resultado da subtração é =' +(n1 - n2));

else if(operador == 3)
    console.log('O resultado da multiplicação é =' +(n1 * n2));

else if(operador == 4)
    console.log('O resultado da divisão é =' +(n1 / n2));

else
    console.log("Operação inválida");