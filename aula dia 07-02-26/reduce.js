console.log("Exemplo de Reduce");

let numeros=[10,20,30,40] ;
console.log("\nArray original",numeros);

//Estrutura Reduce
//array.reduce(function(acumulador, elementoAtual){
//    return novoValor;
// }, valorInicial);


let soma = numeros.reduce(function(acumulador, numeros){
    return acumulador+numeros;
},0);

console.log("\nSoma total=",soma);

let alunos = [
    {nome:"Ana", nota:9},
    {nome:"Bruno", nota:9.5},
    {nome:"Carlos", nota:10}
];

let totalNotas = alunos.reduce((acumulador, alunos) =>{
    return acumulador + alunos.nota;
},0);

let media = totalNotas / alunos.length;

console.log("\nMedia da turma = ", media);