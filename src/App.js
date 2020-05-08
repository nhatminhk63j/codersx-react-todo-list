import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const todos = ['Learn ReactJS on CodersX', 'Eat', 'Sleep'];
  return (
    <div className="App">
      <ul>
        {
          todos.map(item => <li> {item} </li>)
        }
      </ul>
    </div>
  );
}

export default App;
