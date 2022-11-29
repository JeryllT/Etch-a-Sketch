const pixels = document.querySelector(".pixel-container");
console.log(pixels)

// function containerDim(height, width)

for(i=0; i < 16; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row-div");
    for(j = 0; j< 16; j++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.addEventListener('mouseover', pix => pix.target.style.backgroundColor = "black");
        rowDiv.appendChild(pixel);
    }
    pixels.appendChild(rowDiv);
}

function containerDim() {
    let newHeight = +prompt("What's the new height?", "100");
    console.log(newHeight);
    while (isNaN(newHeight) || newHeight > 100 || newHeight < 1) {
        alert("Please ensure value is below 100 and is a valid number.");
        newHeight = +prompt("What's the new height?", "100");
    };

    let newWidth = +prompt("What's the new width?", "100");
    console.log(newWidth);
    while (isNaN(newWidth) || newWidth > 100 || newWidth < 1) {
        alert("Please ensure value is below 100 and is a valid number.");
        newWidth = +prompt("What's the new height?", "100");
    };

    pixels.replaceChildren();
    for(i=0; i < newHeight; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        for(j = 0; j< newWidth; j++) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.addEventListener('mouseover', pix => pix.target.style.backgroundColor = "black");
            rowDiv.appendChild(pixel);
        }
        pixels.appendChild(rowDiv);
    };
};