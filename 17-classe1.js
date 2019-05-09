class Lancamento { // Lançamento financeiro
  constructor(nome = 'Genérico', valor = 0) { // A função constructor será transformada em uma função construtora
    this.nome = nome; // this.nome cria um atributo nome no objeto que esta sendo instanciado
    this.valor = valor; // this.valor cria um atributo valor no objeto que esta sendo instanciado
  };
};

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  };
  
  addLancamentos(...lancamentos) { // operador rest ..., coloca todos os argumentos passados por parâmetro dentro de um array (lancamentos);
    lancamentos.forEach(l => this.lancamentos.push(l)); // adiciona cada elemento (l) do array lancamentos dentro do atributo lancamentos do objeto instanciado, utilizando this.lancamentos.
  };

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  };
};

const salario = new Lancamento('Salario', 45000);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaDeLuz);

console.log(contas.sumario());
