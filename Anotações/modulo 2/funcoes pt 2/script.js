function alterar(){
    document.getElementById('titulo').innerHTML = "trocou o titulo";
    document.getElementById('campo').value = "trocou o campo";
}

function somar(x, y){
    let total = x + y;

    return total
}

let resultado = somar(10, 15);

console.log(resultado);

//NAO DEU CERTO NAO SEI PQ

function alterar1(){
    document.getElementById('titulo').innerHTML = "Seja bem vindo!";
    document.getElementById('campo').value = "Nome do usuario";
}
if (alterar() == true){
     alterar1()
} else if (alterar1() == true){
     alterar()
}