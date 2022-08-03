
function getHexCode(){
    let hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    
    let hax = "#";

    for(i = 0; i < 6; i++){
        let colorIndex = Math.floor(Math.random() * hexCodes.length);
        let randomCode = hexCodes[colorIndex]
        hax += randomCode;
    }

    let body = document.querySelector("body")
    body.style.backgroundColor = hax;

    let inputValue = document.getElementById("inputValue");

    inputValue.value = hax
    // let changeColor = document.getElementById("Change-Color")


}
getHexCode()