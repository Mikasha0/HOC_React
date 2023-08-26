import React, { useState } from "react";

const Counter = (WrappedComponent) => {
  function CounterWrapper() {
    const [fontSize, setFontSize] = useState(10);

    function IncreaseFont() {
      setFontSize(fontSize + 1);
    }

    return (
      <div>
        <WrappedComponent fontSize={fontSize} IncreaseFont={IncreaseFont} />
      </div>
    );
  }

  return CounterWrapper;
};

export default Counter;
