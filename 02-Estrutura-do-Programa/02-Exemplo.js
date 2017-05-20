/*
    • Capítulo 2
      Estrutura do Programa

    - Loops While
    Exemplo de programa que calcula e mostra o valor
    de 2¹⁰ (2 elevado a décima potência)
*/
var result = 1;
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);
// 1024

//  - Loops Do
/*
    do {
        var name = prompt("Who are you?");
    } while (!name) {
        console.log(name);
    }
*/

//  - Loops For
for (var number = 0; number <= 12; number = number + 2)
    console.log(number);
// 0
// 2
// etc

// Aqui temos o código que computa 2¹⁰, usando for ao invés de while:
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
    result = result * 2;
console.log(result);
//1024
/*
    - Saindo de um Loop
    Este programa encontra o primeiro número que é maior ou igual a 20, e divisível por 7:
*/
for (var current = 20; ; current++) {
    if (current % 7 == 0)
        break;
}
console.log(current);
// 21
/*
    O truque com o operador de resto % é uma maneira fácil de testar se um número
    é divisível por outro número. Se for, o resto da divisão é zero.
*/

//  - Enviando um Valor com switch
switch (prompt("Como está o tempo?")) {
    case "chuvoso":
        console.log("Lembre-se de trazer um guarda-chuva!");
        break;
    case "ensolarado":
        console.log("Vista roupas leves!");
    case "nublado":
        console.log("Vá lá fora!");
        break;
    default:
        console.log("Tempo desconhecido.");
        break;
}