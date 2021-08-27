const bag = document.getElementById('bagactual');
const abilities = document.getElementById('playerAbilities');
const abilitiesSave = document.getElementById('abl');
const bagSave = document.getElementById('bags');


abilitiesSave.addEventListener('click', function(){
    var ableSave = abilities.value.split('\n');
    localStorage.setItem('abilities', ableSave.join('\n'))
})

bagSave.addEventListener('click', function(){
    var bags = bag.value;
    localStorage.setItem('bag', bags)
})

window.addEventListener('DOMContentLoaded', function(){
    var ableLoad = localStorage.getItem('abilities');
    var bagLoad = localStorage.getItem('bag');
    
    bag.innerText = bagLoad;
    abilities.innerText = ableLoad;
})
