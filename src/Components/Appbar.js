import React from 'react';
import './Components.css';
import AppBar from '@material-ui/core/AppBar';

class Appbar extends React.Component {
    render() {
      return (
        <AppBar>
            <div id="appbar">
                <p style={{opacity:'0.5'}}>Eshaan Chaudhari</p>
                <p> Expense Recorder</p>
                <p style={{opacity:'0.5'}}>Internship Application</p>
            </div>
        </AppBar>
      );
    }
  }

export default Appbar;