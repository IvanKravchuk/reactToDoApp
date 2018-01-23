import React, { Component } from 'react';
import './App.css';
import TaskList from './Components/TaskList';
import InputTask from './Components/InputTask';
import InputSearch from "./Components/InputSearch";
import { connect } from 'react-redux';
import { getTasks, addTask, updateTask } from './Actions/tasks';


class App extends Component {



    componentWillMount() {
        this.props.onGetTasks();
    }

    search = (searchStringValue) => {
        if (searchStringValue){
            this.props.onSearchTasks(searchStringValue);
        }
    }

    addNewTask = (newTaskName,authorName) => {
        let task = {
                isDone: false,
                taskName: newTaskName,
                assignTo: authorName
            };
        this.props.onAddTask(task);
    }

    taskIsDone = (taskId) => {
        let tasks = this.props.tasks;
        let index = tasks.map(item => item.id).indexOf(taskId);
        let task = Object.assign({}, tasks[index], { isDone: true, id: null });
        this.props.onUpdateTask(taskId, task);
    }

    saveNewTaskName = (data, newTaskName) => {
        if (newTaskName){
            let task = Object.assign({}, { isDone: data.isDone,
                assignTo: data.assignTo, taskName: newTaskName, id: null });
            this.props.onUpdateTask(data.id, task);
        }
    }

    showCompletedTasks = () => {
        this.props.onShowCompletedTasks(this.props.showCompletedTasks);
    }

    completedTask(){
        let completedTaskList = null;
        if (this.props.showCompletedTasks){
            completedTaskList = <TaskList
                list={this.getDoneList()}
                isEditable={false}
            />;
        }
        return completedTaskList;
    }

    getDoneList = () => {
        return this.props.tasks.filter((task) => task.isDone === true);
    }

    getUndoneList = () => {
        return this.props.tasks.filter((task) => task.isDone === false);
    }

    render() {
        return (
            <div className="App">
                <InputSearch
                    search = {this.search}
                />
                <InputTask
                    addNewTask = {this.addNewTask}
                    list = {this.props.tasks}
                />
                <TaskList
                    list={this.getUndoneList()}
                    taskIsDone={this.taskIsDone}
                    saveNewTaskName={this.saveNewTaskName}
                    isEditable={true}
                    searchString={this.props.searchStringValue}
                />
                <div>
                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg btn-block"
                        onClick={this.showCompletedTasks}
                    >
                        Show completed tasks
                    </button>
                    { this.completedTask() }
                </div>
            </div>
        );
      }
}

export default connect(
    state => ({
        tasks: state.tasks.taskList,
        showCompletedTasks: state.tasks.showCompletedTasks,
        searchStringValue: state.tasks.searchStringValue,
    }),
    dispatch => ({
        onAddTask: (newTask) => {
            dispatch(addTask(newTask));
        },
        onGetTasks: () => {
            dispatch(getTasks());
        },
        onShowCompletedTasks: (isShow) => {
            dispatch({ type: 'SHOW_COMPLETED_TASKS', payload: !isShow })
        },
        onSearchTasks: (searchStringValue) => {
            dispatch({ type: 'SEARCH_TASKS', payload: searchStringValue })
        },
        onUpdateTask: (taskId, data) => {
            dispatch(updateTask(taskId, data));
        }
    })
)(App);
