// Filename: MyComponent.js

import React from 'react';

const MyComponent = () => {
  const handleClick = async () => {
    try {
      // Make a request to your Node.js server
      const response = await fetch('http://13.127.18.91:8080/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Hello from React!' }),
      });

      if (response.ok) {
        console.log('Connected to Node.js server');
      } else {
        console.error('Failed to connect to Node.js server');
      }
    } catch (error) {
      console.error('Error connecting to Node.js server:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Connect</button>
    </div>
  );
};

export default MyComponent;

