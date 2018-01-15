import React, { Component } from 'react';
import Task from './Task';
import InputTask from './InputTask';
import InputSearch from "./InputSearch";



class TaskList extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         displayedTasks: TASKS,
    //         // isExist: false
    //     };
    // }

    addNewTask = (newTask) => {
        let tasks = this.props.list;
        console.log(tasks[tasks.length - 1].id + 1);
        let task = {
            id: tasks[tasks.length - 1].id + 1,
            status: false,
            taskName: newTask
        };
        if (tasks.filter((task) => task.taskName === newTask).length > 0){
        } else {
            tasks.push(task);
            this.setState({
                displayedTasks: tasks
            });
        }
    }

    deleteTask = (taskName) => {
        this.setState({
            displayedTasks: this.this.props.list.filter((task) => task.taskName !== taskName)
        });
    }

    search = (searchString) => {
        let searchQuery = searchString.toLowerCase();
        let displayedTasks = this.props.list.filter((el) => {
            let searchValue = el.taskName.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayedTasks: displayedTasks
        });
    }

    saveNewTaskName = (index, newTaskName) => {
        let displayedNewTasks = this.props.list;
        displayedNewTasks[index].taskName = newTaskName;
        this.setState(Object.assign({}, {displayedTasks: displayedNewTasks}));
    }

    render() {
        return (
            <div>
                <InputSearch search = {this.search}/>
                <InputTask
                    addTask = {this.addNewTask}
                    list = {this.props.list}
                />

                <div>
                    <div className="list-group">
                        {
                            this.props.list.map((el, index) => {
                                return <Task
                                    key={el.id}
                                    index={index}
                                    taskName={el.taskName}
                                    deleteTask={this.deleteTask}
                                    saveNewTaskName={this.saveNewTaskName}
                                />;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default TaskList;