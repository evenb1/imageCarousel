var index = 0;

function showImage(i){
    index+=i;
    var images = document.getElementsByName(image);
    for(i=0;i<images.length;i++)
    images[i].style.display='none';

    var dots = document.getElementsByName("dot");
}