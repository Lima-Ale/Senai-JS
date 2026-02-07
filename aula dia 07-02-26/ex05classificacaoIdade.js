import promptSync from 'prompt-sync';
const prompt = promptSync();

const idade = Number(prompt("Digite a Idade: "));

if (Number.isNaN(idade)){
    alert("Erro: Digite apenas números")
}
else if(idade >0 && idade <=12)
    console.log('Criança com '+idade +' anos');
else if(idade >=13 && idade <18)
    console.log('Adolescente com '+idade +' anos');
else
    console.log('Adulto com '+idade +' anos');