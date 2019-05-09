// CÓDIGO NÃO EXECUTÁVEL!!!

// Procedural (Ex: C)
processamento(valor1, valor2, valor3)

// OO, o paradigma mapeia a realidade e tras para o código
objeto = {
  valor1,
  valor2,
  valor3,
  processamento() {
    // ...
  }
}

objeto.processamento() // O foco passou a ser o objeto

// Princípios Importantes:

  // >> 1. ABSTRAÇÃO (Capacidade de abstrair o objeto para o sistema em específico)

  // >> 2. ENCAPSULAMENTO (Manter os detalhes de implementação escondidos, e permitir apenas o acesso dos dados necessários)
    // Exemplo do carro:
      // - Honda Cívic (1990)
      // - Honda Cívic (2018)
      // Os dois tem interfaces muito parecidas, mas o que mudou foi todos os detalhes de implementação
    // Conceito de acoplamento:
      // Quando o objeto tem baixo nível de encapsulamento, é muito provavel que a interface de comunicação
      // seja ruim, o que faz com que os dados visíveis sejam usados em muitas partes do código, algo que pode 
      // acarretar em bugs ou fazer com que a evolução do sistema se torne algo mais complicado.
      // (Analogia: Correr uma maratona com todos os competidores de mãos dadas).

  // >> 3. HERANÇA (Prototype)
    // Exemplo do motor do carro:
      // Um objeto carro não precisa conter todas as informações do seu motor. O objeto carro pode 
      // conter um outro objeto interno chamado motor e conter essas informações.
    // (Formar objetos complexos, a partir da composição de objetos mais simples).
    // Esse pensamento, corrobora com a reutilização de código.

  // >> 4. POLIMORFISMO (Multiplas formas)
    // Uma variavel pai do tipo mais genérico (Carro), pode receber a atribuição de um subtipo (ferrari, uno, etc).
    // Exemplo carro:
      // Carro
        // Ferrari
        // Uno 