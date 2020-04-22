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
                    style={{height: '40px', marginTop: '10px', width: '15%'}}
                    onClick={() => this.props.deleteExpense(this.props.name, this.props.category, this.props.price, this.props.date)}
                >Delete</Button>
            </div>
        )
    }
}

export default Expense;