import Box from "./Box";

function GameContainer({
	currentPlayer,
	setCurrentPlayer,
	winnerState,
	setWinnerState,
	board,
	setBoard,
}) {
	const handleClick = (row, col) => {
		const newBoard = board.map((currentRow, rowIndex) => {
			return currentRow.map((cell, cIndex) => {
				return row === rowIndex && col === cIndex ? currentPlayer : cell;
			});
		});

		if (winnerState || board[row][col]) return;
		if (checkWinner(newBoard, currentPlayer)) {
			setWinnerState(currentPlayer);
		} else if (checkTie(newBoard)) {
			setWinnerState("Tie");
		} else {
			setCurrentPlayer((prevPlayer) => {
				return prevPlayer == "X" ? "O" : "X";
			});
		}
		setBoard(newBoard);
	};

	const checkWinner = (board, currentPlayer) => {
		/* Check every cell */
		for (let Row of board) {
			if (Row.every((cell) => cell === currentPlayer)) {
				return true;
			}
		}
		/* Check all columns */
		for (let col = 0; col < board.length; col++) {
			if (board.every((row) => row[col] === currentPlayer)) {
				return true;
			}
		}
		/* Check diagonals */
		if (board.every((row, index) => row[index] === currentPlayer)) {
			return true;
		}
		if (
			board.every((row, index) => row[row.length - 1 - index] === currentPlayer)
		) {
			return true;
		}
		return false;
	};

	const checkTie = (board) => {
		return board.every((row) => row.every((cell) => cell !== null));
	};

	return (
		<div className="border-2 mt-10 border-black divide-y-2 divide-black w-1/2">
			{board.map((row, rowIndex) => (
				<div
					key={rowIndex}
					className="flex flex-row divide-x-2 divide-black"
				>
					{row.map((cell, colIndex) => {
						return (
							<Box
								key={colIndex}
								selection={cell}
								rowIndex={rowIndex}
								colIndex={colIndex}
								handleClick={handleClick}
							/>
						);
					})}
				</div>
			))}
		</div>
	);
}

export default GameContainer;
