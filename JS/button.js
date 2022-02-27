function myclick(){
alert("External click")
}

function pera(){
    alert("I'm pera")
}

var data = document.querySelector("#id1");

function mulityClick1(){
   
   data.innerHTML = "Clicked button Click Me1";

}

function mulityClick2(){
   data.innerHTML = "Clicked button Click Me2";
}


var imgs = document.querySelector("#imageID");

function image1(){
    imgs.src = "images/image1.jpg"
    }

function image2(){
    imgs.src = "images/image2.jpg"
    }
    
    
function image3(){
    imgs.src = "images/image3.jpg"
    }
    