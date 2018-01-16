import React, { Component } from 'react';
import './App.css';
import TaskList from './Components/TaskList';
import InputTask from './Components/InputTask';
import InputSearch from "./Components/InputSearch";

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

    state = {
        displayedTasks: TASKS
    }

    search = (searchString) => {
        let searchQuery = searchString.toLowerCase();
        let displayedTasks = TASKS.filter((el) => {
            let searchValue = el.taskName.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayedTasks: displayedTasks
        });
    }

    addNewTask = (newTask) => {
        let tasks = this.state.displayedTasks;
        let task = {
            id: tasks[tasks.length - 1].id + 1,
            status: false,
            taskName: newTask
        };
        if (!tasks.filter((task) => task.taskName === newTask).length > 0){
            tasks.push(task);
            this.setState({
                displayedTasks: tasks
            });
            console.log("addNew",this.state.displayedTasks);
        }
    }

    deleteTask = (taskName) => {
        this.setState({
            displayedTasks: this.state.displayedTasks.filter((task) => task.taskName !== taskName)
        });
    }

    saveNewTaskName = (index, newTaskName, prevTaskName) => {
        let displayedNewTasks = this.state.displayedTasks;
        displayedNewTasks[index].taskName = newTaskName ? newTaskName : prevTaskName;
        this.setState(Object.assign({}, {displayedTasks: displayedNewTasks}));
    }

    render() {
        return (
            <div className="App">
                <InputSearch
                    search = {this.search}
                />
                <InputTask
                    addTask = {this.addNewTask}
                    list = {this.state.displayedTasks}
                />
                <TaskList
                    list={this.state.displayedTasks}
                    deleteTask={this.deleteTask}
                    saveNewTaskName={this.saveNewTaskName}
                />
            </div>
        );
      }
}

export default App;
