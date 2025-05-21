// Functions
function getComputerChoice() {
   let rock = Math.random();
   let paper = Math.random();
   
   if (rock < 0.33)
    return "rock";
   else if (0.33 <= paper <= 0.66)
    return "paper";
   else 
    return "scissors";
}

// Assuming the user makes the correct choices
function getHumanChoice() {
    let choice = String(prompt("Make a choice: "));
    return choice;
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
        return console.log("Player wins!"), humanScore++;
    } else {
        return console.log("Computer wins!"), computerScore++;
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Player Score: " + humanScore + "\n")
    console.log("Computer Score: " + computerScore + "\n")
}
// Main
let humanScore = 0;
let computerScore = 0;

playGame();
