class FiguraGeometrica {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  }
  
  class Circulo extends FiguraGeometrica {
    constructor(raio) {
      super(); // Chama o construtor da classe pai (FiguraGeometrica)
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * Math.pow(this.raio, 2);
    }
  }
  
  // Exemplo de uso:
  const circulo = new Circulo(5);
  console.log(`Raio do círculo: ${circulo.raio}`);
  console.log(`Área do círculo: ${circulo.calcularArea()}`);
  