var idade = 68
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log('Não vota!')
}else{
    if(idade > 16 && idade <18 || idade >= 65){
        console.log('Voto é opcional!')
    }else{
        console.log('Seu voto é obrigatório!')
    }
}