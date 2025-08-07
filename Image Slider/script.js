let images = [
    document.getElementById("img1"),
    document.getElementById("img2"),
    document.getElementById("img3"),
    document.getElementById("img4")
];
let prev = document.getElementById("btn1");
let next = document.getElementById("btn2");
let currentImage = 0;

prev.addEventListener("click", previous);
next.addEventListener("click", nextImage);

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? "block" : "none";
    });
}

function previous() {
    currentImage = (currentImage === 0) ? images.length - 1 : currentImage - 1;
    showImage(currentImage);
}

function nextImage() {
    currentImage = (currentImage === images.length - 1) ? 0 : currentImage + 1;
    showImage(currentImage);
}
