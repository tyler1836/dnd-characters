const copperEl = document.getElementById('copper')
const silverEl = document.getElementById('silver')
const goldEl = document.getElementById('gold')
const platEl = document.getElementById('plat')
const copper5El = document.getElementById('copper5')
const silver5El = document.getElementById('silver5')
const gold5El = document.getElementById('gold5')
const plat5El = document.getElementById('plat5')
const copper10El = document.getElementById('copper10')
const silver10El = document.getElementById('silver10')
const gold10El = document.getElementById('gold10')
const plat10El = document.getElementById('plat10')
const copperCtr = document.getElementById('copperAmt')
const silverCtr = document.getElementById('silverAmt')
const goldCtr = document.getElementById('goldAmt')
const platCtr = document.getElementById('platAmt')

var copperAmount = 0;
var silverAmount = 0;
var goldAmount = 0;
var platAmount = parseInt(platCtr.innerText);



copperEl.addEventListener('click', function () {
    copperAmount++;
    copperCtr.innerText = copperAmount;
});

copper5El.addEventListener('click', function () {
    copperAmount += 5;
    copperCtr.innerText = copperAmount;
});
copper10El.addEventListener('click', function () {
    copperAmount += 10;
    copperCtr.innerText = copperAmount;
});

silverEl.addEventListener('click', function () {
    silverAmount++;
    silverCtr.innerText = silverAmount;
});

silver5El.addEventListener('click', function () {
    silverAmount += 5;
    silverCtr.innerText = silverAmount;
});

silver10El.addEventListener('click', function () {
    silverAmount += 10;
    silverCtr.innerText = silverAmount;
});

goldEl.addEventListener('click', function () {
    goldAmount++;
    goldCtr.innerText = goldAmount;
});
gold5El.addEventListener('click', function () {
    goldAmount += 5;
    goldCtr.innerText = goldAmount;
});
gold10El.addEventListener('click', function () {
    goldAmount += 10;
    goldCtr.innerText = goldAmount;
});

platEl.addEventListener('click', function () {
    platAmount++;
    platCtr.innerText = platAmount;
    localStorage.setItem('plat', platAmount)
});
plat5El.addEventListener('click', function () {
    platAmount += 5;
    platCtr.innerText = platAmount;
    localStorage.setItem('plat', platAmount)
});
plat10El.addEventListener('click', function () {
    platAmount += 10;
    platCtr.innerText = platAmount;
    localStorage.setItem('plat', platAmount)
});

window.addEventListener('DOMContentLoaded', function(){
    platCtr.innerText = localStorage.getItem('plat')
})
