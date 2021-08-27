var marauder = document.getElementById('marauder')
var squire = document.getElementById('squire')
var fighter = document.getElementById('fighter')
var pikeman = document.getElementById('pikeman')
var archer = document.getElementById('archer')
var mage = document.getElementById('mage')
var student = document.getElementById('student')
var startClass = document.getElementsByClassName('columns')
var nextPage = document.getElementById('continue')
var y = document.getElementById('yes')
var n = document.getElementById('no')
// var confirm = document.getElementsByClassName('hide')


function hideClass (){
    for (let i = 0; i < startClass.length; i++) {
         startClass[i].classList.add('hide');
    }
    // confirm.classList.remove('hide')
    var sure = document.createElement('h2')
    sure.textContent = 'Are you sure this is the one you want?'
    sure.classList.add('sticky')
    var yes = document.createElement('a')
    yes.classList.add('button', 'is-success', 'is-large', 'sticky1')
    yes.innerText = 'Yes!'
    if(event.currentTarget === marauder){
    yes.href = 'marauder.html'
    }
    if(event.currentTarget === squire){
    yes.href = 'squire.html'
    }
    if(event.currentTarget === fighter){
    yes.href = 'fighter.html'
    }
    if(event.currentTarget === pikeman){
    yes.href = 'pikeman.html'
    }
    if(event.currentTarget === archer){
    yes.href = 'archer.html'
    }
    if(event.currentTarget === mage){
    yes.href = 'mage.html'
    }
    if(event.currentTarget === student){
    yes.href = 'student.html'
    }
    var no = document.createElement('a')
    no.classList.add('button', 'is-danger', 'is-large', 'sticky2')
    no.innerText = 'Wait, I\'m not sure';
    no.href = 'index.html';
    
    nextPage.append(sure)
    y.append(yes)
    n.append(no)
    console.log(event.currentTarget)
}

marauder.addEventListener('click', hideClass)
squire.addEventListener('click', hideClass)
fighter.addEventListener('click', hideClass)
pikeman.addEventListener('click', hideClass)
archer.addEventListener('click', hideClass)
mage.addEventListener('click', hideClass)
student.addEventListener('click', hideClass)

//need to add playerPage elements to local storage