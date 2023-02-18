function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //data do sistema(ano)
    var fano =document.getElementById('txtano') //cx do ano
    var res = document.querySelector('div#res')//cx resultado

    if (fano.value.length == 0 || Number (fano.value) >ano){
        window.alert('verifique os dados e tente novamente')
    } else{
        var fsex =document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade}`
    }
}