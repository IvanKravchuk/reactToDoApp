import React, { Component } from 'react';
import Task from './Task';
import InputTask from './InputTask';
import InputSearch from "./InputSearch";
// import { withAlert } from 'react-alert'
// import InputValidateMessage from "./InputValidateMessage";

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
            displayedTasks: TASKS,
            isExist: false
        };
    }

    addNewTask(newTask) {
        let tasks = this.state.displayedTasks;
        let task = { taskName: newTask };
        if (tasks.filter((task) => task.taskName === newTask).length > 0){
            // this.props.alert.error('This task already exists');
            this.setState({
                isExist: true
            });
        } else {
            tasks.push(task);
            this.setState({
                displayedTasks: tasks
            });
        }
    }

    deleteTask = (taskName) => {
        this.setState({
            displayedTasks: this.state.displayedTasks.filter((task) => task.taskName !== taskName)
        });
    }

    search(searchString) {
        let searchQuery = searchString.toLowerCase();
        let displayedTasks = TASKS.filter((el) => {
            let searchValue = el.taskName.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayedTasks: displayedTasks
        });
    }
    saveNewTaskName(index, newTaskName){
        let displayedNewTasks = this.state.displayedTasks;
        displayedNewTasks[index].taskName = newTaskName;
        this.setState(Object.assign({}, {displayedTasks: displayedNewTasks}));
    }
    closeAlertMessage(){
        this.setState({
            isExist: false
        });
    }

    render() {
        return (
            <div>
                <InputSearch search = {this.search.bind(this)}/>
                <InputTask
                    addTask = {this.addNewTask.bind(this)}
                    isExist = {this.state.isExist}
                    isExistMessage = 'This task already exists'
                    closeAlert = {this.closeAlertMessage.bind(this)}

                />

                <div>
                    <div className="list-group">
                        {
                            this.state.displayedTasks.map((el, index) => {
                                return <Task
                                    key={index}
                                    index={index}
                                    taskName={el.taskName}
                                    deleteTask={this.deleteTask}
                                    saveNewTaskName={this.saveNewTaskName.bind(this)}
                                />;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}

// export default withAlert(TaskList)