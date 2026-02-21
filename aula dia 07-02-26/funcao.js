console.log("")
console.log("Exemplo de Funções");

function saudacao(){
    console.log("Olá Mundo");
} 
saudacao();

function saudacaoComNome(nome){
    console.log("Olá,",nome);

}
saudacaoComNome("Alexandre");

function somar(numero1, numero2){
    return numero1 + numero2;
}

let resultado = somar(10,5);
console.log("Resultado =",resultado);

console.log("")
console.log("Exemplo de Arrow function");

const multiplicar = (a,b) => {
    return a*b;
}

console.log("Resultado =",multiplicar(4,3));

