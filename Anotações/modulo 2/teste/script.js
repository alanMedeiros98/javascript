function trocar(){
    if(document.getElementById('teste').innerHTML == 'trocar'){
        document.getElementById('teste').innerHTML = 'trocou';
    } else if (document.getElementById('teste').innerHTML == 'trocou'){
        document.getElementById('teste').innerHTML = 'trocar';
    }
}