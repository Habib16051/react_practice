import React, { useState } from "react";

function InputExample() {
  const [value, setValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setDisplayValue(value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Display Input Value</button>
      <p>Input Value: {displayValue}</p>
    </div>
  );
}

export default InputExample;
