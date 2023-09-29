class FiguraGeometrica {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  }
  
  class Retangulo extends FiguraGeometrica {
    calcularArea() {
      return this.base * this.altura;
    }
  }
  
  // Exemplo de uso:
  const retangulo = new Retangulo(5, 10);
  console.log(`Base do retângulo: ${retangulo.base}`);
  console.log(`Altura do retângulo: ${retangulo.altura}`);
  console.log(`Área do retângulo: ${retangulo.calcularArea()}`);
  