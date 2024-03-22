let playCount = 0;
let computerScore = 0;
let playerScore = 0;

const screenText = document.querySelector(".screenText");
document.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "rock":
      screenText.textContent = playRound("rock", getComputerChoice());
      break;
    case "paper":
      screenText.textContent = playRound("paper", getComputerChoice());
      break;
    case "scissor":
      screenText.textContent = playRound("scissor", getComputerChoice());
      break;
  }

  if (playCount === 5) {
    announceWinner();
  }
});

function getComputerChoice() {
  let choices = ["rock", "scissor", "paper"];
  return choices[Math.floor(Math.random() * 3)];
}

const playerScoreBoard = document.querySelector(".playerScoreBoard");
const computerScoreBoard = document.querySelector(".computerScoreBoard");

function updatePlayerScore() {
  playerScore++;
  playerScoreBoard.textContent = playerScore;
}
function updateComputerScore() {
  computerScore++;
  computerScoreBoard.textContent = computerScore;
}
function updatePlayCount() {
  playCount++;
}

function playRound(playerSelection, computerSelection) {
  if (playCount < 5) {
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();
    if (playerSelectionLower === "rock") {
      if (computerSelectionLower === "rock") {
        updatePlayCount();
        return "Try Again!";
      } else if (computerSelectionLower === "paper") {
        updatePlayCount();
        updateComputerScore();
        return "You lost! Paper beats rock.";
      } else {
        //computer = scissor

        updatePlayCount();
        updatePlayerScore();
        return "You win! Rock beats scissor.";
      }
    } else if (playerSelectionLower === "paper") {
      if (computerSelectionLower === "rock") {
        updatePlayCount();
        updatePlayerScore();
        return "You win! Paper beats rock.";
      } else if (computerSelectionLower === "paper") {
        updatePlayCount();
        return "Try again!";
      } else {
        //computer = scissor

        updatePlayCount();
        updateComputerScore();
        return "You lost! Scissor beats paper!";
      }
    } else {
      //player selection scissors
      if (computerSelectionLower === "rock") {
        updatePlayCount();
        updateComputerScore();
        return "You lost! Rock beats scissor.";
      } else if (computerSelectionLower === "paper") {
        updatePlayCount();
        updatePlayerScore();
        return "You win! Scissor beats paper.";
      } else {
        //computer = scissor

        updatePlayCount();
        return "Try again!";
      }
    }
  }
}

function announceWinner() {
  if (playerScore > computerScore) {
    screenText.textContent = "You win!";
  } else if (playerScore < computerScore) {
    screenText.textContent = "Computer wins!";
  } else {
    screenText.textContent = "Tied!";
  }
}
