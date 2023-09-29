// Defina a classe Animal
class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }
  }
  
  // Defina a classe Gato que herda de Animal
  class Gato extends Animal {
    constructor(nome, cor) {
      super(nome, "Gato"); // Chama o construtor da classe pai (Animal) com o nome e a espécie
      this.cor = cor;
    }
  
    // Implementa o método miar
    miar() {
      console.log(`${this.nome} está miando!`);
    }
  }
  
  // Criar um objeto Gato
  const meuGato = new Gato("Whiskers", "Cinza");
  
  // Acessar os atributos da classe Animal
  console.log(`Nome do animal: ${meuGato.nome}`);
  console.log(`Espécie do animal: ${meuGato.especie}`);
  console.log(`Cor do gato: ${meuGato.cor}`);
  
  // Chamar o método miar
  meuGato.miar();
  