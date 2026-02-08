import promptSync from 'prompt-sync';
const prompt = promptSync();

const n1 = Number(prompt("Entre com o 1º número "));
const n2 = Number(prompt("Entre com o 2º número "));
const n3 = Number(prompt("Entre com o 3º número "));

if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)){
    alert("Erro: Digite apenas números válidos!")
}
else if(n1 > n2 && n1 > n3)
    console.log(' O primeiro número digitado é o maior' +n1);

else if(n2 > n1 && n2 > n3)
    console.log(' O segundo número digitado é o maior' +n2);

else if(n3 > n2 && n3 > n1)
    console.log(' O terceiro número digitado é o maior' +n3);

else if(n1 == n2 && n1 == n3)
    console.log(' Os três números são iguais' + n1 + n2 + n3);

else if(n1 == n2 && n1 > n3)
     console.log(' O primeiro e segundo número são iguais e maiores que o número 3' +n1);

else if(n2 == n3 && n2 > n1)
     console.log(' O segundo e terceiro número são iguais e maiores que o número 1' +n2);

else 
     console.log(' O primeiro e terceiro número são iguais e maiores que o número 2' +n1);

