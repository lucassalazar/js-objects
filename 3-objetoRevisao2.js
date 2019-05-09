const obj = {
  nome: 'Objeto Literal'
};

console.log(obj);

const obj1 = new Object({nome: 'Objeto criado a partir da função Object'});

console.log(obj1);

const criaObjeto1 = function (nome) {
  return {
    nome,
    completo: function() {
      console.log(`Esta é uma ${nome}`);
    }
  };
};

const obj2 = criaObjeto1('Factory Function');
obj2.completo();


function criaObjeto2 (nome) {
  this.nome = nome,
  this.completo = function() {
    console.log(`Esta é uma ${this.nome}`);
  };
};

const obj3 = new criaObjeto2('Função Construtora');
obj3.completo();

class criaObjeto3 {
  constructor(nome) {
    this.nome = nome
  };
    completo() {
      console.log(`Esta é uma ${this.nome}`);
    };
}; 

const obj4 = new criaObjeto3('Classe');
obj4.completo();