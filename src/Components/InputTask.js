import React, { Component } from 'react';
import AlertMessage from "./AlertMessage";

let message;

class InputTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isValidate: true
        };
    }

    handleChange = (inputValue) => {
        this.setState({
            value: inputValue,
            isValidate: true
        });
    }

    handleClick = () => {
        if (this.state.value.length < 4) {
            message = 'Task must be longer than 3 characters';
            this.setState({
                isValidate: false
            });
        } else if (this.props.list.filter((task) => task.taskName === this.state.value).length > 0){
            message = 'This task already exists';
            this.setState({
                isValidate: false
            });
        } else {
            this.props.addTask(this.state.value);
            this.setState({
                value: '',
                isValidate: true
            });
        }
    }

    // closeAlertMessage = () => {
    //     this.setState({
    //         isValidate: true
    //     });
    // }


    render() {
        return <div>
            <div className="input-group mb-3">
                <input
                    className="form-control"
                    placeholder="Add new Task"
                    type="text"
                    value={this.state.value}
                    onChange={(e) => this.handleChange(e.target.value)}
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
