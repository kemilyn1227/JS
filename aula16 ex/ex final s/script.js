var valores = []
var num = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.getElementById('res')


function isnumero(n) {
    if (Number(n) >=1 && Number (n) <=100){
        return true
    }else {
        return false
    }

}
function inlista(n,l){

    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}
function adicionar (){

    if(isnumero(num.value) && !inlista(num.value, valores)){ 

    var item = document.createElement('option')
    lista.appendChild(item)

    valores.push(num.value)

    item.innerHTML=`numero ${num.value} adicionado`

    num.value =''
    num.focus()

    }else{
        window.alert('numero invalido ou ja colocado')
    }
   
     

}

function verificar (){
    var maior = 0
    var menor = 0
    var soma = 0 
    var media = 0
    var tot = valores.length
    

    for(var pos  in valores)

    soma += valores[pos]
    media = soma / tot

    if (valores[pos]> maior )
        maior = valores[pos]
    
    if(valores[pos] < menor)
        menor = valores[pos]

        
    

    res.innerHTML =`<p>temos ${tot} elementos</p>`
    res.innerHTML +=`<p>o maior numero é ${maior}</p>`
    res.innerHTML += `<p>o menor numero é ${menor}</p>`
    res.innerHTML+= `<p>a soma total é de ${tot} </P>` 
    res.innerHTML +=`<p>a média é ${media}</p>`


}