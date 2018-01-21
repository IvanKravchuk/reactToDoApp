import axios from 'axios';

let url = 'http://localhost:3000/tasks';

export const getTasks = () => dispatch => {
    axios.get(url)
        .then( (response) => {
            dispatch({ type: 'FETCH_TASKS', payload: response.data})
        })
        .catch( (error) => {
            console.log(error);
        });
}

export const addTask = (newTask) => dispatch => {
    axios.post(url, newTask)
        .then( (response) => {
            newTask.id = response.data.id;
            dispatch({ type: 'ADD_TASK', payload: newTask})
        })
        .catch( (error) => {
            console.log(error);
        });
}

export const updateTask = ( taskId, updatedTask) => dispatch => {
    axios.put(url + '/' + taskId, updatedTask)
        .then( (response) => {
            dispatch({ type: 'UPDATE_TASK', payload: response.data})
        })
        .catch( (error) => {
            console.log(error);
        });
}