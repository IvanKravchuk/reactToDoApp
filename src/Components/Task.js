import React, { Component } from 'react';

// let inputStyle = {
//     width: "250 px",
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: "ellipsis"
// };

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEtidable: false,
            editValue: ''
        };
    }

    handleClickForDelete = () => {
        this.props.deleteTask(this.props.taskName);
    }

    handleClickForEdit = () => {
        this.setState({
            isEtidable: true
        });
    }

    handleClickForCancel = () => {
        this.setState({
            isEtidable: false
        });
    }

    handleClickForSave = () => {
        this.props.saveNewTaskName(this.props.index,this.state.editValue,this.props.taskName);
        this.setState({
            isEtidable: false
        });
    }

    handleChangeForEdit = (newValue) => {
        this.setState({
            editValue: newValue
        });
    }

    renderForNormalMode = () => {
        let task = null;
        if (!this.state.isEtidable){
           task = <div className="row">
                <div className="col-8 list-item">
                    {this.props.taskName}
                </div>
                <div className="row">
                    <div className="col-4">
                        <button onClick={this.handleClickForEdit} className="btn btn-outline-secondary">
                            Edit
                        </button>
                    </div>
                    <div className="col-4">
                        <button onClick={this.handleClickForDelete} className="btn btn-outline-secondary">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        }
        return task;

    }

    renderForEditMode = () => {
        let task = null;
        if (this.state.isEtidable){
            task = <div className="row">
                <div className="col-8">
                    <input
                        className="form-control"
                        defaultValue={this.props.taskName}
                        onChange={(e) => this.handleChangeForEdit(e.target.value)}
                    />
                </div>
                <div className="row">
                    <div className="col-4">
                        <button onClick={this.handleClickForSave} className="btn btn-outline-secondary">
                            Save
                        </button>
                    </div>
                    <div className="col-4">
                        <button onClick={this.handleClickForCancel} className="btn btn-outline-secondary">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        }
        return task;

    }



    render() {
        return (
            <div className="list-group-item list-group-item-action">
                    { this.renderForNormalMode() }
                    { this.renderForEditMode() }
            </div>
        );
    }
}

export default Task;