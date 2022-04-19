import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 * Properties:
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 * State:
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *  This doesn't handle any clicks --- clicks are on individual cells
 **/

function Board({ nrows=5, ncols=5, chanceLightStartsOn=1}) {
  const [board, setBoard] = useState(createBoard());
  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    // let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    const initialBoard = Array.from({ length: nrows});
    for (let row in initialBoard) {
      initialBoard[row] = [];
			for (let i = 0; i < ncols; i++) {
				const randomCell = (Math.random() < chanceLightStartsOn)
				initialBoard[row].push(randomCell);
			}};
    return initialBoard;
  };

  function restartGame() {
    setBoard(createBoard);
  };
  
  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    return board.every(row => row.every(c => !c));
  };

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);
      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      const copyBoard = oldBoard.slice();
      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, copyBoard);  // cell itself
      flipCell(y - 1, x, copyBoard);  // top 
      flipCell(y + 1, x, copyBoard);  // bottom
      flipCell(y, x + 1, copyBoard);  // right
      flipCell(y, x - 1, copyBoard);  // left
      // TODO: return the copy
      return copyBoard;
    });
  };

  // if the game is won, just show a winning msg & render nothing else
  // TODO
  if (hasWon()) {
    return <div><h1>You Win!</h1></div>
  };

  // make table board
  // TODO
  return ( 
  <div className="Board">
    <table className="Board-cell" >
      <tbody>
        {board.map((row, i) =>
          <tr key={i}>
            {row.map((col, j) =>
              <Cell key={`${i}-${j}`} flipCellsAroundMe={() => 
                flipCellsAround(`${i}-${j}`)} isLit={col} />)}
          </tr>
        )}
      </tbody>
    </table >
    <button onClick={restartGame}>Restart</button>
    </div>
  );
}

export default Board;
