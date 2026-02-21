   //Dado um array de notas de alunos (0 a 100), converta para um conceito (`A`, `B`, `C`, `D`, `F`).
    
    const notas = [98, 85, 79, 60, 55];
    const conceitos = notas.map(nota => {
      if (nota >= 90) return "A";
      if (nota >= 80) return "B";
      if (nota >= 70) return "C";
      if (nota >= 60) return "D";
      return "F";
    });
    console.log("Conceitos: ", conceitos);