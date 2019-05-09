// Usando a notação literal
const obj1 = {};
console.log(obj1);

// Object em JS (Chama uma função construtora padrão, a função Object)
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desc) { // preco e desc estão encapsulados (privados)
  this.nome = nome; // nome está visivel fora do objeto (público)
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
};
const p1 = new Produto('Caneta', 7.99, 0.15); // Após isso apenas o nome dos produtos poderão ser alterados
const p2 = new Produto('Notebook', 2998.0, 0.25);
console.log(p1.getPrecoComDesconto());
console.log(p2.getPrecoComDesconto());

// Função factory (É um tipo de padrão de projeto)
function criarFuncionario (nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    }
  };
};

const f1 = criarFuncionario('Lucas', 11400, 4);
const f2 = criarFuncionario('Maria', 7980, 1);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Uma função famosa que retorna um Objeto a partir de um JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON);

// JSON é texto, e objeto é um objeto
