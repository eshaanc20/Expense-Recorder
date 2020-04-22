import React from 'react';
import './Components.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { TextField } from '@material-ui/core';

//component allows users to add expenses
class AddExpense extends React.Component {
    // initial states when component is constructed
    state = {
        open: false,
        name: null,
        price: null,
        category: null,
    }

    //opens the menu to add a new expense
    handleOpen(isVisible) {
        this.setState({
            open: isVisible
        })
    }

    //keeps track of all inputs in textfields
    updatedInput(event, input) {
        this.setState({
            [input]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <Button 
                    style={{backgroundColor: '#009900', color: 'white'}}
                    variant='contained'
                    onClick={this.handleOpen.bind(this, true)}
                >
                    Add Expense
                </Button>
                <Dialog open={this.state.open}>
                    <DialogTitle>
                        Add new expense
                    </DialogTitle>
                    <DialogContent>
                        <div id='addDialog'>
                            <TextField
                                label="Expense name"
                                variant='outlined'
                                onChange={(event) => this.updatedInput(event, 'name')}
                            />
                            <TextField
                                label="Category"
                                variant='outlined'
                                onChange={(event) => this.updatedInput(event, 'category')}
                            />
                            <TextField
                                label="Price"
                                variant='outlined'
                                type='number'
                                onChange={(event) => this.updatedInput(event, 'price')}
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleOpen.bind(this, false)} style={{width: '20%', marginBottom: '2%'}}>
                            Close
                        </Button>
                        <Button 
                            variant='contained' 
                            style={{
                                backgroundColor: '#009900', 
                                color: 'white',
                                width: '20%',
                                marginRight: '4%',
                                marginBottom: '2%'
                            }}
                            onClick={() => {
                                this.props.addExpense(this.state.name, this.state.category, this.state.price);
                                this.handleOpen(false);
                                }}>
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default AddExpense;