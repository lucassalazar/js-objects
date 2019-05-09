// Um objeto é uma coleção dinâmina de pares chave/valor
const produto = new Object; // Object é uma função que instancia um objeto
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Lucas',
    idade: 26,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [{
    nome: 'Bruna',
    idade: 25
  }, {
    nome: 'Rodrigo',
    idade: 26
  }],
  calcularValorDoSeguro: function() {
    // ...
  }
};

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante';
console.log(carro);

//delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorDoSeguro;
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);