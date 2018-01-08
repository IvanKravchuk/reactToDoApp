import React, { Component } from 'react';
import { withAlert } from 'react-alert'

class InputTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange(inputValue) {
        this.setState({
            value: inputValue
        });
    }

    handleClick() {
        if (this.state.value.length < 4){
            this.props.alert.error('Task must be longer than 3 characters')
        } else {
            this.props.addTask(this.state.value);
            this.setState({
                value: ''
            });
        }
    }

    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={this.handleClick.bind(this)}
                    >
                        Add
                    </button>
                </div>
                <input
                    className="form-control"
                    placeholder="Add new Task"
                    type="text"
                    value={this.state.value}
                    onChange={(e)=>this.handleChange(e.target.value)}
                />

            </div>
        );
    }
}

export default withAlert(InputTask)