/*--function computerPlay(){
    let options=["rock","paper","scissors"]
    return options[Math.floor(Math.random() * 3)]
}
function playOneRound(playerSelection,computerSelection){
   playerSelection = playerSelection.toLowerCase()
   if(playerSelection === "rock" && computerSelection ==="rock")
   {
       return "draw"
   }
   if(playerSelection === "scissors" && computerSelection ==="scissors")
   {
       return "draw"
   }
   if(playerSelection === "paper" && computerSelection ==="paper")
   {
       return "draw"
   }
   if(playerSelection === "rock" && computerSelection ==="paper")
   {
       return "compwin"
   }
   if(playerSelection === "rock" && computerSelection ==="scissors")
   {
       return "playerwin"
   }
   if(playerSelection === "paper" && computerSelection ==="rock")

          {
       return "playerwin"
   }
   if(playerSelection === "paper" && computerSelection ==="scissors")
   {
       return "compwin"
   }
   if(playerSelection === "scissors" && computerSelection ==="rock")
   {
       return "compwin"
   }
   if(playerSelection === "scissors" && computerSelection ==="paper")
   {
       return "playerwin"
   }
}
function game(){
   let comppoints = 0, playerpoints = 0
   let playerSelection,computerSelection
   console.log("Started")
   alert("The 5 round Game of Rock,Paper and Scissors is Starting.Press Ok")

   for(i=0;i<5;i++)
   {
       let roundResult
       while(true){
           playerSelection=prompt("Enter Rock,Paper or Scissors?")
           if(playerSelection === "rock" || playerSelection === "scissors" || playerSelection === "paper")
           {break;}
       }
       
     
       computerSelection=computerPlay()
       console.log("Player Selected " + playerSelection)
       console.log("Computer Selected " + computerSelection)
       roundResult = playOneRound(playerSelection,computerSelection)
       if(roundResult === "playerwin")
       {
           playerpoints++
       console.log("Player wins this Round")
       }
       else if(roundResult === "compwin"){
           comppoints++
           console.log("Computer wins this Round")
       }
       else{
           console.log("This round was a draw")
           //dont do anything
       }
   }
   if(comppoints === playerpoints)
   {console.log("Player Points :" + playerpoints)
   console.log("Computer Points :" + comppoints)
   console.log("The Game was a Draw")}
   if(comppoints > playerpoints)
   {console.log("Player Points :" + playerpoints)
   console.log("Computer Points :" + comppoints)
   console.log("Computer Wins the Game")}
   if(comppoints < playerpoints)
  {console.log("Player Points :" + playerpoints)
   console.log("Computer Points :" + comppoints)
   console.log("You Win the Game")}
}
game()--*/
let comppoints = 0;
let playerpoints = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playRound));
const result = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");
const playerAction = document.querySelector(".playerAction");
const compAction = document.querySelector(".compAction");
const PlayerRockIcon = document.createElement("i");
PlayerRockIcon.classList.add("fas");
PlayerRockIcon.classList.add("fa-hand-rock");
const CompRockIcon = document.createElement("i");
CompRockIcon.classList.add("fas");
CompRockIcon.classList.add("fa-hand-rock");
const PlayerPaperIcon = document.createElement("i");
PlayerPaperIcon.classList.add("fas");
PlayerPaperIcon.classList.add("fa-hand-paper");
const CompPaperIcon = document.createElement("i");
CompPaperIcon.classList.add("fas");
CompPaperIcon.classList.add("fa-hand-paper");
const PlayerScissorsIcon = document.createElement("i");
PlayerScissorsIcon.classList.add("fas");
PlayerScissorsIcon.classList.add("fa-hand-scissors");
const CompScissorsIcon = document.createElement("i");
CompScissorsIcon.classList.add("fas");
CompScissorsIcon.classList.add("fa-hand-scissors");

playerAction.appendChild(PlayerRockIcon);
compAction.appendChild(CompRockIcon);

function playRound(e) {
    if (playerpoints === 5 || comppoints === 5) {
        endGame();
        return;
    }

    let computerSelection = computerPlay();
    let playerSelection = e.target.getAttribute('data-name');
    setActionIcons(computerSelection, playerSelection);
    let roundResult = playOneRound(playerSelection, computerSelection);
    if (roundResult === "draw") {
        console.log(roundResult);
        result.textContent = "This round was a draw"
    }
    else if (roundResult === "compwin") {
        console.log(roundResult);
        result.textContent = "Computer wins this round"
        comppoints++;
    }
    else {
        console.log(roundResult);
        result.textContent = "You win this round"
        playerpoints++;
    }

    updateScore();
    if (playerpoints === 5 || comppoints === 5) {
        endGame();
        return;
    }

}
function setActionIcons(computerSelection, playerSelection) {
    playerAction.removeChild(playerAction.lastChild);
    compAction.removeChild(compAction.lastChild);
    if (playerSelection === "rock") { playerAction.appendChild(PlayerRockIcon); }
    else if (playerSelection === "paper") { playerAction.appendChild(PlayerPaperIcon); }
    else { playerAction.appendChild(PlayerScissorsIcon); }
    if (computerSelection === "rock") { compAction.appendChild(CompRockIcon); }
    else if (computerSelection === "paper") { compAction.appendChild(CompPaperIcon); }
    else { compAction.appendChild(CompScissorsIcon); }

}
function endGame() {
    if (playerpoints === 5) {
        result.textContent = "You Win the Game";
    }
    if (comppoints === 5) {
        result.textContent = "Computer Wins the Game";
    }

}
function updateScore() {
    playerScore.textContent = playerpoints;
    compScore.textContent = comppoints;

}

function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * 3)]
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock" && computerSelection === "rock") {

        return "draw"
    }
    if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "draw"
    }
    if (playerSelection === "paper" && computerSelection === "paper") {
        return "draw"
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "compwin"
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "playerwin"
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "playerwin"
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "compwin"
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "compwin"
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "playerwin"
    }
}
