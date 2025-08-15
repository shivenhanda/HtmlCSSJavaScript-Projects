let Move = document.getElementById("value");
let inputrange = document.getElementById("range");
let Value = 0;
Position();
document.addEventListener("input", Position)
document.addEventListener("keydown",(e)=>{
    if(["+", "-","ArrowRight","ArrowLeft"].includes(e.key)){
        if(["+","ArrowRight"].includes(e.key))
            inputrange.value++;
        else
            inputrange.value--;
        Position();
    }
})
function Position(){
    const min = 0;
    const max = 100;
    Move.innerText = inputrange.value;
    Value = inputrange.value;
    let rangeWidth = inputrange.offsetWidth;
    let labelWidth = Move.offsetWidth;
    Value = (Value - min) * (rangeWidth / (max - min)) - labelWidth / 2;
    Value=(Value<=205)?Value:205;
    Move.style.marginLeft = `${Value}px`;
    console.log(Value)
}
