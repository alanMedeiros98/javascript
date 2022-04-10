const c = (el)=>document.querySelector(el)
const cs = (el)=>document.querySelectorAll(el)

const cs = function pegar(el){
    return document.querySelector(el);
}

pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    //preencher as informações em pizzaria
    c('.pizza-area').append(pizzaItem);
});