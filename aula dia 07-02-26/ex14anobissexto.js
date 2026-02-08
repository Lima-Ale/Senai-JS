import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("--- Verificador de Ano Bissexto ---");

let ano =Number(prompt("Digite um ano (ex: 2024): "));

if (isNaN(ano) || ano === "") {
    console.log("Erro: Por favor, insira um ano válido.");
} else {
    
    const divisivelPor4 = (ano % 4 === 0);
    const divisivelPor100 = (ano % 100 === 0);
    const divisivelPor400 = (ano % 400 === 0);

    if ((divisivelPor4 && !divisivelPor100) || divisivelPor400) {
        console.log('Ano = '+ ano + ' é BISSEXTO! ✅');
    } else {
        console.log('Ano = '+ ano + ' NÃO é bissexto. ❌');
    }
}