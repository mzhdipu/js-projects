

// let hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
// let hax = "#"


let ChangeColor = document.getElementById("Change-Color");
let body = document.querySelector("body");
let inputValue = document.getElementById("value");

function generateRGBColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

ChangeColor.onclick = () => {
 
    let bgColor = generateRGBColor()
    body.style.background = bgColor;
    inputValue.value = bgColor
}


let a = Math.floor(Math.random() * 100)
console.log(a.toString(16))