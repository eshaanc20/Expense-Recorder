import React from 'react';
import './Components.css';

class Expense extends React {
    render() {
        return(
            <div id='expenseView'>
                <p>{this.props.name}</p>
                <p>{this.props.category}</p>
                <p>$ {this.props.price}</p>
            </div>
        )
    }
}

export default Expense;