console.log("Exemplo de MAP");

let numeros=[1,2,3,4,5];
console.log("\nArray original",numeros);


//Estrutura MAP

//array.map(function(elemento){
//return transofrmaçao })

let dobrar = numeros.map(function(numeros){
    return numeros *2;
});
console.log("\nArray dobrado:",dobrar);

let triplicar = numeros.map(numeros => numeros*3)
console.log("\nArray Triplicado:",triplicar);

let alunos = [
    {nome:"Ana", nota:8},
    {nome:"Bruno", nota:6},
    {nome:"Carlos", nota:9}
];

//cria um novo array somente com os nomes
let nomes = alunos.map(alunos =>{
return alunos.nome;
});

//exibindo novo array
console.log("\nSomente nomes:", nomes);

let names=["Ana","Maria","Luana"]

//retorna um novo array sem modificar o original
let maiusculo = names.map(names =>{
    return names.toUpperCase();
})

console.log("\nNomes em maiusculo", maiusculo);



