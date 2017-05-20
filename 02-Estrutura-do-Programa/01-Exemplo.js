/*
    • Capítulo 2
    Estrutura do Programa

    - Variáveis
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

//  - A Função console.log
var x = 30;
console.log("o valor de x é", x); // o valor de x é 30

/*
    - Retornando Valores
    A função Math.max, que pega dois números e retorna o maior entre eles
*/
console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);

//  - Solicitar e Confirmar
prompt("Diga-me algo que você saiba.", "...");

//  - Fluxo de Controle
var theNumber = Number(prompt("Escolha um número", ""));
alert("Seu número é a raiz quadrada de " + theNumber * theNumber);

//  - Execução Condicional

var theNumber = Number(prompt("Digite um número", ""));
if (!isNaN(theNumber))
    alert("Seu número é a raiz quadrada de " + theNumber * theNumber);

var theNumber = Number(prompt("Digite um número", ""));

/*
    !isNaN - é uma função que retorna "true"(verdadeiro) se o argumento dado a ela é NaN.
    NaN significa “not a number” (não é um número). A função Number retorna NaN quando você
    fornece a ela uma string que não representa um número válido.

    Então, salvo que theNumber não seja um número, faça isso.
*/
if (!isNaN(theNumber))
    alert("Seu número é a raiz quadrada de " + theNumber * theNumber);
else
    alert("Ei! Por que você não me deu um número?");

var num = Number(prompt("Digite um número", "0"));

if (num < 0)
    alert("Pequeno");
else if (num < 100)
    alert("Médio");
else
    alert("Grande");

//  - fluxo de controle do loop
var number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
// 0
// 2
// etc...