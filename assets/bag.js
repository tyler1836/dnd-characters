const bag = document.getElementById('bagactual');
const abilities = document.getElementById('playerAbilities');
const abilitiesSave = document.getElementById('abl');
const bagSave = document.getElementById('bags');
const del = document.getElementById('delete');


abilitiesSave.addEventListener('click', function(){
    var ableSave = abilities.value;
    localStorage.setItem('abilities', ableSave)
})

bagSave.addEventListener('click', function(){
    var bags = bag.value;
    localStorage.setItem('bag', bags)
})

window.addEventListener('DOMContentLoaded', function(){
    var ableLoad = localStorage.getItem('abilities');
    var bagLoad = localStorage.getItem('bag');
    // ableLoad.concat('\n')
    console.log(ableLoad)
    bag.textContent = bagLoad;
    abilities.textContent = ableLoad;
})

del.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
})