function verificar(){
    var data = new Date()//acessar data hora do sistema
    var ano = data.getFullYear() //data do sistema(ano)
    var fano =document.getElementById('txtano') //cx do ano
    var res = document.querySelector('div#res')//cx resultado

    if (fano.value.length == 0 || Number (fano.value) >ano){
        window.alert('verifique os dados e tente novamente')
    } else{
        var fsex =document.getElementsByName('radsex')//botoes sexo
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex [0].checked){
            genero ='homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'imagens/criancah.png')
            }else if (idade <21) {
                img.setAttribute('src', 'imagens/jovemh.png')
            }else if (idade <50) {
                img.setAttribute('src', 'imagens/adultoh.png')

            }else{
                img.setAttribute('src', 'imagens/idosoh.png')
            }
        }else if (fsex[1].checked) {
            genero='mulher'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'imagens/criancam.png')
            }else if (idade <21) {
                img.setAttribute('src', 'imagens/jovemm.png')
            }else if (idade <50) {
                img.setAttribute('src', 'imagens/adultam.png')

            }else{
                img.setAttribute('src', 'imagens/idosam.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML =`detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        

        
    }
}