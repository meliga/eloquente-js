//  Indrodução
//  Conveções Tipográficas
/*
    É muito simples definir ou declarar uma função e atribuir uma tarefa a ela.
    Uma função é um conjunto de instruções que executa uma tarefa.

    Obs: Os Valores dados a funções são chamados argumentos.

    Por exemplo, o código a seguir define uma função e da um nome a ela "fac".
    Em seguida diz que ela receberá um argumento, "n". Neste caso, a tarefa que
    "fac" é pegar é pegar valor de "n" verificar se(if) ele é igual(==) a ZERO,
    caso SIM, retorna 1, senão(else) ela pega o valor de "n" subtrai(n - 1)
    e multiplica(*) por "n".
*/
function fac(n){
    if (n == 0)
        return 1;
    else
        return fac(n - 1) * n;
}
console.log(fac(8)); //40320
/*
    Executar uma função é bem simples, você pode fazer do seguindo modo fac();
    Então vamos ler novamete as instrução do console.log, execute e exiba no console a
    função "fac" onde "n" é igual a 8.

*/