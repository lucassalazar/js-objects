// Object.preventExtensions, previne que o objeto em questão seja extendido, ou seja, impossibilita a adição de novos atributos ao objeto. No entanto, este método não impossibilita a exclusão de atributos existentes ou a alteração de valores.
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: '1.99', tag: 'promoção'
});
console.log('Extensível?', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.seal, sela o objeto. Previne qualquer adição ou remoção de qualquer atributo, porém permite a alteração de valores.
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado?', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze, congela o objeto. Previne qualquer tipo de alteração no objeto em questão. (Selado + writeable: false). 
const animalDeEstimacao = Object.freeze({
  animal: 'cachorro',
  nome: 'Pancho',
  raca: 'Beagle'
});

animalDeEstimacao.idade = 8;
animalDeEstimacao.raca = 'Bull Terrier';
delete animalDeEstimacao.animal;
console.log(animalDeEstimacao);