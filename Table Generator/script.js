let body1 = document.getElementById("bodystyle");
let tableinput = document.getElementById("table");
let tablevalue1 = document.getElementById("tablevalue");
tableinput.addEventListener('input', function () {
    tablevalue1.innerHTML = '';
    const valueoftable = parseInt(tableinput.value);
    if (isNaN(valueoftable) || valueoftable <1) {
        let el = document.createElement("p");
        el.innerHTML = `Please Enter Value 1 or Greater Than 1`;
        el.style.textAlign = "center";
        tablevalue1.appendChild(el);
    }
    else{
        body1.style.alignItems = "flex-start";
        for (let i = 1; i <= 10; i++) {
            let answer = valueoftable * i;
            let el = document.createElement("p");
            el.innerHTML = `${valueoftable} &#10005 ${i} = ${answer}`;
            el.style.textAlign = "center";
            tablevalue1.appendChild(el);
        }
    }
});