import React from 'react';
import TodoList from './TodoList.jsx';
import ProjectsList from './ProjectsList.jsx';


class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <TodoList />
        </div>
        <br></br>
        <br></br>
        <div>
          <ProjectsList />
        </div>
      </div>
    );
  }
}

export default App;