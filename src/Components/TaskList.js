import React, { Component } from 'react';
import Task from './Task';




class TaskList extends Component {


    taskIsDone = (taskId) => {
        this.props.taskIsDone(taskId);
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
                                    id={el.id}
                                    index={index}
                                    assignTo={el.assignTo}
                                    taskName={el.taskName}
                                    isEditable={this.props.isEditable}
                                    taskIsDone={this.taskIsDone}
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