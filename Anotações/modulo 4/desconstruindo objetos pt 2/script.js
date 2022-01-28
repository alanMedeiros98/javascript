let pessoa = {
    nome: 'Alan',
    sobrenome: 'Duarte de Medeiros',
    idade: 24,
    social: {
        facebook: 'alanFB',
        instagram: {
            url: '@alan',
            seguidores: 4000
        }
    }
    // nomeCompleto: function (){
    //     return `${nome} ${sobrenome}`;
    // }
}

// let {nome, idade, social:{instagram:{url, seguidores}}} = pessoa;

// console.log(nome, idade, url, seguidores);

function pegarNome({nome, sobrenome, social:{instagram:{url}}}){
    return `${nome} ${sobrenome} (siga em ${url})`;
}

console.log(pegarNome(pessoa));

// function pegarNome(obj){
//     let nomePessoa = obj.nome;
//     let sobrenomePessoa = obj.sobrenome;

//     return `${nomePessoa} ${sobrenomePessoa}`;
// }

// console.log(pegarNome(pessoa));