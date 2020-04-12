import { ADD_NEW_TASK, DELETE_ONE_TASK, FINISH_ONE_TASK } from '../actions/actionType';

let appState = {
    data: [
        { taskName: 'Learn Redux', isFinished: false },
        { taskName: 'Do assignment Computer Network', isFinished: true }
    ]
}

const taskListReducer = (state = appState, action) => {
    let newTaskList = state.data;
    // console.log(newTaskList);
    switch(action.type){
        case ADD_NEW_TASK:
            const newTask = { taskName: action.taskName, isFinished: false };
            return {...state, data: [...newTaskList, newTask]};
        case DELETE_ONE_TASK:
            newTaskList = newTaskList.filter((item, index) => index != action.taskID);
            return {...state, data: newTaskList};
        case FINISH_ONE_TASK:
            newTaskList[action.taskID].isFinished = true;
            return {...state, data: newTaskList};
    }
    // console.log("All states in taskListReducer: " + state);
    // console.log(state);
    return state;
}   

export default taskListReducer;