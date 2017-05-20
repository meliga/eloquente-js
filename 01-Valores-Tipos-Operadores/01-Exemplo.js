/*
    • Capítulo 1
    Valores, Tipos e Operadores

    - Operadores Unários - typeof
    Este operador(typeof) verifica qual é o tipo de dado
    do valor que esta sendo submetido a ele para avaliar.
*/
console.log(typeof 4.5); //number
console.log(typeof "x"); //string
console.log(typeof true); //boolean

//  - OBS: O operador menos"-" pode ser usado como operador binário e unário.
console.log(- (10-2)); //-8

//  - Valores Booleanos - comparações
console.log(3 > 2); // true
console.log(3 < 2); // false

//  - Strings podem ser comparadas da mesma forma
console.log("Aardvark" < "Zoroaster"); // true

/*
     Outros operadores similares são >= (maior que ou igual a),
     <= (menor que ou igual a), == (igual a) e !== (não igual a).
*/
console.log("Itchy" != "Scratchy"); // true
console.log(NaN == NaN); // false

/*
    - Operadores Lógicos
    O JavaScript suporta 3 operadores lógicos: e(&&), ou(||) ou não(!)
*/
console.log(true && false); // false
console.log(true && true); // true
/*
    O operador `||` denota ao OU lógico.
    Ele produz true se algum dos valores fornecidos for true:
 */
console.log(false || true); // true
console.log(false || false); // false

/*
    - Conversão Automática de Tipo
    Quando um operador é aplicado a um tipo de valor “errado”,
    ele vai silenciosamente converter este valor para o tipo que quiser,
    usando um conjunto de regras
*/
console.log(8 * null);  // 0
console.log("5" - 1); // 4
console.log("5" + 1); // 51
console.log("five" * 2);// NaN
console.log(false == 0); // true

//  - O Curto-Circuito de && e ||
console.log(null || "user") // user
console.log("Karl" || "user") // Karl