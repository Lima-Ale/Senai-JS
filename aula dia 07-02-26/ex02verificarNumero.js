import promptSync from 'prompt-sync';
const prompt = promptSync();

const numero = Number(prompt("Um número: "));

if (Number.isNaN(numero)){
    alert("Erro: Digite apenas números")
}
else if(numero > 0)
    console.log('O número digitado é maior que Zero, portanto positivo');
else 
    console.log('O número digitado é menor ou igual a Zero, portanto negativo');
