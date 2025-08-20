
function calculate1() {
    let billvalue = parseInt(document.getElementById("bill").value);
    let percentagevalue = parseInt(document.getElementById("percentage").value);
    let amountvalue = document.getElementById("amount");
    let tipvalue = document.getElementById("Tip");
    let peoplevalue = parseInt(document.getElementById("People").value);
    let personamount = document.getElementById("amountPerson");
    let tipperperson = document.getElementById("TipPerson");
    let persondisplay = document.querySelectorAll(".person");
    persondisplay.forEach(el => el.classList.remove("show"));
    amountvalue.innerText = (billvalue + (billvalue * (percentagevalue / 100))).toFixed(2);
    tipvalue.innerText = (billvalue * (percentagevalue / 100)).toFixed(2);
    personamount.innerText = ((billvalue + (billvalue * (percentagevalue / 100))) / peoplevalue).toFixed(2);
    tipperperson.innerText = ((billvalue * (percentagevalue / 100)) / peoplevalue).toFixed(2);
    if (peoplevalue > 1) {
        persondisplay.forEach(person => person.classList.add("show"));
    }
}