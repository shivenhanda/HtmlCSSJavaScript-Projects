const apikey = "5a301d1dd0b641b85b19b90eb26381b5";
let city=document.getElementById("city").focus();
document.querySelector("#search").addEventListener("click", () => {
    city = document.getElementById("city").value.trim();
    list();
})
document.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        city = document.getElementById("city").value.trim();
        list();
    }
})

let cityname=document.getElementById("cityname")
let temperature=document.getElementById("temperature")
let humidity=document.getElementById("humidity")
let windspeed=document.getElementById("windspeed")

let list = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    document.getElementById("invalid").style.display="none";
    cityname.innerText=``
    temperature.innerText=``
    humidity.innerText=``
    windspeed.innerText=``
    if(response.status==404){
        document.getElementById("invalid").style.display="Block";
        return;
    }
    else if(response.status==400){
        document.getElementById("invalid").style.display="Block";
        return;
    }
    cityname.innerText=`${city}`
    temperature.innerText=`${Math.round(data.main.temp)} °C`
    humidity.innerText=`Humidity ${Math.round(data.main.humidity)} %`
    windspeed.innerText=`Wind ${Math.round(data.wind.speed)} Km/h`
}