import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import uuid from 'uuid/v4'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos : res.data}));
  //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
  // .then(res =>res.json())
  // .then(json => this.setState({ todos: json}))
  }
  
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id : uuid(),
      title,
      completed: false
    }
    this.setState({todos : [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className = 'container'>        
            <Header/>
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo = {this.addTodo}/>
                <Todos todos={this.state.todos } toggleComplete = {this.toggleComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )}/>
            <Route path='/about' component = {About} />
            
          </div>
        </div>
      </Router>
    )
  }
}

export default App;