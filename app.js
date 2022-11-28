const pixels = document.querySelector(".pixel-container");
console.log(pixels)
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
