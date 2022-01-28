let info = [
    'Alan',
    'Duarte',
    24,
    'alanduarttee'
]

let [nome, sobrenome, idade, instagram] = info;

console.log(nome, sobrenome, idade, instagram)


function criar(){
    return [1, 2, 3];
}

let [a, b, c] = criar();

console.log(a, b, c);