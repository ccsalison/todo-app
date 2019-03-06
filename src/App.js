import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'get boba tea'},
      {id: 2, content: 'finish todo-app'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todos => {
      return todos.id !== id
    });
    this.setState({
      todos
      // if the key and the value both have the same name can shorten
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    //dumping the todos' array content into the todos
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
