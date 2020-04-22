import React from 'react';
import './App.css';
import Expenses from './Components/Expenses.js';
import Appbar from './Components/Appbar.js';

//root component for the app
//constructs the webpage out of components
//all components can be found in Components folder
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
