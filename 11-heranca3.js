const pai = { nome: 'Pedro', corCabelo: 'preto' };

const filha1 = Object.create(pai); // Cria o objeto filha, tendo como protótipo o objeto pai
filha1.nome = 'Ana';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true }
});
console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2) {
  filha2.hasOwnProperty(key) ? 
    console.log(`Própria propriedade: ${key}`) : console.log(`Por herança: ${key}`); // Para acessar o valor da propriedade se utiliza a expressão filha2[ḱey] (Obs: Utilizar filha2.key não funcionaria, pois nesta expressão a palavra key seria considerada uma propriedade, e não uma variavel com valor correspondente a uma propriedade)
}

// Adicionando uma nova propriedade
Object.defineProperty( filha2, 'idade', { value: '23', writable: false, enumerable: true});

for(let key in filha2) {
  filha2.hasOwnProperty(key) ? 
    console.log(`Própria propriedade: ${key}`) : console.log(`Por herança: ${key}`);
}