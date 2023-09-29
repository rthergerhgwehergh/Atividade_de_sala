// Defina a classe Animal
class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }
  }
  
  // Defina a classe Gato que herda de Animal
  class Gato extends Animal {
    constructor(nome) {
      super(nome, "Gato"); // Chama o construtor da classe pai (Animal) com o nome e a espécie
    }
  
    // Implementa o método miar
    miar() {
      console.log(`${this.nome} está miando!`);
    }
  }
  
  // Criar um objeto Gato chamado "Miaú"
  const meuGato = new Gato("Miaú");
  
  // Chamar o método miar do objeto Gato
  meuGato.miar();
  