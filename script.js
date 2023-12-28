const squares = document.querySelectorAll('.square');
const resetButton = document.querySelector('#reset');
let currentPlayer = 'x';
let gameStatus = true;

const winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

function checkWinningCondition(player) {
	for (let i = 0; i < winningConditions.length; i++) {
		if (squares[winningConditions[i][0]].classList.contains(player) &&
			squares[winningConditions[i][1]].classList.contains(player) &&
			squares[winningConditions[i][2]].classList.contains(player)) {
			return true;
		}
	}
	return false;
}


squares.forEach(square => {
	square.addEventListener('click', () => {
		if (gameStatus && !square.classList.contains('x') && !square.classList.contains('o')) {
			square.classList.add(currentPlayer);
			square.textContent = currentPlayer.toUpperCase();
			if (checkWinningCondition(currentPlayer)) {
				alert(currentPlayer.toUpperCase() + ' wins!');
				gameStatus = false;
			} else if ([...squares].every(square => square.classList.contains('x') || square.classList.contains('o'))) {
				alert('It\'s a tie!');
				gameStatus = false;
			} else {
				currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
			}
		}
	});
});

resetButton.addEventListener('click', () => {
	squares.forEach(square => {
		square.classList.remove('x', 'o');
		square.textContent = '';
	});
	currentPlayer = 'x';
    gameStatus = true;
});