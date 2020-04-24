import React from 'react';
import $ from 'jquery';
import ProjectsForm from './ProjectsForm.jsx';
import Project from './Project.jsx';

class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }

    this.addProject = this.addProject.bind(this);
  }

  componentDidMount() {
    this.getAllProjects();
  }

  getAllProjects() {
    $.ajax({
      type: 'GET',
      url: '/projects/',
      success: (response) => {
        console.log(response);
        this.setState((prevState) => {
          return ({
            projects: response
          })
        })
      }
    })
  }

  addProject(idea) {
    $.ajax({
      type: 'POST',
      url: `/projects/${idea.id}`,
      data: idea,
      success: (response) => {
        this.getAllProjects();
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Fun Projects List</h1>
        <ProjectsForm addProject={this.addProject} />
        {this.state.projects.map((project) => {
          return (
            <Project
              project={project}
              key={project.id}
            />
          )
        })}
      </div>
    )
  }
}

export default ProjectsList;