import React from 'react';
import './App.css';
import Expenses from './Components/Expenses.js';
import Appbar from './Components/Appbar.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Appbar/>
        <Expenses/>
      </div>
    );
  }
}

export default App;
