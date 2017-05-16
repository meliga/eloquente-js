/*
 • Capítulo 2
 Estrutura do Programa
*/

// Loops While
// Exemplo de programa que calcula e mostra o valor de 2¹⁰ (2 elevado a décima potência)
var result = 1;
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);
// 1024