let cartao = '1234123412341234';

let lastDigits = cartao.slice(-4);

let mascarado = lastDigits.padStart(16, '*');

console.log(`Esse é o seu cartão? ${mascarado}`);