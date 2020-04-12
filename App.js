import React, { Component } from 'react';
// import Reducers
import allReducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TaskManagerComponent from './components/TaskManagerComponent';

const store = createStore(allReducers);

export default class App extends Component {
	render() {
		console.disableYellowBox = true;
		return (
			<Provider store = { store }>
				<TaskManagerComponent />
			</Provider>
		);
	} 
}