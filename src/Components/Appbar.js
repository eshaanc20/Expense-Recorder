import React from 'react';
import './Components.css';
import AppBar from '@material-ui/core/AppBar';

//the component is the appbar for the application
class Appbar extends React.Component {
    render() {
      return (
        <AppBar style={{position: 'relative'}}>
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