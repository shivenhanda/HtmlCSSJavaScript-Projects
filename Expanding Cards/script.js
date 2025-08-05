let img1=document.getElementById("image-1");
let img2=document.getElementById("image-2");
let img3=document.getElementById("image-3");
let img4=document.getElementById("image-4");
let img5=document.getElementById("image-5");

let widthcheck=window.innerWidth;
let width,largewidth;
console.log(widthcheck);
if(width<=767){
    width="50%";
    largewidth="100%";
}
else{
    width="100px";
    largewidth="500px";
}

img1.addEventListener("click",imageOne);
function imageOne(){
    img1.style.width=largewidth;
    img2.style.width=width;
    img3.style.width=width;
    img4.style.width=width;
    img5.style.width=width;
}
img2.addEventListener("click",imageTwo);
function imageTwo(){
    img1.style.width=width;
    img2.style.width=largewidth;
    img3.style.width=width;
    img4.style.width=width;
    img5.style.width=width;
}
img3.addEventListener("click",imageThree);
function imageThree(){
    img1.style.width=width;
    img2.style.width=width;
    img3.style.width=largewidth;
    img4.style.width=width;
    img5.style.width=width;
}
img4.addEventListener("click",imageFour);
function imageFour(){
    img1.style.width=width;
    img2.style.width=width;
    img3.style.width=width;
    img4.style.width=largewidth;
    img5.style.width=width;
}
img5.addEventListener("click",imageFive);
function imageFive(){
    img1.style.width=width;
    img2.style.width=width;
    img3.style.width=width;
    img4.style.width=width;
    img5.style.width=largewidth;
}