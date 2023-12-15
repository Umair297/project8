const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const history = document.getElementById("history");
const vision = document.getElementById("vision");
const goais = document.getElementById("goais");

second.onclick = function(){
    vision.style.display = "block";
    history.style.display = "none";
    goais.style.display = "none";
}
third.onclick = function(){
    goais.style.display = "block";
    history.style.display = "none";
    vision.style.display = "none";
}
first.onclick = function(){
    vision.style.display = "none";
    goais.style.display = "none";
    history.style.display = "block";
}