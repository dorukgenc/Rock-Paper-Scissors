function getComputerChoice() {
  let choices = ["rock", "scissor", "paper"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionLower = playerSelection.toLowerCase();
  let computerSelectionLower = computerSelection.toLowerCase();
  if (playerSelectionLower === "rock") {
    if (computerSelectionLower === "rock") {
      return "Try Again!";
    } else if (computerSelectionLower === "paper") {
      return "You lost! Paper beats rock.";
    } else {
      //computer = scissor
      return "You win! Rock beats scissor.";
    }
  } else if (playerSelectionLower === "paper") {
    if (computerSelectionLower === "rock") {
      return "You win! Paper beats rock.";
    } else if (computerSelectionLower === "paper") {
      return "Try again!";
    } else {
      //computer = scissor
      return "You lost! Scissor beats paper!";
    }
  } else {
    //player selection scissors
    if (computerSelectionLower === "rock") {
      return "You lost! Rock beats scissor.";
    } else if (computerSelectionLower === "paper") {
      return "You win! Scissor beats paper.";
    } else {
      //computer = scissor
      return "Try again!";
    }
  }
}

function playGame() {
  for (var i = 0; i < 5; i++) {
    let choice = prompt("What is your selection?");
    console.log(playRound(choice, getComputerChoice()));
  }
}
playGame();
