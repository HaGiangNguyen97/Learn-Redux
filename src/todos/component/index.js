import React from 'react';
import Footer from './Footer';
import AddTodo from '../contains/AddTodo';
import VisibleTodoList from '../contains/VisibleTodoList';

const App = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default App;
