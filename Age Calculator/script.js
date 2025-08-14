let UserInput = document.getElementById("date");
let result = document.getElementById("h1")
UserInput.max = new Date().toISOString().split("T")[0];
function calculate() {
    let input = new Date(UserInput.value);
    let d1 = input.getDate();
    let m1 = input.getMonth();
    let y1 = input.getFullYear();

    let date1 = new Date();
    let d2 = date1.getDate();
    let m2 = date1.getMonth();
    let y2 = date1.getFullYear();

    if (input > date1) {
        result.innerHTML = "Please enter a date that is not in the future.";
        return;
    }

    let y3 = y2 - y1;
    let m3 = m2 - m1;
    let d3 = d2 - d1;
    if (d3 < 0) {
        m3--;
        d3 += getDateInMonth(y2, m2);
    }
    if (m3 < 0) {
        y3--;
        m3 += 12;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
}
function getDateInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
document.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        calculate();
    }
})