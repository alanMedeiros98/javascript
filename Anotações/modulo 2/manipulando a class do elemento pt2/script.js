function trocar(){
    if(document.getElementById('botao').classList.contains('preto')){
        document.getElementById('botao').classList.add('verde');
        document.getElementById('botao').classList.remove('preto');
    } else{
        document.getElementById('botao').classList.add('preto');
        document.getElementById('botao').classList.remove('verde');
    }
};
document.querySelector('.nome').innerHTML = "nada";
// function trocar(){
//     if(document.querySelector('button').classList.contains('preto')){
//         document.querySelector('button').classList.add('verde');
//         document.querySelector('button').classList.remove('preto');
//     } else{
//         document.querySelector('button').classList.add('preto');
//         document.querySelector('button').classList.remove('verde');
//     }
// };
//document.getElementById('botao').innerHTML = 'nada';