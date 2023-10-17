var agora = new Date
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} `) 
if(6 >= hora || ora < 12){
    console.log('Bom dia!')
}else {
    if(hora < 18){
        console.log('Boa tarde!')
    }else{
        console.log('Boa noite!')
    }
}