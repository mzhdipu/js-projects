
// https://dog.ceo/api/breeds/image/random


// let dogImage = document.getElementById("dogImage")

// fetch("https://dog.ceo/api/breeds/image/random")
// .then(response => response.json())
// .then(json => {
//     console.log(json.message)
//     dogImage.innerHTML = `<img src="${json.message}" alt="">`
// })

let randomDog = document.getElementById("random-dog")
let dogImage = document.getElementById("dogImage")

function randomDogFunction(){
    // randomDog.addEventListener("click", ()=>{
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //     .then(response => response.json())
    //     .then(json => {
    //         dogImage.innerHTML = `<img src="${json.message}" width = 600 height = auto alt="">`
    //     })
    // })

    randomDog.onclick = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(json => {
            dogImage.innerHTML = `<img src="${json.message}" width = 500 height = 500 alt="">`
        })
    }
}

randomDogFunction()