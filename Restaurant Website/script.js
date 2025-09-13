let turn = 'X';
function showing() {
    if (turn === 'X') {
        document.querySelector(".home").classList.add("show");
        document.querySelector(".text").style.top = "60%";
        turn = changeTurn();
    }
    else {
        document.querySelector(".home").classList.remove("show");
        document.querySelector(".text").style.top = "30%";
        turn = changeTurn();
    }
}
function changeTurn() {
    return turn === 'X' ? '0' : 'X';
}
let i = 0;
let array = document.querySelectorAll(".myform")
array[0].addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("messagecoming").innerText = "Not Sumitted. These is a Demo Website";
})
array[1].addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("messagecoming1").innerText = "Not Message. These is a Demo Website";
});


const video = document.getElementById("videoplay");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play();   
    } else {
      video.pause();  
    }
  });
}, { threshold: 0.5 }); 

observer.observe(video);
video.forEach(videos => observer.observe(videos));

