function fatorial(n){
    let fat = 1 
    for ( let c=n ; c >1; c--){ // ex 5 a cada rodada perde 1. 5 , 4 , 3 , 2 ,1 quando ele for menor ou igual a um para
        fat *=c  // fat 1 vai multiplicar com o valor c e a cada rodada pega o resultado pra si ex fat(1) x 5 = 5 fat = 5
    }
    return fat 
}
console.log(fatorial(5))
