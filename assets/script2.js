const d4 = document.getElementById('d4')
const d6 = document.getElementById('d6')
const d8 = document.getElementById('d8')
const d10 = document.getElementById('d10')
const d12 = document.getElementById('d12')
const d20 = document.getElementById('d20')
const btn4 = document.getElementById('is-primary')
const btn6 = document.getElementById('is-link')
const btn8 = document.getElementById('is-info')
const btn10 = document.getElementById('is-success')
const btn12 = document.getElementById('is-warning')
const btn20 = document.getElementById('is-danger')
const level = document.getElementById('level')
const health = document.getElementById('health')
const strength = document.getElementById('str')
const dexterity = document.getElementById('dex')
const athletics = document.getElementById('ath')
const knowledge = document.getElementById('know')
const wisdom = document.getElementById('wisdom')
const speed = document.getElementById('speed')
const levelUp = document.getElementById('up')
const divName = document.getElementById('name')
const nameEl = document.getElementById('charName')



var statsArr = [level, health, strength, dexterity, athletics, knowledge, wisdom, speed]
var levelCtr = 0;
var healthC = 20;
var strengthC = 8;
var dexterityC = 8;
var athleticsC = 8;
var knowledgeC = 8;
var wisdomC = 8;
var speedC = 8;
speed.innerHTML = speedC;



nameEl.addEventListener('click', function naming() {
    var name = prompt('What is your characters name?')
    if (name === "" || name === null) {
        window.alert("Please enter a valid name!")
        return naming();
    }
    var nameHeader = document.createElement('h2');
    nameHeader.innerHTML = name;
    divName.append(nameHeader)
    nameEl.classList.add('hide')


});



levelUp.addEventListener('click', function () {
    if (levelCtr <= 99) {
        levelCtr++;
    }
    else {
        levelUp.disabled = true;
    }
    healthC = healthC + Math.floor(Math.random() * 12 + 2);
    strengthC = strengthC + Math.floor(Math.random() * 6 + 1);
    dexterityC = dexterityC + Math.floor(Math.random() * 6 + 1);
    athleticsC = athleticsC + Math.floor(Math.random() * 6 + 1);
    knowledgeC = knowledgeC + Math.floor(Math.random() * 6 + 1);
    wisdomC = wisdomC + Math.floor(Math.random() * 6 + 1);
    strength.innerHTML = strengthC;
    health.innerHTML = healthC;
    level.innerHTML = levelCtr;
    dexterity.innerHTML = dexterityC;
    athletics.innerHTML = athleticsC;
    knowledge.innerHTML = knowledgeC;
    wisdom.innerHTML = wisdomC;
    if (levelCtr.toString().includes('5' || '0')) {
        speedC = speedC + Math.floor(Math.random() * 4 + 1);
        return speed.innerHTML = speedC;
    }
    statsArr.forEach(function () {
        localStorage.setItem('stats', statsArr.innerHTML)
    })
})

btn4.addEventListener('click', function () {
    var dice4 = Math.floor(Math.random() * 4 + 1);
    d4.innerHTML = dice4;

})
btn6.addEventListener('click', function () {
    var dice6 = Math.floor(Math.random() * 6 + 1);
    d6.innerHTML = dice6;

})
btn8.addEventListener('click', function () {
    var dice8 = Math.floor(Math.random() * 8 + 1);
    d8.innerHTML = dice8;

})
btn10.addEventListener('click', function () {
    var dice10 = Math.floor(Math.random() * 100 + 1);
    d10.innerHTML = dice10 + '%';

})
btn12.addEventListener('click', function () {
    var dice12 = Math.floor(Math.random() * 12 + 1);
    d12.innerHTML = dice12;

})
btn20.addEventListener('click', function () {
    var dice20 = Math.floor(Math.random() * 20 + 1);
    d20.innerHTML = dice20;
    if (dice20 == 1) {
        return d20.innerHTML = dice20 + ' Wow you really fucked this one up didn\'t you.'
    }

})