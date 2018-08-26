import { createStore, combineReducers } from 'redux';

const userReducer = (state = {}, action) => {
	switch (action.type) {
		case 'change_name': {
			state = { ...state, name: action.payload };
			break;
		}
		case 'change_age': {
			state = { ...state, age: action.payload };
			break;
		}
	}
	return state;
};
const tweetsReducer = (state = [], action) => {
	return state;
};

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
});
const store = createStore(reducers);
store.subscribe(() => {
	console.log('change user ', store.getState());
});

store.dispatch({ type: 'change_name', payload: 'Tien' });
store.dispatch({ type: 'change_age', payload: 13 });
