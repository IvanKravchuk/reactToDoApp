import React, { Component } from 'react';
import Task from './Task';




class TaskList extends Component {

    taskIsDone = (taskId) => {
        this.props.taskIsDone(taskId);
    }

    saveNewTaskName = (dataData, newTaskName) => {
        this.props.saveNewTaskName(dataData, newTaskName);
    }

    search = (taskName) => {
        if (this.props.searchString){
            let searchQuery = this.props.searchString.toLowerCase();
            let searchValue = taskName.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        }

    }

    showTaskList(){
        return (
            <div className="list-group">
            {
                this.props.list.filter((el) => {return !this.props.searchString || this.search(el.taskName)}).map((el, index) => {
                    return <Task
                        key={el.id}
                        id={el.id}
                        index={index}
                        assignTo={el.assignTo}
                        isDone={el.isDone}
                        taskName={el.taskName}
                        isEditable={this.props.isEditable}
                        taskIsDone={this.taskIsDone}
                        saveNewTaskName={this.saveNewTaskName}
                    />;
                })
            }
            </div>
        );
    }

    render() {
        return (
            <div>
                { this.showTaskList() }
            </div>
        );
    }

}

export default TaskList;
