import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard( {onSelectSquare, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            console.log(updatedBoard);
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    }

    return <ol id="game-board">
        {gameBoard.map((row, rownIndex) => <li key={rownIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) =>
                    <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rownIndex, colIndex)}>{playerSymbol}</button>
                    </li>)}
            </ol>
        </li>)}
    </ol>
}