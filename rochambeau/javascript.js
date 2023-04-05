const cards = [...document.querySelectorAll('.card')];
const messageElement = document.querySelector('.message');
const playerScoreElement = document.querySelector('#player-score');
const computerScoreElement = document.querySelector('#computer-score');

let playerScore = 0;
let computerScore = 0;
let matches = 0;

const game = (playerChoice) => {
  const getComputerChoice = () => {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const playRound = (selection) => {
    const choice1 = selection.toUpperCase();
    const choice2 = getComputerChoice();

    const outcomes = {
      ROCK: {
        ROCK: 'You Tied! Rock ties with rock.',
        PAPER: 'You Lost! Paper beats rock.',
        SCISSORS: 'You Won! Rock beats scissors.',
      },
      PAPER: {
        ROCK: 'You Won! Paper beats rock.',
        PAPER: 'You Tied! Paper ties with paper.',
        SCISSORS: 'You Lost! Scissors beats paper.',
      },
      SCISSORS: {
        ROCK: 'You Lost! Rock beats scissors.',
        PAPER: 'You Won! Scissors beats paper.',
        SCISSORS: 'You Tied! Scissors ties with scissors.',
      },
    };

    return outcomes[choice1][choice2];
  };

  const result = playRound(playerChoice);
  const status = result.match(/\w+(?=!)/)[0]; // Match the second word

  if (status === 'Won') playerScore += 1;
  if (status === 'Lost') computerScore += 1;

  matches += 1;

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  messageElement.textContent = result;
};

cards.forEach((card) => {
  const choice = card.classList[1];
  card.addEventListener('click', () => game(choice));
});
