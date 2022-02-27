var x = document.getElementById("m1");
x.innerHTML = "Mizan";
var y = document.getElementById("m2").innerHTML = " Get by id";

document.getElementsByTagName("p")[0].innerHTML = "Get by tag name";

document.getElementsByClassName("className")[0].innerHTML="Get by class name tag";

document.querySelector("#pid").innerHTML = "get by query selector using ID";
document.querySelector(".class").innerHTML ="get by query select using CLASS"
