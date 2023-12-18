document.addEventListener("DOMContentLoaded", function() {

  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById
  ("scissors");
  const result = document.getElementById("result");
  const winNum = document.getElementById("wins");
  const lossNum = document.getElementById("loss");
  const drawNum = document.getElementById("draw");const playtime = document.getElementById("playTimes");
  let wins = 0 ; 
  let loss = 0 ; 
  let draw = 0 ; 
  let playTimes = 0;
  let playerChoice = 0;

  rock.onclick = function(){
    playerChoice = 1;
    determineWinner();
  }

  paper.onclick = function(){
    playerChoice = 2;
    determineWinner();
  }

  scissors.onclick = function(){
    playerChoice = 3;
    determineWinner();
  }
  function updatefunction(){ 
    winNum.innerHTML = wins;
    lossNum.innerHTML = loss;
    drawNum.innerHTML = draw;
    playtime.innerHTML = playTimes;

  }

  function determineWinner() {
    let randomNumber = Math.random();
    let computerChoice = 0;

    if(randomNumber <= 1/3 && randomNumber >= 0) { 
      computerChoice = 1;
      console.log("Computer chose rock");
    } else if (randomNumber <= 2/3 && randomNumber > 1/3) { 
      computerChoice = 2;
      console.log("Computer chose paper");
    } else {
      computerChoice = 3;
      console.log("Computer chose scissors");
    }

    if (playerChoice === computerChoice) {
      draw += 1;
      result.textContent = "It's a draw!";
    } else if (
      (playerChoice === 1 && computerChoice === 3) ||
      (playerChoice === 2 && computerChoice === 1) ||
      (playerChoice === 3 && computerChoice === 2)
    ) {
      result.textContent = "You win!";
      wins += 1; 
    } else {
      loss += 1 ; 
      result.textContent = "Computer wins!";
    }
    playTimes +=1;
    updatefunction();
  }

});
