import React, { Component } from 'react';


class AlertMessage extends Component {

    render() {
        return (
            <div style={{color: "red"}}>
                {this.props.message}
            </div>
        );
    }
}

export default AlertMessage;