var  valores = []

var campo = document.getElementById('iadd')
    var addc= document.createElement('option')
    campo.appendChild(addc)
   
    
    var input = document.getElementById('txtn')

function isnumero(n){
    if (Number(n) >=1 && Number(n)<=100){
    return true}
    else  {
        return false
    }

}
function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}



function adicionar(){
    
    if (isnumero(input.value) && !inlista(input.value, valores)){

    valores.push(Number(input.value))
    addc.text=`valor ${input.value} adicionado `

    input.value = ``
    input.focus()
    res.innerHTML=``
    
  
}else{
    window.alert('valor inválido ou ja adicionado ')
   
    
} return valores






}

function finalizar(){

    var res = document.getElementById('res')

    if (valores == 0 ){

        window.alert('adicione  valores antes de finalizar')

    }else{

        let tot = valores.length
        let maior = valores [0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos]> maior )
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML=`<p>Temos o total de ${tot} elementos.</p>`
        res.innerHTML+= `<p>o menor valor é ${menor}</p>`
        res.innerHTML+= `<p>o maior valor é ${maior}</p>`
        res.innerHTML+= `<p> a soma de todos os elementos é ${soma}</p>`
        res.innerHTML+= `<p> a media entre os elementos é ${media}</p>`

    }
       
   
    


}




     
   






