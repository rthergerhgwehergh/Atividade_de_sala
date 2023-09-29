// Defina a classe Retangulo
class Retangulo {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  
    // Método para calcular a área
    calcularArea() {
      return this.base * this.altura;
    }
  }
  
  // Crie um objeto Retangulo com base 10 e altura 20
  const meuRetangulo = new Retangulo(10, 20);
  
  // Calcule a área e imprima
  const area = meuRetangulo.calcularArea();
  console.log(`A área do retângulo é: ${area}`);
  