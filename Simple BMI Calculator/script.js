let weight,height;
let bmi;
let range1,range2;
document.getElementById("submit").onclick=function(){
    weight=document.getElementById("weight").value;
    height=document.getElementById("height").value;
    if(weight=="" || height==""){
        document.getElementById("bmi").innerHTML="Please Write the Correct Information";
        document.getElementById("bmi1").innerHTML="";
        document.getElementById("bmi2").innerHTML="";
        return;
    }
    height=height/100;
    bmi=weight/Math.pow(height,2);
    bmi=bmi.toFixed(1);
    range1=18.5*Math.pow(height,2);
    range1=range1.toFixed(1)
    range2=24.9*Math.pow(height,2);
    range2=range2.toFixed(1)
    if(bmi<=16.0){
        document.getElementById("bmi").innerHTML="You are Severely Underweight";
        document.getElementById("bmi1").innerHTML="BMI: "+bmi;
        document.getElementById("bmi2").innerHTML="Healthy Weight Range: "+range1+"kg - "+range2+"kg";
    }
    else if(bmi<=18.4){
        document.getElementById("bmi").innerHTML="You are Underweight";
        document.getElementById("bmi1").innerHTML="BMI: "+bmi;
        document.getElementById("bmi2").innerHTML="Healthy Weight Range: "+range1+"kg - "+range2+"kg";
    }
    else if(bmi<=24.9){
        document.getElementById("bmi").innerHTML="You are Healthy weight";
        document.getElementById("bmi1").innerHTML="BMI: "+bmi;
        document.getElementById("bmi2").innerHTML="Healthy Weight Range: "+range1+"kg - "+range2+"kg";
    }
    else if(bmi<=29.9){
        document.getElementById("bmi").innerHTML="You are Overweight";
        document.getElementById("bmi1").innerHTML="BMI: "+bmi;
        document.getElementById("bmi2").innerHTML="Healthy Weight Range: "+range1+"kg - "+range2+"kg";
    }
    else if(bmi<=34.9){
        document.getElementById("bmi").innerHTML="You are Moderately Obese";
        document.getElementById("bmi1").innerHTML="BMI: "+bmi;
        document.getElementById("bmi2").innerHTML="Healthy Weight Range: "+range1+"kg - "+range2+"kg";
    }
    else if(bmi<=34.9){
        document.getElementById("bmi").innerHTML="You are Severely Obese";
        document.getElementById("bmi1").innerHTML="BMI: "+bmi;
        document.getElementById("bmi2").innerHTML="Healthy Weight Range: "+range1+"kg - "+range2+"kg";
    }
    else{
        document.getElementById("bmi").innerHTML="You are Morbidly Obese";
        document.getElementById("bmi1").innerHTML="BMI: "+bmi;
        document.getElementById("bmi2").innerHTML="Healthy Weight Range: "+range1+"kg - "+range2+"kg";
    }
}
document.getElementById("reset").onclick=function(){
    document.getElementById("weight").value="";
    document.getElementById("height").value="";
}