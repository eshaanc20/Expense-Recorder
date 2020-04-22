import React from 'react';
import './Components.css';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';

//the component is the appbar for the application
class Appbar extends React.Component {
    render() {
      return (
        <AppBar style={{position: 'relative'}}>
            <div id="appbar">
                <p style={{opacity:'0.5'}}>Eshaan Chaudhari</p>
                <p> Expense Recorder</p>
                <Button 
                  href="https://github.com/eshaanc20/Expense-Recorder" 
                  variant="contained"
                  style={{height: '20%', marginTop: '1%', backgroundColor: '#1a8cff', color: 'white'}}
                >View on Github</Button>
            </div>
        </AppBar>
      );
    }
  }

export default Appbar;