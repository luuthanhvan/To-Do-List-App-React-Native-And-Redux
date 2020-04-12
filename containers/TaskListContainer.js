import React, { Component } from 'react';
import TaskList from '../components/TaskList';
import { deleteOneTask, finishOneTask } from '../actions';
import { connect } from 'react-redux';

class TaskListContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { onFinishedTask, onDeleteTask } = this.props;
        const { data } = this.props.listData;
        
        return(
             <TaskList dataList = { data } { ...this.props }/>
        );
    }
}

export default connect(
    state => {
        return {
            listData: state.taskList
        }
    },
    dispatch => {
        return {
            onFinishedTask: (taskID) => dispatch(finishOneTask(taskID)),
            onDeleteTask: (taskID) => dispatch(deleteOneTask(taskID))
        }
    }
)(TaskListContainer);