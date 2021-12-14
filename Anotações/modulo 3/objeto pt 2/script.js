// let carros = {
//     nome: 'Fiat',
//     modelo: 'Uno',
//     peso: '800kg',
//     ligado: false,
//     ligar:function(){
//         this.ligado = true;
//         console.log('vrum, vrum!!');
//     },
//     acelerar:function(){
//         if(this.ligado == true){
//             console.log('Riiiiiihhiiihii!!');
//         } else{
//             console.log(this.nome+" "+this.modelo+" "+' não esta ligado!!');
//         }
//     }
// };

// console.log("modelo: "+carros.modelo);

// carros.ligar();
// carros.acelerar();

let carros = [
    {nome:'Fiat', modelo:'Palio'},
    {nome:'Fiat', modelo:'Uno',},
    {nome:'Toyota', modelo:'Corolla'},
    {nome:'Ferrari', modelo:'Spider'}
];

console.log(carros[2].nome);