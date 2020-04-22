import React from 'react';
import './Components.css';
import { Button } from '@material-ui/core';

class Expense extends React.Component {
    render() {
        return(
            <div className='expenseView'>
                <p className='expenseData'>{this.props.name}</p>
                <p className='expenseData'>{this.props.category}</p>
                <p className='expenseData'>$ {this.props.price}</p>
                <p className='expenseData'>{this.props.date}</p>
                <Button 
                    color='secondary' 
                    variant='contained'
                    style={{height: '40px', marginTop: '0.75%'}}
                >Delete</Button>
            </div>
        )
    }
}

export default Expense;