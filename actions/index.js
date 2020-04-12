import { ADD_NEW_TASK, DELETE_ONE_TASK, FINISH_ONE_TASK } from './actionType';

export const addNewTask = (newTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskName: newTaskName
    }
}

export const deleteOneTask = (index) => {
    return {
        type: DELETE_ONE_TASK,
        taskID: index
    }
}

export const finishOneTask = (index) => {
    return {
        type: FINISH_ONE_TASK,
        taskID: index
    }
}