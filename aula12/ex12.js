var agora = new Date()

var hora = agora.getHours()

console.log (`a hora em que voce logou é ${hora} hr`)

if (hora >18){
    console.log ('boa noite')
}
else if(hora <=5 || hora<12){
    console.log ('bom dia')

}else if (hora >=12 ||  hora<18){
    console.log ('boa tarde')
}
