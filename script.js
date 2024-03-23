let playCount = 0;
let computerScore = 0;
let playerScore = 0;
const screenText = document.querySelector(".screenText");
const screenList = document.querySelector(".screenList");

function clickHandler(event) {
  let target = event.target;

  if (playCount < 5) {
    switch (target.id) {
      case "rock":
        screenText.textContent = playRound("rock");
        break;
      case "paper":
        screenText.textContent = playRound("paper");
        break;
      case "scissor":
        screenText.textContent = playRound("scissor");
        break;
    }
  }

  if (playCount === 5) {
    announceWinner();
    // Remove the event listener after 5 rounds
    document.removeEventListener("click", clickHandler);
  }
}

// Attach the event listener
document.addEventListener("click", clickHandler);

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

function printRoundWinner(winner) {
  const newList = document.createElement("li");
  const newSpan = document.createElement("span");
  newSpan.textContent = winner + " wins this round.";
  newList.appendChild(newSpan);
  screenList.appendChild(newList);
}

function playRound(playerSelection) {
  updatePlayCount();
  let computerSelection = getComputerChoice();
  const newList = document.createElement("li");
  const newSpan = document.createElement("span");

  newList.appendChild(newSpan);
  newSpan.textContent =
    "Computer Choice: " +
    computerSelection.toUpperCase() +
    ",  " +
    "Player Choice: " +
    playerSelection.toUpperCase();
  screenList.appendChild(newList);

  if (playCount < 5) {
    if (playerSelection === "rock") {
      if (computerSelection === "rock") {
        printRoundWinner("No one");
      } else if (computerSelection === "paper") {
        updateComputerScore();
        printRoundWinner("Computer");
      } else {
        updatePlayerScore();
        printRoundWinner("Player");
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        updatePlayerScore();
        printRoundWinner("Player");
      } else if (computerSelection === "paper") {
        printRoundWinner("No one");
      } else {
        updateComputerScore();
        printRoundWinner("Computer");
      }
    } else {
      if (computerSelection === "rock") {
        updateComputerScore();
        printRoundWinner("Computer");
      } else if (computerSelection === "paper") {
        updatePlayerScore();
        printRoundWinner("Player");
      } else {
        updatePlayCount();
        printRoundWinner("No one");
      }
    }
  }
}

function announceWinner() {
  const newList = document.createElement("li");
  const newSpan = document.createElement("span");
  if (playerScore > computerScore) {
    newSpan.textContent = "You win!";
  } else if (playerScore < computerScore) {
    newSpan.textContent = "Computer wins!";
  } else {
    newSpan.textContent = "Tied!";
  }

  newList.appendChild(newSpan);
  screenList.appendChild(newList);
}
