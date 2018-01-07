import React, { Component } from 'react';

export default class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEtidable: false,
            editValue: ''
        };
    }

    handleClickForDelete(){
        this.props.deleteTask(this.props.taskName);
    }

    handleClickForEdit(){
        this.setState({
            isEtidable: true
        });
    }

    handleClickForCancel(){
        this.setState({
            isEtidable: false
        });
    }

    handleClickForSave(){
        this.props.saveNewTaskName(this.props.index,this.state.editValue);
        this.setState({
            isEtidable: false
        });
    }

    handleChangeForEdit(newValue){
        this.setState({
            editValue: newValue
        });
    }

    render() {
        return (
            <div className="list-group-item list-group-item-action">
                    { !this.state.isEtidable &&
                        <div className="row">
                            <div className="col-8">
                                {this.props.taskName}
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <button onClick={this.handleClickForEdit.bind(this)} className="btn btn-outline-secondary">
                                        Edit
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button onClick={this.handleClickForDelete.bind(this)} className="btn btn-outline-secondary">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                    { this.state.isEtidable &&
                        <div className="row">
                            <div className="col-8">
                                <input
                                    className="form-control"
                                    defaultValue={this.props.taskName}
                                    onChange={(e) => this.handleChangeForEdit(e.target.value)}
                                />
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <button onClick={this.handleClickForSave.bind(this)} className="btn btn-outline-secondary">
                                        Save
                                    </button>
                                </div>
                                <div className="col-4">
                                    <button onClick={this.handleClickForCancel.bind(this)} className="btn btn-outline-secondary">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
            </div>
        );
    }
}