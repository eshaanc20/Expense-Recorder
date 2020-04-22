import React from 'react';
import './Components.css';
import Expense from './Expense.js';
import AddExpense from './AddExpense.js';
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

//Model for expenses: Array of ExpenseItem Objects where an ExpenseItem object has all properties of the expense

//component handles all operations on expenses
class Expenses extends React.Component {
    constructor(props) {
        super(props);
        //retreive data from local storage and parse
        let expenses = JSON.parse(localStorage.getItem("expenses"));
        if (expenses == null) {
            expenses = [];
        }
        //find total cost of all items
        let cost = this.findTotalCost(expenses);
        //set initial states when component is constructed
        //two separate expenses array to allow filtering expenses without losing data
        this.state = {
            allExpenses: expenses,
            showExpenses: expenses,
            total: cost,
            entries: expenses.length,
            filter: 0,
        }
    }

    //add new expense
    addExpense(name, category, price) {
        //copy state to new array to manipulate data by using principle of immutable and to avoid accessing data directly
        let newExpenses = [...this.state.allExpenses];
        let dateObject = new Date();
        let date = dateObject.getDate() + "/" + (dateObject.getMonth()+1) + "/" + dateObject.getFullYear();
        //new expense object representing the new expense item
        let newItemPrice = price == null? 0: parseFloat(price);
        let expenseItem = new ExpenseItem(name, category, newItemPrice, date);
        //add new expense object to the beginning of the array
        newExpenses.unshift(expenseItem);
        //set new updated array to local storage to store data
        localStorage.setItem('expenses', JSON.stringify(newExpenses));
        //update app
        this.setState({
            allExpenses: newExpenses,
            showExpenses: newExpenses,
            entries: newExpenses.length,
            total: this.state.total + newItemPrice,
            filter: 0
        })
    }

    //find the total cost given an array of expenses
    findTotalCost(expenses) {
        return expenses.reduce((total, expense) => {
            return total + expense.price
        }, 0)
    }

    //delete an expense
    deleteExpense(name, category, price, date) {
        //copy state to new array to manipulate data by using principle of immutable and to avoid accessing data directly
        let oldExpenses = [...this.state.allExpenses];
        //filter data and remove the given expense
        let newExpenses = oldExpenses.filter(expense => {
            if (expense.name === name && expense.category === category && expense.price === price && expense.date === date) {
                return false;
            }
            return true;
        })
        //find total cost of new expenses array with removed expense
        let cost = this.findTotalCost(newExpenses);
        //update local storage
        localStorage.setItem('expenses', JSON.stringify(newExpenses));
        //update app
        this.setState({
            allExpenses: newExpenses,
            showExpenses: newExpenses,
            entries: newExpenses.length,
            total: cost
        })
    }

    //sorts the expenses in the order specified by user
    handleFilter(event) {
        //copy state to new array to manipulate data by using principle of immutable and to avoid accessing data directly
        let filteredArray = [...this.state.allExpenses];
        switch (event.target.value) {
            //sorts expenses alphabetically by category
            case 1:
                filteredArray.sort((a, b) => {return a.category.localeCompare(b.category)});
                this.setState({
                    showExpenses: filteredArray,
                    filter: event.target.value
                })
                break;
            //sorts expenses from highest to lowest price
            case 2: 
                filteredArray.sort((a, b) => {return b.price - a.price});
                this.setState({
                    showExpenses: filteredArray,
                    filter: event.target.value
                })
                break;
            //sorts expenses from most recent
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
                            <MenuItem value={0}>Sort by most recent</MenuItem>
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
                                //maps each expense item onto the Expense component to be displayed on the webpage
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

//represents an expense item
class ExpenseItem {
    constructor(name, category, price, date) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.date = date;
    }
}

export default Expenses;