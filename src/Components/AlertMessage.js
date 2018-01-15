import React, { Component } from 'react';


export default class AlertMessage extends Component {

    // changeHandler = () => {
    //     this.props.isClosed();
    // }

    render() {
        return (
            <div>
                {this.props.message}
            </div>
        );
    }
}