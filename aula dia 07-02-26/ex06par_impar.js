import promptSync from 'prompt-sync';
const prompt = promptSync();

const entrada = prompt("Um número: ");
const numero = Number(entrada);

if (Number.isNaN(numero)) {
    console.log("Erro: Digite apenas números"); 
} else {
    
    const resto = numero % 2;

    if (resto === 0) {
        console.log('O número é par');
    } else {
        console.log('O número é ímpar');
    }
}