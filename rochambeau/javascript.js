const getComputerChoice = () => {
	const choices = ['Rock', 'Paper', 'Scissors'];
	const randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
	const choice1 = playerSelection.toUpperCase();
	const choice2 = computerSelection.toUpperCase();

	const outcomes = {
		'ROCK': {
			'ROCK': 'You Tied! Rock ties with rock.',
			'PAPER': 'You Lost! Paper beats rock.',
			'SCISSORS': 'You Won! Rock beats scissors.'
		},
		'PAPER': {
			'ROCK': 'You Won! Paper beats rock.',
			'PAPER': 'You Tied! Paper ties with paper.',
			'SCISSORS': 'You Lost! Scissors beats paper.'
		},
		'SCISSORS': {
			'ROCK': 'You Lost! Rock beats scissors.',
			'PAPER': 'You Won! Scissors beats paper.',
			'SCISSORS': 'You Tied! Scissors ties with scissors.'
		}
	};

	return outcomes[choice1][choice2];
};

// Usage: const Rochambeau = game(); Play a round with game.play();
const game = (playerChoice) => ({
	playerScore: 0,
	computerScore: 0,
	matches: 0,

	play () {
		const computerChoice = getComputerChoice();
		const playerChoice = prompt('Rock, paper or scissors?');
		const result = playRound(playerChoice, computerChoice);

		// Match the second word in the result string.
		switch (result.match(/\w+(?=!)/)[0]) {
		case 'Won':
			this.playerScore++;
			break;
		case 'Tied':
			break;
		case 'Lost':
			this.computerScore++;
			break;
		}
		
		this.matches++;
		console.log(result);
	}
});
