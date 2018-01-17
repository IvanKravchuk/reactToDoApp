import React, { Component } from 'react';

class InputSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (inputValue) => {
        this.setState({
            value: inputValue
        });
        this.props.search(this.state.value);
    }


    render() {
        return (
            <div className="input-group mb-3">
                <input
                    className="form-control"
                    placeholder="Search"
                    type="text"
                    value={this.state.value}
                    onChange={(e)=>this.handleChange(e.target.value)}
                />
            </div>
        );
    }
}

export default InputSearch;