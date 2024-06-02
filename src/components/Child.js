import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Message from Parent: {props.message}</p>
    </div>
  );
};

export default ChildComponent;
