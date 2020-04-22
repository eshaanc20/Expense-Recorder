import React from 'react';
import './App.css';
import Expenses from './Components/Expenses.js';
import Appbar from './Components/Appbar.js';

//root component for the app
class App extends React.Component {
  render() {
    //components to build the webpage
    return (
      <div className="App">
        <Appbar/>
        <Expenses/>
      </div>
    );
  }
}

export default App;
