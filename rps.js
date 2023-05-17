const rockImage = document.querySelector("#rock");
const paperImage = document.querySelector("#paper");
const scissorsImage = document.querySelector("#scissors");
const playerScoreSpan = document.querySelector('.playerscore');
const computerScoreSpan = document.querySelector('.computerscore');
const resultSpan = document.querySelector(".result");
const winningScore = 5;
let playerScore = 0;
let computerScore = 0;



function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function resetScore(){
    if (playerScore === 5){
        playerScore = 0;
        computerScore = 0;
        alert(' COMPUTER WINS ');
        playerScoreSpan.textContent = '';
        resultSpan.textContent = '';
        computerScoreSpan.textContent = '';
    }

    else if (computerScore === 5){
        PlayerScore = 0;
        computerScore = 0;
        alert(' YOU WIN ');
        playerScoreSpan.textContent = '';
        resultSpan.textContent = '';
        computerScoreSpan.textContent = '';
    }
}

function Winner(playerWin){
    if (playerWin){
        playerScore++;
    }
    else{
        computerScore++;
    }
}


rockImage.addEventListener('mouseover', (e) => {
    rockImage.classList.add('playing');
})

paperImage.addEventListener('mouseover', (e) => {
    paperImage.classList.add('playing');
})

scissorsImage.addEventListener('mouseover', (e) => {
    scissorsImage.classList.add('playing');
})

rockImage.addEventListener('mouseout', (e) => {
    rockImage.classList.remove('playing');
})

paperImage.addEventListener('mouseout', (e) => {
    paperImage.classList.remove('playing');
})

scissorsImage.addEventListener('mouseout', (e) => {
    scissorsImage.classList.remove('playing');
})


rockImage.addEventListener('click', (computerSelection) => {
    computerSelection = getComputerChoice();
    if(computerSelection === 'rock'){
        resultSpan.textContent="Draw!, You & computer chose rock";
    }
    else if (computerSelection === 'paper'){
        resultSpan.textContent= "You lost!, Computer chose paper";
        Winner(0);
    }
    else if (computerSelection === "scissors"){
        resultSpan.textContent = "You won!, Computer chose scissors";
        Winner(1);
    }
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    resetScore();
});


paperImage.addEventListener('click', (computerSelection) => {
    resultSpan.innerText = '';
    computerSelection = getComputerChoice();
        if (computerSelection === 'paper'){ //Draw
            resultSpan.textContent = "Draw!, You & Computer chose paper!"
        }
        else if (computerSelection === 'scissors' ){ // Computer wins
            resultSpan.textContent = "You lost!, Computer chose scissors!"
           Winner(0);
        }
        else if (computerSelection === 'rock'){ // Player wins
            resultSpan.textContent = "You won!, Computer chose rock!";
            Winner(1);
        }
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent =  computerScore;
        resetScore();
});

scissorsImage.addEventListener('click', (computerSelection) => {
    computerSelection = getComputerChoice();
        if (computerSelection === 'scissors'){ //Draw
            resultSpan.textContent = "Draw!, You & Computer chose scissors!";
        }
        else if (computerSelection === 'rock'){ // Computer wins
            resultSpan.textContent = "You lost!, Computer chose rock!";
            Winner(0);
        }
        else if (computerSelection === 'paper'){ // Player wins
            resultSpan.textContent = "You won!, Computer chose paper!";
            Winner(1);
        }
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent =  computerScore;
        resetScore();
});