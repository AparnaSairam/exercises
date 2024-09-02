import React, { useState } from 'react';

function TransformationToggle() {
  // State to track the current transformation mode
  const [transformation, setTransformation] = useState('Kaioken');

  // Function to toggle between "Kaioken" and "SuperSaiyan" states
  const toggleTransformation = () => {
    setTransformation((prevTransformation) =>
      prevTransformation === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
    );
  };

  return (
    <div>
      {/* Display the current transformation state */}
      <h2>Current Transformation: {transformation}</h2>
      
      {/* Button to toggle transformation states */}
      <button onClick={toggleTransformation}>Toggle Transformation</button>
    </div>
  );
}

export default TransformationToggle;