let quizquestion11 = document.querySelector(".quizquestion");
let questions11 = document.querySelector(".questions");
let quiz11 = document.querySelector(".quiz");

quizquestion11.classList.add("show");

let questionnumber = 0;
function savequestionnumber() {
    questionnumber = parseInt(document.getElementById("quiznumber").value);
    if (questionnumber >= 1) {
        quizquestion11.classList.remove("show");
        questions11.classList.add("show")
    }
}

let questioninput = document.getElementById("question");
let option1input = document.getElementById("option1");
let option2input = document.getElementById("option2");
let option3input = document.getElementById("option3");
let option4input = document.getElementById("option4");

let questionvalue1 = [];
let option1value1 = [];
let option2value1 = [];
let option3value1 = [];
let option4value1 = [];
let answervalue1 = [];
let count = 0;
function savequestionvalue(Callback) {
    if (parseInt(document.getElementById("answervalue").value.trim()) > 0 && parseInt(document.getElementById("answervalue").value.trim()) <= 4 && !document.getElementById("questionvalue").value.trim() == "" && !document.getElementById("option1value").value.trim() == "" && !document.getElementById("option2value").value.trim() == "" && !document.getElementById("option3value").value.trim() == "" && !document.getElementById("option4value").value.trim() == "") {
        questionvalue1.push(document.getElementById("questionvalue").value.trim() || "No Question");
        option1value1.push(document.getElementById("option1value").value.trim() || "No Option");
        option2value1.push(document.getElementById("option2value").value.trim() || "No Option");
        option3value1.push(document.getElementById("option3value").value.trim() || "No Option");
        option4value1.push(document.getElementById("option4value").value.trim() || "No Option");
        answervalue1.push(parseInt(document.getElementById("answervalue").value.trim()) || 0);
        document.getElementById("questionvalue").value = "";
        document.getElementById("option1value").value = "";
        document.getElementById("option2value").value = "";
        document.getElementById("option3value").value = "";
        document.getElementById("option4value").value = "";
        document.getElementById("answervalue").value = "";
        count++;
        if (count == questionnumber) {
            questions11.classList.remove("show");
            quiz11.classList.add("show");
        }
        showquiz();
    }
    else {
        document.getElementById("errormessage").innerText = "Check Again And Enter Valid Value";
        return;
    }
}
let i = 0;
let answered = false;

function showquiz() {
    document.getElementById("answerbyuser").innerText = "";
    document.getElementById("answer").value = "";
    questioninput.innerHTML = questionvalue1[i];
    option1input.innerHTML = option1value1[i];
    option2input.innerHTML = option2value1[i];
    option3input.innerHTML = option3value1[i];
    option4input.innerHTML = option4value1[i];
    answered = false;
}
document.getElementById("submit").addEventListener("click", function () {
    if (parseInt(document.getElementById("answer").value) > 0 && !parseInt(document.getElementById("answer").value.trim()=="") &&parseInt(document.getElementById("answer").value) <=4) {
        if (!answered) {
            checkanswer();
            answered = true;
            this.innerText = "Next";
        }
        else {
            i++;
            if (i < questionnumber) {
                showquiz();
                this.innerText = "Submit";
            } else {
                document.getElementById("answerbyuser").innerText = "Quiz Completed";
                this.style.display = "none";
                document.querySelector(".nodisplay").style.display="block";
            }
        }
    }
    else {
        document.getElementById("answerbyuser").innerText = "Check Again And Enter Valid Value";
        return;
    }
});


function checkanswer() {
    let answerinput = parseInt(document.getElementById("answer").value);
    if (answerinput === answervalue1[i]) {
        document.getElementById("answerbyuser").innerText = "Correct Answer";
    } else {
        document.getElementById("answerbyuser").innerText = "Wrong Answer. Correct option is " + answervalue1[i];
    }
}

