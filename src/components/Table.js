import React, { useState, useEffect } from "react";

const Table = () => {
  const [arr, setArr] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    const winnerTiktaktoe = () => {
      let winnerPlayer;
      win.forEach((win) => {
        if (win.every((position) => positionX.includes(position))) {
          winnerPlayer = "X";
        } else if (win.every((position) => positionO.includes(position))) {
          winnerPlayer = "O";
        }
      });
      setWinner(winnerPlayer);
    };
    winnerTiktaktoe();
  }, [arr]);

  const handleClick = (id) => {
    const nextPlayer = getNextPlayer();
    setArr(
      arr[id] === null
        ? arr.map((box, index) => (index === id ? nextPlayer : box))
        : arr
    );
  };

  const getNextPlayer = () => {
    return arr.filter(Boolean).length % 2 === 0 ? "X" : "O";
  };

  const win = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const positionX = arr.map((position, index) => position === "X" && index);
  const positionO = arr.map((position, index) => position === "O" && index);

  return (
    <>
      <h1 className="winner">{winner ? `Gano ${winner}` : ""}</h1>
      <div class="wrapper">
        {arr.map((box, index) => (
          <div className="box" onClick={() => handleClick(index)}>
            <h1 className={box === "X" ? "x" : "o"}>{box}</h1>
          </div>
        ))}
      </div>
      <button className="button" onClick={() => setArr(Array(9).fill(null))}>
        RESET
      </button>
    </>
  );
};

export default Table;
