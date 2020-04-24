import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: 'flex'
        }}>
        <div
          style={{
            textDecoration: this.props.task.complete ? 'line-through' : ''
          }}
          onClick={() => this.props.toggleComplete(this.props.task.id)}
        >
          {this.props.task.text}
        </div>
        <button onClick = {() => this.props.deleteTask(this.props.task.id)}>
          X
        </button>
      </div>
    )
  }
};

export default Task;