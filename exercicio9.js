// Defina a classe Animal
class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }
  }
  
  // Defina a classe Cachorro que herda de Animal
  class Cachorro extends Animal {
    constructor(nome) {
      super(nome, "Cachorro"); // Chama o construtor da classe pai (Animal) com o nome e a espécie
    }
  
    // Implementa o método latir
    latir() {
      console.log(`${this.nome} está latindo!`);
    }
  }
  
  // Criar um objeto Cachorro chamado "Totó"
  const meuCachorro = new Cachorro("Totó");
  
  // Chamar o método latir do objeto Cachorro
  meuCachorro.latir();
  