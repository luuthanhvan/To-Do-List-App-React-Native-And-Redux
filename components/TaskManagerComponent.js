import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// import Containers
import AddViewContainer from '../containers/AddViewContainer';
import TaskListContainer from '../containers/TaskListContainer';


export default class TaskManagerComponent extends Component{
    render(){
        return(
            <View style = { styles.container }>
				<AddViewContainer />
				<TaskListContainer />
			</View>	
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e6e6fa',
	}
});