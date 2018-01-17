import React, { Component } from 'react';
import './App.css';
import TaskList from './Components/TaskList';
import InputTask from './Components/InputTask';
import InputSearch from "./Components/InputSearch";

let TASKS = [
    {
        id: 1,
        isDone: false,
        taskName: 'task 1',
        assignTo: 'Mike'
    }, {
        id: 2,
        isDone: false,
        taskName: 'task 2',
        assignTo: 'Carl'
    }, {
        id: 3,
        isDone: false,
        taskName: 'task 3',
        assignTo: 'Jack'
    }
];


class App extends Component {

    state = {
        displayedTasks: TASKS,
        showCompletedTasks: false
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
            id: tasks[tasks.length - 1].id + 1,
            isDone: false,
            taskName: newTaskName,
            assignTo: authorName
        };
        if (!tasks.filter((task) => task.taskName === newTaskName).length > 0){
            tasks.push(task);
            this.setState({
                displayedTasks: tasks
            });
            console.log("addNew",this.state.displayedTasks);
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
