let value1 = document.getElementById("value");
document.addEventListener('input', function () {
    value1.innerText = "";
    let weightinput = parseFloat(document.getElementById("weight").value);
    let heightinput = parseFloat(document.getElementById("height").value);
    let weightlbsinput = parseFloat(document.getElementById("weightlbs").value);
    let heightinchinput = parseFloat(document.getElementById("heightinch").value);
    let heightcminput = parseFloat(document.getElementById("heightcm").value);
    if (weightinput > 0 && heightinput > 0) {
        bmiheight(weightinput, heightinput);
    }
    else if (weightinput > 0 && heightinchinput > 0) {
        bmiheightlbs(weightinput, heightinchinput)
    }
    else if (weightinput > 0 && heightcminput > 0) {
        bmiheightcm(weightinput, heightcminput)
    }
    else if (weightlbsinput > 0 && heightinput > 0) {
        weightinput = weightlbsinput / 2.20462;
        bmiheight(weightinput, heightinput);
    }
    else if (weightlbsinput > 0 && heightinchinput > 0) {
        weightinput = weightlbsinput / 2.20462;
        bmiheightlbs(weightinput, heightinchinput);
    }
    else if (weightlbsinput > 0 && heightcminput > 0) {
        weightinput = weightlbsinput / 2.20462;
        bmiheightcm(weightinput, heightcminput);
    }
});
function bmiheight(weightinput, heightinput) {
    value1.innerText = ((weightinput / (heightinput * heightinput))).toFixed(1)
}
function bmiheightlbs(weightinput, heightinchinput) {
    heightmeter = (heightinchinput * 0.0254).toFixed(2);
    console.log(heightmeter)
    value1.innerText = ((weightinput / (heightmeter * heightmeter))).toFixed(1);
}
function bmiheightcm(weightinput, heightcminput) {
    heightmeter = (heightcminput / 100).toFixed(2);
    value1.innerText = ((weightinput / (heightmeter * heightmeter))).toFixed(1)
}
function resetbutton(){
    document.getElementById("weight").value="";
    document.getElementById("height").value="";
    document.getElementById("weightlbs").value="";
    document.getElementById("heightinch").value="";
    document.getElementById("heightcm").value="";
    value1.innerText = "";
}