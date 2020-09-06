var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");
button.addEventListener("click", function(){
    if (input.value.length > 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value))
        ul.appendChild(li);
        input.value = "";
    }
})
input.addEventListener("keypress", function(){
    if (input.value.length > 0 && event.keyCode === 13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value))
        ul.appendChild(li);
        input.value = "";
    }
})
for (var i = 0; i < items.length; i++){
    items[i].addEventListener("click",function(){
        for (var x = 0; x < items.length; x++){
            items[x].classList.toggle("done")
        }
    });
};


   

    