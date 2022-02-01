// let numeros = [
//     1,
//     2,
//     3,
//     4
// ]

// let outros = [
//     ...numeros,
//     5,
//     6,
//     7,
//     8
// ]

// console.log(outros);

// let info = {
//     nome: 'alan',
//     sobrenome: 'duarte de medeiros',
//     idade: 24,
//     cidade: 'tubarao'
// }

// let moreInfo = {
//     ...info,
//     altura: '1,67',
//     cabelo: 'preto',
//     olho: 'castanho'
// }

// console.log(moreInfo);

// function addInfo(info){
//     let novasinfo = {
//         ...info,
//         status: 0,
//         idade: 24,
//         cidade: 'tubarao'
//     }

//     return novasinfo;
// }


let addInfo = (info) => {
    let novasInfo = {
        ...info,
        status: 0,
        idade: 24,
        cidade: 'tubarao'
    }

    return novasInfo;
}

console.log(addInfo({nome: 'alan', sobrenome: 'duarte de medeiros'}));