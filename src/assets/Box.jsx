import React from "react";

function Box({ selection, handleClick, rowIndex, colIndex }) {
	return (
		<div
			className="flex justify-center items-center bg-gray-500 w-1/3 h-52"
			onClick={() => handleClick(rowIndex, colIndex)}
		>
			<div className="text-5xl">{selection}</div>
		</div>
	);
}

export default Box;
