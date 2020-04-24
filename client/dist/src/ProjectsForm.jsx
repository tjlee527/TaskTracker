import React from 'react';
import shortid from 'shortid';


class ProjectsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newValue = event.target.value;
    this.setState((prevState) => {
      return ({
        value: newValue
      })
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    let newValue = {
      text: this.state.value,
      id: shortid.generate(),
      complete: false
    }
    this.props.addProject(newValue);
    this.setState((prevState) => {
      return ({
        value: ''
      })
    });
  }

  render() {
    return (
      <div id='ProjectForm'>
      <form onSubmit={this.handleSubmit}>
        <label>
          Project Idea:
          <input type='text' value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <input type='submit' value='Submit'></input>
      </form>
      </div>
    )
  }
}

export default ProjectsForm;