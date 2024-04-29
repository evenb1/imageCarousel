var index = 0;

function showImage(i){
    index+=i;
    var images = document.getElementsByName(image);
    for(i=0;i<images.length;i++)
    images[i].style.display='none';

    var dots = document.getElementsByName("dot");
    for(i=0; i<dots.length; i++)
    dots[i].className= dots[i].className.replace("active", "");

    if(index > images.length -1)
    index = 0;

    if(index<0)
    index = images.length -1;

    images[index].style.display = "block";
}