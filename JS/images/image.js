var photo = ["1.jpg", "2.jpg", "3.jpg"];
var imgTag = document.querySelector("img");
var count = 0;

function next(){
    imgTag.src = photo[count];
    count++;
    if(count >= photo.length)
    {
        count = 0;
    }
}

function Pre()
{
    imgTag.src = photo[count];
    count--;

    if(count < 0)
    {
        count = photo.length - 1;
    }
}