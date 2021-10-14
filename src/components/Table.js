import React, { useState, useEffect } from "react";

const Table = () => {
  const [arr, setArr] = useState(Array(9).fill(null));

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
  ];
  const positionX = arr.map((position, index) => position === "X" && index);
  const positionO = arr.map((position, index) => position === "O" && index);
  //console.log(positionX);
  //const arr2 = [0, 1, 2];
  //const winner = win.every(
  //  (winpos) => arr2.includes(winpos) && console.log("hola")
  //);
  //console.log(winner);

  for (const pos of win) {
    positionX.includes(pos) && console.log("hola");
  }

  return (
    <>
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
