// Função construtora
function MeuObjeto() {};
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === obj2.__proto__); // Dois objetos criados pela mesma função construtora apontam para o mesmo protótipo
console.log(MeuObjeto.prototype === obj1.__proto__); // Quando se cria um objeto a partir de uma função construtora a propriedade __proto__ deste aponta para nomeDaFuncaoConstrutora.prototype

// __proto__ é a maneira como um objeto referencia o seu protótipo

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function() {
  console.log(`Meu nome é ${this.nome}!`);
};

obj1.falar();

obj2.nome = 'Lucas';
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // Protótipo atribuido de maneira direta, __proto__ deixa de apontar para Object.prototype e aponta para o protótipo da função construtora (MeuObjeto.prototype)
obj3.nome = 'Obj3';
obj3.falar();

// Resumo Geral
// Assertivas verdadeiras

// O novo objeto (new MeuObjeto) possui uma propriedade __proto__ que aponta par o objeto MeuObjeto.prototype
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);

// A propriedade __proto__ do objeto MeuObjeto.prototype aponta para um objeto chamdo Object.prototype
console.log(MeuObjeto.prototype.__proto__ === Object.prototype); // Object.prototype é o objeto pai

// A propriedade __proto__ da função MeuObjeto aponta para uma função chamada Function.prototype
console.log(MeuObjeto.__proto__ === Function.prototype); // MeuObjeto é uma função, e por padrão aponta para Funtion.prototype

// A propriedade __proto__ da função Function.prototype aponta para um objeto chamado Object.prototype
console.log(Function.prototype.__proto__ === Object.prototype); // O protótipo do protótipo de uma Function aponta para Object.prototype

console.log(Object.prototype.__proto__ === null); // O valor da propriedade __proto__ de um Object.prototype é nulo