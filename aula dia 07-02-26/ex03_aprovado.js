import promptSync from 'prompt-sync';
const prompt = promptSync();

const nota = Number(prompt("Informe a nota: "));

if (Number.isNaN(nota))
    console.log("Erro: Digite apenas números");
else if (nota < 0 || nota >100) 
    console.log("nota inválida, deverá ser informado o valor entre 0 e 100")
else if(nota >=60)
    console.log('Aluno - A P R O V A D O - com nota '+nota);
else 
    console.log('Aluno - R E P R O V A D O - com nota ' +nota);
