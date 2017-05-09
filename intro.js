// var "total" inicia com valor igual a "0" e "count" tem valor inicial de "1".
var total = 0, count = 1;
/*
   Ao executar o programa ele verifica a condição que lhe foi passada "count <= 10",
   ou seja, enquanto(while) valor de "count" for menor ou igual a 10.
*/
while (count <= 10) {
    // enquanto a condição for verdadeira ele ficará em loop.
    total = total + count; // total recebe a soma de total + count
    count = count + 1; // count recebe a soma dele mesmo mais 1
}
/*
    Como o valor de count, neste caso é 1, a condição será
    executada 10 vezes, a cada vez o valor de count sobe 1
    e o valor de total recebe estas somas, resultando em 55.

    Tabela de rastrear código
    valor = 0 - 1 - 3 - 6 - 10 - 15 - 21 - 28 - 36 - 45 - 55
    count = 1 - 2 - 3 - 4 - 5  - 6  - 7  - 8  - 9  - 10
*/
console.log(total); // 55

// Este é o mesmo caso aplicado de forma mais simples,
//console.log(sum(range(1, 10))); //55
// mas ainda é preciso declara sum e range.
/*
   Fazendo um leitura deste script, console.log que dizer
   registre no console ou escreva no console, o valor da soma(sum)
   da extenção(range) dos numero de 1 a 10(1,10),
   ou seja 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55,
*/
