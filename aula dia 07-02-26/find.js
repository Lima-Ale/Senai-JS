console.log("Exemplo Find");

// traz o primeiro resultado que satisfaça a condição

let numeros=[10,20,30,40,50];
console.log("\nArray original",numeros);

//encontra o primeiro número maior que 25
let encontrado = numeros.find(numeros => {
    return numeros > 25
});

console.log("\nNúmero encontrado",encontrado);



let alunos = [
    {id: 1, nome:"Ana", nota:9},
    {id: 2, nome:"Bruno", nota:9.5},
    {id: 3, nome:"Carlos", nota:10}
];

let alunoEncontrado = alunos.find(alunos =>{
    return alunos.id === 2;
});


console.log("\nAluno encontrado", alunoEncontrado)