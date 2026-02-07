import promptSync from 'prompt-sync';
const prompt = promptSync();

const idade = Number(prompt("Digite a idade: "));

if(idade >=18)
    console.log('Ele(a) é maior de Idade');
else
    console.log('Ele(a) é menor de Idade');
