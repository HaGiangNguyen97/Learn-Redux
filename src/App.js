import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chapter1 from './basic/Chapter1';
import Chapter2 from './basic/Chapter2';
import Chapter3 from './basic/Chapter3';
import TodoAdd from './basic/Todo';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="App">
				<TodoAdd />
			</div>
		);
	}
}

export default App;
