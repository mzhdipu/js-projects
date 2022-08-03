
let totalScore = {computerScore : 0, playerScore : 0};


function getComputerChoice(){
   let rpsChoices = ["Rock", "Paper", "Scissors"];
   let randoNumber = Math.floor(Math.random() * 3);
   return rpsChoices[randoNumber];
}

function getResult(playerChoice, computerChoice){
   let score = 0;
   if(playerChoice == computerChoice){
      score = 1;
   }else if(playerChoice == "Rock" && computerChoice == "Scissors"){
      score = 1
   }else if(playerChoice == "Paper" && computerChoice == "Rock"){
      score = 1
   }else if(playerChoice == "Scissors" && computerChoice == "Paper"){
      score = 1
   }else{
      score = -1
   }   

   return score;
}

// function onClickRPS(playerChoice){
//    console.log(playerChoice);
// }

function showResult(score, playerChoice, computerChoice){
   let resultDiv = document.getElementById("result");
   let playerScoreDiv = document.getElementById("player-score");
   let handsDiv = document.getElementById("hands");

   if(score == -1){
      resultDiv.innerText = `You Lose`
   }else if(score == 0){
      resultDiv.innerText = `It's a Tie`
   }else{
      resultDiv.innerText = `You Won`
   }

   handsDiv.innerText = `${playerChoice} vs. ${computerChoice}`;
   playerScoreDiv.innerText = `Your Score : ${totalScore["playerScore"]}`
}

function onClickRPS(playerChoice){
   console.log({playerChoice});
   let computerChoice = getComputerChoice()
   console.log({computerChoice});
   let score = getResult(playerChoice, computerChoice);
   totalScore["playerScore"] += score
   console.log({score});
   console.log({totalScore});
   showResult(score, playerChoice, computerChoice)
}


function playGame(){


   let rpsButton = document.querySelectorAll(".rpsButton");

   rpsButton.forEach(function(rpsButton){
      rpsButton.addEventListener("click", function(){
         return onClickRPS(rpsButton.value)
      })
   })
}
playGame()

