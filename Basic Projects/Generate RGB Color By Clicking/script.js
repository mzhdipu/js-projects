
let ChangeColor = document.getElementById("Change-Color");
let body = document.querySelector("body");

function generateRGBColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

ChangeColor.onclick = () => {
    // setInterval(function(){
    //     changeBodyColor.style.background = generateRGBColor();
    // },1000)

    body.style.background = generateRGBColor();
}

