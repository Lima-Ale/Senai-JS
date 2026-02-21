//Você tem um array de títulos de artigos e quer convertê-los em slugs para URLs (tudo minúsculo e espaços substituídos por `-`).
    
    const titulos = ["Aprenda JavaScript", "Usando o Método Map em JS", "Dicas de Programação"];
    const slugs = titulos.map(titulo => titulo.toLowerCase().replace(/\s+/g, "-"));
    console.log(slugs); 
