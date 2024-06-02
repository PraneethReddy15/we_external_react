import React, { useState } from 'react';
import ChildComponent from './Child';

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type your message to Child" />
      <ChildComponent message={inputValue} />
    </div>
  );
};

export default ParentComponent;
