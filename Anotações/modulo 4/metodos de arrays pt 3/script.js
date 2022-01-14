let lista = [
    45,
    4,
    9,
    16,
    25
]

let lista2 = [

]

// lista2 = lista.map(function(item){
//     return item * 255;
// });

// lista2 = lista.filter(function(item){
//     if(item < 20){
//         return true;
//     } else {
//         return false;
//     }
// })

lista2 = lista.every(function(item){
    // if (item >= 4){
    //     return true;
    // } else {
    //     return false;
    // }

    return (item >= 10)? true : false;
});

let res = lista2;

console.log(res);

//map = ele mapeia o array item por item e gera um novo array
//filter = como o próprio nome ja diz ele vai filtrar os itens dentro de um array
//every = ele é basicamente um tudo ou nada
//some = se algum item satisfazer uma condição ele retorna TRUE caso contrario FALSE