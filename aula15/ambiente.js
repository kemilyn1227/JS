let num = [5,8,2,9,3] 
num.push(1)
num.sort()
//num.push(1) colocara depois de ordenar  5,8,9,3
console.log(num)
console.log(`nosso vetor tem ${num.length} elementos`)
console.log(`o primeiro valor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos==-1){
    console.log(`o valor nao existe`)
}else{
console.log(` o valor 2 esta na posiçao ${pos}`)}



