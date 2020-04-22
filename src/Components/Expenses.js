import React from 'react';
import './Components.css';
import Expense from './Expense.js';
import AddExpense from './AddExpense.js';
import { Button } from '@material-ui/core';

class Expenses extends React.Component {
    state = {
        expenses: []
    }

    addExpense(name, category, price) {
        let newExpenses = [...this.state.expenses];
        let dateObject = new Date();
        let date = dateObject.getDate() + "/" + dateObject.getMonth() + "/" + dateObject.getFullYear();
        let expenseObject = {
            name: name,
            category: category,
            price: price,
            date: date
        }
        newExpenses.unshift(expenseObject);
        this.setState({
            expenses: newExpenses
        })
    }

    deleteExpense(name, category, price, date) {
        let oldExpenses = [...this.state.expenses];
        let newExpenses = oldExpenses.filter(expense => {
            if (expense.name == name && expense.category == category && expense.price == price && expense.date == date) {
                return false;
            }
            return true;
        })
        this.setState({
            expenses: newExpenses
        })
    }

    render() {
        return(
            <div id='all-expenses-view'>
                <AddExpense addExpense={this.addExpense.bind(this)}/>
                <div className='expenseView'>
                    <p className='expenseData'>Name</p>
                    <p className='expenseData'>Category</p>
                    <p className='expenseData'>Price</p>
                    <p className='expenseData'>Date added</p>
                    <p className='space'></p>
                </div>
                {this.state.expenses.length !== 0?
                    <div>
                        {this.state.expenses.map(expense => {
                            return <Expense name={expense.name} category={expense.category} price={expense.price} date={expense.date} deleteExpense={this.deleteExpense.bind(this)}/>
                        })}
                    </div>
                    : <h2 style={{margin: 'auto'}}>No expenses</h2>
                }
            </div>
        )
    }
}

export default Expenses;