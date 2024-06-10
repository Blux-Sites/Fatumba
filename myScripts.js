var myLogo = document.getElementById('myLogo');
var myButton = document.getElementById('myButton');
var myModal = document.getElementById('myModal');
var myClose = document.getElementById('myClose');
var content = document.getElementById('myContent');
var ia = document.getElementById('i');
var ai = document.getElementById('a');
var ga = document.getElementById('g');
var sa = document.getElementById('s');
var p = document.getElementById('pp');
var m = document.getElementById('11');
var m1 = document.getElementById('12');
var m2 = document.getElementById('13');
var m3 = document.getElementById('14');
myLogo.onclick = function(){
    myLogo.style.color = "black";
}
myLogo.ondblclick = function(){
    myLogo.style.color = "";
}
myButton.onclick = function(){
    myModal.style.display = "block";
    setTimeout(opacity1, 100)
}
myClose.onclick = function(){
    content.style.opacity = "0"
    setTimeout(none, 1000)
}
function opacity1(){
    content.style.opacity = "1"
}
function none(){
    myModal.style.display = "none"
}
ia.onmouseenter = function(){
    ia.style.color = "black"
}
ia.onmouseleave = function(){
    ia.style.color = ""
}
ai.onmouseenter = function(){
    ai.style.color = "black"
}
ai.onmouseleave = function(){
    ai.style.color = ""
}
ga.onmouseenter = function(){
    ga.style.color = "black"
}
ga.onmouseleave = function(){
    ga.style.color = ""
}
sa.onmouseenter = function(){
    sa.style.color = "black"
}
sa.onmouseleave = function(){
    sa.style.color = ""
}
m.onmouseenter = function(){
    p.style.display = "block"
}
m.onmouseleave = function(){
    p.style.display = ""
}
m1.onmouseenter = function(){
    p.style.display = "block"
}
m1.onmouseleave = function(){
    p.style.display = ""
}
m2.onmouseenter = function(){
    p.style.display = "block"
}
m2.onmouseleave = function(){
    p.style.display = ""
}
m3.onmouseenter = function(){
    p.style.display = "block"
}
m3.onmouseleave = function(){
    p.style.display = ""
}