//Você tem um array de preços em reais e deseja formatá-los como string no formato `R$ xx,xx`.
    
    const precos = [10.25, 20.00, 1.99, 18.77];
    const precosFormat = precos.map(precos => `R$ ${precos.toFixed(2).replace('.',',')}`);
    console.log(precosFormat); 
    