import React from "react";

function Players({ currentPlayer, setBoard, setWinnerState }) {
	const handleReset = () => {
		setBoard([
			[null, null, null],
			[null, null, null],
			[null, null, null],
		]);
		setWinnerState(null);
	};
	return (
		<div>
			<h2 className="space-x-44 mt-10 h-12">
				<span>Turn: </span>
				<span className="">
					{"Player 1 "}
					<div
						className={`inline-block ${currentPlayer == "X" ? "bg-red-500" : "bg-white"} w-4 h-4 rounded-sm`}
					></div>
				</span>
				<span>
					{"Player 2 "}
					<div
						className={`inline-block ${currentPlayer == "O" ? "bg-red-500" : "bg-white"} w-4 h-4 rounded-sm`}
					></div>
				</span>
				<button
					type="button"
					className="bg-white pr-1 pl-1 rounded-sm text-black"
					onClick={() => handleReset()}
				>
					Reset
				</button>
			</h2>
		</div>
	);
}

export default Players;
