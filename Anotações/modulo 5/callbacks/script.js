// function alertar(){
//     console.log("opa, tudo bem??");
// }

// let nome = 'alan';
// setTimeout(alertar, 2000);
// let sobrenome = 'duarte';
// console.log(`Nome Complete: ${nome} ${sobrenome}`);

let campo1 = document.getElementById('teste1');
let campo2 = document.getElementById('teste2');

function copiar(){
    campo2.value = campo1.value;
}

let trocar = setInterval(copiar, 10);
