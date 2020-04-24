import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div key={this.props.project.id}>
        {this.props.project.text}
      </div>
    )
  }
}

export default Project;