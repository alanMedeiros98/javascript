function alterar(){
    let square = document.querySelector('.container');
    let width = Math.floor(Math.random() * 499)
    let height = Math.floor(Math.random() * 499)
    let cor = Math.floor(Math.random() * 999999);
    square.style.cssText = 'width:'+width+'px; height:'+height+'px; background-color: #'+cor+';'
}

setInterval(alterar, 2000)