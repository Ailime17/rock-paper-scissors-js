let getComputerChoice = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0){
        let messOne = "rock";
        return messOne;
    } else if (randomNumber == 1) {
        let messTwo = "paper";
        return messTwo;
    } else {
        let messThree = "scissors";
        return messThree;
    }

}
// let computerSelection = getComputerChoice();
// console.log(computerSelection);

// const playerSelection = prompt("Choose your weapon: \"rock\",\"paper\" or \"scissors\".");
// const playerSelectionCaseIns = playerSelection.toLowerCase();
// console.log(playerSelectionCaseIns);

function playRound(playerSelectionCaseIns, computerSelection) {
  

    if (playerSelectionCaseIns == "rock" && computerSelection == "scissors") {
        let messageOne = `You win: ${playerSelectionCaseIns} beats ${computerSelection}!`;
        return messageOne;
    } 
    if (playerSelectionCaseIns == "paper" && computerSelection == "rock") {
        let messageOne = `You win: ${playerSelectionCaseIns} beats ${computerSelection}!`;
        return messageOne;
    }
    if ( playerSelectionCaseIns == "scissors" && computerSelection == "paper") {
        let messageOne = `You win: ${playerSelectionCaseIns} beat ${computerSelection}!`;
        return messageOne;
    }
    if (playerSelectionCaseIns == "scissors" && computerSelection == "rock") {
        let messageTwo = `You lose: ${computerSelection} beats ${playerSelectionCaseIns}!`;
        return messageTwo;
    } 
    if (playerSelectionCaseIns == "rock" && computerSelection == "paper") {
        let messageTwo = `You lose: ${computerSelection} beats ${playerSelectionCaseIns}!`;
        return messageTwo;
    }
    if (playerSelectionCaseIns == "paper" && computerSelection == "scissors") {
        let messageTwo = `You lose: ${computerSelection} beats ${playerSelectionCaseIns}!`;
        return messageTwo;
    }
    if (playerSelectionCaseIns === computerSelection) {
        let messageThree = `It's a tie! You both chose ${playerSelectionCaseIns}.`;
        return messageThree;
    }
    if (playerSelectionCaseIns ==! "rock" || "paper" || "scissors") {
        let altMessage = alert(`${playerSelectionCaseIns} is not an option! Please refresh the page and try again.`);
        return altMessage; 
    }
  
  }
// console.log(playRound(playerSelectionCaseIns, computerSelection));




let game = function () {
    let totalScore = 0;
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        console.log(computerSelection);

        const playerSelection = prompt("Choose your weapon: \"rock\",\"paper\" or \"scissors\".");
        const playerSelectionCaseIns = playerSelection.toLowerCase();

        console.log(playerSelectionCaseIns);

        if (playerSelectionCaseIns == "rock" && computerSelection == "scissors") {
            totalScore++;
        } 
        if (playerSelectionCaseIns == "paper" && computerSelection == "rock") {
            totalScore++;
        }
        if ( playerSelectionCaseIns == "scissors" && computerSelection == "paper") {
            totalScore++;
        }
        if (playerSelectionCaseIns == "scissors" && computerSelection == "rock") {
            totalScore--;
        } 
        if (playerSelectionCaseIns == "rock" && computerSelection == "paper") {
            totalScore--;
        }
        if (playerSelectionCaseIns == "paper" && computerSelection == "scissors") {
            totalScore--;
        }

        console.log(playRound(playerSelectionCaseIns, computerSelection));

    }
   
    if (totalScore > 0) {
        console.log("Congratulations! You've won this game!");
    } else if (totalScore < 0) {
        console.log("You've lost this game! Good luck next time!");
    } else {
        console.log("There is no winner or loser in this game. It's a tie!");
    }
   
}

game();