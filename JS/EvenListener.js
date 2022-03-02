var area = document.querySelector("button");
var aranonymousea = document.querySelector("#anonymous");
area.addEventListener("click", myFuc);

aranonymousea.addEventListener("click",
 function(){alert("Hello");})

function myFuc(){
    alert("Hello World");
}

var mouseover2 = document.querySelector("h1");

mouseover2.addEventListener("mouseover", function()
{
    mouseover2.classList.add("myStyle")
})

mouseover2.addEventListener("mouseout", function()
{
    mouseover2.classList.remove("myStyle")
})


var friden = document.querySelectorAll(".button");

var len = document.querySelectorAll("#button").length;

for(var i=0; i<len; i++){

    document.querySelectorAll("#button")[i].addEventListener("click", function(){
        var text = this.innerHTML;
         document.querySelector("h3").innerHTML = "Hi " + text + ", how are you?";
     
     })
}

