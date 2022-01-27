let pessoa = {
    nome: 'Alan',
    sobrenome: 'Duarte',
    idade: 24,
    social: {
        facebook: '@lan',
        instagram: 'alan'
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

let {nome, sobrenome, idade} = pessoa;

console.log(nome, sobrenome, idade);