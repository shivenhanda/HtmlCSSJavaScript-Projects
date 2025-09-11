
let player = "No Player";
let turn = 'X';
let array = document.querySelectorAll(".box");
array.forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerText === "" && player==="No Player") {
            element.innerText = turn;
            turn = changeTurn();
            checkwining();
        }
    });
})

let h2 = document.getElementById("text");
function checkwining() {
    if (player !== "No Player") {
        return;
    }
    let value = 0;
    let answer = ['X', '0'];
    for (i = 0; i < 2; i++) {
        if (array[0].innerText === answer[i] && array[1].innerText === answer[i] && array[2].innerText === answer[i]) {
            value = 1;
        }
        else if (array[3].innerText === answer[i] && array[4].innerText === answer[i] && array[5].innerText === answer[i]) {
            value = 1;
        }
        else if (array[6].innerText === answer[i] && array[7].innerText === answer[i] && array[8].innerText === answer[i]) {
            value = 1;
        }
        else if (array[0].innerText === answer[i] && array[3].innerText === answer[i] && array[6].innerText === answer[i]) {
            value = 1;
        }
        else if (array[1].innerText === answer[i] && array[4].innerText === answer[i] && array[7].innerText === answer[i]) {
            value = 1;
        }
        else if (array[2].innerText === answer[i] && array[5].innerText === answer[i] && array[8].innerText === answer[i]) {
            value = 1;
        }
        else if (array[0].innerText === answer[i] && array[4].innerText === answer[i] && array[8].innerText === answer[i]) {
            value = 1;
        }
        else if (array[2].innerText === answer[i] && array[4].innerText === answer[i] && array[6].innerText === answer[i]) {
            value = 1;
        }
        if (value == 1) {
            player = answer[i];
            h2.innerHTML = `Player ${player} was Winning`;
            return;
        }
    }
}

function changeTurn() {
    return turn === 'X' ? '0' : 'X';
}

function resetbutton() {
    turn = 'X';
    let array = document.querySelectorAll(".box");
    array.forEach(element => {
        element.innerText = "";
    })
    h2.innerHTML ="";
    player = "No Player"
}

document.addEventListener("keydown",(e)=>{
    if(e.key>=1 && e.key<=9 && player==="No Player" && array[e.key-1].innerText===""){
        array[e.key-1].innerText=turn;
        turn = changeTurn();
        checkwining();
    }
    else if(e.key==="Delete"){
        resetbutton();
    }
})
