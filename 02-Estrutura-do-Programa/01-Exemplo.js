/*
    • Capítulo 2
      Estrutura do Programa
*/
// Variáveis
/*
    variáveis servem para pegar e guardar valores
*/
var ten = 10;
console.log(ten * ten); // 100

/*
    Nomes de variáveis podem ser quase qualquer palavra,
    menos as reservadas para palavras-chave (como var)
*/
var mood = "light";
console.log(mood); // ligth

mood = "dark"; // mesmo sem a palavra-chave "var" o js entende que a palavra "mood" é uma variável
console.log(mood); // dark

/*
    Dica: Variável, como o próprio nome nos diz, é tudo aquilo poder vir a variar.

    Um exemplo.
    Para lembrar da quantidade de dólares que Luigi ainda lhe deve,
    você cria uma variável. E então quando ele lhe paga 35 dólares,
    você dá a essa variável um novo valor.

 */

var luigisDebt = 140;
luigisDebt = luigisDebt - 35;

console.log(luigisDebt); // 105
/*
    Mesmo exemplo feito de outra forma
*/
var luigisDebt = 140;
var luigisPag = 35; // esse valor varia de acordo com o que luigi lhe paga
luigisRest = luigisDebt - luigisPag;

console.log(luigisRest); // 105