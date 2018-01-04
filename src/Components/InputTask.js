import React, { Component } from 'react';

export default class InputTask extends Component {

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
        this.props.addTask(this.state.value);
        this.setState({
            value: ''
        });
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