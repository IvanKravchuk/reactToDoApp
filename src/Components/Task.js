import React, { Component } from 'react';
import './components.css';

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
            isEditable: false,
            editValue: ''
        };
    }

    handleClickForDone = () => {
        this.props.taskIsDone(this.props.id);
    }

    handleClickForEdit = () => {
        this.setState({
            isEditable: true
        });
    }

    handleClickForCancel = () => {
        this.setState({
            isEditable: false
        });
    }

    handleClickForSave = () => {
        this.props.saveNewTaskName(this.props.index,this.state.editValue,this.props.taskName);
        this.setState({
            isEditable: false
        });
    }

    handleChangeForEdit = (newValue) => {
        this.setState({
            editValue: newValue
        });
    }

    renderForNormalMode = () => {
        let task = null;
        let underline = 'row';
        if (!this.props.isEditable){
            underline = 'row task-done';
        }

        if (!this.state.isEditable){
           task = <div className={underline}>
               <div className="col-4 list-item">
                   {this.props.assignTo}
               </div>
                <div className="col-4 list-item">
                    {this.props.taskName}
                </div>
               {
                   this.props.isEditable &&
                   <div className="row">
                       <div className="col-4">
                           <button onClick={this.handleClickForEdit} className="btn btn-outline-secondary">
                               Edit
                           </button>
                       </div>
                       <div className="col-4">
                           <button onClick={this.handleClickForDone} className="btn btn-outline-secondary">
                               Done
                           </button>
                       </div>
                   </div>
               }

            </div>
        }
        return task;

    }

    renderForEditMode = () => {
        let task = null;
        if (this.state.isEditable){
            task = <div className="row">
                <div className="col-4 list-item">
                    {this.props.assignTo}
                </div>
                <div className="col-4">
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