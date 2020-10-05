var button = document.getElementById("enter");
var input = document.getElementById("input");;
var ul = document.querySelector("ul");

function inputlength(){
return input.value.length;
}
function Elements(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";   
}

function Afterclick(){
    if(inputlength() > 0){
        Elements();
    }
}

function AfterKeypress(event){
    if(inputlength() > 0 && event.keyCode==13){
        Elements()
}
}
button.addEventListener("click" ,Afterclick);
input.addEventListener("keypress" ,AfterKeypress);

