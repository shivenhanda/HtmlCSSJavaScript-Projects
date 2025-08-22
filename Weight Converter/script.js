let weightinkg=document.getElementById("kg");
let weightinpounds=document.getElementById("pounds");
let value=document.getElementById("answer");
weightinkg.addEventListener('input',function(){
    weightinpounds.value="";
    let weight1=parseFloat(document.getElementById("kg").value.trim());
    value.innerText=(isNaN(weight1))?"":(weight1<=0)?"Please enter a valid weight greater than 0":"Weight in Pound : "+((weight1*2.20462262).toFixed(2));
})
weightinpounds.addEventListener('input',function(){
    weightinkg.value="";
    let weight1=parseFloat(document.getElementById("pounds").value.trim());
    value.innerText=(isNaN(weight1))?"":(weight1<=0)?"Please enter a valid weight greater than 0":"Weight in Kg : "+((weight1*2.20462262).toFixed(2));
})