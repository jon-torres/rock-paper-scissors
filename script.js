'use strict';

//DOM
const container = document.querySelector('#container');
const btnRock = document.querySelector('.btn--rock');
const btnPaper = document.querySelector('.btn--paper');
const btnScissors = document.querySelector('.btn--scissors');

let pResults = document.createElement('p');
pResults.classList.add('pResults');

let playerSelection;
let playing = true;

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
  if (playing) {
    let roundResult = '';
    if (event.target === btnRock) {
      playerSelection = 'rock';
    } else if (event.target === btnPaper) {
      playerSelection = 'paper';
    } else {
      playerSelection = 'scissors';
    }

    const computerSelection = computerPlay();

    // Tie
    if (playerSelection === computerSelection) {
      roundResult = `Tie! No one wins this round. The current score is ${playerScore} vs. ${computerScore}`;

      pResults.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}.
    ${roundResult}`;
      container.appendChild(pResults);

      //Player win conditions.
    } else if (
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      playerScore++;

      roundResult = `You won this round! The score is now ${playerScore} vs. ${computerScore}`;

      pResults.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}.
    ${roundResult}`;
      container.appendChild(pResults);

      // Machine win conditions.
    } else {
      computerScore++;
      roundResult = `You lose this round! The score is now ${playerScore} vs. ${computerScore}`;

      pResults.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}.
    ${roundResult}`;
      container.appendChild(pResults);
    }
  }
  if (computerScore === 5) {
    pResults.textContent = `The computer won. Try again! \n The final score is ${playerScore} vs. ${computerScore}.`;
    container.appendChild(pResults);
    playing = false;
  } else if (playerScore === 5) {
    pResults.textContent = `Congratulations! You won! \n The final score is ${playerScore} vs. ${computerScore}.`;
    container.appendChild(pResults);
    playing = false;
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
