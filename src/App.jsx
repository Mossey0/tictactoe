import React, { useState } from "react";
import Head from "./assets/Head";
import GameContainer from "./assets/GameContainer";
import Players from "./assets/Players";

function App() {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [winnerState, setWinnerState] = useState(null);
	const [board, setBoard] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);

	return (
		<div className="flex flex-col items-center bg-gray-700 h-screen text-slate-50">
			<Head />
			<GameContainer
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				winnerState={winnerState}
				setWinnerState={setWinnerState}
				board={board}
				setBoard={setBoard}
			/>
			<Players
				currentPlayer={currentPlayer}
				setBoard={setBoard}
				setWinnerState={setWinnerState}
			/>
			{(winnerState !== null && winnerState !== "Tie" && (
				<div>Winner! {winnerState === "X" ? "Payer 1" : "Player 2"}</div>
			)) ||
				(winnerState !== null && <div>No Winner! {winnerState}</div>)}
		</div>
	);
}

export default App;
