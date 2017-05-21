/*
    • Capítulo 2
    Estrutura do Programa

    - Tabuleiro de Xadrez
    Escreva um programa que cria uma string que representa uma grade 8x8,
    usando novas linhas para separar os caracteres. A cada posição da grade
    existe ou um espaço ou um caracter “#”, de forma que estes caracteres
    formem um tabuleiro de xadrez.

    Passando esta string para console.log, ela deverá se parecer com isso:

    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #

    Quando isso funcionar, defina uma variável tamanho = 8, e mude o programa
    para que o mesmo funciona para qualquer tamanho, retornando uma grade com a
    largura e altura fornecida.
*/

var row = '';
var size = 8;

for (grid = 0; grid < size; grid++)
    // espaçamento entre os caracteres "# # # #"
    if (grid % 2 == 0)
        row += "#";
    else
        row += " ";
    // indentação das linhas
    for (i = 0; i < size; i++)
        if (i % 2 != 0)
            console.log(" " + row);
        else
            console.log(row);

