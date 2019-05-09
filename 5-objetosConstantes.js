// pessoa -> endereço: 123 -> {...}
const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> endereço: 456 -> {...} 
// pessoa = { nome: 'Ana' };

Object.freeze(pessoa); // Os atributos do objeto não poderão ser modificados mais
pessoa.nome = 'Maria'; // Não modifica
pessoa.end = 'Rua ABC'; // Não modifica
delete pessoa.nome; // Não modifica

console.log(pessoa);

// Criando objeto com freeze
const pessoaConstante = Object.freeze({nome: 'Lucas'});
pessoaConstante.nome = 'Maria'; // Não modifica
console.log(pessoaConstante);