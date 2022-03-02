for(var i = 0; i<3; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
        
        playAudio(text);
        PlayAimation(text);
    })
}

document.addEventListener("keypress", function(event){

    var keyValue = event.key;
    playAudio(keyValue);
    PlayAimation(keyValue);
})

function playAudio(text){
    switch(text)
    {
        case "a":
            var audio = new Audio("music/Pre.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("music/Play.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("music/Next.mp3");
            audio.play();
            break;
    }
}

function PlayAimation(text){
    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("animationButton");

    setTimeout(function(){
        selectedButton.classList.remove("animationButton");
    }, 1000);
}

document.addEventListener("keypress", function(event){

    var keyPress = event.key;
    var doc = document.getElementsByTagName("p")[0];
    doc.innerHTML = "You have type  " + keyPress
})

var count = 0;

document.querySelector("#area").addEventListener("keypress", function(event){

    count++;
    var areaValue = event.key;
    document.querySelector("#id").innerHTML = "Total number of character = "+ count;
})