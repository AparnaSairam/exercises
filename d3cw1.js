import React, { useState } from 'react';

function Condition() {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility of the message

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the visibility state
  };

  return (
    <div>
      {/* Button to toggle message visibility */}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Component' : 'Show Component'}
      </button>

      {/* Conditionally render the message if isVisible is true */}
      {isVisible && <p>Hi! How are You!!!</p>}
    </div>
  );
}

export default Condition;