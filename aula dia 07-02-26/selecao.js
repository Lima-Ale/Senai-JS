
import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Exemplo de Switch Case\n");

let dia = Number(prompt(
    "Digite um número de 1 a 7 para representar o dia da semana:\n"+
    "1 - Domingo\n"+
    "2 - Segunda\n"+
    "3 - Terça\n"+
    "4 - Quarta\n"+
    "5 - Quinta\n"+
    "6 - Sexta\n"+
    "7 - Sábado\n"
));

dia = number(dia);


switch(dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia Inválido");
    }
