const ferrari = {
  modelo: 'F40',
  velMax: 324
};

const volvo = {
  modelo: 'V40',
  velMax: 200
};

// Acessando o super-objeto, objeto pai
console.log(ferrari.__proto__); // Ao tentar acessar um atributo, e este não constar no objeto. Javascript tentará encontrar no objeto pai (prototype)
// {} retorna um objeto vazio, sinalizando que foi encontrado um objeto
console.log(ferrari.__proto__ === Object.prototype); // true
console.log(volvo.__proto__ === Object.prototype); // true

console.log(Object.prototype.__proto__); // null. O objeto pai, prototype não possui um atributo __proto__ apontado para nenhum outro pai. Seu valor é nulo
console.log(Object.prototype.__proto__ === null); // true

// Função construtora
function MeuObjeto() {};
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype); // Meu objeto cria um prototype

console.log(ferrari.prototype); // O objeto ferrari não tem um atributo chamado prototype, apenas um atributo chamado __proto__ que aponta para o objeto prototype

