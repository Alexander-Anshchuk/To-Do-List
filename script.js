var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var task = document.getElementsByClassName("task")[0];
var tasks = document.getElementsByClassName("tasks");
function inputLength (){
    return input.value.length;
}
function createListElement(){
    var checkbox = document.createElement("input.checkbox")
    checkbox.appendChild(document.createTextNode(input.value));
    task.appendChild(tasks);
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
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterInput);

