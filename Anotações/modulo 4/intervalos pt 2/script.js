let timer = '';

function rodar(){
    timer = setTimeout(function rodou(){
        document.querySelector('.demo').innerHTML = 'rodou!';
    }, 3000)
}

function parar(){
    clearTimeout(timer);
}