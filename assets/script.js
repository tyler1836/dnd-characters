var classBtn = document.getElementsByClassName("button");
var startClass = document.getElementsByClassName("columns")
var nextPage = document.getElementById("continue")
// var confirm = document.getElementsByClassName("hide")


function hideClass (){
    for (let i = 0; i < 3; i++) {
    startClass[i].classList.add("hide")
    }
    // confirm.classList.remove("hide")
    var ready = document.createElement("a")
    ready.classList.add("button", "is-link", "is-large")
    ready.href = "playerpage.html"
    ready.textContent = "Ready"
    nextPage.append(ready)
}


for (let i = 0; i < classBtn.length; i++) {
    classBtn[i].addEventListener('click', hideClass)
    
    }

//need to add playerPage elements to local storage