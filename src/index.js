import React from 'react';
import App from './App';
import AppRun from './todos/component/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import rootReducer from './todos/reducers/index';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
	<Provider store={store}>
		<AppRun />
	</Provider>,
	document.getElementById('root')
);
