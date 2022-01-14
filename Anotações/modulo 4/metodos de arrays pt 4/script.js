let lista = [
    {id:1, nome:'Alan', sobrenome:'Duarte'},
    {id:2, nome:'Paulo', sobrenome:'Borges'},
    {id:3, nome:'Fulano', sobrenome:'Da Silva'}
]

let pessoa = lista.find(function(item){
    return (item.sobrenome == 'Duarte')? true : false;
});

let res = pessoa;

console.log(res);

//find = ele retorna o primeiro item que ele achar que satisfaça a condição que voce especificar
//findIndex = ele retorna a posição do item que voce especificou na condição