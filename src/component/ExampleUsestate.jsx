import React, { useState, useEffect } from "react";

const ExampleUseState = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    // This effect will run whenever the 'value' state changes.
    console.log("Value has changed:", value);
  }, []);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleIncrement}>Clickme</button>
    </div>
  );
};

export default ExampleUseState;
