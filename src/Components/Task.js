import React, { Component } from 'react';

export default class Task extends Component {

    handleClick(){
        // console.log(this);
        this.props.deleteTask(this.props.taskName);
    }

    render() {
        return (
            <div className="list-group-item list-group-item-action">
                <div className="row">

                        <div className="col-sm-8">
                            {this.props.taskName}
                        </div>
                        <div className="col-sm-4">
                            <button onClick={this.handleClick.bind(this)} className="btn btn-outline-secondary">Delete</button>
                        </div>

                </div>
            </div>
        );
    }
}