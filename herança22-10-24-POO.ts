abstract class Animal {
    nome: string;
    idade: number;
    
    constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
    }
    
    emitirSom() {}
    }
    
    class Cachorro extends Animal {
    emitirSom() {
    console.log('Au au');
    }
    }
    
    class Gato extends Animal {
    emitirSom() {
    console.log('Miau miau');
    }
    }
    
    let animais: Animal[] = [
    new Cachorro('Rex', 3),
    new Gato('Lili', 5)
    ];
    
    animais.forEach(animal => {
    console.log(animal.nome);
    animal.emitirSom();
    });