// function opener(){
//     document.getElementById('menuArea').style.width = '200px';
// }

function opener(){
    let menuArea = document.getElementById('menuArea');
    if (menuArea.style.width == '200px'){
        menuArea.style.width = '0px';
    } else {
        menuArea.style.width = '200px';
    };
}