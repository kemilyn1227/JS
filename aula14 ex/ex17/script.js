function gerar (){


    let num = document.getElementById('txtn') // numero
    let tab = document.getElementById('seltab') //selecionar

    if (num.value.length ==0){
        window.alert('por favor digite um numero')
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML =``  //limpar apos colocar outro numero
        while( c <= 10 ){
            let item = document.createElement('option')
            item.text = ` ${ n} x ${c} = ${n*c}`
            item.value = `tab${c}`//mais usado no php
            tab.appendChild(item) //adicionar filho 
            c++
        }

    }





    /*var num = document.getElementById('txtn')  //numero
    var res = document.getElementById('tabuada') //tabuada
    var tab =document.getElementById('seltab')

    var n =Number(num.value)
    var t1 = 1

    if (num.value.length==0){
        var s = 0
        for( c=0; s<=10; c+=n, s+=1){
             
             res.innerHTML +=`${n} x ${s} = ${c} <br>`
        }
    } else {
        res.innerHTML='numero invalido'
    }*/

    
   }

   
    
     
 
