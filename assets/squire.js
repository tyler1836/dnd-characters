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





if (!localStorage.getItem('level')) {
    var levelCtr = 1;
    var healthC = 65;
    var strengthC = 8;
    var dexterityC = 8;
    var athleticsC = 8;
    var knowledgeC = 8;
    var wisdomC = 8;
    var speedC = 8;
    localStorage.setItem('level', levelCtr);
    localStorage.setItem('health', healthC);
    localStorage.setItem('strength', strengthC);
    localStorage.setItem('dexterity', dexterityC);
    localStorage.setItem('athletics', athleticsC);
    localStorage.setItem('knowledge', knowledgeC);
    localStorage.setItem('wisdom', wisdomC);
    localStorage.setItem('speed', speedC);
}



window.addEventListener('DOMContentLoaded', function naming() {
    if (!localStorage.getItem('name')) {
        name = prompt('What is your characters name?')
        if ((name === "") || (name === null)) {
            window.alert("Please enter a valid name!")
            return naming();
        }
    }
    var nameHeader = document.createElement('h2');
    nameHeader.innerHTML = name;
    divName.append(nameHeader)
    localStorage.setItem('name', name)

    strengthC = parseInt(localStorage.getItem('strength'));;
    healthC = parseInt(localStorage.getItem('health'));;
    levelCtr = parseInt(localStorage.getItem('level'));
    dexterityC = parseInt(localStorage.getItem('dexterity'));
    athleticsC = parseInt(localStorage.getItem('athletics'));
    knowledgeC = parseInt(localStorage.getItem('knowledge'));
    wisdomC = parseInt(localStorage.getItem('wisdom'));
    speedC = parseInt(localStorage.getItem('speed'));
    level.innerHTML = levelCtr;
    health.innerHTML = healthC;
    strength.innerHTML = strengthC;
    dexterity.innerHTML = dexterityC;
    athletics.innerHTML = athleticsC;
    knowledge.innerHTML = knowledgeC;
    wisdom.innerHTML = wisdomC;
    speed.innerHTML = speedC;
});



levelUp.addEventListener('click', function () {
    if (levelCtr <= 99) {
        levelCtr++;
    }
    else {
        levelUp.disabled = true;
    }
    healthC = healthC + Math.floor(Math.random() * 24 + 2);
    strengthC = strengthC + Math.floor(Math.random() * 10 + 1);
    dexterityC = dexterityC + Math.floor(Math.random() * 4 + 1);
    athleticsC = athleticsC + Math.floor(Math.random() * 4 + 1);
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
        speedC = speedC + Math.floor(Math.random() * 4 + 2);
        return speed.innerHTML = speedC;
    }
    
    localStorage.setItem('level', levelCtr);
    localStorage.setItem('health', healthC);
    localStorage.setItem('strength', strengthC);
    localStorage.setItem('dexterity', dexterityC);
    localStorage.setItem('athletics', athleticsC);
    localStorage.setItem('knowledge', knowledgeC);
    localStorage.setItem('wisdom', wisdomC);
    localStorage.setItem('speed', speedC);
    
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