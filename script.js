'use strict';

//DOM
const container = document.getElementById('container');
const btnRock = document.querySelector('.btn--rock');
const btnPaper = document.querySelector('.btn--paper');
const btnScissors = document.querySelector('.btn--scissors');

let pResults = document.createElement('p');
pResults.classList.add('pResults');

const resultContent = function (result) {
  pResults.innerHTML = result;
  container.appendChild(pResults);
};

let playerSelection;
let playing = true;

// Initial values for the scores
let playerScore = 0;
let computerScore = 0;

// the robot picks a random move between the items in the array.
const computerPlay = function () {
  const moves = ['🗿', '📄', '✂️'];
  return moves[Math.floor(Math.random() * moves.length)];
};

//It plays a round of the game and update the score values based on how the round went.
const playRound = function (event) {
  if (playing) {
    let roundResult = '';
    if (event.target === btnRock) {
      playerSelection = '🗿';
    } else if (event.target === btnPaper) {
      playerSelection = '📄';
    } else {
      playerSelection = '✂️';
    }

    const computerSelection = computerPlay();

    // Tie
    if (playerSelection === computerSelection) {
      roundResult = `<br>Tie! No won won this round 🤨<br>
        The current score is ${playerScore} 🆚 ${computerScore}`;

      resultContent(
        `You picked ${playerSelection} and the robot picked ${computerSelection}.
          ${roundResult}`
      );

      //Player win conditions.
    } else if (
      (playerSelection === '✂️' && computerSelection === '📄') ||
      (playerSelection === '🗿' && computerSelection === '✂️') ||
      (playerSelection === '📄' && computerSelection === '🗿')
    ) {
      playerScore++;

      roundResult = `<br>You won this round! 😎<br>
      The score is now ${playerScore} 🆚 ${computerScore}`;

      resultContent(`You picked ${playerSelection} and the robot picked ${computerSelection}.
      ${roundResult}`);

      // Machine win conditions.
    } else {
      computerScore++;
      roundResult = `<br>You lose this round! 😭<br>
      The score is now ${playerScore} 🆚 ${computerScore}`;

      resultContent(`You picked ${playerSelection} and the robot picked ${computerSelection}.
      ${roundResult}`);
    }
  }
  if (computerScore === 5) {
    resultContent(
      `<p style="color:red;">🦾🤖 Too bad. The robot won! 🦾🤖 <br>   
      The final score is ${playerScore} 🆚 ${computerScore}<br>
      Refresh the page and beat the robot!</p>`
    );
    playing = false;
  } else if (playerScore === 5) {
    resultContent(
      `<p style="color:green">🏆 Congratulations! You won!! 🏆<br> 
      The final score is ${playerScore} 🆚 ${computerScore}<br>
      Refresh the page and beat the robot again!</p>`
    );
    playing = false;
  }
};

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);
