function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if(fano.value == 0 || fano.value > ano){
        window.alert('[Erro!] Verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if (idade > 0 && idade < 7){
                /*Bebê*/
                img.setAttribute('src','bebe-h.png')
            }else if (idade >= 7 && idade < 12){
                /*Criança*/
                img.setAttribute('src','cria-h.png')
            }else if (idade >= 12 && idade <18){
                /*adolescente*/
                img.setAttribute('src','adol-h.png')
            }else if(idade >=18 && idade < 30){
                /*Jovem*/
                img.setAttribute('src','jove-h.png')
            }else if(idade >= 30 && idade < 65){
                /*Adulto*/
                img.setAttribute('src','adul-h.png')
            }else{
                /*Idoso*/
                img.setAttribute('src','ido-h.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if (idade > 0 && idade < 7){
                /*Bebê*/
                img.setAttribute('src','bebe-m.png')
            }else if (idade >= 7 && idade < 12){
                /*Criança*/
                img.setAttribute('src','cria-m.png')
            }else if (idade >= 12 && idade <18){
                /*adolescente*/
                img.setAttribute('src','adol-m.png')
            }else if(idade >=18 && idade < 30){
                /*Jovem*/
                img.setAttribute('src','jove-m.png')
            }else if(idade >= 30 && idade < 65){
                /*Adulto*/
                img.setAttribute('src','adul-m.png')
            }else{
                /*Idoso*/
                img.setAttribute('src','ido-m.png')
            }
        }
        res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade} anos</strong>`
        res.appendChild(img)
    }
}