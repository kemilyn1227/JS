function contar (){
    let ini = document.getElementById('txti') //inicio
    let fim = document.getElementById('txtf') // fim 
    let passo = document.getElementById('txtp')// passo
    let res = document.getElementById('res') // resultado

    
    
    if(ini.value.length == 0 || fim.value.length ==0 || passo.value.length==0 ){
        //window.alert('erro faltam dados ')
        res.innerHTML =  'impossivel contar'
         // se deixar algo em branco mostra erro 

    } else {
        res.innerHTML = 'contando <br> '
        let i = Number(ini.value)
        let f  = Number(fim.value)
        let p = Number(passo.value)

        if ( p <= 0){
            window.alert ('passo invalido, cosiderando passo 1')
            p=1

        }

        if (i < f ){

            //contagem crescente

        for(let c = i  ; c <= f ; c += p){
            res.innerHTML += `${c} \u{1FAE0}	`
        }
        // contagem regressiva
       } else {
        for( let c = i ; c >=f; c -= p )
        res.innerHTML += `${c} \u{1FAE0}`
       } res.innerHTML  +=`\u{1F3C1}`
        
    }

    

}



 



      
    
