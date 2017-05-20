/*
    • Criando um Triângulo com Loop
    Escreva um programa que faça 7 chamadas a console.log() para retornar o seguinte triângulo.

    - Triângulo com Loop WHILE
*/
var result = "";
var counter = 0;
while (counter < 7) {
    counter++
    result = result + "#";
    console.log(result);
}

//  - Triângulo com Loop FOR
var result = "";
for (var counter = 0; counter < 7; counter++){
    result = result + "#";
    console.log(result);
}

//  - Triângulo com Loop Do
var text = ""
var i = 0;
do {
    text = text + "#";
    i++;
    console.log(text);
}
while (i < 7)
