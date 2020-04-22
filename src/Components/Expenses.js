import React from 'react';
import './Components.css';
import Expense from './Expense.js';
import AddExpense from './AddExpense.js';
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Expenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allExpenses: [],
            showExpenses: [],
            total: 0,
            entries: 0,
            filter: 0,
        }
    }

    addExpense(name, category, price) {
        let newExpenses = [...this.state.allExpenses];
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
            allExpenses: newExpenses,
            showExpenses: newExpenses,
            entries: newExpenses.length,
            total: this.state.total + parseFloat(price)
        })
    }

    findTotalCost(expenses) {
        return expenses.reduce((total, expense) => {
            return total + parseFloat(expense.price)
        }, 0)
    }

    deleteExpense(name, category, price, date) {
        let oldExpenses = [...this.state.allExpenses];
        let newExpenses = oldExpenses.filter(expense => {
            if (expense.name === name && expense.category === category && expense.price === price && expense.date === date) {
                return false;
            }
            return true;
        })
        let cost = this.findTotalCost(newExpenses);
        this.setState({
            allExpenses: newExpenses,
            showExpenses: newExpenses,
            entries: newExpenses.length,
            total: cost
        })
    }

    handleFilter(event) {
        let filteredArray = [...this.state.allExpenses];
        switch (event.target.value) {
            case 1:
                filteredArray.sort((a, b) => {return a.category.localeCompare(b.category)});
                this.setState({
                    showExpenses: filteredArray,
                    filter: event.target.value
                })
                break;
            case 2: 
                filteredArray.sort((a, b) => {return b.price - a.price});
                this.setState({
                    showExpenses: filteredArray,
                    filter: event.target.value
                })
                break;
            default:
                this.setState({
                    showExpenses: filteredArray,
                    filter: event.target.value
                })
                break;
            }
    }

    render() {
        return(
            <div id='all-expenses-view'>
                <div id='add-expense-view'>
                    <div>
                        <p style={{fontSize: '35px', margin: '0px', marginBottom: '10px'}}>Your expenses</p>
                        <Select 
                            value={this.state.filter} 
                            onChange={this.handleFilter.bind(this)}
                        >
                            <MenuItem value={0}>Most recent</MenuItem>
                            <MenuItem value={1}>Alphabetically by category</MenuItem>
                            <MenuItem value={2}>Highest to lowest in price</MenuItem>
                        </Select>
                    </div>
                    <AddExpense addExpense={this.addExpense.bind(this)}/>
                </div>
                <div className='expenseView'>
                    <p className='expenseData'>Name</p>
                    <p className='expenseData'>Category</p>
                    <p className='expenseData'>Price</p>
                    <p className='expenseData'>Date added</p>
                    <p className='space'></p>
                </div>
                <div>
                    {this.state.allExpenses.length !== 0?
                        <div>
                            {this.state.showExpenses.map((expense, index) => {
                                return <Expense key={index} name={expense.name} category={expense.category} price={expense.price} date={expense.date} deleteExpense={this.deleteExpense.bind(this)}/>
                            })}
                        </div>
                        : <h2 style={{margin: 'auto'}}>No expenses</h2>
                    }
                </div>
                <div id="summary">
                    <p>Number of Total Entries: {this.state.entries}</p>
                    <p>Total Cost: ${this.state.total}</p>
                </div>
            </div>
        )
    }
}

export default Expenses;