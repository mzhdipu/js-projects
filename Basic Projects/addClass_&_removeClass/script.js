
// IMAGE CIRCLE EFFECT 
let imgCls = document.querySelector(".img-cls");

imgCls.classList.remove("rounded-circle")

imgCls.onclick = () =>{
    imgCls.classList.toggle("rounded-circle")
}


// TEXT COLOR CHANGE EFFECT 
let headingOne = document.querySelector("h1")

headingOne.onclick = () => {
    headingOne.className += ' text-danger'
}


// BUTTON COLOR CHANGE EFFECT 
let hoverA = document.querySelector(".hover-a");

hoverA.classList.remove("hover-a")

hoverA.onclick = () =>{
    hoverA.classList.toggle("hover-a")
}