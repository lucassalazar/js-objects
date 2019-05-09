class Avo {
  constructor(nome, sobrenome = 'Salazar') {
    this.nome = nome;
    this.sobrenome = sobrenome;
  };
};

class Pai extends Avo { // Tem Avo como protótipo
  constructor(nome, sobrenome, profissao = 'Médico') {
    super(sobrenome); // Chama o construtor do protótipo Pai passando o sobrenome. O objeto que for instanciado recebera o atributo sobrenome
    this.nome = nome;
    this.profissao = profissao;
  };
};

class Filho extends Pai { // Tem Pai como protótipo
  constructor(nome, sobrenome, profissao) {
    super(sobrenome);
    this.nome = nome;
    this.profissao = profissao;
    //super('Silva'); // Chama o construtor do pai passando o nome 'Silva' como parâmetro
  };
};

const filho1 = new Filho('Lucas', null, 'Engenheiro de Computação');
const pai1 = new Pai('Miguel');
const avo1 = new Avo('Antonio');
console.log(filho1);
console.log(pai1);
console.log(avo1);
