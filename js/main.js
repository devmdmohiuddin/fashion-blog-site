var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];
btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
    else if(event.target == modals){
        modals.style.display = "none";
    }
}
var modals = document.getElementById('myModal1');
var btn = document.getElementById('myBtn1');
var spans = document.getElementsByClassName('close1')[0];
btn.onclick = function(){
    modals.style.display = "block";
}
spans.onclick = function(){
    modals.style.display = "none";
}

//thumb-up effect
function myFunction(x){
    x.classList.toggle("fa-check");
}

function disLike1(){
    var x = document.getElementById('like1');
    if(x.innerHTML === "Like"){
        x.innerHTML = "Liked";
    }else{
        x.innerHTML = "Like";
    }
    var x  = document.getElementById("likedColor1");
    x.classList.toggle("color");
}
 
function disLike2(){
    var x = document.getElementById('like2');
    if(x.innerHTML === "Like"){
        x.innerHTML = "Liked";
    }else{
        x.innerHTML = "Like";
    }
    var x  = document.getElementById("likedColor2");
    x.classList.toggle("color");
}

function disLike3(){
    var x = document.getElementById('like3');
    if(x.innerHTML === "Like"){
        x.innerHTML = "Liked";
    }else{
        x.innerHTML = "Like";
    }
    var x  = document.getElementById("likedColor3");
    x.classList.toggle("color");
}
