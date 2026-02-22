let filters = {
    Brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    Contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    Saturate: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    Huerotate: {
        value: 0,
        min: 0,
        max: 360,
        unit: "deg"
    },
    Blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: "px"
    },
    Grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    Opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%"
    },
    Sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    Invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    }
}
let imageCanvas = document.getElementById("image-canvas")
let imageInput = document.getElementById("imageInput")
let resetBtn = document.getElementById("resetBtn")
let downloadBtn = document.getElementById("downloadBtn")
let canvasCtx = imageCanvas.getContext("2d")
let file = null
let image = null;

function createFilters(name, unit, value, min, max) {
    let div = document.createElement("div")
    div.classList.add("filter")
    let input = document.createElement("input");
    input.type = "range"
    input.value = value
    input.min = min
    input.max = max
    input.id = name
    let p = document.createElement("p");
    p.innerText = name
    div.appendChild(p)
    div.appendChild(input)
    let place = document.querySelector(".filters");
    input.addEventListener("input", () => {
        filters[name].value = input.value
        console.log(name, filters[name])
        ApplyFilter(name)
    })
    place.appendChild(div)
}

Object.keys(filters).forEach(filter => {
    createFilters(filter, filters[filter].unit, filters[filter].value, filters[filter].min, filters[filter].max)
})

imageInput.addEventListener("change", (event) => {
    file = event.target.files[0]
    console.log(file)
    let imageHolder = document.querySelector(".placeholder")
    imageHolder.style.display = "none"
    let img = new Image()
    img.src = URL.createObjectURL(file)
    img.onload = () => {
        image = img;
        imageCanvas.width = img.width;
        imageCanvas.height = img.height;
        canvasCtx.drawImage(img, 0, 0)
    }
})

function ApplyFilter(name) {
    if (name === "Huerotate") {
        let name1 = "hue-rotate"
        canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)
        canvasCtx.filter = `${name1}(${filters[name].value}${filters[name].unit})`
        canvasCtx.drawImage(image, 0, 0)
    }
    canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)
    canvasCtx.filter = `${name}(${filters[name].value}${filters[name].unit})`
    canvasCtx.drawImage(image, 0, 0)
}
resetBtn.addEventListener("click", () => {
    let filters = {
        Brightness: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        Contrast: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        Saturate: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%"
        },
        Huerotate: {
            value: 0,
            min: 0,
            max: 360,
            unit: "deg"
        },
        Blur: {
            value: 0,
            min: 0,
            max: 20,
            unit: "px"
        },
        Grayscale: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        Opacity: {
            value: 100,
            min: 0,
            max: 100,
            unit: "%"
        },
        Sepia: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        },
        Invert: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%"
        }
    }
    Object.keys(filters).forEach(filter => {
        ApplyFilter(filter);
    })
})
downloadBtn.addEventListener("click", () => {
    let link = document.createElement("a");
    link.download = "Image.png";
    link.href = imageCanvas.toDataURL();
    link.click();
})