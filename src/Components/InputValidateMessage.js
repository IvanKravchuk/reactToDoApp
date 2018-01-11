import React, { Component } from 'react';


export default class InputValidateMessage extends Component {

    clickHandler(){
        this.props.isClosed();
    }

    render() {
        return (
            <button onClick={this.clickHandler.bind(this)}>
                {this.props.message}
            </button>
        );
    }
}