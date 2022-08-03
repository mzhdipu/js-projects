
// let orderSoup = () => "Soup is ready";
// setTimeout(orderSoup, 2000);
// console.log("You Start the convo with your")
// console.log("still speaking");


let promise01 = new Promise(function(reslove, reject){
    setTimeout(function(){
        isReady = [true, false] [Math.floor(Math.random() * 2)];
        isReady ? reslove ("Sour is Ready") : reject ("No Soup Today");
    }, 1000)
})

async function getSoup(){
    let data = {
        rating : 0,
        tip    : 0,
        pay    : 0,
        review : 0
    }
    try{
        let soup = await promise01;
        console.log(soup)
        data.rating = "5 Star",
        data.tip    = .2,
        data.pay    = 10,
        data.review = 5
        return data
    }
    catch(error){
        console.log(error)
        data.rating = "1 Star",
        data.tip    = 0,
        data.pay    = 0,
        data.review = 1
        return data
    }
}
// getSoup().then(value => console.log(value))

getSoup()
.then(function(value){
    console.log(value)
})

// promise01
//     .then(function(success){console.log({success})})
//     .catch(function(error){console.log({error})})



// https://dog.ceo/api/breeds/image/random
// async function firstAsync(){
//     let url = "https://dog.ceo/api/breeds/image/random";
//     // .then(response => response.json())
//     // .then(json => {})
//     let response = await fetch(url);
//     let data = await (response.json());
//     console.log(data)    
// }

// firstAsync()



async function sum(a, b){
    let result =  (a + b)
    return result

}
//console.log(sum(3, 4))

sum(3, 4).then(function(value){
    console.log (value)
})




let sum2 = async (a, b) => a + b

sum2(1, 2).then(value => console.log(value));



