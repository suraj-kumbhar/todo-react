import React, { Component } from 'react'
import PorpTypes from 'prop-types';


export class TodoItem extends Component {

    getStyle = () => {
        return {
            background : '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    
    render() {
        const { title, id } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange = {this.props.toggleComplete.bind(this, id)}/>{' '}
                    {title} 
                    <button onClick = {this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.porpTypes = {
    todo: PorpTypes.object.isRequired,
    toggleComplete: PorpTypes.func.isRequired,
    delTodo: PorpTypes.func.isRequired,
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
