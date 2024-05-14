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
      <input className="input_1" type="text" value={value} onChange={handleChange} />
      <button className="btn" onClick={handleClick}>Click</button>
      <p>Input Value: {displayValue}</p>
    </div>
  );
}

export default InputExample;
