const pixels = document.querySelector(".pixel-container");
let currentShade = 0; 

let blackWhiteFun = function(e) {
    e.target.style.backgroundColor = "black";
}

let rgbFun = function (e) {
    e.addEventListener("mouseover", pixListener => {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    pixListener.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
    }, { once: true })
}

function start() {
    for(i=0; i < 16; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        for(j = 0; j< 16; j++) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            rowDiv.appendChild(pixel);
        }
        pixels.appendChild(rowDiv);
        blackWhite();
    }
};

function containerDim() {
    let newHeight = prompt("What's the new height?", "100");
    if (newHeight === null) return;
    while (isNaN(+newHeight) || +newHeight > 100 || +newHeight < 1) {
        alert("Please ensure value is below 100 and is a valid number.");
        newHeight = prompt("What's the new height?", "100");
        if (newHeight === null) return;
    };

    let newWidth = prompt("What's the new width?", "100");
    if (newWidth === null) return;
    while (isNaN(+newWidth) || +newWidth > 100 || +newWidth < 1) {
        alert("Please ensure value is below 100 and is a valid number.");
        newWidth = prompt("What's the new height?", "100");
        if (newWidth === null) return;
    };

    pixels.replaceChildren();
    for(i=0; i < newHeight; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        for(j = 0; j< newWidth; j++) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            rowDiv.appendChild(pixel);
        }
        pixels.appendChild(rowDiv);
    };
    if (currentShade === 0) {
        blackWhite()
    } else {
        randomRBG()
    }
};

function blackWhite() {
    currentShade = 0;
    const pixel = document.querySelectorAll(".pixel");
    pixel.forEach(pix => {
        pix.addEventListener('mouseover', blackWhiteFun);
    })
}

function randomRBG() {
    currentShade = 1;
    const pixel = document.querySelectorAll(".pixel");
    pixel.forEach(pix => {
        pix.removeEventListener("mouseover", blackWhiteFun);
        rgbFun(pix);
        })
};

function clearCanvas() {
    const pixel = document.querySelectorAll(".pixel");

    pixel.forEach(pix => {
        pix.removeEventListener("mouseover", blackWhiteFun);
        pix.removeEventListener("mouseover", rgbFun);
        pix.style.backgroundColor = "aliceblue"
    });

    if (currentShade === 0) {
        blackWhite()
    } else {
        randomRBG()
    }

};

start();