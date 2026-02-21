//Você tem um array de produtos e deseja retornar um novo array apenas com nomes e preços formatados.
    

    const produtos = [
      { id: 1, nome: "Celular Sansung", preco: 1699.99 },
      { id: 2, nome: "Notebook Asus", preco: 2999.99 },
      { id: 3, nome: "Tablet Sansung", preco: 1899.99 }
    ];

    const catalogo = produtos.map(produto => ({
      nome: produto.nome,
      preco: `R$ ${produto.preco.toFixed(2).replace('.', ',')}`
    }));

    console.log(catalogo);
   