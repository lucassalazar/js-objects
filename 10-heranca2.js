// Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' }; // Avo aponta para o prototype da função Object
const pai = { __proto__: avo, attr2: 'B' }; // Pai aponta para o prototype avo
const filho = { __proto__: pai, attr3: 'C' }; // Filho aponta para o prototype pai

console.log(filho.attr1); // O atributo attr1 não está presente no objeto filho, porém é encontrado dentro do objeto avo.
console.log(filho.attr0); // O atributo attr0 não está presente na cadeia de protótipos. Logo é undefined.

Object.prototype.attr0 = 'Z'; // Criando o atributo attr0 dentro do objeto prototype. (Não é recomendado realizar esse tipo de alteração dentro do objeto prototype da função Object, pois isto pode impactar todos os outros objetos, e por consequência a estrutura inteira da aplicação)
console.log(filho.attr0); // O acesso ao atributo attr0 partindo do objeto filho agora é possivel. 

// Printando todos os atributos da cadeia de protótipos a partir do objeto filho
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

// Segundo exemplo
const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais(delta) {
    if(this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  }
};

const ferrari = {
  modelo: 'F40',
  velMax: 324, // shadowing (sombreamento). A velAtual do objeto ferrari irá omitir a velAtual do objeto carro, pois ela está definida dentro do escopo do objeto.
};

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`; // Super é usado da mesma forma que this, porém para referenciar o objeto pai (prototype) do objeto atual.
  }
};

// O método setPrototypeOf da função Object, estabelece uma relação de protótipo entre dois objetos
Object.setPrototypeOf(ferrari, carro); // O objeto ferrari tem o objeto carro como seu protótipo
Object.setPrototypeOf(volvo, carro); // O objeto volvo tem o objeto carro como seu protótipo

console.log(ferrari);
console.log(volvo);

volvo.aceleraMais(100);
console.log(volvo.status());

ferrari.aceleraMais(300); // O this utilizado dentro da função aceleraMais, apontará para o objeto ferrari
console.log(ferrari.status()); // O this utilizado dentro da função status, apontará para o objeto ferrari


// Polimorfismo x Shadowing 

// Shadowing:
  // let escopo = "escopo abrangente"

  // function imprimir() {
  //     let escopo = "escopo mais restrito"
  //     console.log(escopo);
  // }
  
  // imprimir()

// Polimorfismo: "Polimorfismo é quando queremos que os filhos se comportem diferente dos seus pais, ou seja, temos os mesmo métodos, com os mesmos nomes mas com diferentes comportamentos." – Nicolas Bontempo(Medium)

  // class Animal {
  //   respirar() {
  //       console.log("Respirando...");
  //   }
  // }

  // class Peixe extends Animal {
  //   respirar() {
  //     console.log("Respirando embaixo da água...");
  //   }
  // }

  // class Sapo extends Animal {
  //   respirar() {
  //     console.log("Respirando pela pele...");
  //   }
  // }

  // let a1 = new Animal()
  // let p1 = new Peixe()
  // let s1 = new Sapo()
  // a1.respirar()
  // p1.respirar()
  // s1.respirar()

// Podemos ver uma semelhança entre Shadowing e Polimorfismo pela questão de sobrescrever váriáveis(Shadowing) e sobrescrever métodos(Polimorfismo) contudo estes atuam em áreas diferentes. Onde um está relacionado ao escopo da variável(Shadowing) e o outro está relacionado à herança/reaproveitamento de código!