/*
    • FizzBuzz
    Escreva um programa que imprima (usando console.log()) todos os números de 1 a 100,
    exceto que, para números divisíveis por 3, ele imprima Fizz ao invés do número, e
    para números divisíveis por 5 (e não 3), ele imprima Buzz.

    Quando você tiver o programa funcionando, modifique-o para imprimir FizzBuzz para
    números que são divisíveis por ambos os números 3 e 5.

    (Isto é na verdade uma pergunta de entrevista usada para eliminar uma porcentagem
    significativa de candidatos programadores. Então, se você resolvê-la, você está
    autorizado de se sentir bem consigo mesmo).

*/

//  - FizzBuzz com Loop FOR
for (var counter = 0; counter <= 100; counter++){
    if (counter % 3 == 0)
        console.log("Fizz");
    else
        console.log(counter);
}

