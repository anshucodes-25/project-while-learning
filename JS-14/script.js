const boxes = document.querySelectorAll(".box");

function randomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    
    for(let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function randomText(){
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let text = "";

     for(let i = 0; i < 6; i++){
        text += letters[Math.floor(Math.random() * letters.length)];
     }

    return text;
}

boxes.forEach(e => {
     e.style.backgroundColor = randomColor();
     e.textContent = randomText()
});




