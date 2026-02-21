//Filtrar produtos com preço menor que R$ 50**

const produtos = [
  { nome: "Teclado Gamer", preco: 180 },
  { nome: "Mouse Gamer", preco: 100 },
  { nome: "Caixa de som", preco: 80 },
  { nome: "Mousepad Mod 1", preco: 25 },
  { nome: "Mousepad Mod 2", preco: 35 },
  { nome: "Fones de ouvido", preco: 45 }
];
const produtosBaratos = produtos.filter(precob => preco > 50);// Use filter aqui
console.log(produtosBaratos); 
