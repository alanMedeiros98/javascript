function subirTela(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

function aparecer(){
    if (window.scrollY === 0){
        document.querySelector('.scrollButton').style.cssText = 'display: none;'
    } else {
        document.querySelector('.scrollButton').style.cssText = 'display: block;'
    }
}
// o smooth faz uma transição mais suave

window.addEventListener('scroll', aparecer);