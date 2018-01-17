import React, { Component } from 'react';
import AlertMessage from "./AlertMessage";

let message;

class InputTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskNameValue: '',
            assignToValue: '',
            isValidate: true
        };
    }

    handleChangeForTaskName = (inputValue) => {
        this.setState({
            taskNameValue: inputValue,
            isValidate: true
        });
    }


    handleChangeForAssign = (inputValue) => {
        this.setState({
            assignToValue: inputValue,
        });
    }

    handleClick = () => {
        if (this.state.taskNameValue.length < 4) {
            message = 'Task must be longer than 3 characters';
            this.setState({
                isValidate: false
            });
        } else if (this.props.list.filter((task) => task.taskName === this.state.taskNameValue).length > 0) {
            message = 'This task already exists';
            this.setState({
                isValidate: false
            });
        } else if (this.state.assignToValue.length < 1){
            message = 'Has no name';
            this.setState({
                isValidate: false
            });
        } else {
            this.props.addNewTask(this.state.taskNameValue,this.state.assignToValue);
            this.setState({
                taskNameValue: '',
                assignToValue: '',
                isValidate: true
            });
        }
    }

    render() {
        return <div>
            <div className="input-group mb-3">
                <input
                    className="form-control"
                    placeholder="Assign to"
                    type="text"
                    value={this.state.value}
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
            {
                !this.state.isValidate  &&
                <AlertMessage
                    message = {message}
                />
            }
        </div>;
    }
}

export default InputTask;
