var w = document.getElementById("crash"); 
var a = document.getElementById("kick"); 
var s = document.getElementById("snare"); 
var d = document.getElementById("tom1"); 
var j = document.getElementById("tom2"); 
var k = document.getElementById("tom3"); 
var l = document.getElementById("tom4"); 

var audio1 = new Audio("sounds/crash.mp3"); 
var audio2 = new Audio("sounds/kick-bass.mp3"); 
var audio3 = new Audio("sounds/snare.mp3"); 
var audio4 = new Audio("sounds/tom-1.mp3"); 
var audio5 = new Audio("sounds/tom-2.mp3"); 
var audio6 = new Audio("sounds/tom-3.mp3"); 
var audio7 = new Audio("sounds/tom-4.mp3");



w.addEventListener("click", function() {
    audio1.play(); 
})
a.addEventListener("click", function() {
    audio2.play(); 
})
s.addEventListener("click", function() {
    audio3.play(); 
})
d.addEventListener("click", function() {
    audio4.play(); 
})

j.addEventListener("click", function() {
    audio5.play(); 
})
k.addEventListener("click", function() {
    audio6.play(); 
})
l.addEventListener("click", function() {
    audio7.play(); 
})


// audio2.play(); 
// audio3.play(); 
// audio4.play(); 
// audio5.play(); 
// audio6.play(); 
// audio7.play(); 

