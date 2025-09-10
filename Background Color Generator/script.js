
function generatecolor() {
    let color = Math.random() * (999999 - 111111) + 111111;
    color = Math.round(color);
    color = "#" + color;
    document.getElementById("box").value = color;
    document.body.style.backgroundColor = color;
}
let copyinput;
function copyvalue() {
    let value1 = document.getElementById("box").value.trim();
    if (value1 !== "" && copyinput!==value1) {
        navigator.clipboard.writeText(value1).then(() => {
            document.getElementById("value").style.display ="block";
            document.getElementById("value").innerText = "Copied the text: " + value1;
            copyinput=value1;
            setTimeout(() => {
                document.getElementById("value").style.display ="none";
            }, 1500);
        }).catch(err=>{
            document.getElementById("value").innerText = "Failed to copy text. Please try again.";
        });
    }

}
function resetvalue() {
    document.getElementById("box").value = "";
    document.body.style.backgroundColor = "";
    document.getElementById("value").style.display ="none";
}
