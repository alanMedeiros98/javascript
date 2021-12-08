let carros = [
    'Palio',
    'Corolla',
    'Uno',
    'Ferrari'
];

let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligar:function(){
        console.log('Vrum Vrum!')
    },
    acelerar:function(){
        console.log('Riiiiiihhihih!')
    }
}

//console.log(carro['nome']);
console.log("Carro: "+' '+carro.modelo);
carro.ligar();
carro.acelerar();












/*
um array é uma listagem numerada e um objeto é uma listagem nomeada
*/