console.log("Exemplo Array\n");

let frutas=["Maçã","Banana","Uva","Laranja"];
console.log("Lista de frutas", frutas);


console.log("primeira fruta",frutas[0]);
console.log("terceira fruta",frutas[2]);

//Trocar valor do elemento do array
frutas[1] = "Morango";

//Adicionar elemento
frutas.push("Abacaxi");


//Remover elemento
//frutas.pop[0];


console.log("primeira fruta",frutas[1]);
console.log("Fruta:", frutas);
console.log("\n")
//Percorrer array com for

for(let i = 0; i< frutas.length; i++){
    console.log("Fruta:", frutas[i]);
}

console.log("\n")
frutas.forEach(function(fruta){
    console.log("Lista de Fruta:", fruta)
});