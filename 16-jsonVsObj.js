// JSON é utilizado para a interoperabilidade entre sistemas. É um formato textual.
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } };
console.log(JSON.stringify(obj)); // A função não é aceita no formato JSON, pois este serve apenas para trafegar dados de uma aplicação à outra.

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"));
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"));
// console.log(JSON.parse("{ \"a\": 1, \"b\": 2, \"c\": 3 }"));
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'));