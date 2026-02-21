// Dado um array de objetos representando pessoas, crie um novo array contendo apenas os nomes.
    
const pessoas = [
      { nome: "Alexandre", idade: 52 },
      { nome: "Ricardo", idade: 50 },
      { nome: "Tatiana", idade: 48 }
    ];
    const nomes = pessoas.map(pessoa => pessoa.nome);
    console.log(nomes); 
    