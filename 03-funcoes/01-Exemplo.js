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

/*
    - Exemplo 4
    Escopo Aninhado
    O JavaScript não se distingue apenas pela diferenciação entre
    variáveis locais e globais. Funções também podem ser criadas
    dentro de outras funções, criando vários níveis de “localidades”.
 */
var landscape = function() {
    var result = "";
    var flat = function(size) {
        for (var count = 0; count < size; count++)
            result += "_";
    };
    var mountain = function(size) {
        result += "/";
        for (var count = 0; count < size; count++)
            result += "'";
        result += "\\";
    };

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
};

console.log(landscape());
// → ___/''''\______/'\_
/*
    - Exemplo 12
    Argumentos Opcionais
    A variável POWER pode ser chamada com um ou dois argumentos.
    No caso de ser invocada com apenas um argumento,
    ela assumirá o valor 2 para o expoente e a função
    se comportará com um expoente ao quadrado.
 */
function power(base, exponent) {
    if (exponent == undefined)
        exponent = 2;
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64