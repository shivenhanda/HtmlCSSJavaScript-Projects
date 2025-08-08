let arr=[document.getElementById("circle1"),document.getElementById("circle2"),document.getElementById("circle3"),document.getElementById("circle4")]
let current=0;
let max=arr.length-1;
let count=0;
let progress=document.getElementById("progress")
let prev=document.getElementById("prev");
let next=document.getElementById("next");
next.addEventListener("click",() => next1(progress1));
function next1(callback){
    if(current==max+1){
        return;
    }
    current+=1;
    for(let i=0;i<current;i++){
        arr[i].style.border="2px solid black";
        console.log(current)
    }
    callback();
}
function progress1(){
    progress.value=(current==2)?40:(current==3)?75:(current==4)?100:0;
}
prev.addEventListener("click",() => previous1(progress1));
function previous1(callback){
    if(current==0){
        return;
    }
    current-=1;
    for(let i=0;i<current;i++){
        arr[i].style.border="2px solid black";
    }
    for(let i=current;i<=max;i++){
        arr[i].style.border="1px solid black";
    }
    callback();
}