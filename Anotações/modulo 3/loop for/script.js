// LOOP FOR
// LOOP FOR ARRAY

// let texto = '';

// for (let i = 0; i <= 50; i++){
//     texto = texto + i +'</br>';
// }

// document.getElementById('demo').innerHTML = texto;

let carros = [
    'Ferrari',
    'Fusca',
    'Palio',
    'Corolla',
    'Lamborguini',
    'Mustang'
]

let html = '<ul>';

for (let i in carros){
    html += '<li>'+ carros[i] +'</li>';
}

html += '</ul>';
//html = html + '</ul>';

document.getElementById('demo').innerHTML = html;

//primeira etapa do for = criação das variaveis
//segunda etapa do for = condição
//terceira etapa do for = incrementação