// Defina a classe Animal
class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }
  }
  
  // Defina a classe Cachorro que herda de Animal
  class Cachorro extends Animal {
    constructor(nome, raca) {
      super(nome, "Cachorro"); // Chama o construtor da classe pai (Animal) com o nome e a espécie
      this.raca = raca;
    }
  
    // Implementa o método latir
    latir() {
      console.log(`${this.nome} está latindo!`);
    }
  }
  
  // Criar um objeto Cachorro
  const meuCachorro = new Cachorro("Rex", "Golden Retriever");
  
  // Acessar os atributos da classe Animal
  console.log(`Nome do animal: ${meuCachorro.nome}`);
  console.log(`Espécie do animal: ${meuCachorro.especie}`);
  console.log(`Raça do cachorro: ${meuCachorro.raca}`);
  
  // Chamar o método latir
  meuCachorro.latir();
  