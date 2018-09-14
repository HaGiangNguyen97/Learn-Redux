import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions';
import Picker from '../component/picker';
import Posts from '../component/posts';

class App extends Component {
	static propTypes = {
		selectSubreddit: PropTypes.string.isRequired,
		posts: PropTypes.array.isRequired,
		isFetching: PropTypes.bool.isFetching,
		lastUpdate: PropTypes.number,
		dispatch: PropTypes.func.isRequired
	};
}
