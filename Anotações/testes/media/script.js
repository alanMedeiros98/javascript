function gerarMedia(){
    let nota1 = parseInt(document.getElementById('n1').value)
    let nota2 = parseInt(document.getElementById('n2').value)
    let sum = nota1 + nota2;
    let grade = sum / 2;
    //let grade = (nota1 + nota2) / 2;
    alert('Essa é a sua média: '+grade);
    if(grade >= 7){
        alert('Você foi Aprovado!!')
    } else {
        alert('Você foi Reprovado!!')
    }
}