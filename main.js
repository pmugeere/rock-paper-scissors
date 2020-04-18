function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();
  if (playerSelection == computerSelection) {
    return "It's a draw, play again!";
  }

  var result = "";
  switch (computerSelection.toUpperCase()) {
    case "ROCK":
      if (playerSelection == "SCISSORS")
        result = "You lose! Rock beast Scissors";
      else if (playerSelection == "PAPER") result = "You win! Paper beats Rock";
      break;
    case "PAPER":
      if (playerSelection == "SCISSORS")
        result = "You win! Scissors beast Paper";
      else if (playerSelection == "ROCK") result = "You lose! Paper beats Rock";
      break;
    case "SCISSORS":
      if (playerSelection == "ROCK") result = "You win! Rock beats Scissors";
      else if (playerSelection == "PAPER")
        result = "You lose! Scissors beats Paper";
      break;
    default:
      result = "The computer ran crazzzzy!";
      break;
  }

  return result;
}

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let randomOptionChoice = Math.floor(Math.random() * options.length);
  return options[randomOptionChoice];
}
function game() {
  const playerSelection = prompt("Rock, Paper, Scissors?");
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
}

var i;
for (i = 0; i < 5; i++) {
  game();
}
