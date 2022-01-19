// let novoValor = Math.floor(Math.random() * 100);

// console.log(novoValor);


//Math.round() = ele vai arredondar para o mais perto
//Math.floor() = ele sempre vai arredondar para baixo
//Math.ceil() = ele sempre vai arredondar para cima
//Math.abs() = ele vai te mostrar o numero absoluto
//Math.min() = ele vai te mostrar qual é o menor numero de uma grade de números
//Math.max() = ele vai te mostrar o maior numero de uma grade de números
//Math.random() = ele vai te retornar um numero aleatório entre 0 e 1

let n = prompt('escolha um numero 1 ou 2')

let r = Math.floor(Math.random() * 2);

console.log(r);

if (n == r){
    alert('seu numero foi sorteado!!')
} else {
    alert('seu numero nao foi sorteado!!')
}