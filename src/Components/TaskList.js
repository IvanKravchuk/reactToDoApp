import React, { Component } from 'react';
import Task from './Task';
import InputTask from './InputTask';

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

    render() {
        return (
            <div>
                <InputTask addTask = {this.addNewTask.bind(this)} />
                <div>
                    <div className="list-group">
                        {
                            this.state.displayedTasks.map(function(el, index) {
                                return <Task
                                    key={index}
                                    taskName={el.taskName}
                                />;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}