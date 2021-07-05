var button = document.getElementById("clickMe");

count = 0;


var clicks = function(){
    count += 1,
    button.innerHTML = "Click here to add count: " + count;
}
console.log(count);

button.addEventListener("click", clicks) 