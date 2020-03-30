import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PorpTypes from 'prop-types';

class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
        <TodoItem key = {todo.id} todo = {todo} toggleComplete = {this.props.toggleComplete} delTodo={this.props.delTodo}/>
    ))
  }
}

Todos.porpTypes = {
  todos: PorpTypes.array.isRequired,
  toggleComplete: PorpTypes.func.isRequired,
  delTodo: PorpTypes.func.isRequired,
}

export default Todos;
