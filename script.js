var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
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
function deleteli(){
     delete li[i];
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterInput);
for (var i = 0 ; i < li.length; i++) {
    for (var i = 0 ; i < li.length; i++) {
        li[i].addEventListener('click' , deleteli)
     }
 }
