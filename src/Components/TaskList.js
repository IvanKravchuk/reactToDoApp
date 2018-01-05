import React, { Component } from 'react';
import Task from './Task';
import InputTask from './InputTask';
import InputSearch from "./InputSearch";

let TASKS = [
    {
        taskName: 'task 1'
    }, {
        taskName: 'task 2'
    }, {
        taskName: 'task 3'
    }
];

export default class TaskList extends Component {

    constructor(props) {
        super(props);
        // this.deleteTask = this.deleteTask.bind(this);
        this.state = {
            displayedTasks: TASKS
        };
    }

    addNewTask(newTask) {
        let tasks = this.state.displayedTasks;
        let task = { taskName: newTask };
        tasks.push(task);

        this.setState({
            displayedTasks: tasks
        });
    }

    deleteTask = (taskName) => {
        this.setState({
            displayedTasks: this.state.displayedTasks.filter((task) => task.taskName !== taskName)
        });
    }

    search(searchValue) {
        console.log(searchValue);
        if (searchValue !== '') {
            this.setState({
                displayedTasks: this.state.displayedTasks.filter((task) => task.taskName === searchValue)
            });
        }
    }

    render() {
        return (
            <div>
                <InputSearch search = {this.search.bind(this)}/>
                <InputTask addTask = {this.addNewTask.bind(this)} />
                <div>
                    <div className="list-group">
                        {
                            this.state.displayedTasks.map((el, index) => {
                                return <Task
                                    key={index}
                                    taskName={el.taskName}
                                    deleteTask={this.deleteTask}
                                />;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}