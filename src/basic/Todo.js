import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { combineReducers, createStore } from 'redux';
const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];
		case 'TOGGLE_TODO':
			return state.map(todo => {
				if (todo.id !== action.id) {
					return todo;
				}
				return {
					...todo,
					completed: !todo.completed
				};
			});
		default:
			return state;
	}
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
};

// const { combineReducers } = redux;
const todoApp = combineReducers({
	todos,
	visibilityFilter
});

// const { createStore } = redux;
const store = createStore(todoApp);
// const { Component } = React;
// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const Todo = ({ onClick, completed, text }) => (
	<li className={completed ? 'todo todo--completed' : 'todo'} onClick={onClick}>
		<span className="todo__content">{text}</span>
	</li>
);

const TodoList = ({ todos, onTodoClick }) => {
	return (
		<CSSTransitionGroup
			className="todo-list"
			component="ul"
			transitionName="todo"
			transitionEnterTimeout={750}
			transitionLeaveTimeout={750}
		>
			{todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)}
		</CSSTransitionGroup>
	);
};

const AddTodo = ({ onAddClick }) => {
	let input;
	return (
		<div className="add-todo">
			<input
				className="add-todo__input"
				ref={node => {
					input = node;
				}}
			/>
			<button
				className="add-todo__btn"
				onClick={() => {
					input.value ? onAddClick(input.value) : false;
					input.value = '';
				}}
			>
				<i className="fa fa-plus" />
			</button>
		</div>
	);
};

const FilterLink = ({ filter, currentFilter, children, onClick }) => {
	return (
		<a
			className="filter__link"
			href="#"
			onClick={e => {
				e.preventDefault();
				onClick(filter);
			}}
		>
			{children}
		</a>
	);
};

const Footer = ({ visibilityFilter, onFilterClick }) => (
	<div className="filters">
		<FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter} onClick={onFilterClick}>
			<i className="fa fa-list-ul" />
		</FilterLink>
		<FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter} onClick={onFilterClick}>
			<i className="fa fa-times" />
		</FilterLink>
		<FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter} onClick={onFilterClick}>
			<i className="fa fa-check" />
		</FilterLink>
	</div>
);

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
	}
};

let nextTodoId = 0;
const TodoApp = ({ todos, visibilityFilter }) => (
	<div className="todo-app">
		<h1 className="todo-title">Todos</h1>
		<TodoList
			todos={getVisibleTodos(todos, visibilityFilter)}
			onTodoClick={id =>
				store.dispatch({
					type: 'TOGGLE_TODO',
					id
				})}
		/>
		<AddTodo
			onAddClick={text =>
				store.dispatch({
					type: 'ADD_TODO',
					id: nextTodoId++,
					text
				})}
		/>
		<Footer
			visibilityFilter={visibilityFilter}
			onFilterClick={filter =>
				store.dispatch({
					type: 'SET_VISIBILITY_FILTER',
					filter
				})}
		/>
	</div>
);

class ReduxTodo extends Component {
	render() {
		return <TodoApp {...store.getState()} />;
	}
}
export default ReduxTodo;
