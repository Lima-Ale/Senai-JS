//Filtrar nomes que começam com a letra 'A'**

const nomes = ["Alexandre", "Ricardo", "Amanda", "Carlos", "Arthur", "Beatriz", "Bruno", "Bianca"];
const nomesComA = nomes.filter(nome => nome.startsWith("A"));
console.log("Nomes com a inicial A", nomesComA);

const nomesComB = nomes.filter(nome => nome.startsWith("B"));
console.log("Nomes com a inicial B", nomesComB);