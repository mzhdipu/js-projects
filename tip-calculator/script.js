let billTotalInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let numberOfPeopleDiv = document.getElementById("numberOfPeople");
let perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

calculateBill = () => {
    let bill = Number(billTotalInput.value);
    let tipPercentage = Number(tipInput.value) / 100;
    let totalAmount = bill * tipPercentage;
    let total = bill + totalAmount;
    //console.log({total});

    let perPersonTotal = total / numberOfPeople;
    

    perPersonTotalDiv.innerHTML = `$${perPersonTotal.toFixed(2)}`;
}
increasePeople = () => {
    numberOfPeople +=1;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
}
decreasePeople = () => {
    if(numberOfPeople <= 1){
        alert("Hey! you cannot have less than 1 person!");
        return
    }
    numberOfPeople -=1;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
}