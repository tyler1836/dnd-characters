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

if(!localStorage.getItem('copper')){
var copperAmount = 10;
var silverAmount = 5;
var goldAmount = 3;
var platAmount = 1;

localStorage.setItem('copper', copperAmount)
localStorage.setItem('silver', silverAmount)
localStorage.setItem('gold', goldAmount)
localStorage.setItem('plat', platAmount)
}


copperEl.addEventListener('click', function () {
    copperAmount++;
    copperCtr.innerText = copperAmount;
    localStorage.setItem('copper', copperAmount)
});

copper5El.addEventListener('click', function () {
    copperAmount += 5;
    copperCtr.innerText = copperAmount;
    localStorage.setItem('copper', copperAmount)
});
copper10El.addEventListener('click', function () {
    copperAmount += 10;
    copperCtr.innerText = copperAmount;
    localStorage.setItem('copper', copperAmount)
});

silverEl.addEventListener('click', function () {
    silverAmount++;
    silverCtr.innerText = silverAmount;
    localStorage.setItem('silver', silverAmount)
});

silver5El.addEventListener('click', function () {
    silverAmount += 5;
    silverCtr.innerText = silverAmount;
    localStorage.setItem('silver', silverAmount)
});

silver10El.addEventListener('click', function () {
    silverAmount += 10;
    silverCtr.innerText = silverAmount;
    localStorage.setItem('silver', silverAmount)
});

goldEl.addEventListener('click', function () {
    goldAmount++;
    goldCtr.innerText = goldAmount;
    localStorage.setItem('gold', goldAmount)
});
gold5El.addEventListener('click', function () {
    goldAmount += 5;
    goldCtr.innerText = goldAmount;
    localStorage.setItem('gold', goldAmount)
});
gold10El.addEventListener('click', function () {
    goldAmount += 10;
    goldCtr.innerText = goldAmount;
    localStorage.setItem('gold', goldAmount)
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
    copperAmount = parseInt(localStorage.getItem('copper'))
    silverAmount = parseInt(localStorage.getItem('silver'))
    goldAmount = parseInt(localStorage.getItem('gold'))
    platAmount = parseInt(localStorage.getItem('plat'))
    copperCtr.innerText = copperAmount;
    silverCtr.innerText = silverAmount;
    goldCtr.innerText = goldAmount;
    platCtr.innerText = platAmount;
})
