function trocarImagem(fileName, animalName){
    document.querySelector('.imagem').setAttribute('src', fileName);
    document.querySelector('.imagem').setAttribute('data-animal', animalName);
}
function pegarAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert(animal);
}