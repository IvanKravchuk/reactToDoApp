import React, { Component } from 'react';
import './App.css';
import TaskList from './Components/TaskList';

let TASKS = [
    {
        id: 1,
        status: false,
        taskName: 'task 1'
    }, {
        id: 2,
        status: false,
        taskName: 'task 2'
    }, {
        id: 3,
        status: false,
        taskName: 'task 3'
    }
];


class App extends Component {
  render() {
    return (
      <div className="App">
          <TaskList list={TASKS}/>
      </div>
    );
  }
}

export default App;
