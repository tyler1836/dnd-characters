var classBtn = document.getElementsByClassName('button');
var startClass = document.getElementsByClassName('columns')
var nextPage = document.getElementById('continue')
var y = document.getElementById('yes')
var n = document.getElementById('no')
// var confirm = document.getElementsByClassName('hide')


function hideClass (){
    for (let i = 0; i < 3; i++) {
    startClass[i].classList.add('hide')
    }
    // confirm.classList.remove('hide')
    var sure = document.createElement('h2')
    sure.textContent = 'Are you sure this is the one you want?'
    sure.classList.add('sticky')
    var yes = document.createElement('a')
    yes.classList.add('button', 'is-success', 'is-large', 'sticky1')
    yes.innerText = 'Yes!'
    yes.href = 'playerpage.html'
    var no = document.createElement('a')
    no.classList.add('button', 'is-danger', 'is-large', 'sticky2')
    no.innerText = 'Wait, I\'m not sure';
    no.href = 'index.html';
    
    nextPage.append(sure)
    y.append(yes)
    n.append(no)
    
}


for (let i = 0; i < classBtn.length; i++) {
    classBtn[i].addEventListener('click', hideClass)
    
    }

//need to add playerPage elements to local storage