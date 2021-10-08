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

  useEffect(() => {
    const win = [null, "X", null, null, "X", "O", null, "X", "O"];
    win === arr ? console.log(win) : console.log(arr);
  }, [arr]);

  return (
    <div class="wrapper">
      {arr.map((box, index) => (
        <div className="box" onClick={() => handleClick(index)}>
          <h1 className={box === "X" ? "x" : "o"}>{box}</h1>
        </div>
      ))}
    </div>
  );
};

export default Table;
