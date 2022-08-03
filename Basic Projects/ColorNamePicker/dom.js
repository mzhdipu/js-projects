

// let demo = document.getElementById("demo")
// demo.innerHTML= "I Love JavaScript";

// demo.addEventListener("click", function(){
//     demo.innerHTML = "I Love JavaScript";
// })

let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");


//let outPut = document.getElementById("outPut");

// red.onclick =() => outPut.innerHTML = "RED";
// yellow.onclick =() => outPut.innerHTML = "YELLOW";
// green.onclick =() => outPut.innerHTML = "GREEN";




//===============================================
let colorName = document.querySelectorAll(".colorName");


colorName.forEach(function(colorName){
    //console.log(colorName.value);

    //colorName.onclick = () => console.log(colorName.value);

    colorName.addEventListener("click", function(){
        outPut.innerHTML = colorName.value;
    })
})







