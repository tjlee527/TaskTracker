import React from 'react';
import shortid from 'shortid';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodos({
      id: shortid.generate(),
      text: this.state.value,
      complete: false
    });
    this.setState({
      value: ''
    })
  }


  render() {
    return (
      <div id='TodoForm'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
            <input type='text' value={this.state.value} onChange={this.handleChange}></input>
          </label>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    )
  }
}

export default TodoForm;