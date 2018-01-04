import React, { Component } from 'react';

export default class Task extends Component {

    render() {
        return (
            <button className="list-group-item list-group-item-action">
                <div className="row">

                        <div className="col-sm-8">
                            {this.props.taskName}
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-outline-secondary">Delete</button>
                        </div>

                </div>
            </button>
        );
    }
}