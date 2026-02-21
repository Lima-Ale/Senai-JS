//Adicione um sufixo às palavras**
//Dado um array de palavras, use `map` para adicionar o sufixo `"!!!"` a cada uma.
    const palavras = ["Bom dia", "Boa Tarde", "Boa Noite"];
    const sufixo = palavras.map(palavra => palavra + "!!!");
    console.log(sufixo);  
    