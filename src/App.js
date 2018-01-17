import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TaskList from './Components/TaskList';
import InputTask from './Components/InputTask';
import InputSearch from "./Components/InputSearch";

let TASKS = null;

class App extends Component {

    componentWillMount() {
        this.getTasks();
    }

    state = {
        displayedTasks: [],
        showCompletedTasks: false
    }

    getTasks = () => {
        axios.get('http://localhost:3000/tasks')
            .then( (response) => {

                TASKS = response.data;
                console.log(TASKS);
                this.setState({
                    displayedTasks: TASKS
                });
            })
            .catch( (error) => {
                console.log(error);
            });
    }

    createNewTask(newTask, getId){
        axios.post('http://localhost:3000/tasks',  newTask )
            .then( (response) => {
                console.log(response);
                getId(response.data.id)
            })
            .catch( (error) => {
                console.log(error);
            });
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

    addNewTask = (newTaskName,authorName) => {
        let tasks = this.state.displayedTasks;
        let task = {
            isDone: false,
            taskName: newTaskName,
            assignTo: authorName
        };
        if (!tasks.filter((task) => task.taskName === newTaskName).length > 0){
            this.createNewTask(task,(id) => {
                task.id = id;
                tasks.push(task);
                this.setState({
                    displayedTasks: tasks
                });
            });
        }
    }

    taskIsDone = (taskId) => {
        let tasks = this.state.displayedTasks;
        let task = tasks.filter((task) => task.id === taskId);
        let index = tasks.indexOf(task[0]);
        tasks[index].isDone = true;
        this.setState({
            displayedTasks: tasks
        });
    }

    saveNewTaskName = (index, newTaskName, prevTaskName) => {
        let tasks = this.state.displayedTasks;
        tasks[index].taskName = newTaskName ? newTaskName : prevTaskName;
        this.setState(Object.assign({}, {displayedTasks: tasks}));
    }

    showCompletedTasks = () => {
        this.setState({
            showCompletedTasks: !this.state.showCompletedTasks
        });
    }

    getDoneList = () => {
        return this.state.displayedTasks.filter((task) => task.isDone === true);
    }

    getUndoneList = () => {
        return this.state.displayedTasks.filter((task) => task.isDone === false);
    }

    render() {
        return (
            <div className="App">
                <InputSearch
                    search = {this.search}
                />
                <InputTask
                    addNewTask = {this.addNewTask}
                    list = {this.state.displayedTasks}
                />
                <TaskList
                    list={this.getUndoneList()}
                    taskIsDone={this.taskIsDone}
                    saveNewTaskName={this.saveNewTaskName}
                    isEditable={true}
                />
                <div>
                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg btn-block"
                        onClick={this.showCompletedTasks}
                    >
                        Show completed tasks
                    </button>
                    { this.state.showCompletedTasks &&
                        <TaskList
                            list={this.getDoneList()}
                            isEditable={false}
                        />
                    }
                </div>
            </div>
        );
      }
}

export default App;
