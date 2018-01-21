const initialState = {
    taskList: [],
    showCompletedTasks: false
};

export default function tasks(state = initialState, action) {
    if (action.type === 'ADD_TASK'){
        let newTaskList = Array.from(state.taskList);
        newTaskList.push(action.payload);
        return {
            taskList: newTaskList,
            showCompletedTasks: state.showCompletedTasks
        };
    } else if (action.type === 'FETCH_TASKS'){
        return {
            taskList: action.payload,
            showCompletedTasks: state.showCompletedTasks
        };
    } else if (action.type === 'SHOW_COMPLETED_TASKS'){
        return {
            taskList: state.taskList,
            showCompletedTasks: action.payload
        };
    } else if (action.type === 'UPDATE_TASK'){
        let newTaskList = Array.from(state.taskList);
        let index = newTaskList.map(item => item.id).indexOf(action.payload.id);
        newTaskList[index] = action.payload;
        return {
            taskList: newTaskList,
            showCompletedTasks: state.showCompletedTasks
        };
    } else if (action.type === 'SEARCH_TASKS'){
        return {
            taskList: action.payload,
            showCompletedTasks: state.showCompletedTasks
        };
    }
    return state;
}