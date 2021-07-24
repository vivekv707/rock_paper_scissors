function computerPlay(){
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
game()