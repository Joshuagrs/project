var y = true;
function arr() {
if (y == true) {
    var x = document.getElementsByClassName('state');
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";   
    } 
    y = false;
}else{
    var x = document.getElementsByClassName('state');
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "block";   
    } 
    y=true;
}
   
document.getElementById("ss").style.fontSize = "50px";
document.getElementById("ss").style.color = "red";
}
