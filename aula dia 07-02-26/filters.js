
console.log("Exemplo de Filter");

let numeros=[1,2,3,4,5,6] ;
console.log("\nArray original",numeros);

let pares = numeros.filter(function(numeros){
    return numeros % 2 === 0;
});
console.log("\nNúmeros pares",pares);

let impares = numeros.filter(function(numeros){
    return numeros % 2 != 0;
});
console.log("\nNúmeros pares",impares);

let maioresQueTres = numeros.filter(numeros => numeros > 3);
console.log("\nNúmeros maiores que 3",maioresQueTres);

