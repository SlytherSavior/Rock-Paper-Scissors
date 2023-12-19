document.addEventListener("DOMContentLoaded", function () {
  const win$ = document.getElementById("win%");
  const draw$ = document.getElementById("draw%");
  const loss$ = document.getElementById("loss%");
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  const result = document.getElementById("result");
  const winNum = document.getElementById("wins");
  const lossNum = document.getElementById("loss");
  const drawNum = document.getElementById("draw");
  const playtime = document.getElementById("playTimes");
  const resetButton = document.getElementById("reset");

  let wins = 0;
  let loss = 0;
  let draw = 0;
  let playTimes = 0;
  let playerChoice = 0;
  let winPer = "0%";
  let lossPer = "0%";
  let drawPer = "0%";

  resetButton.onclick = function () {
    resetValues();
  };

  rock.onclick = function () {
    playerChoice = 1;
    determineWinner();
  };

  paper.onclick = function () {
    playerChoice = 2;
    determineWinner();
  };

  scissors.onclick = function () {
    playerChoice = 3;
    determineWinner();
  };

  function updateFunction() {
    win$.textContent = winPer;
    loss$.textContent = lossPer;
    draw$.textContent = drawPer;
    winNum.textContent = wins;
    lossNum.textContent = loss;
    drawNum.textContent = draw;
    playtime.textContent = playTimes;
  }

  function resetValues() {
    result.innerHTML = '';
    winPer = "0%";
    lossPer = "0%";
    drawPer = "0%";
    wins = 0;
    loss = 0;
    draw = 0;
    playTimes = 0;
    updateFunction();
  }

  function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice = 0;
    if (randomNumber <= 1 / 3 && randomNumber >= 0) {
      computerChoice = 1;
      console.log("Computer chose rock");
    } else if (randomNumber <= 2 / 3 && randomNumber > 1 / 3) {
      computerChoice = 2;
      console.log("Computer chose paper");
    } else {
      computerChoice = 3;
      console.log("Computer chose scissors");
    }
    return computerChoice;
  }

  function determineWinner() {
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
      draw++;
      result.textContent = "It's a draw!";
    } else if (
      (playerChoice === 1 && computerChoice === 3) ||
      (playerChoice === 2 && computerChoice === 1) ||
      (playerChoice === 3 && computerChoice === 2)
    ) {
      result.textContent = "You win!";
      wins++;
    } else {
      loss++;
      result.textContent = "Computer wins!";
    }
    playTimes++;
    updateFunction();
    calculatePercentage();
  }

  function calculatePercentage() {
    winPer = ((wins / playTimes) * 100).toFixed(1) + "%";
    lossPer = ((loss / playTimes) * 100).toFixed(1) + "%";
    drawPer = ((draw / playTimes) * 100).toFixed(1) + "%";
  }
});
