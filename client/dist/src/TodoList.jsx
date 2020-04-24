import React from 'react';
import TodoForm from './TodoForm.jsx';
import Task from './Task.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      displayState: 'All',
      toggleAll: false
    }

    this.addTodos = this.addTodos.bind(this);
    this.toggleTaskComplete = this.toggleTaskComplete.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.removedCompleted = this.removedCompleted.bind(this);
    this.toggleAllTasks = this.toggleAllTasks.bind(this);
  }

  buttonClickHandler(string) {
    this.setState((prevState) => {
      return ({
        displayState: string
      })
    })
  }

  addTodos(todo) {
    this.setState((prevState) => {
      return ({
          todos: [todo, ...prevState.todos]
      })
    });
  }

  toggleTaskComplete(taskId){
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === taskId) {
          return ({
            ...todo,
            complete: !todo.complete
          })
        } else {
          return todo;
        }
      })
    })
  }

  deleteTask(taskId) {
    this.setState({
      todos: this.state.todos.filter(task => task.id !== taskId)
    })
  }

  removedCompleted() {
    this.setState({
      todos: this.state.todos.filter(task => !task.complete)
    })
  }

  toggleAllTasks() {
    this.setState({
      todos: this.state.todos.map(task => {
        return {
          ... task,
          complete: true
        }
      })
    })
  }

  render() {
    let todos = [];
    if (this.state.displayState === 'All') {
      todos = [...this.state.todos];
    } else if (this.state.displayState === 'Active') {
      todos = this.state.todos.filter(task => !task.complete);
    } else if (this.state.displayState === 'Complete') {
      todos = this.state.todos.filter(task => task.complete);
    }
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm
          addTodos={this.addTodos}
        />
        {todos.map(task => (
          <Task
            toggleComplete={this.toggleTaskComplete}
            deleteTask={this.deleteTask}
            key={task.id}
            task={task}
          />
        ))}
        <div>
          Todos Left: {this.state.todos.filter(task => !task.complete).length}
        </div>
        <button
          onClick={() => this.buttonClickHandler ('All')}>
          All
        </button>
        <button
          onClick={() => this.buttonClickHandler('Active')}>
          Active
        </button>
        <button
          onClick={() => this.buttonClickHandler('Complete')}>
          Complete
        </button>
        {this.state.todos.filter(task => task.complete).length ? <button
          onClick={this.removedCompleted}>
          Remove Completed
        </button> : null}
        <button onClick={this.toggleAllTasks}>
          Toggle All Complete
        </button>
      </div>
    )
  }
};

export default TodoList;