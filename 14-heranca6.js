function Aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
};

const aula1 = new Aula('Bem Vindo', 123); // Sempre quando se instancia um objeto utilizando o operador new e uma função construtora, cria-se automaticamente um objeto protótipo com o nome da função (Ex: Aula.prototype) 
const aula2 = new Aula('Até Breve', 456);
console.log(aula1, aula2);

// Simulando o operador new
function novo(f, ...params) { // Rest operator, coloca todos os argumentos enviados em um unico parametro do tipo array chamado params
  const obj = {};
  obj.__proto__ = f.prototype;
  //f.call(obj, ...params); Utilizando desta forma (...params), o operador é chamado de spread, pois retira (espalha), os valores de dentro do array params.
  f.apply(obj, params); // O método apply, envia como primeiro argumento um objeto de contexto (obj), e na sequência os demais argumentos para a função construtora (f) dentro de um array.
  return obj;
};

const aula3 = novo(Aula, 'Bem Vindo', 123);
const aula4 = novo(Aula, 'Até Breve', 456);
console.log(aula3, aula4); 
