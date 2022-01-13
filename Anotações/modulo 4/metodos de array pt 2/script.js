let lista = [
    'ovo',
    'farinha',
    'corante',
    'massa'
]

let lista2 = [
    'prato',
    'liquidificador',
    'forno'
]

lista.sort();
lista.reverse();

let res = lista;

console.log(res);

//splice() = ele vai remover o item do seu array, sao 2 parâmetros que voce vai passar. 1: o item que voce quer remover. 2: quantos itens a partir do item que voce removeu vao ser removidos
//concat() = ele vai juntar 2 ou mais arrays que voce desejar
//sort() = ele vai ordenar em ordem alfabética o seu array. se voce quiser inverter basta voce fazer reverse() depois de ordenar