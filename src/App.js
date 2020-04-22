import React from 'react';
import './App.css';
import AddExpense from './Components/AddExpense.js';
import Appbar from './Components/Appbar.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Appbar/>
        <AddExpense/>
      </div>
    );
  }
}

export default App;
