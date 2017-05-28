/*
 • Capítulo3
 Funções

 - Definindo Uma Função

 - Exemplo 1
   Neste exemplo a variável SQUARE recebe uma função que retorna
   o quadrado do número passado a ela atráves do PARÂMENTRO X
*/
var square = function(x) {
    return x * x;
};

console.log(square(12)); // → 144
/*
 - Exemplo 2
   Funções podem receber múltiplos PARÂMENTRO ou nenhum.
   No exemplo a seguir, makeNoise não recebe nenhum PARÂMENTRO,
   enquanto power recebe dois
 */
var makeNoise = function() {
    console.log("Pling!");
};

makeNoise();
// → Pling!

var power = function(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
};

console.log(power(2, 10));
// → 1024