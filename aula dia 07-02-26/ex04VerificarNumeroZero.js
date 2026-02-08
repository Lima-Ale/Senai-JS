import promptSync from 'prompt-sync';
const prompt = promptSync();

const numero = Number(prompt("Um número: "));

if (Number.isNaN(numero)){
    alert("Erro: Digite apenas números")
}
else if(numero > 0)
    console.log('O número digitado é maior que Zero');
else  if(numero <0)
    console.log('O número digitado é menor que Zero');
else
    console.log('O número digitado é igual a Zero');
