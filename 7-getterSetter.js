const sequencia = {
  _valor: 1, // Convenção utilizada para dizer que o atributo será usado apenas internamente
  get valor() { return this._valor++ },
  set valor(valor) { 
    if (valor > this._valor) {
      this._valor = valor;
    }  
  }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);

sequencia.valor = 900; // 900 é menor que 1001, logo o método set não modificará o valor
console.log(sequencia.valor, sequencia.valor);

// A convenção utilizando o underline não torna o atributo privado, porém serve para mostrar que 
// o valor do atributo deve ser utilizado internamente, e obtido com getters e setters.
