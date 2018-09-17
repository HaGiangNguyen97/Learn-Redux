import { combineReducers } from 'redux';
import pagination from './pagination';
import { selectedSubreddit, postsBySubreddit } from './getInfo';

export default combineReducers({
	selectedSubreddit,
	postsBySubreddit,
	pagination
});
