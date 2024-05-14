import React, { useState } from 'react';

function FormExample() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue(''); // Clear the input field after submission
    console.log('Form submitted with value:', inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {submittedValue && <p>Form submitted with value: {submittedValue}</p>}
    </div>
  );
}

export default FormExample;
