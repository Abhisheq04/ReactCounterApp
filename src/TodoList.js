import React, { useState } from "react";

const TodoList = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
    }
  };
  const increNum =() => {
    setNum(num+5);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
            <button onClick={incNum}>Increment by 1</button>
            <button onClick={decNum}>Decrement by 1</button>
          </div>
          <button
            onClick={() => parseInt(document.getElementById("incrementby").value)?setNum(num + parseInt(document.getElementById("incrementby").value)):setNum(num)}
          >
            Increment by
          </button>
          <input type="number" id="incrementby" />
        </div>
      </div>
    </>
  );
};

export default TodoList;
