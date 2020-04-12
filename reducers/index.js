import taskListReducer from './taskListReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    taskList: taskListReducer,
    // can have more reducers here, seperate by a comma ...
});

export default allReducers;