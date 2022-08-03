
// https://superheroapi.com/api.php/2592056984258970	

 
// console.log(superHeroURL);
//let randomValue = Math.floor(Math.random() * 731);

let newHero = document.getElementById("newHero");
let heroImage = document.getElementById("heroImage");
let searchBTN = document.getElementById ("searchBTN");
let searchInput = document.getElementById("searchInput");
let superHeroDetails = document.getElementById("superHeroDetails")

function randomValue (){
    return Math.floor(Math.random() * 731) + 1;
}


function getSuperhero(id){
    fetch(`https://superheroapi.com/api.php/2592056984258970/${id}`)
    .then(response => response.json())
    .then(json => {
        showHeroInfo(json)
    })
}

function showHeroInfo(charater){
    let charaterName = `<h2>${charater.name}</h2>`
    let charaterImage = `<img src="${charater.image.url}" alt=""></img>`

    let stats = Object.keys(charater.powerstats).map(powerstatsValue =>{
        return `<p>${powerstatsValue} : ${charater.powerstats[powerstatsValue]}</p>`
    }).join(" ")

    heroImage.innerHTML = `${charaterName}${charaterImage}${stats}`
}

function searchSuperHeros(name){

    fetch(`https://superheroapi.com/api.php/2592056984258970/search/${name}`)
    .then(response => response.json())
    .then(json => {
        heros = json.results[0]
        showHeroInfo(heros)
        // console.log(heros),
        // heroImage.innerHTML = ` <img src="${heros.image.url}" alt="">`
    });
}


newHero.onclick = () => getSuperhero(randomValue());
searchBTN.onclick = () => searchSuperHeros(searchInput.value)
