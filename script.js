var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var list = document.querySelector("li");
function inputLength (){
    return input.value.length;
}
function createListElement(){
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""
}
function addListAfterClick(){
    if (inputLength() > 0){
        createListElement()
    }
}
function addListAfterInput(){
    if (inputLength() > 0 && event.keyCode === 13 ){
        createListElement()
    }
}
function  linethrough(){
    document.querySelector("li").classList.add("done")
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterInput);
list.addEventListener("click", linethrough);
