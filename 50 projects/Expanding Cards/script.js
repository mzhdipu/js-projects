let panels = document.querySelectorAll(".panel")

panels.forEach((value)=>{
    value.onclick = () =>{
        removeActiveClass()
        value.classList.toggle("active")
    }
})

function removeActiveClass(){
    panels.forEach((value) =>{
        value.classList.remove("active")
    })
}


