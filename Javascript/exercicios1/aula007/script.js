function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date
var hora =  data.getHours()
msg.innerHTML = `Agora são <strong>${hora} horas</strong>`
if(hora >= 6 && hora < 12){
    /*Bom dia!*/
    img.src = 'Sem título.png'
    document.body.style.background = '#FEE863'
}else if(hora >= 12 && hora < 18){
    /*Boa Tarde*/
    img.src = 'Tarde.png'
    document.body.style.background = '#9C666A'
}else if(hora >= 18 && hora < 24){
    /*Boa Noite*/
    img.src = 'Noite.png'
    document.body.style.background = '#2872AD'
}else{
    img.src = 'Madrugada.png'
    document.body.style.background = '#2E2E2E'
}

}