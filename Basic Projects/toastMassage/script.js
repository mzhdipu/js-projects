
function getHexCode(){
    let hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    
    let hax = "#";

    let copyBTN = document.getElementById("copy-btn");

    for(i = 0; i < 6; i++){
        let colorIndex = Math.floor(Math.random() * hexCodes.length);
        let randomCode = hexCodes[colorIndex]
        hax += randomCode;
    }

    let body = document.querySelector("body")
    body.style.backgroundColor = hax;

    let inputValue = document.getElementById("inputValue");

    inputValue.value = hax;


    copyBTN.onclick = () => {
        inputValue.select();
        let colorCode = inputValue.value;
        navigator.clipboard.writeText(colorCode);

        generateToastMessage(`Copied ${hax}`)
    }

    function generateToastMessage(text){
        let div = document.createElement("div");
        div.innerText = text;
        div.className = "toast-message";
        document.body.appendChild(div);


        div.onclick = () => {
            div.style.display = "none"
        }
    }

    

}


