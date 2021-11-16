'use strict';

//DOM
const btnRock = document.querySelector('.btn--rock');
const btnPaper = document.querySelector('.btn--paper');
const btnScissors = document.querySelector('.btn--scissors');

// btnRock.textContent = 'rock';

let playerSelection;

// Initial values for the scores
let playerScore = 0;
let computerScore = 0;

// The computer picks a random move between the items in the array.
const computerPlay = function () {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * moves.length)];
};

//It plays a round of the game and update the score values based on how the round went.
const playRound = function (event) {
  let roundResult = '';
  if (event.target.className === 'btn btn--rock') {
    playerSelection = 'rock';
  } else if (event.target.className === 'btn btn--paper') {
    playerSelection = 'paper';
  } else {
    playerSelection = 'scissors';
  }
  console.log(event.target.className);
  console.log(event.target);

  const computerSelection = computerPlay();

  // Tie
  if (playerSelection === computerSelection) {
    roundResult = `Tie! No one wins this round. The current score is ${playerScore} vs. ${computerScore}`;

    console.log(`You picked ${playerSelection} and the computer picked ${computerSelection}.
    ${roundResult}`);

    //Player win conditions.
  } else if (
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++;

    roundResult = `You won this round! The score is now ${playerScore} vs. ${computerScore}`;

    console.log(`You picked ${playerSelection} and the computer picked ${computerSelection}.
    ${roundResult}`);

    // Machine win conditions.
  } else if (
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    computerScore++;
    roundResult = `You lose this round! The score is now ${playerScore} vs. ${computerScore}`;

    console.log(`You picked ${playerSelection} and the computer picked ${computerSelection}.
    ${roundResult}`);

    // Basic "error checking".
  } else {
    console.log(`Please, enter rock, paper or scissors.`);
  }
};

// Plays 5 rounds of rock, paper and scissors and print the final results.
// const playFiveRounds = function() {
//   for (let i = 1; i <= 5; i++) {
//     playRound();
//   }

//   if (playerScore === computerScore) {
//     console.log(`It's a Tie! \n The final score is ${playerScore} vs. ${computerScore}.`);
//   } else if (playerScore < computerScore) {
//     console.log(`The computer won. Try again! \n The final score is ${playerScore} vs. ${computerScore}.`);
//   } else {
//     console.log(`Congratulations! You won! \n The final score is ${playerScore} vs. ${computerScore}.`);
//   }
// };

// playFiveRounds();

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);
