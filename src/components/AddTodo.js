import React, { Component } from 'react'
import PorpTypes from 'prop-types' 
export class AddTodo extends Component {
    state = {
        title : ''
    }

    onChange = (e) => this.setState({ title : e.target.value});

    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title : ''});
    }

    render() {
        return (
             <form style ={{display: 'flex' }} onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    style={{ flex: '10', padding: '5px'}}
                    placeholder='Add Todo ...'
                    value = {this.state.title}
                    onChange  = {this.onChange}
                />
                <input
                    type='submit'
                    value='submit'
                    className='btn'
                    style={{flex:1}}
                />
            </form>
        )
    }
}

AddTodo.porpTypes = {
    AddTodo: PorpTypes.func.isRequired
}

export default AddTodo
