//let dia = 6;
//let diaNome = '';

// switch(dia){
//     case 1:
//         diaNome = 'Segunda-Feria'
//         break;
//     case 2:
//         diaNome = 'Terça-Feira';
//         break;
//     case 3:
//         diaNome = 'Quarta-Feira';
//         break;
//     case 4:
//         diaNome = 'Quinta-Feira';
//         break;
//     case 5:
//         diaNome = 'Sexta-Feira';
//         break;
//     case 6:
//         diaNome = 'Sábado';
//         break;
//     case 7:
//         diaNome = 'Domingo';
//         break;
// }

// switch(dia){
//     case 6:
//     case 7:
//         diaNome = 'final de semana!';
//         break;
//     default:
//         diaNome = 'dia de semana!';
//         break;
// }

// document.getElementById('dia').innerHTML = 'hoje é'+' '+diaNome;

//console.log(diaNome);

// function printar(){
//     let algo = document.getElementById('valor').value;

//     alert(algo);
// }

// function printar(){
//     let valor = document.getElementById('dia').value;

//     alert(valor);
// }

// let diaSemana = '';

function printar(){
    let diaValor = document.getElementById('dia').value;

    switch(diaValor){
        case "segunda":
            diaValor = document.getElementById('dia').value = 'segunda-feira';
            alert(diaValor);
            break;
        case "terca" || "terça":
            diaValor = document.getElementById('dia').value = 'terça-feira';
            alert(diaValor);
            break;
        case "quarta":
            diaValor = document.getElementById('dia').value = 'quarta-feira';
            alert(diaValor);
            break;
        case "quinta":
            diaValor = document.getElementById('dia').value = 'quinta-feira';
            alert(diaValor);
            break;
        case "sexta":
            diaValor = document.getElementById('dia').value = 'sexta-feira';
            alert(diaValor);
            break;
        case "sabado":
            diaValor = document.getElementById('dia').value = 'sábado';
            alert(diaValor);
            break;
        case "domingo":
            diaValor = document.getElementById('dia').value = 'domingo';
            alert(diaValor);
            break;
        default:
            alert('nao é um dia da semana!')
            break;
        
    }
}

// function printar(){
//     let valor = document.getElementById('dia').value;

//     alert(valor);
// }