var calc = function(n1,n2){
    return (n1+n2)*10
}

function aluno(n,n1,n2){
    this.name = n;
    this.nota1 = n1;
    this.nota2 = n2;
    this.valor = calc(n1,n2);
    this.media = function(){
        return (this.nota1 + this.nota2)/2
    }
}

var a = new aluno("Ruan", 9, 7);

console.log(a["valor"])