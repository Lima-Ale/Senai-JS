
console.log("Exemplo de FOR");
for (let i=1; i<=5; i++){
    console.log("Numero: ", i);
}

console.log("")
console.log("Exemplo de While");

let contador = 1;

while(contador <=5){
    console.log("Contador: ", contador);
    contador++;
}

console.log("")
console.log("Exemplo de For Each");

let alunos = ["Ana","Bruno","Carlos","Daniel"];
alunos.forEach(function(aluno){
    console.log("Aluno:", aluno);
});

