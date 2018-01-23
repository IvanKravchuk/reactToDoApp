import React, { Component } from 'react';
import AlertMessage from "./AlertMessage";


class InputTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskNameValue: '',
            assignToValue: '',
            message: ''
        };
    }

    handleChangeForTaskName = (inputValue) => {
        this.setState({
            taskNameValue: inputValue,
        });
    }


    handleChangeForAssign = (inputValue) => {
        this.setState({
            assignToValue: inputValue,
        });
    }

    handleClick = () => {
        if (this.state.taskNameValue.length < 4) {
            this.setState({
                message: 'Task must be longer than 3 characters'
            });
        } else if (this.props.list.filter((task) => task.taskName === this.state.taskNameValue).length > 0) {
            this.setState({
                message: 'This task already exists'
            });
        } else if (this.state.assignToValue.length < 1){
            this.setState({
                message: 'Has no name'
            });
        } else {
            this.props.addNewTask(this.state.taskNameValue,this.state.assignToValue);
            this.setState({
                taskNameValue: '',
                assignToValue: '',
            });
        }
    }

    showAlertMessage(){
        let message = null;
        if (this.state.message){
            message = <AlertMessage
                message = {this.state.message}
            />
        }
        return message;
    }

    render() {
        return <div>
            <div className="input-group mb-3">
                <input
                    className="form-control"
                    placeholder="Assign to"
                    type="text"
                    value={this.state.assignToValue}
                    onChange={(e) => this.handleChangeForAssign(e.target.value)}
                />
                <input
                    className="form-control"
                    placeholder="Add new Task"
                    type="text"
                    value={this.state.taskNameValue}
                    onChange={(e) => this.handleChangeForTaskName(e.target.value)}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={this.handleClick}
                    >
                        Add
                    </button>
                </div>
            </div>
            { this.showAlertMessage() }
        </div>;
    }
}

export default InputTask;
