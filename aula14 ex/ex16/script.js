function contar (){
    let ini = document.getElementById('txti') //inicio
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    

    if(ini.value.length == 0 || fim.value.length ==0 || passo.value.length==0 ){
        window.alert('erro faltam dados ')
         // se deixar algo em branco mostra erro 

    } else {
        res.innerHTML = 'contando '
        let i = Number(ini.value)
        let f  = Number(fim.value)
        let p = Number(passo.value)

        if (i < f ){

        for(let c = i  ; c <= f ; c += p){
            res.innerHTML += `${c} \u{1FAE0}	`
        }
        res.innerHTML +=`\u{1F3C1}`
       } else {
        for( let c = i ; c >=f; c -= p )
        res.innerHTML += `${c} \u{1FAE0}`
       } res.innerHTML `\u{1F3C1}`
        
    }

    

}



 



      
    
