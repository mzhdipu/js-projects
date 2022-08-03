let fruits = ["Mango", "Orange", "Banana", "Grapes", "Pineapple", "Pomegranate", "Avocado"];

function fruitArray(fruits){
   let result = Math.floor( Math.random() * fruits.length);
   console.log(fruits[result])
}
fruitArray(fruits)

