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

btn4.addEventListener('click', function (){
    var dice4 = Math.floor(Math.random() * 4 + 1);
    d4.innerHTML = dice4;

})
btn6.addEventListener('click', function (){
    var dice6 = Math.floor(Math.random() * 6 + 1);
    d6.innerHTML = dice6;

})
btn8.addEventListener('click', function (){
    var dice8 = Math.floor(Math.random() * 8 + 1);
    d8.innerHTML = dice8;

})
btn10.addEventListener('click', function (){
    var dice10 = Math.floor(Math.random() * 100 + 1);
    d10.innerHTML = dice10 + '%';

})
btn12.addEventListener('click', function (){
    var dice12 = Math.floor(Math.random() * 12 + 1);
    d12.innerHTML = dice12;

})
btn20.addEventListener('click', function (){
    var dice20 = Math.floor(Math.random() * 20 + 1);
    d20.innerHTML = dice20;

})