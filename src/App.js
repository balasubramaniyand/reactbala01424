// demo/src/App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click the Connect button to connect with NodeJS
        </p>
        <form action='../../post' method='post' className="your-form-class">
          <button type='submit'>Connect</button>
        </form>
      </header>
    </div>
  );
}

export default App;

