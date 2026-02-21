//Você tem um array de raios e precisa calcular as áreas dos círculos correspondentes (Área = π * r²).
    
    const raios = [5, 7, 9];
    const areas = raios.map(raio => Math.PI * Math.pow(raio, 2));
    console.log(areas); 
    