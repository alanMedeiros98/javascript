function pegarTemperatura(){
    return new Promise(function(resolve, reject){
        console.log("pegando temperatura...");

        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000)
    });
}

let temp = pegarTemperatura();

temp.then(function(resultado){
    console.log(`Essa é a temperatura: ${resultado}`)
})

temp.catch(function(erro){
    console.log("Ops... deu erro!");
})

// function mostrarNome(nome){
//     console.log(`esse é o meu nome ${nome}`);
// }

// mostrarNome("alan");