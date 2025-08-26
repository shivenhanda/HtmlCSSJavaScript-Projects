let lists = document.getElementById("list")
let taskinput = document.getElementById("Taskvalue")
let searchinput = document.getElementById("Tasksearch")
let deletebtn = document.getElementById("delete");
taskinput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') addTask();
});
function addTask() {
    let el = document.createElement("li");
    el.textContent = taskinput.value.trim();
    if( taskinput.value.trim()=='')
        return;
    el.style.listStyle="none";
    el.addEventListener('click', () => el.classList.toggle('completed'));
    el.addEventListener('mouseover', () => el.title = "Click to toggle complete");
    let del = document.createElement('span');
    del.textContent = '❌';
    del.style.marginLeft = '10px';
    del.addEventListener("click", () => el.remove());
    el.appendChild(del);
    el.style.border="1px solid black";
    el.style.padding="2px";
    el.style.margin="2px";
    lists.appendChild(el);
    taskinput.value = "";
}
deletebtn.addEventListener("click", () => lists.innerHTML = "")

searchinput.addEventListener("input", filtertasks)
function filtertasks() {
    const term = searchinput.value.toLowerCase();
    document.querySelectorAll("#list li").forEach(task => {
        const match = task.textContent.toLowerCase().includes(term);
        task.style.display = match ? "block" : "none";
    });
}