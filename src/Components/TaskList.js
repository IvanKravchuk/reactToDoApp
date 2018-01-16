import React, { Component } from 'react';
import Task from './Task';




class TaskList extends Component {


    deleteTask = (taskName) => {
        this.props.deleteTask(taskName);
    }

    saveNewTaskName = (index, newTaskName, prevTaskName) => {
        this.props.saveNewTaskName(index, newTaskName, prevTaskName);
    }

    render() {

        return (
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
        );
    }

}

export default TaskList;