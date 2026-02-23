
function search() {
    let search = document.getElementById("search").value;
    if (search !== "") {
        let uri = "https://www.youtube.com/results?search_query=" + encodeURIComponent(search)
        window.open(uri, "_blank");
    }
}
document.getElementById("search").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        search();
    }
})