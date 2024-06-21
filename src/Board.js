import Square from "./Square";
import { useState } from "react";
const Board = () => {
  let [square, setSquare] = useState(Array(9).fill(null));
  let [xIsNext, setXIsNext] = useState(true);

  let calcWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  let handleClick = (i) => {
    if (calcWinner(square) || square[i]) {
      return;
    }
    if (square[i]) {
      return;
    }
    let newSquare = square.slice();
    if (xIsNext) {
      newSquare[i] = "X";
    } else {
      newSquare[i] = "O";
    }
    setSquare(newSquare);
    setXIsNext(!xIsNext);
  };

  const winner = calcWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  let reload = () =>{
        setSquare(Array(9).fill(null));
        //or
        //window.location.reload();
  }


  return (
    <div >
      <div className="outline">
            <h4>This is Tic Tac Toe</h4>
            <div className="status">{status}</div>
            <div>
                <div className="board">
                    <div className="row1">
                        <Square
                        value={square[0]}
                        onSquareClick={() => {
                            handleClick(0);
                        }}
                        />
                        <Square
                        value={square[1]}
                        onSquareClick={() => {
                            handleClick(1);
                        }}
                        />
                        <Square
                        value={square[2]}
                        onSquareClick={() => {
                            handleClick(2);
                        }}
                        />
                    </div>
                    <div className="row2">
                        <Square
                        value={square[3]}
                        onSquareClick={() => {
                            handleClick(3);
                        }}
                        />
                        <Square
                        value={square[4]}
                        onSquareClick={() => {
                            handleClick(4);
                        }}
                        />
                        <Square
                        value={square[5]}
                        onSquareClick={() => {
                            handleClick(5);
                        }}
                        />
                    </div>
                    <div className="row3">
                        <Square
                        value={square[6]}
                        onSquareClick={() => {
                            handleClick(6);
                        }}
                        />
                        <Square
                        value={square[7]}
                        onSquareClick={() => {
                            handleClick(7);
                        }}
                        />
                        <Square
                        value={square[8]}
                        onSquareClick={() => {
                            handleClick(8);
                        }}
                        />
                    </div>
                </div>
                <button className="reset" onClick={reload}><b>Reset</b></button>
            </div>
      </div>
    </div>
  );
};
export default Board;
