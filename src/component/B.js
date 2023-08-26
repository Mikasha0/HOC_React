import React from "react";
import Counter from "./Counter";
function B({ fontSize, IncreaseFont }) {
  return (
    <>
      <p style={{ fontSize: fontSize }}>Your Font Size is : {fontSize}</p>
      <button onMouseOver={IncreaseFont}>Increase Font</button>
    </>
  );
}

export default Counter(B);
