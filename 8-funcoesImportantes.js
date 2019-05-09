const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
};

console.log(Object.keys(pessoa)); // Retorna um array com todos os atributos (chaves) do objeto 
console.log(Object.values(pessoa)); // Retorna um array com todos os valores do objeto
console.log(Object.entries(pessoa)); // Retorna um array contendo os pares chave e valor do objeto dentro de subarrays

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]} : ${e[1]}`);
});

//Usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => { // Usar parenteses para a inserir os parametros do destructuring
  console.log(`${chave} : ${valor}`);
});

Object.defineProperty(pessoa, 'dataNacimento', {
  enumerable: true, // A propriedade será listada, quando utilizado o metodo .keys?
  writable: false, // Essa propriedade poderá ser alterada?
  value: '01/01/2019'
});

pessoa.dataNacimento = '01/01/2017'; // Não será sobrescrito
console.log(pessoa);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); // Adiciona as propriedades dos objetos o1, o2 ao objeto dest. Retorna um objeto.
console.log(obj);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);

