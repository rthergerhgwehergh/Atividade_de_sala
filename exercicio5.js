// Defina a classe Circulo
class Circulo {
    constructor(raio) {
      this.raio = raio;
    }
  
    // Método para calcular a área
    calcularArea() {
      return Math.PI * Math.pow(this.raio, 2);
    }
  }
  
  // Crie um objeto Circulo com raio 5
  const meuCirculo = new Circulo(5);
  
  // Calcule a área e imprima
  const area = meuCirculo.calcularArea();
  console.log(`A área do círculo é: ${area}`);
  