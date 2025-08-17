document.getElementById("button").addEventListener("click",function(){
    let name1=document.getElementById("username").value
    let password1=document.getElementById("password").value
    if(!name1 || name1.trim() === "" || !password1 || password1.trim() === ""){
    window.alert("Your Form not Submitted");
    }
    else {
    window.alert("Your Form Submitted");
    }
})