import promptSync from 'prompt-sync';
const prompt = promptSync();

const valor = Number(prompt("Entre com o valor da compra R$ "));

if (Number.isNaN(valor)){
    alert("Erro: Digite um valor válido!")
}
else if(valor >100)
    console.log('Aplicado desconto de 10% sobre o valor R$ '+valor +'. Total a pagar R$ ' +(valor-(valor*0.10)));

else
    console.log("Valor da Compra R$ "+valor);