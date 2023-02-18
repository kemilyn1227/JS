function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`agora são ${hora} horas`)

    if (hora >=0 && hora <12){
      img.src ='imagens/manhap.png'
      document.body.style.background='#CE9DD0'
    } else if (hora >=12 && hora<18){
      img.src = 'imagens/tardep.png'
      document.body.style.background ='rgb(172, 82, 23)'
      
    }else {
        img.src ='imagens/noitep.png'
        document.body.style.background='rgb(22, 42, 69)'
    }
}
