import React from "react";
import Counter from "./Counter";
function A({ fontSize, IncreaseFont }) {
  return (
    <>
      <p style={{ fontSize: fontSize }}>Your Font Size is : {fontSize}</p>
      <button onClick={IncreaseFont}>Increase Font</button>
    </>
  );
}

export default Counter(A);
