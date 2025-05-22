// Functions
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.33) return "rock";
    else if (rand < 0.66) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice) {
    const player = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (player === computer) {
        return console.log("It's a tie");
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ){
        humanScore++;
        humanScoreSpan.textContent = humanScore;
    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }
    
    console.log(`Player chose ${player}, computer chose ${computer}`);
    checkWinner();
}

function checkWinner() {
    if (humanScore === 5) {
        alert("Player wins!");
    }
    else if (computerScore === 5) {
        alert("Computer wins!")
    }
}

// Main
let humanScore = 0;
let computerScore = 0;

let humanScoreSpan = document.querySelector("#human-score");
let computerScoreSpan = document.querySelector("#computer-score");



const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanSelection = button.id;
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
});

