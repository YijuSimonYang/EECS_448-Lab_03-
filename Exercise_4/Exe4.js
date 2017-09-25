setcolor = function(){
var bgreen = document.getElementById("border_green").value;
var bblue = document.getElementById("border_blue").value;
var bred =  document.getElementById("border_red").value;
var bwidth =  document.getElementById("border_width").value;
var bgred =  document.getElementById("bg_red").value;
var bgblue =  document.getElementById("bg_blue").value;
var bggreen =  document.getElementById("bg_green").value;
var someTag = document.getElementById("haha");


//Change the style attribute
temp = "rgb(" + bgred+","+bggreen+","+bgblue+")";
border = ""+bwidth+"px solid rgb("+bred+","+bgreen+","+bblue+")";
someTag.style.backgroundColor = temp;
someTag.style.border = border;
}
