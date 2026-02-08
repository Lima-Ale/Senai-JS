import promptSync from 'prompt-sync';
const prompt = promptSync();

let conceito = '';
let nota = Number(prompt("Insira a nota do aluno (0 a 100): "));
/*let nota = Number(entrada);*/

if (isNaN(nota)) {
    console.log("Erro: Digite apenas números válidos!");
} else {
    
    if (nota >= 90 && nota <= 100) {
        conceito = "A";
    } else if (nota >= 80 && nota < 90) {
        conceito = "B";
    } else if (nota >= 70 && nota < 80) {
        conceito = "C";
    } else if (nota >= 60 && nota < 70) {
        conceito = "D";
    } else if (nota >= 0 && nota < 60) {
        conceito = "F";
    } else {
        conceito = "Nota inválida! Fora do intervalo 0-100.";
    }
    
    console.log('Nota: ' +nota + ' - Conceito: '+conceito);
}

