import { createStore, combineReducers, applyMiddleware } from 'redux';
import React, { Component } from 'react';

const reducer = (initialState = 0, action) => {
	switch (action.type) {
		case 'INC': {
			initialState = initialState + 1;
			break;
		}
		case 'DEC': {
			initialState = initialState - 1;
			break;
		}
		case 'E': {
			initialState = 'hhhhhhhhhhhhhhhhhhhhhhh';
		}
	}
	return initialState;
};

const logger = store => next => action => {
	console.log('action fired', action);
	next(action);
};
const error = store => next => action => {
	try {
		next(action);
	} catch (e) {
		console.log('ajjjjjjjjj', e);
	}
};
const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
	console.log('store changed chap3 ', store.getState());
});

store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'INC', payload: 50 });
store.dispatch({ type: 'DEC', payload: 9 });
store.dispatch({ type: 'DEC', payload: 11 });
store.dispatch({ type: 'E', payload: 1 });
