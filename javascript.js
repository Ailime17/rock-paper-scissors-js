//scroll down for new, working code


/*let getComputerChoice = function() {
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
        let messageTwo = `You lose: ${computerSelection} beat ${playerSelectionCaseIns}!`;
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

game();*/

///////////////////////////////////////////////////////////////////////////////////////////////////



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
};


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
        let messageTwo = `You lose: ${computerSelection} beat ${playerSelectionCaseIns}!`;
        return messageTwo;
    }
    if (playerSelectionCaseIns === computerSelection) {
        let messageThree = `It's a tie! You both chose ${playerSelectionCaseIns}.`;
        return messageThree;
    }
  };




const yourChoice = document.createElement("div");
const computerChoice = document.createElement("div");
const result = document.createElement("div");

const myScoreDiv = document.createElement("div");
const computerScoreDiv = document.createElement("div");

const gameResult = document.createElement("div");

let myScore = 0;
let computerScore = 0;
let playerSelectionCaseIns;
const buttons = document.querySelectorAll("button");

Array.from(buttons).forEach(button => button.addEventListener("click", () => {

    playerSelectionCaseIns = button.textContent;
    

    let computerSelection = getComputerChoice();
    yourChoice.textContent = `Your choice: ${playerSelectionCaseIns}`;
    computerChoice.textContent = `Computer's choice: ${computerSelection}`;
    result.textContent = `${playRound(playerSelectionCaseIns, computerSelection)}`;
    yourChoice.style.display = "flex";
    yourChoice.style.justifyContent = "center";
    yourChoice.style.alignItems = "center";
    yourChoice.style.paddingTop = "19px";
    computerChoice.style.display = "flex";
    computerChoice.style.justifyContent = "center";
    computerChoice.style.alignItems = "center";
    result.style.display = "flex";
    result.style.justifyContent = "center";
    result.style.alignItems = "center";

    document.body.appendChild(yourChoice);
    document.body.appendChild(computerChoice);
    document.body.appendChild(result);


    if (playerSelectionCaseIns == "rock" && computerSelection == "scissors") {
        myScore++;
    } 
    if (playerSelectionCaseIns == "paper" && computerSelection == "rock") {
        myScore++;
    }
    if ( playerSelectionCaseIns == "scissors" && computerSelection == "paper") {
        myScore++;
    }
    if (playerSelectionCaseIns == "scissors" && computerSelection == "rock") {
        computerScore++;
    } 
    if (playerSelectionCaseIns == "rock" && computerSelection == "paper") {
        computerScore++;
    }
    if (playerSelectionCaseIns == "paper" && computerSelection == "scissors") {
        computerScore++;
    }

    myScoreDiv.textContent = `Your Score: ${myScore}`;
    computerScoreDiv.textContent = `Computer's Score: ${computerScore}`;
    myScoreDiv.style.display = "flex";
    myScoreDiv.style.justifyContent = "center";
    myScoreDiv.style.alignItems = "center";
    myScoreDiv.style.marginTop = "10px";
    myScoreDiv.style.textShadow = "-2px -2px #ffffff";
    computerScoreDiv.style.display = "flex";
    computerScoreDiv.style.flexDirection = "column";
    computerScoreDiv.style.justifyContent = "center";
    computerScoreDiv.style.alignItems = "center";
    computerScoreDiv.style.textShadow = "-2px -2px #ffffff";
 

    document.body.appendChild(myScoreDiv);
    document.body.appendChild(computerScoreDiv);

    if (myScore === 5) {
        gameResult.textContent = "Congratulations! You've won this game!";
        computerScoreDiv.appendChild(gameResult);
        gameResult.style.display = "flex";
        gameResult.style.justifyContent = "center";
        gameResult.style.alignItems = "center";
        gameResult.style.fontWeight = "bold";
        gameResult.style.textShadow = "-2px -2px #ffffff";
        gameResult.style.paddingTop = "15px";
        gameResult.style.fontSize = "28px";
    } else if (computerScore === 5) {
        gameResult.textContent = "You've lost this game! Good luck next time!";
        computerScoreDiv.appendChild(gameResult);
        gameResult.style.display = "flex";
        gameResult.style.justifyContent = "center";
        gameResult.style.alignItems = "center";
        gameResult.style.fontWeight = "bold";
        gameResult.style.textShadow = "-2px -2px #ffffff";
        gameResult.style.paddingTop = "15px";
        gameResult.style.fontSize = "28px";
    };

    if(myScore === 5) {
        myScore = 0;
        computerScore = 0;
    };
    if(computerScore === 5) {
        myScore = 0;
        computerScore = 0;
    };
}));

document.documentElement.style.overflowX = 'hidden';
document.documentElement.style.overflowY = 'hidden';